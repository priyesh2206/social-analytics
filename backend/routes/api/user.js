const express  = require("express");
const router  = express.Router();
const bcrypt =  require("bcryptjs");
const jwt =  require("jsonwebtoken");
const keys = require('../../config/key');


//*****/loading the Validators/*****//
const ValidateRegisterInput = require("../../validators/register");
const ValidateLoginInput = require("../../validators/login");


//*****/Load User Model/*****//

const User = require("../../model/user");

router.post("/register",(req,res) =>{
    console.log(req.body)
const { Errors , isValid} = ValidateRegisterInput(req.body);

//*****/valid inputs/*****/
if(!isValid){
    return res.status(400).json(Errors);
    }

User.findOne({username:req.body.username}).then(user =>{
    if(user){
        return res.status(400).json({username:"username already exist"})
    }else{
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            Age:req.body.Age,
            password:req.body.password,
            timestamp:req.body.timestamp
        });
    //*****/hasing of password/*****//
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.status(200).json({message:"user created!!"}))
            .catch(err => console.log(err));
        });
      });
    }
  });

});

//*****/Login Routes/*****//

router.post('/login',(req,res) =>{
    const {Errors, isValid} = ValidateLoginInput(req.body);
    
    if(!isValid){
        return res.status(400).json(Errors);
    }
    const username = req.body.username;
    const password = req.body.password;


 //*****/find user by name/*****//
 User.findOne({username}).then(user =>{
     if(!user){
         return res.status(400).json({UsernameNotFound: "Username you enter is not found"});
     }
     //*****/check password/*****//
     bcrypt.compare(password,user.password).then(isMatch =>{
            if(isMatch){
                const payload ={
                    id:user.id,
                    username:user.username
                }
            jwt.sign(payload,keys.secretOrKey,
                {
                    expiresIn:31556926 // 1 year in seconds //
                },
                (err,token) =>{
                    res.json({
                        success:true,
                        token:"Bearer" + token
                    });
                }
            );
        }else {
            return res.status(400).json({passwordIncorect:"Password Incorrect"});
            }
     });
 });
});

router.get('/age/:username', function(req, res){
	User.find({username:req.params.username}, function(err, docs){
		if(err) res.json(err);
    else  { 
      console.log(docs)
      return res.json({Age:docs[0].Age});}
	});
});


module.exports = router;

