import './Footer.css';
import React from "react";
import { Link } from "react-router-dom";
import graph from '../assets/graph.svg'
import pin from '../assets/pin.svg'
import newspaper from '../assets/newspaper.svg'

function Footer() {

        return (
                <div class="footer">
                        <Link className="Home" type="submit" to={'/Home'}>
                                <img src={newspaper} />
                        </Link>
                        <Link className="Overview" type="submit" to={'/Overview'}>
                                <img src={graph} />
                        </Link>
                        <Link className="County" type="submit" to={'/County'}>
                                <img src={pin} />

                        </Link>
                </div>
        )
}

export default Footer;