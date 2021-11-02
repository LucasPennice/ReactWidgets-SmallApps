import React, { useState } from 'react';
import appStyle from './appStyle.css';
import Presentation from './Presentation';
import CardsContainer from './1/CardsContainer';
import ProgressForm from './2/ProgressForm';
import AccordionMenu from './3/AccordionMenu';
import WikipediaSearch from './4/WikipediaSearch';
import Dropdown from './5/Dropdown';
import RotatingMenu from './6/RotatingMenu';
import SearchWidget from './7/SearchWidget';
import SongDetail from './8/SongDetail';
import Translate from './9/Translate';
import YoutubeSearch from './10/YoutubeSearch';

export default () => {
	//5 - Dropdown
	const dropdownOptions = [
		{ label: 'The color red', value: 'red' },
		{ label: 'The color green', value: 'green' },
		{ label: 'The color blue', value: 'blue' },
	];
	const [selected, setSelected] = useState('');

	return (
		<div>
			{/* <Presentation title="1 - Expanding Cards" />
			<CardsContainer />
			<Presentation title="2 - Progress Steps" />
			<ProgressForm />
			<Presentation title="3 - Accordion Menu" />
			<AccordionMenu />
			<Presentation title="4 - Wikipedia Search Article" />
			<WikipediaSearch />
			<Presentation title="5 - Color Picker" />
			<Dropdown
				dropdownOptions={dropdownOptions}
				whatSelecting="Select a Color"
				selected={selected}
				setSelected={setSelected}
			/>
			<Presentation title="6 - Rotating Menu" />
			<RotatingMenu />
			<Presentation title="7 - Search Widget" />
			<SearchWidget plHolder="I do not work" /> */}
			<Presentation title="8 - Song Detail" />
			<SongDetail />
			{/* <Presentation title="9 - Translator" />
			<Translate />
			<Presentation title="10 - Youtube Video App" />
			<YoutubeSearch /> */}
		</div>
	);
};
