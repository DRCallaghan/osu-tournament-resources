import { gql } from '@apollo/client';

export const ADD_RESOURCE = gql`
  mutation addResource($resourceTitle: String!, $resourceDescription: String!, $resourceLink: String!, $resourceAuthor: String!) {
    addResource(resourceTitle: $resourceTitle, resourceDescription: $resourceDescription, resourceLink: $resourceLink, resourceAuthor: $resourceAuthor) {
      _id
      resourceTitle
      resourceDescription
      resourceLink
      resourceAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($resourceId: ID!, $commentText: String!) {
    addComment(resourceId: $resourceId, commentText: $commentText) {
      _id
      resourceTitle
      resourceDescription
      resourceLink
      resourceAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
