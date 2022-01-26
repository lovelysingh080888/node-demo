
const DB = require("./Config");

const docSchema  = ({
    title:{type:String,require:true},
    requestfor:{type:String, require:true},
    thumbnail:{type:String, require:true},
    status:{type:Number},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()},
    deleted_at:{type:Date,default:null}
});

  const Request = DB.model("Request",docSchema);
  Request.once("index",err => (err ? console.log("some error generated in model creating : ", err) : ''));

  module.exports = Request;