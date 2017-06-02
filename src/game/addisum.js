import React, { Component } from 'react';
import QuizOptions from './QuizOptions.js'

class Addisum extends Component {
	constructor(props){
		super(props)

		let riddle = this.play();
		let correct = false;
		let gameover = false;

		this.state = {riddle, correct, gameover}

		this.renderOptions = this.renderOptions.bind(this);
		this.renderMessage = this.renderMessage.bind(this);
		this.play = this.play.bind(this);
	}

	randomNumber(min, max) {
		return Math.floor(Math.random() * (max-min+1)) +min;
	}

	generateRandomOptions(sum) {
		let resultsArray = [];
		let randomNumberArray = [];

		while(randomNumberArray.length < 3) {
			let randomNumber = this.randomNumber(1, 19);
			if(randomNumberArray.indexOf(randomNumber) > -1) continue;
			randomNumberArray.push(randomNumber);
		}

		for(let i = 0; i < 3; i++) {
			let addSubtract = this.randomNumber(0,1);
			let result = sum;
			if(addSubtract === 1) {
				//add the number to the result
				result += randomNumberArray[i];
				resultsArray.push(result);
			} else {
				//subtract the number from the result
				result -= randomNumberArray[i];
				resultsArray.push(result);
			}
		}

		return resultsArray;
	}

	renderOptions() {
		return(
			<div className="options">
				{this.state.riddle.resultsArray.map((option, i) => 
						<QuizOptions option={option} key={i}/>
				)}
			</div>
		)

	}

	renderMessage() {

	}

	play(){
		let field1 = this.randomNumber(20,50);
		let field2 = this.randomNumber(20,50);
		let result = field1 + field2;
		let resultsArray = this.generateRandomOptions(result);
		resultsArray.push(result);
		resultsArray.sort(function(a,b) {return 0.5 - Math.random()});

		// console.log(field1, field2)
		// console.log(resultsArray)

		let riddle = { field1, field2, resultsArray, answer: result }

		if(this.state && this.state.gameOver) {
	  	this.setState({riddle: riddle});
	  } else {
	  	return riddle;
	  }
	}

	render() {
		return(
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">
						What is the sum of 
						<span className="text-info"> {this.state.riddle.field1} </span> 
						and <span className="text-info">{this.state.riddle.field2}</span>
						?
					</p>
					{this.renderOptions()}
				</div>
				<div className="">
					{this.renderMessage()}
				</div>
				<div className="play-again">
					<a className="button" onClick={this.play}>Play Again</a>
				</div>
			</div>
		)
	}
}

export default Addisum;