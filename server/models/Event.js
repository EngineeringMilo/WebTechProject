const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User-model
    required: true,
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true // Automatic creation of createdAt & updatedAt
});

module.exports = mongoose.model('Event', EventSchema);