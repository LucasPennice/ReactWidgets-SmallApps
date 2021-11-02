import react from 'react';
import React, { useState } from 'react';
import style3 from './style3.css';

const AccordionMenu = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const menuData = [
		{ title: 'Title 1', text: 'Text 1', id: 1 },
		{ title: 'Title 2', text: 'Text 2', id: 2 },
		{ title: 'Title 3', text: 'Text 3', id: 3 },
	];

	const createCards = (data) => {
		const CardList = data.map(({ title, text, id }) => {
			let cardClass = id === activeIndex ? 'activeCard' : 'inactiveCard';
			return (
				<div
					onClick={() => setActiveIndex(id)}
					key={id}
					id={id}
					className="card"
				>
					<h1 className="title">{title}</h1>
					<p className={cardClass}>{text}</p>
				</div>
			);
		});
		return CardList;
	};

	return <div className="container">{createCards(menuData)}</div>;
};

export default AccordionMenu;
