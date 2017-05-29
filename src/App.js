import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Clock from './utils/clock.js';
import Header from './utils/header.js';
import Content from './utils/content.js';
import FormPart1 from './utils/form_learning.js';
import Footer from './utils/footer.js';


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
        <Header text={this.state.headerText}/>
        {/* <Content text={this.state.contentText} propArray="fff"/> */ }
        {/* <Clock /> */}
        {/* <FormPart1 /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

App.defaultProps = {
  value: "default props",
  text: "default text"
}

export default App;
