const accountId = 1233422
let accountEmail = "vickss@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState;

// accountId =  2 //not allowed

accountEmail = "vic@gmail.com"
accountPassword = "1232221"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and function scope
 */




console.table([accountId, accountEmail, accountPassword, accountCity, accountState])