import './Home.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import ReadMore from './ReadMore.js'
import sunscreen from '../assets/sunscreen.jpg'

function Home() {
    const [globalState, updateGlobalState] = useGlobalState()
    const topics = [{ "img": sunscreen, "headline": "Skin cancer", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const onClick = (event) => {
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
    }
    


    return (
        <div class="home">
            {console.log(globalState)}
            <h1 class="heading"> Topics in the News</h1>
            <div class="scrollableContainer">
                {topics.map((item, index) => (
                    <div className="card">
                        <img class ="image" src= {item.img}></img>
                        <h1 class='topicHeader'>{item.headline}</h1>
                        <div class="bulletStyle">
                        {item.bullets.map((item, index) => (
                            <li>{item}</li>
                        ))}
                         </div>
                        <button  onClick = {onClick} class="buttonStyle"> Learn More </button>

                    </div>
                ))}

            </div>
            {showLearnMore &&
             <ReadMore onClose = {onClose}>
             </ReadMore>
            }
            <Footer>

            </Footer>
        </div>
    )
}

export default Home;