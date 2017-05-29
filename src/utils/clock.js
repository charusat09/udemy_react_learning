import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      comment: "Hello"
    };
  }

  componentDidMount() {
    this.timeID = setInterval(
    () => {this.tick()}
    , 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div>
        <h3>Current Time is: {this.state.date.toLocaleTimeString()}</h3>
        <p>{this.state.comment}</p>
      </div>
    );
  }
}

export default Clock;