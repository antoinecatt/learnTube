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
        <Navbar />
        <VideoList />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
