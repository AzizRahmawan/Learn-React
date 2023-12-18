import React from 'react';
import ReactDOM from 'react-dom/client'
import Form from './form.jsx'

const formElement = document.getElementById('form');
// Render Form
const formRoot = ReactDOM.createRoot(formElement);
formRoot.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);