var express = require('express'); // To import express
var router = express.Router();    // To import Router
var multer = require('multer');   // To handle file uploads
var register = require('../controllers/register.controller'); // Your controller

// Multer setup for file upload (resume)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder to store resumes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename for uniqueness
  }
});
var upload = multer({ storage: storage });

// Routes
router.post('/', upload.single('resume'), register.createRegister);
router.get('/get/:_id', register.getRegister);
router.get('/getAll', register.getRegisters);
router.put('/update/:id', upload.single('resume'), register.updateRegister);

module.exports = router;