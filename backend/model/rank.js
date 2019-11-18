const mongoose = require('mongoose');

const RankSchema = new  mongoose.Schema({
    username:{type:String,required:true},
    Age:{type:Number,required:true},
    timeMinutes:{type:Number,required:true},
    timeHours:{type:Number,required:true},
    created_at: { type: Date },
    updated_at: { type: Date },
    day:{type:String,require:true},
    timestamp: {type: Date, default: Date.now}
});

RankSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
      this.created_at = now;
    }
    next();
  });
module.exports = mongoose.model('UserRank',RankSchema);