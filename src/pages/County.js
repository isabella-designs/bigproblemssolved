import './County.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";
import FullCounty from './FullCounty.js'



function County() {
    // add the state here so that it updates :)
    const GSheetReader = require('g-sheets-api');
    const options = {
        apiKey: 'AIzaSyB7A4hg_vsCWGYAcRUZhqbC1rOZeIsap8M',
        sheetId: '1i2OFosT-XimNUZGLWItjvzAA07LsxtNK0umjd0ZQA1s',
        sheetNumber: 1,
        sheetName: 'state_df_full', // if sheetName is supplied, this will take precedence over sheetNumber
        returnAllResults: false,
        filter: {
          'FIPS': '12129',
        },
      }
      var sheetResults = null;
      var goodHealthPercentage = 0;
      GSheetReader(
        options,
        results => {
          console.log(results)
          sheetResults = results
          goodHealthPercentage = sheetResults["% Fair or Poor Health"]
        },
        error => {
            console.log(error)
        }
      );
    const [globalState, updateGlobalState] = useGlobalState()
    const graphs = [{ "headline": "Percent County in Good Health", "graphObject": goodHealthPercentage}]
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