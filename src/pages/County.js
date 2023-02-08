import './County.css';
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'
import Maps from './Maps.js'



function County() {
    // add the state here so that it updates :)
    const [globalState, updateGlobalState] = useGlobalState()
    
      const [goodHealthPercentage, setgoodHealthPercentage] = useState(0);
      const [sheetResults, setsheetResults] = useState([]);
    useEffect(()=>{
        setgoodHealthPercentage((100 - globalState.countyData["% Fair or Poor Health"]).toPrecision(4))
    })
    const graphs = [{ "headline": "Percent County in Good Health", "graphObject": goodHealthPercentage + "%"}, { "headline": "Percent County in Good Health", "graphObject": goodHealthPercentage + "%"}]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [showMap, setshowMap] = useState(false);
    const onClick = (event) => {
        setshowLearnMore(true)
    }
    const onMapClick = (event) => {
        setshowMap(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
        setshowMap(false)
    }
    return (
    <div class = "county"> 
        <h1 class="heading">County Information</h1>
            <div class="scrollableContainer">
                {graphs.map((item, index) => (
                    <div className="card">
                        <div className = "circle">  
                        </div>
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
            <div class = "block">
            <div class = "column1"> 
            <p>Biggest County Risk</p>
            <p>{sheetResults["Biggest Risk"]}</p>
            <p>This is {sheetResults["Biggest Risk Difference"]}% worse than national average</p>
            </div> 
            <div class = "column2">
                <button class = "risk">See Recent News for Biggest County Risk</button>
                <button class = "map" onClick = {onMapClick}>Map Visualization</button>
            </div>    

            </div>
            <button class = "fullStats" onClick = {onClick}>Full County Stats</button>
            {showLearnMore &&
             <FullCounty data = {sheetResults} onClose = {onClose}>
             </FullCounty>
            }
            {showMap &&
             <Maps data = {sheetResults} onClose = {onClose}>
             </Maps>
            }
         <Footer>

        </Footer>
    </div>
    )
}

export default County;