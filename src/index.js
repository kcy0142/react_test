import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';

const rootElement = document.getElementById('root');
ReactDOM.render(<App2 headerTitle="welcome" contentTitle="stranger" contentBody="body"/>, rootElement);


