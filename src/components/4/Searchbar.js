import React, { useState, useEffect } from 'react';
import style4 from './style4.css';
import axios from 'axios';

const Searchbar = () => {
	//
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	//

	const baseUrl = 'https://en.wikipedia.org/w/api.php';

	const apiParameters = {
		action: 'query',
		list: 'search',
		origin: '*',
		format: 'json',
		srsearch: searchTerm,
	};
	//

	//
	useEffect(() => {
		const searchOnWikipedia = async () => {
			try {
				const { data } = await axios.get(baseUrl, {
					params: apiParameters,
				});
				setSearchResults(data.query.search);
			} catch (e) {
				alert(`4- Wikipedia Search Article${e}`);
			}
		};
		const timeOutId = setTimeout(() => {
			searchTerm === '' ? setSearchResults([]) : searchOnWikipedia();
		}, 500);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [searchTerm]);

	const inputStyle = { border: `1px solid grey`, borderRadius: `5px` };

	const renderResults = (searchResults) => {
		let delay = 0;
		return searchResults.map(({ title, snippet, pageid }) => {
			delay = delay + 0.2;
			return (
				<div
					key={pageid}
					className="result"
					style={{ animationDelay: `${delay}s` }}
				>
					<a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank">
						{title}
					</a>
					<p>
						<span dangerouslySetInnerHTML={{ __html: snippet }}></span>
					</p>
				</div>
			);
		});
	};

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					style={inputStyle}
					placeholder="Write Something"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</form>
			{renderResults(searchResults)}
		</div>
	);
};

export default Searchbar;
