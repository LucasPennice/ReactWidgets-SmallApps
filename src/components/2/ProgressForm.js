import React from 'react';
import style2 from './style2.css';

class ProgressForm extends React.Component {
	state = { progressWidth: 0, current: 1 };

	onClick = async (action, array) => {
		let barWidth = this.state.progressWidth;
		let currentVar = this.state.current;
		if (action === 1) {
			barWidth = parseInt(barWidth + 100 / (array.length - 1));
			currentVar++;
		} else if (action === -1) {
			barWidth = parseInt(barWidth - 100 / (array.length - 1));
			currentVar--;
		}
		if (barWidth <= 1) {
			barWidth = 0;
			currentVar = 1;
		} else if (barWidth >= 100) {
			barWidth = 100;
			currentVar = array.length;
		}

		await this.setState({ progressWidth: barWidth, current: currentVar });
	};

	render() {
		const steps = [1, 2, 3, 4];
		const progressStyle = { width: `${this.state.progressWidth}%` };
		const currentStyle = {
			borderColor: 'rgb(74, 145, 101)',
			backgroundColor: 'white',
			opacity: 1,
		};
		const notCurrentStyle = {
			borderColor: 'rgb(145, 145, 145)',
			backgroundColor: 'rgba(145, 145, 145,.5)',
			opacity: 0.5,
		};
		return (
			<div className="container">
				<form></form>
				<div className="numbersContainer">
					{steps.map((step) => {
						if (step <= this.state.current) {
							return (
								<div className="number" key={step} style={currentStyle}>
									{step}
								</div>
							);
						} else {
							return (
								<div className="number" key={step} style={notCurrentStyle}>
									{step}
								</div>
							);
						}
					})}
					<div className="progressLine" style={progressStyle}></div>
				</div>
				<div className="buttonsContainer">
					<button onClick={() => this.onClick(-1, steps)}>Previus</button>
					<button onClick={() => this.onClick(1, steps)}>Next</button>
				</div>
			</div>
		);
	}
}

export default ProgressForm;
