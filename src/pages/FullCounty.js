import './FullCounty.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"


function FullCounty({onClose}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const closeWindow = (event) => {
        onClose() 
        // closeWindow(true) 
    }
    
    return (
        <div class = "FullCounty">
        <button onClick = {closeWindow}>close</button>
        <h1>Florida County</h1>
        <p>content goes here</p>
        </div>
    )
}

export default FullCounty;