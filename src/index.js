import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App timeFrame="p7" league="PL" />, document.getElementById('root'));
registerServiceWorker();
