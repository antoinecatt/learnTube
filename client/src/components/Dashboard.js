import React, { Component } from "react";
import VideoList from "./VideoList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* Insert dashboard features here */}
        <VideoList />
      </div>
    );
  }
}

export default Dashboard;
