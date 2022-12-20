import './Home.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"


function Home() {
    const [globalState, updateGlobalState] = useGlobalState()
    const topics = [{ "img": "img source", "headline": "Skin cancer","bullets": ["Covered", "non-bias", "Affecting"]}]
    return (
    <div> 
        {console.log(globalState)}
    <h1>Topics in the News</h1> 
    <div class = "scrollableContainer">
    {topics.map((item, index) => (
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

export default Home;