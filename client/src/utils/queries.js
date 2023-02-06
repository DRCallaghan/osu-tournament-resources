import { gql } from '@apollo/client';

export const QUERY_RESOURCES = gql`
  query getResources {
    resources {
      _id
      resourceTitle
      resourceDescription
      resourceLink
      resourceAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_RESOURCE = gql`
  query getSingleResource($resourceId: ID!) {
    resource(resourceId: $resourceId) {
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
