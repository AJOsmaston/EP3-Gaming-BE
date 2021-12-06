const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
