import React, { Component } from 'react';

class Form extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: "", 
			textarea: "",
			selectvalue: "pinaple",
			like: true
		}
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTextAreaUpdate = this.handleTextAreaUpdate.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	handleUpdate(event) {
		this.setState({value: event.target.value})
	}

	handleTextAreaUpdate(event) {
		this.setState({textarea: event.target.value})
	}

	handleSelectChange(event){
		this.setState({selectvalue: event.target.value})
	}

	handleCheckboxChange(event) {
		this.setState({like: event.target.like})
	}

	handleSubmit(event){
		let valueMsg = 	'A name was submitted: ' + this.state.value;
		let textareaMsg = "\n My Essay:" + this.state.textarea;
		let selectvalueMsg = "\n Selected option: " + this.state.selectvalue;
		let checkboxMsg = "\n Did I like Ice Cream: " + (this.state.like ? "Yes" : "No")
		alert( valueMsg + textareaMsg + selectvalueMsg + checkboxMsg);
    event.preventDefault();
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleUpdate}></input>
						<h4>{this.state.value}</h4>
					</label>
					<label>
						Essay:
						<textarea value={this.state.textarea} onChange={this.handleTextAreaUpdate}></textarea>
						<h4>{this.state.textarea}</h4>
					</label>
					<label>
						Select your flavour for icecream:
						<select value={this.state.selectvalue} onChange={this.handleSelectChange}>
						  <option value="americannuts">American Nuts</option>
						  <option value="butterscotch">Butter Scotch</option>
						  <option selected value="pinaple">Pinaple</option>
						  <option value="mango">Mango</option>
						</select>
					</label>
					<label>
						Did you like Ice Cream?
						<input
	            name="like"
	            type="checkbox"
	            checked={this.state.like}
	            onChange={this.handleCheckboxChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Form;