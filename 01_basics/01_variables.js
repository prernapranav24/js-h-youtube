const accountId = 12345
let accountEmail = "prerna@gmail.com"
var accountPassword = "44444"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "abc@gmail.com"
accountPassword = "34256"
accountCity = "Bengaluru"

/*
Prefer not to use var because of issues in block scope and functional scopes
*/

 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])