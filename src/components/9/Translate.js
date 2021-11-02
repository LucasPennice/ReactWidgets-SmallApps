import React, { useState } from 'react';
import style9 from './style9.css';
import Dropdown from '../5/Dropdown';
import Convert from './Convert';

const dropdownOptions = [
	{ label: 'Afrikaans', value: 'af' },
	{ label: 'Arabic', value: 'ar' },
	{ label: 'Hindi', value: 'hi' },
	{ label: 'Dutch', value: 'nl' },
	{ label: 'English', value: 'en' },
];

export default () => {
	const [language, setLanguage] = useState('Afrikaans');
	const [text, setText] = useState('');

	const languageIndex = (obj) => {
		return obj.label === language;
	};

	return (
		<div className="container">
			<label htmlFor="translate" className="lbl">
				Enter Text
			</label>
			<input
				className="inp"
				id="translate"
				placeholder="Write Something"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<p className="lbl">Select Language</p>
			<Dropdown
				dropdownOptions={dropdownOptions}
				whatSelecting="Select a Language"
				selected={language}
				setSelected={setLanguage}
			/>
			<p className="lbl">Output</p>
			<Convert text={text} languageObj={dropdownOptions.find(languageIndex)} />
		</div>
	);
};
