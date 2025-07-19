var mongoose = require('mongoose');

var registerschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  location: {
    type: {
      type: String,
      required: true,
      
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  skills: String,
  resume: {
    type: String // This could be a URL to cloud storage (e.g., S3, Google Drive) or a file path
  }
});

// Enable geospatial indexing for location
registerschema.index({ location: '2dsphere' });

var registermodel = mongoose.model('register', registerschema);

module.exports = registermodel;