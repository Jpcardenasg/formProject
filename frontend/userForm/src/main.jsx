import React from 'react';
import ReactDOM from 'react-dom/client';

import './output.css';
import { UserFormApp } from './UserFormApp';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <UserFormApp />
  </React.StrictMode>,
);
