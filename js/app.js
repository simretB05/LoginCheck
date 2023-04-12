// POST REquest
// selected an html element to display the success of the post operation
let get_main = document.querySelector( `#main` )

function success( response){
        
    let response_json = response.data.token
    // get_main.insertAdjacentHTML( `afterbegin`, `<h3>Your Post request is recived</h3>` )
    // console.log( response )
    Cookies.set( `login`,response_json )
}
// failure function to display if the resturned data is not proper for
//  many http request falior resons
function failure(error) {
    get_main.insertAdjacentHTML( `afterbegin`, `<h3>try again</h3>` )
}
function logIn( details){
   
    console.log(`clicked`)
//selected all the input elements using querySelector and got
//  there value using the value attribute for inputs
let email_input = document.getElementById(`email_input`)
let email_value = email_input[`value`]
let pass_input = document.getElementById(`pass_input`)
let pass_value = pass_input[`value`]

//added a success function if response for POST request is successful and show a message

// used axios get method to POST data to the testing API
    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: pass_value
        
        }
    }).then(success).catch(failure);
}

let submit_btn = document.querySelector(`.add`)
submit_btn.addEventListener( `click`, logIn)