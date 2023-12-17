import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import './utils/firebase';
import './scss/global.scss';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();


