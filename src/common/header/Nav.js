import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="primary-menu">
        <li className="current">
            <Link to="#">Home</Link>
            <ul className="submenu">
              
                <li><Link to="/home-2">Home</Link></li>
            </ul>
        </li>
        <li><Link to="/about">About</Link></li>

      
        <li>
            <Link to="#">Pages</Link>
            <ul className="submenu">
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </li>

        <li><Link to="/blog">Blog</Link> </li>
           
        <li> <Link to="/contact">Contact</Link></li>
    </ul>

    )
}
export default Nav;
