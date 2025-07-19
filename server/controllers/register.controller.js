var registermodel = require('../models/register.model');

exports.createRegister = (req, res) => {
  var location = {
    type: 'Point',
    coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
  };

  var register = new registermodel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    location: req.body.location,
    skills: req.body.skills,
    resume: req.file ? req.file.path : '' // optional: resume upload path
  });
console.log(register);
  register.save().then(
    (result) => res.send({ message: 'Inserted', data: result }),
    (err) => res.send({ message: 'Error occurred', data: err })
  );
};
exports.getRegister = (req, res) => {
  var _id = req.params._id;

  registermodel.find({ _id: _id }).then(
    (result) => res.send(result),
    (error) => res.send(error)
  );
};
exports.getRegisters = (req, res) => {
  registermodel.find({}).then(
    (result) => res.send(result),
    (err) => res.send(err)
  );
};
exports.updateRegister = (req, res) => {
  var location = {
    type: 'Point',
    coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
  };

  var register = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    location: req.body.location,
    skills: req.body.skills
  };

  if (req.file) {
    register.resume = req.file.path;
  }

  registermodel.findByIdAndUpdate(req.params.id, register, { new: true }).then(
    (result) => res.send({ message: 'Updated', data: result }),
    (error) => res.send(error)
  );
};