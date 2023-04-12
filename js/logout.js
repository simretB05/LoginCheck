// created a variable that will store  a string value from cookie using the get Method 
let loginjson = Cookies.get( `login` );
//selecting a tag from checkout html using querySelector
let product_container = document.querySelector( `#main-section` );
let get_main = document.querySelector( `#main` );
// checking  if the  selectedJson in  available in the  cookies jar
// if it is not and is undefind give an error message  
if(  loginjson === undefined ) {
    
    product_container.insertAdjacentHTML(`afterbegin`, `<h3 style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;">your not logged In</h3>`)
    

} else
{
    let login_info = JSON.parse( loginjson );
    console.log(login_info)
    product_container.insertAdjacentHTML(`afterbegin`, `<p style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;"> login email ${login_info[`email`]}</p> <p style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;"> login email ${login_info[`password`]}</p>`)
}