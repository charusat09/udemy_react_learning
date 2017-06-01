import React, { Component } from 'react';

class MultiInputForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: "", 
			textarea: "",
			selectvalue: "pinaple",
			like: true
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		console.log(name, value);

		this.setState({
			[name]: value
		});

	}

	handleSubmit(event) {
		event.preventDefault();
		let valueMsg = 	'A name was submitted: ' + this.state.value;
		let textareaMsg = "\n My Essay:" + this.state.textarea;
		let selectvalueMsg = "\n Selected option: " + this.state.selectvalue;
		let checkboxMsg = "\n Did I like Ice Cream: " + (this.state.like ? "Yes" : "No")
		alert( valueMsg + textareaMsg + selectvalueMsg + checkboxMsg);
	}

	render(){
		return(
			<div className="row">	
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>
							Name:
							<input
								name="value" 
								type="text" 
								className="form-control"
								value={this.state.value} 
								onChange={this.handleInputChange}></input>
							<h4>{this.state.value}</h4>
						</label>
					</div>
					<div className="form-group">
						<label>
							Essay:
							<textarea
								name="textarea" 
								className="form-control"
								value={this.state.textarea} 
								onChange={this.handleInputChange}></textarea>
							<h4>{this.state.textarea}</h4>
						</label>
					</div>
					<div className="form-group">
						<label>
							Select your flavour for icecream:
							<select 
								name="selectvalue"
								className="form-control"
								value={this.state.handleInputChange} 
								onChange={this.handleSelectChange}>
							  <option value="americannuts">American Nuts</option>
							  <option value="butterscotch">Butter Scotch</option>
							  <option selected value="pinaple">Pinaple</option>
							  <option value="mango">Mango</option>
							</select>
						</label>
					</div>
					<div className="form-group">
						<label>
							Did you like Ice Cream?
							<input
		            name="like"
		            type="checkbox"
		            className="form-control"
		            checked={this.state.like}
		            onChange={this.handleInputChange} />
						</label>
					</div>
					<input type="submit" value="Submit" className="btn btn-primary"/>
				</form>
			</div>
		)
	}
} 

export default MultiInputForm;