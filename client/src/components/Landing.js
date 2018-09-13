import React, { Component } from "react";
import { Link } from "react-router-dom";
import VideoList from "./VideoList";
import Video from "./Video";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">LearnTube</h1>
                <p className="lead">
                  Curate learning tracks with videos and action steps, share
                  tracks and learn from other curators
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <Link to="/video">
                  <VideoList />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
