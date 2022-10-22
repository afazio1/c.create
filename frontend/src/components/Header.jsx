import React from 'react'
import { LogIn, LogOut, User } from "lucide-react"
import logoIcon from "../assets/logoIcon1.png";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className='header'>
        <div className="logo">
            {/* <Link to="/"><img className="logo" src={logoIcon} /></Link> */}
            <Link to="/">C.Create</Link>
        </div>
        <ul>
            <li>
                <Link to="/login"><LogIn />Sign in</Link>
            </li>
            <li>
                <Link to="/register"><User />Register</Link>
            </li>
        </ul>
        
    </header>
  )
}

export default Header