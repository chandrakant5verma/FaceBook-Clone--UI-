import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbarcontainer">
      <div className="navbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Facebook</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="seachBox">
          <input
            type="text"
            placeholder="Search For 
    friends  Post Or Video"
            className="searchInput"
          />
          <SearchIcon className="searchicon" />
        </div>
      </div>
      <div className="navbarRight">
        <span className="navbarLink">Homepage</span>
        <span className="navbarLink">TimeLine</span>

        <div className="navbarIcon">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <CircleNotificationsIcon />
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <Link to="/Profile:username" style={{textDecoration:"none"}}>
        <img src={require("../Navbar/user.jpg")} alt="" className="navbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
