import './Overview.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'

function Overview() {
    const [globalState, updateGlobalState] = useGlobalState()
    const graphs = [{ "headline": "Percent Non-biased News", "graphObject": "Temporary Place Holder"}]
    return (
        <div class="overview">
            <h1 class='heading'> Most Factual News</h1>
            <div class="scrollableContainer">
                {graphs.map((item, index) => (
                    <div class="card">
                        <p>{item.headline}</p>
                        <h1 class="topicHeader" > {item.graphObject}</h1>
                    
                    </div>
                ))}
            </div>
            <h1> Most Popular and Accurate News This Week</h1>
            <div>
                <p>Disease</p>
                <p>Cancer</p>
                <p>Finance</p>
                <p>Politics</p>
            </div>
            <Footer>

            </Footer>
        </div>
    )
}

export default Overview;