const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const resourceSchema = new Schema({
  resourceTitle: {
    type: String,
    required: 'You need to have a title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  resourceDescription: {
    type: String,
    required: 'You need to leave a resource!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  resourceLink: {
    type: String,
    required: 'You must link your resource!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  resourceAuthor: {
    type: String,
    required: true,
    trim: true,
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
