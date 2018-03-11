import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-lg-4 md-4 sm-12 xs-12 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;