import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Clock from './utils/clock.js';
import Header from './utils/header.js';
import Content from './utils/content.js';
import FormPart1 from './utils/form_learning.js';
import Footer from './utils/footer.js';
import Form from './utils/form.js';
import MultiInputForm from './utils/multi_input_form.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React World",
      contentText: "Let's learn React JS"
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Content text={this.state.contentText} propArray="fff"/> */ }
        {/* <Clock /> */}
        {/* <FormPart1 /> */}
        {/* <Footer /> */}
        {/* <Form /> */}
        <Header introduction={this.state.headerText} />
      </div>
    );
  }
}

App.defaultProps = {
  value: "default props",
  text: "default text"
}

export default App;
