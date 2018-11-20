const mongoose = require('mongoose');
const schema = require('./schema');

//Hooks
schema.pre('save', function () {
  console.log('Question Model');
});

const Question = mongoose.model('Question', schema);
module.exports = { Question };