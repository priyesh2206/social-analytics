const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/user");
const User = require('./model/user');
const Rank = require('./model/rank');

require('dotenv').config();

const app = express();
const port =process.env.PORT || '4000' ;  //Checking PORT 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//**dataBase_Connection**//
mongoose.connect("mongodb+srv://ARP_Tool:GU1UbKIVxO9vtNjH@cluster0-etshk.mongodb.net/test?retryWrites=true&w=majority"
,{ useNewUrlParser: true})
.then(() => {
  console.log("connected to data base");
})
.catch(() => {
  console.log("connection failed");
});


app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port ,() => {
 console.log(`port is running on the port:${port}`);
});


//*****/jwt or Passport Middleware/*****//
app.use(passport.initialize());


//*****/config the tokens/*****/

require("./config/passport")(passport);


//*****/Routes/*****//
app.use("/api/users",users);

//*****/Get Data from Mongoose/***//

app.get('/getusers', function(req, res) {
  User.find({}, function(err, foundData) { //empty query for all data
      if(err) {
          console.log(err);
          return res.status(500).send();
      } else {
          return res.status(200).send(foundData);
      }
  });
})

//****Get Data of Timer from Mongoose***** */

app.get('/getranks', function(req, res) {
  Rank.find({}, function(err, foundData) { //empty query for all data
      if(err) {
          console.log(err);
          return res.status(500).send();
      } else {
          return res.status(200).send(foundData);
      }
  });
})



