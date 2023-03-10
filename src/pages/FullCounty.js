import './FullCounty.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function FullCounty({data, onClose}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const healthList = ["% Fair or Poor Health",
    "% Frequent Mental Distress",
    "% Frequent Physical Distress",
    "% Adults with Diabetes",
    "% Insufficient Sleep",
    "% Smokers",
    "% Adults with Obesity",
    "Food Environment Index",
    "% Physically Inactive",
    "% With Access to Exercise Opportunities",
    "Primary Care Physicians Rate",
    "Mental Health Provider Rate",
    "Preventable Hospitalization Rate",
    "% With Annual Mammogram",
    "% Vaccinated",
    "% Some College",
    "% Unemployed",
    "% Children in Poverty",
    "Violent Crime Rate",
    "Average Daily Fine Particulate Matter in the Air",
    "% Severe Housing Problems"]
    const closeWindow = (event) => {
        onClose() 
        // closeWindow(true) 
    }
    
    return (
        <div class = "FullCounty">
        <button class = "closeButton" onClick = {closeWindow}>
            <FontAwesomeIcon className = "fa-3x" icon= {faXmark} />
        </button>
        <h1 class = "countyName">{data["County"]} County Full Statistics</h1>
        <table class = "table">
            <tr class = "tableRow">
                <th class = "tableHeader">
                    Field name
                </th>
                <th class = "tableHeader">
                    Value
                </th>
                <th class = "tableHeader">
                    National Average
                </th>
            </tr>
            {healthList.map((item, index) => (
                    <tr key={index} class = "tableRow">
                        <td class = "tableData">
                            {item}
                        </td>
                        <td class = "tableData">
                            {data[item]}
                        </td>
                        <td class = "tableData">
                            {data[item + " National"]}
                        </td>
                    </tr>
                ))}
        </table>
        </div>
    )
}

export default FullCounty;