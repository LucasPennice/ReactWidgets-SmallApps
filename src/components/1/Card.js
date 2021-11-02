import React from 'react';

class Card extends React.Component {
	render() {
		const style = {
			width: this.props.width,
			height: this.props.height,
			background: `url(${this.props.url})`,
			color: this.props.textColor,
			textShadow: this.props.textShadow,
			backgroundSize: 'cover',
			backgroundPosition: ' bottom',
		};

		return (
			<div
				className="imageDiv"
				onClick={() => this.props.onImgClick(this.props.id)}
				style={style}
			>
				<p className="imageText">ImageText</p>
			</div>
		);
	}
}

export default Card;
