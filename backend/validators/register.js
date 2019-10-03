const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function ValidateRegisterInput(data){
  let Errors ={};

  //*****/chech the data and convert to empty/*****/
  data.username = !isEmpty(data.username) ? data.username: "";
  data.email = !isEmpty(data.email)? data.email:"";
  data.Age = !isEmpty(data.Age) ? data.Age:"";
  data.password = !isEmpty(data.password) ? data.password:"";
  data.password2 =!isEmpty(data.password2) ? data.password2:"";

//*****/check UserName/*****/
if(validator.isEmpty(data.username)){
    Errors.username = "UserName is required";
}

//*****/check Email/*****//
if(validator.isEmpty(data.email)){
    Errors.email = "email is required";
}
else if(!validator.isEmail(data.email)){
    Errors.email = "please enter the valid email";
}

//*****/check limit Hours/*****//
if(validator.isEmpty(data.Age)){
    Errors.Age = "Age is required";
}

//*****/check Password/*****//
if(validator.isEmpty(data.password)){
    Errors.password = "Password is required";
}

//*****/check confirm-Password/*****//
if(validator.isEmpty(data.password2)){
    Errors.password2 = "confirm-Password is required";
}


//*****/check Password Length/*****//
if(!validator.isLength(data.password,{min:6, max:20})){
    Errors.password = "Password Lenght aleast have 6 characters";
}

//*****/Compare Passwords /*****//
if(!validator.equals(data.password,data.password2)){
  Errors.password2 = "password doesn't match!!";

}
return {
    Errors,
    isValid:isEmpty(Errors)
}





}