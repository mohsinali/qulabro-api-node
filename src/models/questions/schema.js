const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const schema = new Schema({
  title: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  tags: {
    type: String
  },
  createdAt: {
    type: Date,
    required: [true]
  },
  createdBy: {
    type: ObjectId
  }
});

module.exports = { schema };