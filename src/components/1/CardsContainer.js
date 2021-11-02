import React from 'react';
import style1 from './style1.css';
import Card from './Card';

class CardsContainer extends React.Component {
	//Image parameters
	state = {
		//Sizes are in pixels by default, you can change them by using a template string in the card Style object
		imgClosedWidth: 100,
		imgOpenWidth: 200,
		imgHeight: 300,
		openId: null,
		textColor: 'white',
		textShadow: `0 0 5px black`,
	};

	onImgClick = (clickedId) => {
		this.setState({ openId: clickedId });
	};

	render() {
		//If you want to add another image just add another index
		const imgIdArray = [0, 1, 2, 3];
		//Background for each image
		const imgBckgArray = [
			'https://images.unsplash.com/photo-1634242083752-323b6155c365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			'https://images.unsplash.com/photo-1633869717363-6b712764c18e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
			'https://images.unsplash.com/photo-1627844718626-4c6b963baac0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
			'https://images.unsplash.com/photo-1634125789353-24160fd57875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
		];
		//If no image link is provided this will show up instead
		const fallBackImg =
			'https://images.unsplash.com/photo-1634096384757-c034cf28be3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80';

		return (
			<div className="imagesContainer">
				{imgIdArray.map((element) => {
					if (element === this.state.openId) {
						//It returns a special version of card for the clicked image
						return (
							<Card
								onImgClick={this.onImgClick}
								id={element}
								key={element}
								height={this.state.imgHeight}
								url={imgBckgArray[element] || fallBackImg}
								width={this.state.imgOpenWidth}
								textColor={this.state.textColor}
								textShadow={this.state.textShadow}
							/>
						);
					}
					return (
						<Card
							onImgClick={this.onImgClick}
							id={element}
							key={element}
							url={imgBckgArray[element] || fallBackImg}
							height={this.state.imgHeight}
							width={this.state.imgClosedWidth}
							textColor="transparent"
							textShadow="0 0 5px transparent"
						/>
					);
				})}
			</div>
		);
	}
}

export default CardsContainer;
