import './County.css';
import React from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from "./Footer.js";


function County() {
    const [globalState, updateGlobalState] = useGlobalState()
    const graphs = [{ "headline": "Percent County in Good Health", "graphObject": "Temporary Place Holder"}]
    return (
    <div> 
        <h1>County Information</h1>
            <div class="scrollableContainer">
                {graphs.map((item, index) => (
                    <div className="card">
                        <p>{item.headline}</p>
                        <h1>{item.graphObject}</h1>
                    </div>
                ))}
            </div>
            <div>
                <button>County</button>
                <button>State</button>
                <button>Nation</button>
            </div>
            <div>
                <button>Questions</button>
                <button>Recent News</button>
                <button>Stats</button>
            </div>
            <button>Full Stats</button>
         <Footer>
        
        </Footer>
    </div>
    
    )
}

export default County;