var express=require('express');
var app=express();
var mongoose=require('mongoose');
var db=require('./config/db.config');
var contact=require('./routes/conatct.route');
var register=require('./routes/register.route');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static('uploads'));
app.use('/contact',contact);
app.use('/register',register)
mongoose.connect(db.mongodb,{
useNewUrlParser:true,
    useUnifiedTopology:true
}).then(result=>console.log('monogodb connected'),(reject=>console.log('connection error',reject)))
.catch(reject=>console.log('connection error',reject))

app.get('/',(req,res)=>{
res.send('developers server is loading');
})
app.listen(6020,()=>{
console.log('The port is running in 6020')
})