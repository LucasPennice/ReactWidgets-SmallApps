import React, { useState } from 'react';
import style7 from './style7.css';

const SearchWidget = (props) => {
	const [isSearchbarOpen, setIsSearchbarOpen] = useState('sbClosed');

	return (
		<form className="sbForm" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				value={props.searchTerm}
				onChange={(e) => props.setSearchTerm(e.target.value)}
				className={`searchbar ${isSearchbarOpen}`}
				placeholder={props.plHolder}
			/>
			<button
				className="sbButton"
				onClick={() =>
					isSearchbarOpen === 'sbClosed'
						? setIsSearchbarOpen('sbOpen')
						: setIsSearchbarOpen('sbClosed')
				}
			>
				🔍
			</button>
		</form>
	);
};

export default SearchWidget;
