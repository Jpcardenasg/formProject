import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value,
        } );
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        fetch( 'http://localhost:8080/api/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( formState )
        } )
            .then( response => response.json() )
            .then( data => console.log( 'Si se pudo!!!', data ) )
            .catch( ( error ) => console.log( 'No se pudo :(', error ) );
    };

    const onResetForm = () => setFormState( initialForm );

    return {
        formState,
        onInputChange,
        onResetForm,
        onSubmit
    };
};