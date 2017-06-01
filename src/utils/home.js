import React, { Component } from 'react';
import MultiInputForm from './multi_input_form.js';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h2>Home</h2>

          <MultiInputForm />
        </div>
      </div>
    );
  }
}

export default Home;
