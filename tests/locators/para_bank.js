const Register={
     reg_lnk:"Register",
     fName_txt:"input[name='customer.firstName']",
     lName_txt:"input[name='customer.lastName']",
     addr_txt:"input[name='customer.address.street']",
     city_txt:"input[name='customer.address.city']",
     state_txt:"input[name='customer.address.state']",
     zip_txt:"input[name='customer.address.zipCode']",
     phone_txt:"input[id='customer.phoneNumber']",
     ssn_txt:"input[id='customer.ssn']",
     usd_txt:"input[name='customer.username']",
     pass_txt:"input[id='customer.password']",
     confPass_txt:"input[id='repeatedPassword']",
     reg_btn:"input[value='Register']"
}

let login={
    usd_txt:"input[name='username']",
    pwd_txt:"input[name='password']",
    login_btn:"input[value='Log In']"
}
module.exports={
 Register,
 login
}