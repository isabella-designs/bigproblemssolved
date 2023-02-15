import './County.css';
import React, { useState, useEffect } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'
import Heatmap from './Heatmap.js'
import BiggestCountyRisk from './BiggestCountyRisk.js'
import Circle from './Circle.js'
import countyVisualizations from '../assets/CountyVisualizations.js'


function County() {
    // add the state here so that it updates :)
    const [globalState, updateGlobalState] = useGlobalState()
    const [goodHealthPercentage, setgoodHealthPercentage] = useState(0);
    
    useEffect(()=>{
        setgoodHealthPercentage((100 - globalState.countyData["% Fair or Poor Health"]).toPrecision(4))
    })
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

    const calculateValue = (item) => {
        var value = Number(globalState.countyData[item.columnName])
        if (item.invert) {
            value = 100 - value
        }
        return value.toPrecision(4)
    }


    return (
    <div class = "county"> 
        <h1 class="heading">County Information</h1>
            <div class="scrollableContainerCounty">
                {countyVisualizations.map((item, index) => (
                    <div className="cardCounty">
                        <p>{item.headline}</p>
                        <Circle value={calculateValue(item)}/>
                        <h1>{calculateValue(item)}%</h1>
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
            <p>Biggest Risk for Your County:</p>
            <p class = "biggestRiskSubtext">Insufficent Sleep ({globalState.countyData["% Insufficient Sleep"]}% of county suffering from insufficient sleep)</p>
            <p class = "biggestRiskSubtext">Insufficent Sleep affects both physical and mental health, as well as increases risk for early mortality</p>
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