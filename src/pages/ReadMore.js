import './ReadMore.css';
import React from "react";

const ReadMore = ({onClose}) => {
    const closeWindow = (event) => {
        onClose() 
    }
    const bullets = ["accuracy: 50%", "topic: health"]
    
    return (
        <div class = "readMore">
        <button onClick = {closeWindow}>close</button>
        <h1>Sunscreen Causes Cancer</h1>
        <div class="bulletStyle">
                        {bullets.map((item, index) => (
                            <li>{item}</li>
                        ))}
                         </div>
        <p>content goes here</p>
        </div>
        
    )
}

export default ReadMore;