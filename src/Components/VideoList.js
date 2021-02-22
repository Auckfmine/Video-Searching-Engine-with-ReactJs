import React from "react";
import VideoCard from "./VideoContainer";
import "../styles/videoList.css";
const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    if (video.id.videoId) {
      return (
        <div className="video-list">
          <VideoCard data={video} />
        </div>
      );
    }
    //console.log(video);
  });
  return videos;
};

export default VideoList;
