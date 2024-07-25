import { useState, useEffect } from 'react';

export const UserList = () => {

    const [ users, setUsers ] = useState( [] );
    const getUrl = 'http://localhost:8080/api/users/allUsers';

    const fetchUsers = async () => {
        try {
            const response = await fetch( getUrl );

            if ( !response.ok ) throw new Error( 'HTTP error' + response.status );
            const data = await response.json();
            setUsers( data );

        } catch ( error ) {
            console.log( 'Get Operation failed', error );
        }
    };

    useEffect( () => {
        fetchUsers();
    }, [] );

    return (
        <div className="user-list flex flex-col items-center justify-center text-center bg-gray-100">
            <button
                onClick={fetchUsers}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                List Users
            </button>
            <table className="min-w-full bg-white border-collapse">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-600">
                            Name
                        </th>
                        <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-600">
                            Last Name
                        </th>
                        <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-600">
                            Email
                        </th>
                        <th className="py-2 px-4 border-b border-gray-300 bg-gray-200 text-left text-sm font-semibold text-gray-600">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( ( user, index ) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">
                                {user.name}
                            </td>
                            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">
                                {user.lastName}
                            </td>
                            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">
                                {user.email}
                            </td>
                            <td className="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">
                                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                <button className="ml-2 text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    );
};
