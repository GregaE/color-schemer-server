const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  colorSchemes: [{
    name: String,
    colors: [String]
  }],
},
  { typeKey: '$type' }
);

module.exports = mongoose.model('Users', UserSchema)