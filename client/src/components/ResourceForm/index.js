import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_RESOURCE } from '../../utils/mutations';
import { QUERY_RESOURCES } from '../../utils/queries';

const ResourceForm = () => {
  const [formState, setFormState] = useState({
    resourceTitle: '',
    resourceDescription: '',
    resourceLink: '',
    resourceAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addResource, { error }] = useMutation(ADD_RESOURCE, {
    update(cache, { data: { addResource } }) {
      try {
        const { resources } = cache.readQuery({ query: QUERY_RESOURCES });

        cache.writeQuery({
          query: QUERY_RESOURCES,
          data: { resources: [addResource, ...resources] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addResource({
        variables: { ...formState },
      });
      console.log(data);
      console.log(formState);

      setFormState({
        resourceTitle: '',
        resourceDescription: '',
        resourceLink: '',
        resourceAuthor: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'resourceDescription' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'resourceDescription') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What resource would you like to add?</h3>

      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
          }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <input
            name="resourceTitle"
            placeholder="Title your resource"
            value={formState.resourceTitle}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <textarea
            name="resourceDescription"
            placeholder="Describe your resource"
            value={formState.resourceDescription}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <input
            name="resourceLink"
            placeholder="Link your resource"
            value={formState.resourceLink}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="resourceAuthor"
            placeholder="Add your osu! username as author"
            value={formState.resourceAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Resource
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ResourceForm;
