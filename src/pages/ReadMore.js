import './ReadMore.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ReadMore = ({ onClose, item }) => {
    const closeWindow = (event) => {
        onClose()
    }
    const bullets = ["accuracy: 50%", "topic: health"]

    return (
        <div class="readMore">
            <button class="closeButton" onClick={closeWindow}>
                <FontAwesomeIcon className="fa-3x" icon={faXmark} />
            </button>
            <h1>{item.topic}</h1>
            <p>Summary of Past Month's {item.topic} Content:</p>
            <div class="bulletStyle">
                {item.summary.map((subitem, index) => (
                    <li>{subitem}</li>
                ))}
            </div>
            <p>Links to Full News Articles with Low Bias and High Accuracy</p>
            <div class="bulletStyle">
                {item.links.map((subitem, index) => (
                    <li>
                        <a href={subitem.link}>{subitem.headline}</a>
                    </li>
                ))}
            </div>
        </div>

    )
}

export default ReadMore;