import './Header.css';
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {

        return (
                <div class="header">
                        <NavLink  className="headerLink" type="submit" to="/">
                                <FontAwesomeIcon className="restart fa-2x" icon={faRotateLeft} />
                        </NavLink>
                </div>
        )
}

export default Header;