import './ReadMore.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"

function ReadMore() {
    const [globalState, updateGlobalState] = useGlobalState()
    return (
        <div>
        <button>close</button>
        <h1>Title of Article</h1>
        <p>content goes here</p>
        </div>
    )
}

export default ReadMore;