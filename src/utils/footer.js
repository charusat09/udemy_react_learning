import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    this.introduceLifeCycleMethods = this.introduceLifeCycleMethods.bind(this)
  }

  introduceLifeCycleMethods(){
    let array = [1]
    this.setState({data: array})
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return(
      <div id="footerID">
        <button onClick={this.introduceLifeCycleMethods}>Get Footer</button>
        <p>This is footer</p>
      </div>
    );
  }
}

export default Footer;