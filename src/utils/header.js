import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import logo from '../logo.svg';
class Header extends Component {
  render() {
    return (
      <div className="Test">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.introduction}</h2>
        </div>
        <ul className="nav nav-pills">
            <li role="presentation"><Link to="/">App</Link></li>
            <li role="presentation"><Link to="/home">Home</Link></li>
            <li role="presentation"><Link to="/about">About</Link></li>
            <li role="presentation"><Link to="/topics">Topics</Link></li>
          </ul>
      </div>
    );
  }
}

export default Header;
// <ul>
//
//       </ul>
