import './Footer.css';
import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  
    return (
    <div> 
        <Link className="Home" type="submit" to={'/Home'}>
                Home
        </Link>
        <Link className="Overview" type="submit" to={'/Overview'}>
                Overview
        </Link>
        <Link className="County" type="submit" to={'/County'}>
                County
        </Link>
    </div>
    )
}

export default Footer;