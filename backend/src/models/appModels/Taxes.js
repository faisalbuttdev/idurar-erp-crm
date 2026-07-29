const mongoose = require('mongoose');

const taxesSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },

  taxName: {
    type: String,
    required: true,
  },

  taxValue: {
    type: String,
    required: true,
  },

  isDefault: {
    type: Boolean,
    default: false,
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

module.exports = mongoose.model('Taxes', taxesSchema);
