import React from "react";
import VideoItem from "./videoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });
  return <div class="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
