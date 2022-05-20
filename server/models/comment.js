const {Schema,model}=require('mongoose');
const commentsSchem=new Schema({
    comment:{
        type:String
    },
    username:{
        type:String
    },
   like:{
       type:Number
   },
   createdAt:{
       type:Date,
       default:Date.now()
   }
   

})
const Comment=model('Comment',commentsSchem);
module.exports=Comment