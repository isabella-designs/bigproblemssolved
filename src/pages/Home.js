import './Home.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import ReadMore from './ReadMore.js'
import InputArticle from './InputArticle.js'
import sunscreen from '../assets/sunscreen.jpg'

function Home() {
    const [globalState, updateGlobalState] = useGlobalState()
    const topics = [{ "img": sunscreen, "headline": "Skin cancer", "bullets": ["Covered in __% of news", "Non-bias news articles covering the topic: ", "Affecting ____% of your county"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [showInputArticle, setshowInputArticle] = useState(false);
    const onClick = (event) => {
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
    }

    const onArticleClick = (event) => {
        setshowInputArticle(true)
    }
    const onArticleClose = () => {
        setshowInputArticle(false)
    }
    


    return (
        <div class="home">
            {console.log(globalState)}
            <h1 class="heading"> Topics in the News</h1>
            <div class="scrollableContainerHome">
                {topics.map((item, index) => (
                    <div className="cardHome">
                        <img class ="image" src= {item.img}></img>
                        <h1 class='topicHeaderHome'>{item.headline}</h1>
                        <div class="bulletStyle">
                        {item.bullets.map((item, index) => (
                            <li class="listHome">{item}</li>
                        ))}
                         </div>
                        <button  onClick = {onClick} class="buttonStyle"> Learn More </button>
                    </div>
                    
                ))}

            </div>
            <button onClick = {onArticleClick} class="buttonStyle own-article">Input Your Own Article</button>
            {showLearnMore &&
             <ReadMore onClose = {onClose}>
             </ReadMore>
            }
            {showInputArticle &&
             <InputArticle onClose = {onArticleClose}>
             </InputArticle>
            }
            <Footer>

            </Footer>
        </div>
    )
}

export default Home;