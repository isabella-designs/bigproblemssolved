import './ReadMore.css';
import React from "react";

const ReadMore = ({onClose}) => {
    const closeWindow = (event) => {
        onClose() 
    }
    
    return (
        <div class = "readMore">
        <button onClick = {closeWindow}>close</button>
        <h1>Title of Article</h1>
        <p>content goes here</p>
        </div>
    )
}

export default ReadMore;