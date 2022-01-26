
const Request = require('../models/RequestModel');

/**
 * 
 * post request
 */
exports.sendRequest = (req, res) => {
    
     const { title, requestfor } = req.body;

     const request = new Request({
         title:title,
         requestfor:requestfor,
         status:0,
         thumbnail: req.file.path
     });

     if(request.save()) {
        res.status(200).json({status:true,
        message: "Request sent successfully"
        
        })
     }else {
        res.status(200).json({status:false,
        message: "Something went wrong"
            
        })
     }
}
/**
 * 
 * View all requests
 */
exports.viewRequests = (req, res) => {
       Request.find({status:{$ne:2}},(err, result)=>{
         if(!err){
           res.status(200).json({
             status:true,
             message:"Success",
             data:result
           })
         }else{
          res.status(200).json({status:false,
            message: "Something went wrong",
            error:err
           })
         }
      }) 
}

/**
 * 
 * auth request
 */
exports.authRequest = (req, res) => {

    const {id, status } = req.body;

    Request.updateOne({_id: id }, { $set: 
      {"status": status} },(error,result)=>{
     
      if(error){
        res.status(200).json({status:false, message: "Something went wrong" })
      }
      else{
        res.status(200).json({status:true, message: "Status changed successfully"});
      }
    });
    
}

