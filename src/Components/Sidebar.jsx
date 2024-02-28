import React from 'react'
import dashboard from "../images/dashboard.svg"
import addnews from "../images/addnews.svg"
import admin from "../images/admin.svg"
import candidates from "../images/candidates.svg"
import close from "../images/close.svg"
import help from "../images/help.svg"
import imgprofile from "../images/imgprofile.svg"
import logout from "../images/logout.svg"
import open from "../images/open.svg"
import profile from "../images/profile.svg"
import Requests from "../images/Requests.svg"
import manageevents from "../images/manageevents.svg"

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="topSidebar">
          <img src={imgprofile} alt="" className="profile" />
          <h2 className='nameuser'> mohamed ahmed</h2>
      </div>

      <div className="close_and_open">
        <div className="closeicon"></div>
        <div className="openicon"></div>
      </div>

      <div className="sidebarcontainer">
        <ul>

          <li>
            <img src={dashboard} alt="" className='iconOfSide' /> 
            <a href="/">dashboard</a>
          </li>

          <li>
            <img src={admin} alt="" className='iconOfSide' /> 
            <a href="/Admin">admin</a>
          </li>

          <li>
            <img src={manageevents} alt="" className='iconOfSide' /> 
            <a href="/Manageevents">manageevents</a>
          </li>

          <li>
            <img src={Requests} alt="" className='iconOfSide' /> 
            <a href="/Requests">Requests</a>
          </li>

          <li>
            <img src={candidates} alt="" className='iconOfSide' /> 
            <a href="/Candidates">candidates</a>
          </li>

          <li>
            <img src={addnews} alt="" className='iconOfSide' /> 
            <a href="/Addnews">addnews</a>
          </li>

          <li>
            <img src={profile} alt="" className='iconOfSide' /> 
            <a href="/Profile">profile</a>
          </li>

          <li>
            <img src={help} alt="" className='iconOfSide' /> 
            <a href="/Help">help</a>
          </li>

          <li>
            <img src={logout} alt="" className='iconOfSide' /> 
            <a href="/">logout</a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar
