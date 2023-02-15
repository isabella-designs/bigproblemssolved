import './BiggestCountyRisk.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import riskLinkMap from '../assets/BiggestCountyRiskLinks.js'

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
        <p class = "summaryHeader">Summary of Recent News on Insufficient Sleep</p>
        <div class="bulletGroup">
                {riskLinkMap[5].summary.map((item, index) => (
                    <li>{item}</li>
                ))}
            </div>
            <p class = "summaryHeader">Links to Full News Articles with Low Bias and High Accuracy</p>
        <div class="bulletGroup">
                {riskLinkMap[5].links.map((item, index) => (
                    <li>{item}</li>
                ))}
            </div>
        </div>
    )
}

export default BiggestCountyRisk;