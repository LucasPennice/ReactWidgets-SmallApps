import React, { useState, useEffect, useRef } from 'react';
import style5 from './style5.css';

export default (props) => {
	const [isOpen, setIsOpen] = useState('hidden');
	const [rotateIcon, setRotateIcon] = useState('not');
	const ref = useRef();

	const menuLogic = () => {
		setIsOpen(isOpen === 'hidden' ? '' : 'hidden');
		setRotateIcon(rotateIcon === 'not' ? 'rotate' : 'not');
	};

	useEffect(() => {
		const onBodyClick = (e) => {
			if (ref.current.contains(e.target)) {
				return;
			} else {
				setIsOpen('hidden');
				setRotateIcon('not');
			}
		};

		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			});
		};
	}, []);

	const renderOptions = (dropdownOptions) => {
		return dropdownOptions.map((optionObject) => {
			if (props.selected !== optionObject.label) {
				return (
					<div
						className={`dropdownOption ${isOpen}`}
						onClick={() => {
							props.setSelected(optionObject.label);
							menuLogic();
						}}
						key={optionObject.value}
					>
						<p>{optionObject.label}</p>
					</div>
				);
			}
		});
	};

	return (
		<div ref={ref} className="dropdown">
			<div className="dropdownTitle" onClick={() => menuLogic()}>
				<div className={`dropdownIcon ${rotateIcon}`}>+</div>
				<label>{props.selected || props.whatSelecting || 'Click Me'}</label>
			</div>
			{renderOptions(props.dropdownOptions)}
		</div>
	);
};
