var contactmodel=require('../models/contact.model');
exports.createContact=(req,res)=>{
    var contact=new contactmodel({
   fullname:req.body.fullname,
   email:req.body.email,
   phone:req.body.phone,
   calltime:req.body.calltime,
   location:req.body.location,
   budget:req.body.budget,
   service:req.body.service,
   currentwebsite:req.body.currentwebsite,
   noofpages:req.body.noofpages,

    })

contact.save().then(
       (result)=>res.send({"message":"Inserted",data:result}),
        (err)=>res.send({"message":"Error occured",data:err})
    )
}
exports.getContact=(req,res)=>{
    var _id=req.params._id

    contactmodel.find({_id:_id}).then(
        (result)=>res.send(result),
    (error)=>res.send(error))
}
exports.getContacts=(req,res)=>{
   var _id=req.params._id
    contactmodel.find({_id:_id}).then(
        (result)=>res.send(result),
        (err)=>res.send(err)
    )

}
exports.updateContact=(req,res)=>{
     var contact=new contactmodel({
     fullname:req.body.fullname,
   email:req.body.email,
   phone:req.body.phone,
   calltime:req.body.calltime,
   location:req.body.location,
   budget:req.body.budget,
   service:req.body.service,
   currentwebsite:req.body.currentwebsite,
   noofpages:req.body.noofpages,
     })
    contactmodel.findByIdAndUpdate(req.params.id,contact)
    .then((result)=>res.send({'message':'Updated',data:result}),
(error)=>res.send(error))
}