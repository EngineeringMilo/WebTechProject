const { defaultMaxListeners } = require('connect-mongo');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  password: { 
    type: String, 
    required: true },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  },
  joinedEvents: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event'}]
});

module.exports = mongoose.model('User', UserSchema);
