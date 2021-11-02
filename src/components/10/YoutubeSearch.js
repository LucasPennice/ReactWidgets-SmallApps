import React, { useState, useEffect } from 'react';
import style10 from './style10.css';
import SearchWidget from '../7/SearchWidget';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState('');

	useEffect(() => {
		const requestVideo = async () => {
			setVideos([]);
			const { data } = await axios.get(
				'https://youtube.googleapis.com/youtube/v3/search?part=snippet',
				{
					params: {
						q: searchTerm,
						maxResults: 6,
						key: 'AIzaSyClS1p8goNzX4pRy7T2m6n-Hz849EBA2ac',
					},
				}
			);

			setVideos(data.items);
			setSelectedVideo(data.items[0].etag);
		};

		const timeoutID = setTimeout(requestVideo, 500);

		return () => {
			clearTimeout(timeoutID);
		};
	}, [searchTerm]);

	const renderVideoList = () => {
		if (videos.length !== 0) {
			return (
				<VideoList
					videos={videos}
					selectedVideo={selectedVideo}
					setSelectedVideo={setSelectedVideo}
				/>
			);
		}
	};

	return (
		<div className="container">
			<SearchWidget searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className="bodyContainer">
				<VideoDetail videos={videos} selectedVideo={selectedVideo} />
				{renderVideoList()}
			</div>
		</div>
	);
};
