import { useState } from "react";
// import { useForm } from "./hooks/useForm";


export const UserFormApp = () => {

    const [ formState, setFormState ] = useState( {
        name: '',
        lastName: '',
        email: ''
    } );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState( {
            ...formState,
            [ name ]: value,
        } );
    };

    const onSubmit = ( e ) => {
        e.preventDefault();
        console.log( formState );
        fetch( 'http://localhost:8080/api/users/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( formState )
        } )
            .then( response => response.json() )
            .then( data => {
                console.log( 'User saved successfully:', data );
                onResetForm();
            } )
            .catch( ( error ) => console.log( 'Error saving user:', error ) );
    };

    const onResetForm = () => setFormState( {
        name: '',
        lastName: '',
        email: ''
    } );

    // const [ formState, onInputChange, onSubmit ] = useForm( {
    //     name: '',
    //     lastName: '',
    //     email: ''
    // } );

    const { name, lastName, email } = formState;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John"
                        value={name}
                        onChange={onInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={onInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="jhondoe@email.com"
                        value={email}
                        onChange={onInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};