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
const Rank = require("../../model/rank");

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

//*****/Post the rank databse and update the rank schema/*****//
router.post('/rank',(req,res)=>{
    Rank.findOne({username:req.body.username}).then(user=>{
        if(user){
          let nowDate = new Date(req.body.date)
          let userDate = new Date(user.date)
          if(userDate < nowDate){
              Rank.update(
                  {username:user.username},
                  {$push:{userData:user}},
                  function(err,send){
                      if (err) console.log('ERROR '+ err);
                      else{
                          Rank.findOneAndUpdate(
                              {username:user.username}, // find a document with that filter
                              req.body, // document to insert 
                              {upsert: true, new: true, runValidators: true}, // options
                              function (err, updatedrank) { // callback
                                  if (err) console.log('ERROR '+ err);
                                  else res.json(updatedrank)
                 
                              })
                      }
                  }
              )
              
          }
          else{
              Rank.findOneAndUpdate(
                       {username:user.username}, // find a document with that filter
                       req.body, // document to insert 
                       {upsert: true, new: true, runValidators: true}, // options
                       function (err, updatedrank) { // callback
                           if (err) console.log('ERROR '+ err);
                           else res.json(updatedrank)
          
                       })
          }
          
        }else{
          const UserRank = new Rank({
              username:req.body.username,
              Age:req.body.Age,
              timeMinutes:req.body.timeMinutes,
              timeHours:req.body.timeHours,
              created_at:req.body.created_at,
              updated_at:req.body.updated_at,
              date:req.body.date,
              timestamp:req.body.timestamp
      });
      UserRank.save().then((user=>{
          res.status(200).json({message:"user rank created!!"})
      }))
           }
  })
  })
//*****/GET Monthly data /*****//
router.get('/time/:username', function(req, res){
	Rank.find({username:req.params.username}, function(err, docs){
		if(err) res.json(err);
    else  { 
      console.log(docs)
      return res.json({userData:docs[0].timeHours});}
	});
});

//*****/GEt the Age of User From User schema/*****//
router.get('/age/:username', function(req, res){
	User.find({username:req.params.username}, function(err, docs){
		if(err) res.json(err);
    else  { 
      console.log(docs)
      return res.json({Age:docs[0].Age});}
	});
});
  module.exports = router;
