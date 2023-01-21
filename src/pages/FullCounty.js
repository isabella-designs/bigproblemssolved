import './FullCounty.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"


function FullCounty({data, onClose}) {
    const [globalState, updateGlobalState] = useGlobalState()
    const healthList = ["Years of Potential Life Lost Rate", "% Fair or Poor Health",
    "% Frequent Mental Distress",
    "% Frequent Physical Distress",
    "% Adults with Diabetes",
    "% Insufficient Sleep",
    "% Smokers",
    "% Adults with Obesity",
    "Food Environment Index",
    "% Physically Inactive",
    "% With Access to Exercise Opportunities",
    "Chlamydia Rate",
    "Primary Care Physicians Rate",
    "Mental Health Provider Rate",
    "Preventable Hospitalization Rate",
    "% With Annual Mammogram",
    "% Vaccinated",
    "High School Graduation Rate",
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
        <button onClick = {closeWindow}>close</button>
        <h1>{data["County"]} County Full Statistics</h1>
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
                            placeholder
                        </td>
                    </tr>
                ))}
        </table>
        <p>Add the footer to describe confusing labels and year of data</p>
        </div>
    )
}

export default FullCounty;