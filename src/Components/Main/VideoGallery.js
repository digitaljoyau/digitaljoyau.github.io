import React from 'react'

const VideoGallery = () => {
  return (
	<div className="VideoGallery">
		<h2 id="videos">Past Event Videos</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FbjHPTwxC0s" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
  );
}

export default VideoGallery
