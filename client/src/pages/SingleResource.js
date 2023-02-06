import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_RESOURCE } from '../utils/queries';

const SingleResource = () => {
  // Use `useParams()` to retrieve value of the route parameter `:resourceId`
  const { resourceId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_RESOURCE, {
    // Pass the `resourceId` URL parameter into query to retrieve this resource's data
    variables: { resourceId: resourceId },
  });

  const resource = data?.resource || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        <a href={`https://osu.ppy.sh/users/${resource.resourceAuthor}`} target="_blank" rel="noopener noreferrer">{resource.resourceAuthor}</a> <br />
        <span style={{ fontSize: '1rem' }}>
          had this to say about their <a href={resource.resourceLink} target="_blank" rel="noopener noreferrer">{resource.resourceTitle}</a> on {resource.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4 text-dark"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {resource.resourceDescription}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={resource.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm resourceId={resource._id} />
      </div>
    </div>
  );
};

export default SingleResource;
