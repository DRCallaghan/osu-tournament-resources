import React from 'react';
import { useQuery } from '@apollo/client';

import ResourceList from '../components/ResourceList';
import ResourceForm from '../components/ResourceForm';

import { QUERY_RESOURCES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES);
  const resources = data?.resources || [];

  return (
    <main className='bg-dark text-light'>
      <div className="flex-row justify-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ResourceForm />
        </div> */}
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ResourceList
              resources={resources}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
