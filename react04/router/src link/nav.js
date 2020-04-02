import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    return <nav>
        <Link to="/">Main Page</Link>
        <span> | </span>
        <Link to="/about">About us</Link>
    </nav>
}

export default Nav;
