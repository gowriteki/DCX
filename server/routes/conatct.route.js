var express=require('express'); // To Import express
var router=express.Router(); //To import Router
var contact=require('../controllers/contact.controller');

router.post('/',contact.createContact);
router.get('/get/:id',contact.getContact);
router.get('/getAll',contact.getContacts);
router.put('/update/:id',contact.updateContact);


module.exports=router;