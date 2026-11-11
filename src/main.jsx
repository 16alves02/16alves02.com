import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

hydrateRoot(document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
