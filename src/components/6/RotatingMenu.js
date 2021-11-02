import React, { useState } from 'react';
import style6 from './style6.css';

export default () => {
	const [angle, setAngle] = useState(0);
	const [menuAnimation, setMenuAnimation] = useState('');
	const appBodyStyle = { transform: `rotateZ(${angle}deg)` };
	const rotateMenu = () => {
		angle === 0 ? setAngle(-20) : setAngle(0);
		menuAnimation === '' ? setMenuAnimation('animation') : setMenuAnimation('');
	};

	return (
		<div className="hiddenMenu">
			<div className="appBody" style={appBodyStyle}>
				<div className="menuButton" onClick={() => rotateMenu()}>
					+
				</div>
			</div>
			<div className={`menuItems ${menuAnimation}`}>
				<p>HOME</p>
				<p>ABOUT</p>
				<p>CONTACT</p>
			</div>
		</div>
	);
};
