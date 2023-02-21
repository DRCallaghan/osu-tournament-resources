import React, { useState } from 'react';

const BracketGenerator = () => {
    // setting up formState for mod info and starting round info
    const [formState, setFormState] = useState({
        mods: [],
        startingRound: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // todo: connect form submission to script running
            const { data } = { ...formState };
            // resetting formState to be empty
            setFormState({
                mods: [],
                startingRound: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        // designating event target as variables to be pushed into formState
        const { name, value } = e.target;

        setFormState({ ...formState, [name]: value });
    };

    return (
        <div>
            <h3>Lazer Bracket Generator</h3>

            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            ></form>
        </div>
    );
};

export default BracketGenerator;