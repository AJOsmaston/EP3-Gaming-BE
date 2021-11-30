const mongoose = require('mongoose');
const Schema = mongoose.schema;

const UserSchema = new Schema({
  action: {
    type: String,
    required: [true, 'this is required']
  }
});