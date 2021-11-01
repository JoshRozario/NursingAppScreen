import React from 'react'
import logo from '../Images/logo.png'
import avatar from '../Images/img_avatar.png'
import '../Styles/Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="upaged logo"/>
            <div className="navLinks">
                <a href="/placeholder"> Find Work</a>
                <a href="/placeholder"> Timesheets</a>
                <a href="/placeholder"> Messaging</a>
            </div>
            <div className="avatar">
                <img src={avatar} alt="Avatar"></img>
            </div>
            <div className="profile">
                <a href="/placeholder">Log out</a>
            </div>
        </div>
    )
}

export default Navbar
