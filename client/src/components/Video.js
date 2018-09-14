import React, { Component } from "react";
import YouTube from "react-youtube";
import axios from "axios";
class Video extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    fetch("/api/video")
      .then(res => res.json())
      .then(videos =>
        this.setState({ videos }, console.log("Videos fetched...", videos))
      );
  }

  render() {
    const video = this.state.videos.map(video => (
      <YouTube
        videoId={video.videoId}
        opts={video.opts}
        onReady={this.onReady}
        thumbnail={video.thumbnail}
      />
    ));
    return <div>{video}</div>;
  }
  _onReady(e) {
    e.target.pauseVideo();
  }
}

export default Video;
