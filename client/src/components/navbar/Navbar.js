import {Link} from "react-router-dom";

import "./navbar.css";
//
import React from "react";

// import "./Header.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Edit">Edit</Link>
        </nav>
    )
}
