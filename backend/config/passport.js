const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User");
const keys = require("../config/key");

const opts={};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts,(jwt_payload,done)=>{
            User.findById(jwt_payload.id)
            .then(user => {
                if(user){
                    return done(null,user);
                }
                return done(null,false);
            })
            .catch(err => console.log(err));
        })
    );
};