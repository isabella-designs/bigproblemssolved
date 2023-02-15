import './InputArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

const InputArticle = ({onClose}) => {
    const closeWindow = (event) => {
        onClose() 
    }
    const [AnalyzeArticle, setAnalyzeArticle] = useState(false);
    const analyzeArticleClicked = (event) => {
        setAnalyzeArticle(true) 
        // placeholder for api call to analyze article 
    }
    const analyzeAnother = (event) => {
        setAnalyzeArticle(false) 
        // placeholder for api call to analyze article 
    }
    return (
        <div class = "inputArticle">
        <button class = "closeButton" onClick = {closeWindow}>
        <FontAwesomeIcon className = "fa-3x" icon= {faXmark} />
        </button>
        <div class = "inputContent">

        <h1 class="inputHeader">Input an Article for Accurate Analysis</h1>
        {!AnalyzeArticle && <div>
            <p>Copy and paste the full article text from any news source for a full analysis on the accuracy and potential biases of the text and source</p>
            <p>** feature coming soon! **</p>
        {/* <textarea rows="4" cols = "40" ></textarea>
        <button  onClick = {analyzeArticleClicked} class="buttonInputStyle own-article">Analyze</button> */}
        </div>
        }
        </div>
          {AnalyzeArticle && <div>
            <p>placeholder</p>
        <button  onClick = {analyzeAnother} class="buttonInputStyle own-article">Analyze Another Article</button>
            </div>

        }
        
        </div>
        
    )
}

export default InputArticle;