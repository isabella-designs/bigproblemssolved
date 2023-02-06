import './ReadMore.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ReadMore = ({onClose}) => {
    const closeWindow = (event) => {
        onClose() 
    }
    const bullets = ["accuracy: 50%", "topic: health"]
    
    return (
        <div class = "readMore">
       <button class = "closeButton" onClick = {closeWindow}>
        <FontAwesomeIcon className = "fa-3x" icon= {faXmark} />
        </button>
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