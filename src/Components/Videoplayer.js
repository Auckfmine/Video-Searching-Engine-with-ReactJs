import React from "react";

const VideoPLayer = (props) => {
  return (
    <iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/raHtsFBgMnE"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default VideoPLayer;
