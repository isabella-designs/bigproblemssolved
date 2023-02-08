import './BiggestCountyRisk.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function BiggestCountyRisk({onClose, name}) {
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
        <h1>{name}</h1>
        <div class = "bulletSummary"> 
        <p class = "summaryHeader">Useful links on [this] topic</p>
        <p class = "bullets">
            tagged links
        </p>
        </div>
        </div>
    )
}

export default BiggestCountyRisk;