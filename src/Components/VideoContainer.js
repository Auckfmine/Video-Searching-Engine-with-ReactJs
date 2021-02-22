import React from "react";
import "../styles/videoCard.css";
const VideoCard = (props) => {
  //console.log(props.data.snippet.thumbnails.high);
  return (
    <div className="ui segment">
      <div key={props.data.id.videoId} className="ui grid">
        <div className="four wide colum">
          <img
            className="image"
            alt={props.data.snippet.description}
            src={props.data.snippet.thumbnails.high.url}
          />
        </div>
        <div className="nine wide column">
          <h1>{props.data.snippet.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
