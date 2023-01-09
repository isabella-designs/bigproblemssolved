import './Welcome.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../GlobalState.js"

function Welcome() {

    // initializing constants for form options
    const newsTypes = ["Fox News", "New York Times", "Wall Street Journal", "CNN", "ABC News"]
    const newsTopics = ["Covid", "Health", "Politics"]
    const undercoverNewsTopics = ["Sleep", "Botox", "Shoes"]
    const genderOptions = ["Female", "Male", "Other/Prefer Not to Say"]
    const raceOptions = ["Caucasian", "Asian"]
    const ageOptions = ["Under 18", "18-24"]

    //import global state
    const [globalState, updateGlobalState] = useGlobalState()

    // create local state values using useState hook
    const [formValid, setFormValid] = useState(false);
    const [zipCodeValid, setZipCodeValid] = useState(false);
    const [zipcode, setZipcode] = useState(globalState.zipcode);
    const [gender, setGender] = useState(globalState.gender);
    const [race, setRace] = useState(globalState.race);
    const [age, setAge] = useState(globalState.age);
    const [newsTypeSelected, setNewsTypeSelected] = useState(globalState.newsTypeSelected);
    const [newsTopicsSelected, setNewsTopicsSelected] = useState(globalState.newsTopicsSelected);
    const [undercoverNewsTopicsSelected, setunderCoverNewsTopicsSelected] = useState(globalState.underCoverTopicsSelected);
    
    //handles change to zip code and checks validity
    const handleChange = (event) => {
        const value = event.target.value;
        setZipcode(value)
        setZipCodeValid(isUSAZipCode(value))
        setFormValid(true)
    }

    //handles check box changes to news types consumed
    const handleCheck = (event) => {
        var updatedNewsType = [...newsTypeSelected]
        if (event.target.checked) {
            updatedNewsType = [...newsTypeSelected, event.target.value]
            console.log(updatedNewsType)
        }
        else {
            updatedNewsType.splice(newsTypeSelected.indexOf(event.target.value), 1)
            console.log(updatedNewsType)
        }
        setNewsTypeSelected(updatedNewsType)
    }

    //handles check box changes to news topics
    const handleCheckTopic = (event) => {
        var updatedNewsTopic = [...newsTopicsSelected]
        if (event.target.checked) {
            updatedNewsTopic = [...newsTopicsSelected, event.target.value]
            console.log(updatedNewsTopic)
        }
        else {
            updatedNewsTopic.splice(newsTopicsSelected.indexOf(event.target.value), 1)
            console.log(updatedNewsTopic)
        }
        setNewsTopicsSelected(updatedNewsTopic)
    }

    //handles gender select box changes
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    //handles age changes
    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    //handles race changes
    const handleRaceChange = (event) => {
        setRace(event.target.value)
    }

    //checks entered zip code against accepted regex
    const isUSAZipCode = (str) => {
        return /^\d{5}(-\d{4})?$/.test(str);
    }

    const onSubmit = () => {
        {console.log(formValid)}
        if (formValid) {
            {console.log("hi")}
            updateGlobalState("zipcode", zipcode)
            updateGlobalState("gender", gender)
            updateGlobalState("race", race)
            updateGlobalState("age", age)
            updateGlobalState("newsTypeSelected", newsTypeSelected)
            updateGlobalState("newsTopicsSelected", newsTopicsSelected)
        }
    }

    return (
        <div className="AppMobile">
            <p> Welcome to Big Problems Solved! Fill out the form below to extract the facts from the fears and fads in the media </p>
            <div className="CheckBox">
                <p> Select Your Preferences/Demographics Below</p>
                <p> What Sources of News Do You Consume?</p>
                {newsTypes.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={handleCheck} />
                        <span >{item}</span>
                    </div>
                ))}
                <p> What Topics in the News Are Most Important to You?</p>
                {newsTopics.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" onChange={handleCheckTopic} />
                        <span >{item}</span>
                    </div>
                ))}
            </div>
            <div className="select-container">
                <p> Select Your Gender </p>
                <select onChange={handleGenderChange}>
                    {genderOptions.map((option, index) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="select-container">
                <p> Select Your Age </p>
                <select onChange={handleAgeChange}>
                    {ageOptions.map((option, index) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="select-container">
                <p> Select Your Race </p>
                <select onChange={handleRaceChange}>
                    {raceOptions.map((option, index) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className="Zipcode">
                <p> Input Your Zipcode </p>
                <input type="text" id="zipcode" name="zipcode" onChange={handleChange} />
                <label >Zipcode</label>
            </div>
            <Link className="SubmitButton" type="submit" onClick = {onSubmit} to={formValid ? '/Home' : '#'}>
                Submit
            </Link>
            <p>
                {zipcode}
            </p>
            <p>
                {zipCodeValid.toString()}
            </p>
        </div>
    );
}

export default Welcome;