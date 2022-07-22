import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user=useSelector(selectUser);

    const  recentItem =(topic) =>

    (
      <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        
      </div>  
    )
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://wallpaperaccess.com/full/3430.jpg" alt=""/>
            <Avatar src={user.photoUrl} className="sidebar__avatar">
              {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>

        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
            <p>Who's viewed you</p>
            <p className='sidebar__statNumber'>3</p>

            </div>
            <div className='sidebar__stat'>
            <p>Connections</p>
            <p className='sidebar__statNumber'>44</p>
                
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('designing')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar