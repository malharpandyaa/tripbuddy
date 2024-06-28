// models/Trip.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String },
  requirements: { type: String },
  createdAt: { type: Date, default: Date.now },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Trip', tripSchema);