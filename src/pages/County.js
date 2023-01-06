import './County.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'


function County() {
    const [globalState, updateGlobalState] = useGlobalState()
    const graphs = [{ "headline": "Percent County in Good Health", "graphObject": "Temporary Place Holder"}]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const onClick = (event) => {
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
    }
    return (
    <div class = "county"> 
        <h1>County Information</h1>
            <div class="scrollableContainer">
                {graphs.map((item, index) => (
                    <div className="card">
                        <p>{item.headline}</p>
                        <h1>{item.graphObject}</h1>
                    </div>
                ))}
            </div>
            <div class = "toggle">
                <button class = "buttons">County</button>
                <button class = "buttons">State</button>
                <button class = "buttons">Nation</button>
            </div>
            <div>
                <button>Questions</button>
                <button>Recent News</button>
                <button>Stats</button>
            </div>
            <button onClick = {onClick}>Full Stats</button>
            {showLearnMore &&
             <FullCounty onClose = {onClose}>
             </FullCounty>
            }
         <Footer>

        </Footer>
    </div>

    )
}

export default County;