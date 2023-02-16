import './Home.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import Header from './Header.js'
import ReadMore from './ReadMore.js'
import InputArticle from './InputArticle.js'
import newsTopicMap from '../assets/NewsTopics.js'

function Home() {
    const [globalState, updateGlobalState] = useGlobalState()
    //const topics = [{ "img": sunscreen, "headline": "Skin cancer", "bullets": ["Covered in __% of news", "Non-bias news articles covering the topic: ", "Affecting ____% of your county"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }, { "img": sunscreen, "headline": "Skin cancer2", "bullets": ["Covered", "non-bias", "Affecting"] }]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [showInputArticle, setshowInputArticle] = useState(false);
    const [clickedItem, setclickedItem] = useState({});
    const onClick = (item) => () => {
        setshowLearnMore(true)
        setclickedItem(item)
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
            <Header> </Header>
            <h1 class="heading"> Topics in the News</h1>
            <div class="scrollableContainerHome">
                {newsTopicMap.map((item, index) => (
                    <div className="cardHome">
                        <img class ="image" src= {item.img}></img>
                        <h1 class='topicHeaderHome'>{item.topic}</h1>
                        <div class="bulletStyle">
                            <li class="listHome">{item.topic} is a {item.status} news topic</li>
                            <li class="listHome">{item.coverage}% of news coverage from the past month was on {item.topic.toLowerCase()}</li>
                            <li class="listHome">The common causes of bias present in {item.topic.toLowerCase()} articles include {item.bias} </li>
                            <li class="listHome">{item.topic} has a correlation of {item.countyImpact} with overall county health, which is a {item.countyImpactBucket} correlation</li>
                         </div>
                        <button  onClick = {onClick(item)} class="homeButtonStyle"> Learn More </button>
                    </div>
                    
                ))}

            </div>
            <button onClick = {onArticleClick} class="homeButtonStyle own-article">Input Your Own Article</button>
            {showLearnMore &&
             <ReadMore onClose = {onClose} item={clickedItem}>
             </ReadMore>
            }
            {showInputArticle &&
             <InputArticle onClose = {onArticleClose}>
             </InputArticle>
            }

            <div class="spacer"> </div>
            <Footer>

            </Footer>
        </div>
    )
}

export default Home;