import React from 'react';

function Presentation(props) {
	return <h1 style={{ textAlign: 'center' }}>{props.title || 'No Text'}</h1>;
}

export default Presentation;
