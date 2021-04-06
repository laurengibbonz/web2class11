import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>D3 Project</li>
            </ul>
        </nav>
    )
}

export default Navbar;