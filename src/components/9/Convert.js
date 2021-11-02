import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default ({ languageObj, text }) => {
	const [translated, setTranslated] = useState('');

	useEffect(() => {
		const getTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: text,
						target: languageObj.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);
			setTranslated(data.data.translations[0].translatedText);
		};
		const timeoutId = setTimeout(() => {
			getTranslation();
		}, 500);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [languageObj, text]);
	return <div className="output">{translated}</div>;
};
