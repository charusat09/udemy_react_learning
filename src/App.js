import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

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
        <Content text={this.state.contentText} propArray="fff"/>
        {/*<Clock/>*/}
      </div>
    );
  }
}

App.defaultProps = {
  value: "default props",
  text: "default text"
}

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

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      count: 0
    }
    this.updateStateData = this.updateStateData.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDiv = this.findMyDiv.bind(this);
  };

  updateStateData() {
    let count = this.state.count;
    count++;
    let item = "Click - " + count;
    let myArray = this.state.data;
    myArray.push(item);
    console.log(myArray);
    this.setState({ data: myArray, count: count})
  };

  forceUpdateRandomNumber() {
    this.forceUpdate();
  }

  findMyDiv() {
    let element = document.getElementById('myDiv');
    ReactDOM.findDOMNode(element).style.color = 'red';
  }

  render() {
    return (
      <div>
        <div className="App-intro">
          {this.props.text}
          {this.props.value}
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
          <h4>Boolean: {this.props.propBool ? "True" : "False"}</h4>
          <h4>Strig: {this.props.propString}</h4>
          <h4>Number: {this.props.propNumber}</h4>
          <h4>Function: {this.props.propFunc(5)}</h4>
          <h4>Object: {this.props.propObject.value1}</h4>
        </div>
        <button onClick={this.updateStateData}>Click Me</button>
        <div>{this.state.data}</div>
        <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
        <h4>Random Number: {Math.random()}</h4>
        <button onClick={this.findMyDiv}>Get Div</button>
        <div id="myDiv">This is DIV</div>
      </div>

    );
  }
}

Content.PropTypes = {
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number,
  propFunc: React.PropTypes.func,
  propObject: React.PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBool: true,
  propString: "this is string.....",
  propNumber: 100,
  propFunc: function(e) { return e},
  propObject: {
    value1: "One",
    value2: "Two",
    value3: "Three"
  }
}

export default App;
