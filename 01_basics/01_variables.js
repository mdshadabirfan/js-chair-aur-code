const accountId = 225567;
let accountEmail = "mdshadabirfan@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 2; --This is not allowed

accountEmail = "msi@gmail.com";
accountPassword = "1234567890";
accountCity = "Bihar";
console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
