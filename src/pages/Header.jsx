import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/message'}>Message</Link></li>
            <li><Link to={'/event'}>Event</Link></li>
            <li><Link to={'/hook'}>Hook</Link></li>
        </div>
    )
}

export default Header