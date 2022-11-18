import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LayoutView } from './views/LayoutView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutView />
  </React.StrictMode>
);