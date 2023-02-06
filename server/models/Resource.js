const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const resourceSchema = new Schema({
  resourceTitle: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 280,
    trim: false,
  },
  resourceDescription: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 280,
    trim: false,
  },
  resourceLink: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 280,
    trim: false,
  },
  resourceAuthor: {
    type: String,
    required: false,
    trim: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Resource = model('Resource', resourceSchema);

module.exports = Resource;
