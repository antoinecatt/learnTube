import React, { Component } from "react";
import YouTube from "react-youtube";

class Video extends Component {
  state = {
    videoId: "Ke90Tje7VS0",
    opts: {
      width: "560",
      height: "315",
      playerVars: {
        autoplay: 0
      }
    }
  };
  render() {
    return (
      <YouTube
        videoId={this.state.videoId}
        opts={this.state.opts}
        onReady={this.onReady}
      />
    );
  }
  _onReady(e) {
    e.target.pauseVideo();
  }
}

export default Video;
