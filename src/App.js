import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import React from 'react';
// import ReactDOM from 'react-dom';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import EditProfile from "./component/EditProfile/EditProfile";
import Profile from "./pages/Profile/Profile";
import "./style/Style.scss"
// import React from "react";


function App() {
  return (
    <>

  
        <Router>
          <div >
            <Routes>
              <Route path="/" element={<App />}/>
              
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route index element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/Profile:username" element={<Profile />} />
                <Route path="/Profile:username/edit" element={<EditProfile />} />
            </Routes>
          </div>
        </Router>
     

    </>
  );
}

export default App;
