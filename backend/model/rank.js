const mongoose = require('mongoose');

const RankSchema = new  mongoose.Schema({
    username:{type:String},
    Age:{type:Number},
    timeMinutes:{type:Number},
    timeHours:{type:Number},
    created_at: { type: Date },
    updated_at: { type: Date },
    day:{type:String},
    timestamp: {type: Date, default: Date.now}
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