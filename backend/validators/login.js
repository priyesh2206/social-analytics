const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function ValidateLoginInput(data){
    let Errors = {};

//*****/Convert empty fields to an empty string so we can use validator functions/*****//
data.username = !isEmpty(data.username) ? data.username : "";
data.password = !isEmpty(data.password) ? data.password : "";

//*****/Check Username/*****//
if (Validator.isEmpty(data.username)) {
  Errors.username = "UserName field is required";
}

//*****/check Password/*****//
if (Validator.isEmpty(data.password)) {
  Errors.password = "Password field is required";
}
return {
  Errors,
  isValid: isEmpty(Errors)
};
};