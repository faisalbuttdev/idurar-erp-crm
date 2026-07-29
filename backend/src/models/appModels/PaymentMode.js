const mongoose = require('mongoose');

const paymentModeSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PaymentMode', paymentModeSchema);
