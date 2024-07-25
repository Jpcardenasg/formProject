import { useState } from "react";

export function useForm( initialForm = {} ) {

    const postUrl = 'http://localhost:8080/api/users/saveUser';
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value
        } );
    };

    const onSubmit = async ( e ) => {
        e.preventDefault();
        try {
            const response = await fetch( postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( formState )
            } );

            if ( !response.ok ) throw new Error( 'HTTP error ' + response.status );
            const data = await response.json();
            console.log( 'Post Operation successful:', data );

            onResetForm();

        } catch ( error ) {
            console.log( 'Post Operation failed', error );
        }
    };

    const onResetForm = () => setFormState( initialForm );

    return {
        formState,
        onInputChange,
        onSubmit,
        onResetForm
    };
};
