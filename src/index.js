import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './utils/header.js';

import App from './App';
import Home from './utils/home.js';
import About from './utils/about.js';
import Topics from './utils/topics.js';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();

// setInterval(()=>{
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 10000);
