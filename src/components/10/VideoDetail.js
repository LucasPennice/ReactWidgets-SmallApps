export default ({ videos, selectedVideo }) => {
	return videos.map((item) => {
		if (item.etag === selectedVideo) {
			return (
				<div className="videoDetailContainer" key={item.etag}>
					<iframe
						title="videoPlayer"
						className="videoPlayer"
						src={`https://www.youtube.com/embed/${item.id.videoId}`}
					/>
					<div className="videoDetailTitle">{item.snippet.title}</div>
					<div className="videoDetailDescription">
						{item.snippet.description}
					</div>
				</div>
			);
		}
	});
};
