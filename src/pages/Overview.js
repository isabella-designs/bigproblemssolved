import './Overview.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import Graphs from './Graphs.js'
import SpecificNewsTopics from './SpecificNewsTopics'
import overviewGraphObjects from '../assets/OverviewGraphObjects.js'
import newsTopicMap from '../assets/NewsTopics.js'


function Overview() {
    const [globalState, updateGlobalState] = useGlobalState()
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [clickedButton, setclickedButton] = useState({});
    const onClick = (item) => () => {
        setclickedButton(item)
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
        setclickedButton("")
    }
    return (
        <div class="overview" >
            <h1 class='heading'> Most Factual News</h1>
            <div class="scrollableContainerOverview">
                {overviewGraphObjects.map((item, index) => (
                    <div class="cardOverview">
                        <Graphs options={item.options}></Graphs>
                        <p>{item.Description}</p>

                    </div>
                ))}
            </div>
            <div class="topics">
                <h1> Summary of Monthly News on Overreported Topics</h1>
                <div>
                    <button class="newsButton" onClick={onClick(newsTopicMap[0])}>Inflation</button>
                    <button class="newsButton" onClick={onClick(newsTopicMap[3])}>Healthcare</button>
                    <button class="newsButton" onClick={onClick(newsTopicMap[4])}>Unemployment</button>
                    <button class="newsButton" onClick={onClick(newsTopicMap[2])}>Crime</button>
                </div>
                {showLearnMore &&
                    <SpecificNewsTopics item={clickedButton} onClose={onClose}>
                    </SpecificNewsTopics>
                }
            </div>
            <Footer>

            </Footer>
        </div >
    )
}

export default Overview;