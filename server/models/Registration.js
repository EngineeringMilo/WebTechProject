const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const RegistrationSchema = new Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', // Reference to User-model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User-model
    required: true,
  }
}, {
  timestamps: true // Automatic creation of createdAt & updatedAt
});

module.exports = mongoose.model('Registration', RegistrationSchema);