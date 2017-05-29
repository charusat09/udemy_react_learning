import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// setInterval(()=>{
// 	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 10000);