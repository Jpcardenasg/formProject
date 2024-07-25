import React from 'react';
import { RegisterForm, UserList } from './components';

export const App = () => {
    return (
        <div className='app flex items-center justify-center bg-gray-100 min-h-screen'>
            <RegisterForm />
            <UserList />
        </div>
    );
};
