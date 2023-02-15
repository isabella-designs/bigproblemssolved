import './SpecificNewsTopics.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SpecificNewsTopics({onClose, item}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const closeWindow = (event) => {
        onClose() 
        // closeWindow(true) 
    }
    
    return (
        <div class = "FullCounty">
         <button class = "closeButton" onClick = {closeWindow}>
            <FontAwesomeIcon className = "fa-3x" icon= {faXmark} />
        </button>
        <h1>{item.topic}</h1>
        <p class = "summaryHeader">Content Summary</p>
        <div class = "bulletSummary"> 
        {item.summary.map((subitem, index) => (
                    <li>{subitem}</li>
                ))}
        </div>
        <p class = "summaryHeader">Full Article Links</p>
        <div class = "bulletSummary"> 
        {item.links.map((subitem, index) => (
                    <li>
                        <a href={subitem.link}>{subitem.headline}</a>
                    </li>
                ))}
        </div>
        </div>
    )
}

export default SpecificNewsTopics;