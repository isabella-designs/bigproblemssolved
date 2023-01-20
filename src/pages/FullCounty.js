import './FullCounty.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"


function FullCounty({data, onClose}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const closeWindow = (event) => {
        onClose() 
        // closeWindow(true) 
    }
    
    return (
        <div class = "FullCounty">
        <button onClick = {closeWindow}>close</button>
        <h1>{data["County"]} County Full Statistics</h1>
        <table>
            <tr>
                <th>
                    Field name
                </th>
                <th>
                    Value
                </th>
            </tr>
            <tr>
                <td>
                Field 1
                </td>
                <td>
                value 2
                </td>
            </tr>
        </table>
        <p>content goes here</p>
        </div>
    )
}

export default FullCounty;