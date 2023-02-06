const { Resource } = require('../models');

const resolvers = {
  Query: {
    resources: async () => {
      return Resource.find().sort({ createdAt: -1 });
    },

    resource: async (parent, { resourceId }) => {
      return Resource.findOne({ _id: resourceId });
    },
  },

  Mutation: {
    addResource: async (parent, { resourceText, resourceAuthor }) => {
      return Resource.create({ resourceText, resourceAuthor });
    },
    addComment: async (parent, { resourceId, commentText }) => {
      return Resource.findOneAndUpdate(
        { _id: resourceId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeResource: async (parent, { resourceId }) => {
      return Resource.findOneAndDelete({ _id: resourceId });
    },
    removeComment: async (parent, { resourceId, commentId }) => {
      return Resource.findOneAndUpdate(
        { _id: resourceId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
