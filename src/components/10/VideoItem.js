import React, { useState, useEffect } from 'react';

export default ({ item }) => {
	return (
		<div className="videoItem">
			<img src={item.snippet.thumbnails.medium.url} className="thumbnail" />
			<p className="videoTitle">{item.snippet.title}</p>
		</div>
	);
};
