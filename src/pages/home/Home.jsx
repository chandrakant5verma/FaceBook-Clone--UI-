import React from "react";
import Feed from "../../component/feed/Feed";
import Navbar from "../../component/Navbar/Navbar";
import Rightbar from "../../component/Rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
      </div>

    </div>
  );
};

export default Home;
