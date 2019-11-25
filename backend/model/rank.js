const mongoose = require('mongoose');

const RankSchema = new  mongoose.Schema({
    username:{type:String},
    Age:{type:Number},
    timeMinutes:{type:Number},
    timeHours:{type:Number},
    created_at: { type: Date },
    updated_at: { type: Date },
    date:{type:Date},
    timestamp: {type: Date, default: Date.now},
    userData:[{date:{type : Date},timeMinutes:{type:Number},timeHours:{type:Number},created_at: { type: Date },updated_at: { type: Date },}]
});

RankSchema.pre('save',function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
module.exports = mongoose.model('UserRank',RankSchema);