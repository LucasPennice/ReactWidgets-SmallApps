import React, { useState, useEffect } from 'react';
import VideoItem from './VideoItem';

export default ({ videos, selectedVideo, setSelectedVideo }) => {
	let delay = 0;

	const renderVideoList = () => {
		return videos.map((item) => {
			delay = delay + 0.1;
			if (selectedVideo !== item.etag) {
				return (
					<div
						className="videoItem"
						key={item.etag}
						style={{ animationDelay: `${delay}s` }}
						onClick={() => setSelectedVideo(item.etag)}
					>
						<img
							src={item.snippet.thumbnails.medium.url}
							className="thumbnail"
							alt={item.snippet.title}
						/>
						<p className="videoTitle">{item.snippet.title}</p>
					</div>
				);
			}
		});
	};
	return <div className="videoList">{renderVideoList()}</div>;
};
