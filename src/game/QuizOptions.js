import React, { Component } from 'react';

class QuizOptions extends Component {
	constructor(props){
		super(props)
		this.state = {}

		this.callParentCheckOptions = this.callParentCheckOptions.bind(this)
	}

	callParentCheckOptions() {

	}

	render() {
		return(
			<div className="fields animated zoomIn" onClick={this.callParentCheckOptions}>
				<div className="field-block">{this.props.option}</div>
			</div>
		)
	}
}

export default QuizOptions;