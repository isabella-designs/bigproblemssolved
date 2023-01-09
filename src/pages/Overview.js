import './Overview.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import Graphs from './Graphs.js'
import SpecificNewsTopics from './SpecificNewsTopics'

function Overview() {
    const [globalState, updateGlobalState] = useGlobalState()
    const graphs = [{ "headline": "Percent Non-biased News", "graphObject": "Temporary Place Holder"}]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [clickedButton, setclickedButton] = useState("");
    const onClick = (event) => {
        setclickedButton(event.target.name)
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
        setclickedButton("")
    }
    return (
        <div class="overview">
            <h1 class='heading'> Most Factual News</h1>
            <div class="scrollableContainer">
                {graphs.map((item, index) => (
                    <div class="card">
                        <Graphs></Graphs>
                        <p>{item.headline}</p>
                        <h1 class="topicHeader" > {item.graphObject}</h1>
                    
                    </div>
                ))}
            </div>
            <h1> Most Popular and Accurate News This Week</h1>
            <div>
                <button name="disease" onClick = {onClick}>Disease</button>
                <button name="cancer" onClick = {onClick}>Cancer</button>
                <button name="finance" onClick = {onClick}>Finance</button>
                <button name="politics" onClick = {onClick}>Politics</button>
            </div>
            {showLearnMore &&
             <SpecificNewsTopics name = {clickedButton} onClose = {onClose}>
             </SpecificNewsTopics>
            }
            <Footer>

            </Footer>
        </div>
    )
}

export default Overview;