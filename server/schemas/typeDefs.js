const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Resource {
    _id: ID
    resourceTitle: String
    resourceDescription: String
    resourceLink: String
    resourceAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    resources: [Resource]!
    resource(resourceId: ID!): Resource
  }

  type Mutation {
    addResource(resourceTitle: String!, resourceDescription: String!, resourceLink: String!, resourceAuthor: String!): Resource
    addComment(resourceId: ID!, commentText: String!): Resource
    removeResource(resourceId: ID!): Resource
    removeComment(resourceId: ID!, commentId: ID!): Resource
  }
`;

module.exports = typeDefs;
