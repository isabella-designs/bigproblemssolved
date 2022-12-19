import './Home.css';
import React, { Component } from "react";
import { useLocation } from "react-router-dom";


class Home extends Component {

    topics = [{ "img": "img source", "headline": "Skin cancer","bullets": ["Covered", "non-bias", "Affecting"]}]
    render () {
    // console.log(location)
    return (
    <div> 
    <h1>Topics in the News</h1> 
    <div class = "scrollableContainer">
    {this.topics.map((item, index) => (
            <div className= "card">
            <p>{item.img}</p>
            <h1>{item.headline}</h1>
            {item.bullets.map((item, index) => (
                <li>{item}</li>
            ))}
            <button> learn more </button>

            </div>
    ))}


    </div>
    </div>
    )
    }
}

export default Home;