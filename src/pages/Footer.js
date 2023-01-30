import './Footer.css';
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faChartBar, faMap } from '@fortawesome/free-solid-svg-icons';

function Footer() {

        const tabs = [{
                route: "/Home",
                icon: faNewspaper,
                label: "Home"
        }, {
                route: "/Overview",
                icon: faChartBar,
                label: "Overview"
        }, {
                route: "/County",
                icon: faMap,
                label: "County"
        }]

        return (
                <div class="footer">
                        <div class="icon-row">
                                {tabs.map((tab, index) => (
                                                <NavLink activeClassName="active" className="bottom-nav-link" type="submit" to={tab.route}>
                                                                <FontAwesomeIcon className="item fa-3x" icon={tab.icon} />
                                                </NavLink>
                                ))}
                        </div>
                </div>
        )
}

export default Footer;