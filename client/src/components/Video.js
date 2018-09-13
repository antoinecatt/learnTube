import React, { Component } from "react";
import YouTube from "react-youtube";

class Video extends Component {
  state = {
    videos: [
      {
        videoId: "Ke90Tje7VS0",
        opts: {
          width: "560",
          height: "315",
          playerVars: {
            autoplay: 0
          }
        }
      },
      {
        videoId: "93p3LxR9xfM",
        opts: {
          width: "560",
          height: "315",
          playerVars: {
            autoplay: 0
          }
        }
      }
    ]
  };

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
