import './County.css';
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'
import Heatmap from './Heatmap.js'
import BiggestCountyRisk from './BiggestCountyRisk.js'
import Circle from './Circle.js'


function County() {
    // add the state here so that it updates :)
    const [globalState, updateGlobalState] = useGlobalState()
      const [goodHealthPercentage, setgoodHealthPercentage] = useState(0);
    
    useEffect(()=>{
        setgoodHealthPercentage((100 - globalState.countyData["% Fair or Poor Health"]).toPrecision(4))
    })
    const graphs = [{ "headline": "Percent County in Good Health", "graphObject": goodHealthPercentage + "%"}, { "headline": "Percent County in Good Health", "graphObject": goodHealthPercentage + "%"}]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [showMap, setshowMap] = useState(false);
    const [showCountyRisk, setshowCountyRisk] = useState(false);
    const onClick = (event) => {
        setshowLearnMore(true)
    }
    const onMapClick = (event) => {
        setshowMap(true)
    }

    const onCountyRiskClick = (event) => {
        setshowCountyRisk(true)
    }

    const onClose = () => {
        setshowLearnMore(false)
        setshowMap(false)
    }

    const onCountyClose = () => {
        setshowCountyRisk(false)
    }


    return (
    <div class = "county"> 
        <h1 class="heading">County Information</h1>
            <div class="scrollableContainerCounty">
                {graphs.map((item, index) => (
                    <div className="cardCounty">
                        <p>{item.headline}</p>
                        <Circle value={80}/>
                        <h1>{item.graphObject}</h1>
                    </div>
                ))}
            </div>
            <div class = "toggle">
                <button class = "buttonsCounty">County</button>
                <button class = "buttonsCounty">State</button>
                <button class = "buttonsCounty">Nation</button>
            </div>
            <div class = "block">
            <div class = "column1"> 
            <p>Biggest County Risk</p>
            <p>{globalState.countyData["Biggest Risk"]}</p>
            <p>This is {globalState.countyData["Biggest Risk Difference"]}% worse than national average</p>
            </div> 
            <div class = "column2">
                <button onClick = {onCountyRiskClick} class = "risk">See Recent News for Biggest County Risk</button>
                <button class = "map" onClick = {onMapClick}>Heatmap Correlation Visualization</button>
                
            </div>    

            </div>
            <button class = "fullStats" onClick = {onClick}>Full County Stats</button>
            {showLearnMore &&
             <FullCounty data = {globalState.countyData} onClose = {onClose}>
             </FullCounty>
            }
            {showMap &&
             <Heatmap data = {globalState.countyData} onClose = {onClose}>
             </Heatmap>
            }
             {showCountyRisk &&
             <BiggestCountyRisk onClose = {onCountyClose}>
             </BiggestCountyRisk>
            }
         <Footer>

        </Footer>
    </div>
    )
}

export default County;