import './SpecificNewsTopics.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"


function SpecificNewsTopics({onClose, name}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const closeWindow = (event) => {
        onClose() 
        // closeWindow(true) 
    }
    
    return (
        <div class = "FullCounty">
        <button onClick = {closeWindow}>close</button>
        <h1>{name}</h1>
        <p>content goes here</p>
        </div>
    )
}

export default SpecificNewsTopics;