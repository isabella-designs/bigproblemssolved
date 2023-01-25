import './County.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'
import Maps from './Maps.js'



function County() {
    // add the state here so that it updates :)
    const [globalState, updateGlobalState] = useGlobalState()
    const GSheetReader = require('g-sheets-api');
    console.log(globalState.fipsCode)
    const options = {
        apiKey: 'AIzaSyB7A4hg_vsCWGYAcRUZhqbC1rOZeIsap8M',
        sheetId: '1i2OFosT-XimNUZGLWItjvzAA07LsxtNK0umjd0ZQA1s',
        sheetNumber: 1,
        sheetName: 'state_df_full', // if sheetName is supplied, this will take precedence over sheetNumber
        returnAllResults: false,
        filter: {
          'FIPS': globalState.fipsCode,
        },
      }
      const [goodHealthPercentage, setgoodHealthPercentage] = useState(0);
      const [sheetResults, setsheetResults] = useState([]);
      GSheetReader(
        options,
        results => {
          console.log(results)
          setsheetResults(results[0])
          setgoodHealthPercentage(100 - results[0]["% Fair or Poor Health"])
        },
        error => {
            console.log(error)
        }
      );
    
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
        <h1>County Information</h1>
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
            <p>What Biggest Risk Is</p>
            <p>This is 10% better than national average</p>
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