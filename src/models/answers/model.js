const mongoose = require('mongoose');
const { schema } = require('./schema');

// Hooks
schema.pre('save', function () {
  console.log('Pre Hook called');
})

const Answer = mongoose.model('Answer', schema);
module.exports = { Answer };