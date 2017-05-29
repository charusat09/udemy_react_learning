import React, { Component } from 'react';

class FormPart1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myInputValue: ""
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    let val = e.target.value;
    this.setState({ myInputValue: val})
  }

  render() {
    return(
      <div>
        <MyInputChild myInputValue={this.state.myInputValue}
        updateInput={this.updateInput}/>      
        <h4>{this.state.myInputValue}</h4>
      </div>
    );
  }
}

class MyInputChild extends Component {
  render() {
    return(
      <div>
        <input value={this.props.myInputValue} onChange={this.props.updateInput}></input>
      </div>
    );
  }
}

export default FormPart1;