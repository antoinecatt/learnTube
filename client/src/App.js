import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import VideoPage from "./components/VideoPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/video" component={VideoPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
