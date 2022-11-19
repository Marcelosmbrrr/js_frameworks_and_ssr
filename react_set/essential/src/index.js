import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LayoutView } from './views/LayoutView';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutView />
    </BrowserRouter>
  </React.StrictMode>
);