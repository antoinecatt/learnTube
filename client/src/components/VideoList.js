import React, { Component } from "react";
import Video from "./Video";
import YouTube from "react-youtube";
import { Link } from "reac";

class VideoList extends Component {
  state = {
    videoId: ["Ke90Tje7VS0", "93p3LxR9xfM"],
    opts: {
      width: "560",
      height: "315",
      playerVars: {
        autoplay: 0
      }
    }
  };
  render() {
    const videoList = this.state.videoId.map(video => (
      <YouTube
        key={video}
        videoId={video}
        opts={this.state.opts}
        onReady={this.onReady}
      />
    ));
    return <div>{videoList}</div>;
  }
  // _onReady(e) {
  //   e.target.pauseVideo();
  // }
}

export default VideoList;
