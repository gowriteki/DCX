var mongoose=require('mongoose');

var contactschema=new mongoose.Schema({
   fullname:String,
   email:String,
   phone:Number,
   calltime:String,
   loaction:String,
   budget:Number,
   service:String,
   currentwebsite:String,
   noofpages:Number,

})
var contactmodel=mongoose.model('contact',contactschema)
module.exports=contactmodel;