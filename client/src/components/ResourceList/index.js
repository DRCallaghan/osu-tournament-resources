import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const ResourceList = ({ resources, title }) => {
  if (!resources.length) {
    return <h2 className='text-center'>No Resources Yet</h2>;
  }

  return (
    <div>
      <h2>{title}</h2>
      {resources &&
        resources.map((resource) => (
          <div key={resource._id} className="card mb-3">
            <h3 className="card-header bg-dark text-light p-2 m-0">
              <a href={resource.resourceLink} target="_blank" rel="noopener noreferrer">{resource.resourceTitle}</a>
            </h3>
            <h4 className="card-header bg-dark text-light p-2 m-0">
              <span style={{ fontSize: '1rem' }}>
                Created by
              </span> <br />
              <a href={`https://osu.ppy.sh/users/${resource.resourceAuthor}`} target="_blank" rel="noopener noreferrer">{resource.resourceAuthor}</a>
            </h4>
            <div className="card-body bg-primary p-2">
              <p>{resource.resourceDescription}</p>
            </div>
            {/* Create a link to this resource's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/resources/${resource._id}`}
            >
              Join the discussion on this resource.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ResourceList;
