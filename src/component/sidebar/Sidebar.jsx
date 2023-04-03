import React from 'react'
import './sidebar.css'
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Menulink from '../menuLink/Menulink';
import Friends from '../Friends/Friends';
import { Users } from '../../data';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <Menulink Icon={<RssFeedIcon />} text="Feed" />
        <Menulink Icon={<ChatIcon />} text="Chat" />
        <Menulink Icon={<VideocamIcon />} text="Video" />
        <Menulink Icon={<GroupsIcon />} text="Group" />
        <Menulink Icon={<BookmarkIcon />} text="Bookmark" />
        <Menulink Icon={<ShoppingCartIcon />} text="Shooping" />
        <Menulink Icon={<EventIcon />} text="Event" />
        <Menulink Icon={<Brightness4Icon />} text="Brightness" />
        <Menulink Icon={<ExitToAppOutlinedIcon />} text="Logout" />

        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidwbarFriend">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Sidebar