import React, { Component } from "react";
import VideoPage from "./VideoPage";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

class VideoList extends Component {
  render() {
    const imgs = [
      "https://img.youtube.com/vi/93p3LxR9xfM/hqdefault.jpg",
      "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg"
    ];

    return (
      <div className="display-3">
        <Link to="/video">
          {imgs.map(img => (
            <img src={img} alt="thumbnail" />
          ))}
        </Link>
      </div>
    );
  }
  _onReady(e) {
    e.target.pauseVideo();
  }
}

export default VideoList;
