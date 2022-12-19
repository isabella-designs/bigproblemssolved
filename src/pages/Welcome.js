import './Welcome.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    if (name=== "zipcode") {
      this.setState({["zipcodeValid"]: this.isUSAZipCode(value)}, this.checkFormValidity)
    }    
  }
  handleCheck(event) {
    console.log(event)
    var updatedNewsType = [...this.state.newsType]
    if (event.target.checked) {
      updatedNewsType= [...this.state.newsType, event.target.value]
      console.log(updatedNewsType)
    }
    else {
      updatedNewsType.splice(this.state.newsType.indexOf(event.target.value), 1)
      console.log(updatedNewsType)
    }
    this.setState({["newsType"]: updatedNewsType});
  }

  handleCheckTopic(event) {
    console.log(event)
    var updatedNewsTopic = [...this.state.newsTopics]
    if (event.target.checked) {
      updatedNewsTopic= [...this.state.newsTopics, event.target.value]
      console.log(updatedNewsTopic)
    }
    else {
      updatedNewsTopic.splice(this.state.newsTopics.indexOf(event.target.value), 1)
      console.log(updatedNewsTopic)
    }
    this.setState({["newsTopics"]: updatedNewsTopic});
  }

  handleGenderChange(event) {
    this.setState({["gender"]: event.target.value});
  }

  handleAgeChange(event) {
    this.setState({["age"]: event.target.value});
  }

  handleRaceChange(event) {
    this.setState({["race"]: event.target.value});
  }

  checkFormValidity() {
      this.setState({["formValid"]: this.state.zipcodeValid})
  }
  newsTypes = ["Fox News", "New York Times", "Wall Street Journal", "CNN", "ABC News"]
  newsTopics = ["Covid", "Health", "Politics"]
  genderOptions = ["Female", "Male", "Other/Prefer Not to Say"]
  raceOptions = ["Caucasian", "Asian"]
  ageOptions = ["Under 18", "18-24"]
  constructor (props) {
    super(props);
    this.state = {
      zipcode: '',
      gender: '',
      race: [],
      age: '',
      newsType: [],
      newsTopics: [],
      zipcodeValid: false,
      formValid: false,
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleCheck = this.handleCheck.bind(this);
  this.handleCheckTopic = this.handleCheckTopic.bind(this);
  this.handleGenderChange = this.handleGenderChange.bind(this);
  this.handleAgeChange = this.handleAgeChange.bind(this);
  this.handleRaceChange = this.handleRaceChange.bind(this);
  } 
  
  
  isUSAZipCode(str) 
  {
    return /^\d{5}(-\d{4})?$/.test(str);
  }

  render () {
   
    
      return (
        <div className="AppMobile">
          <p> Welcome to Big Problems Solved! Fill out the form below to extract the facts from the fears and fads in the media </p>
          <div className = "CheckBox"> 
            <p> Select Your Preferences/Demographics Below</p>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1">Gender</label> 
            <p> What Sources of News Do You Consume?</p>
            {this.newsTypes.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={this.handleCheck} />
              <span >{item}</span>
            </div>
          ))}
           <p> What Topics in the News Are Most Important to You?</p>
            {this.newsTopics.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={this.handleCheckTopic} />
              <span >{item}</span>
            </div>
          ))}
          </div>
          <div className="select-container">
          <p> Select Your Gender </p>
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            {this.genderOptions.map((option, index) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="select-container">
        <p> Select Your Age </p>
          <select value={this.state.age} onChange={this.handleAgeChange}>
            {this.ageOptions.map((option, index) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="select-container">
        <p> Select Your Race </p>
          <select value={this.state.race} onChange={this.handleRaceChange}>
            {this.raceOptions.map((option, index) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
          <div className = "Zipcode"> 
            <p> Input Your Zipcode </p>
            <input type="text" id="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
            <label >Zipcode</label> 
          </div>
          <Link className = "SubmitButton" type = "submit" disabled={!this.state.formValid} to={this.state.formValid ? '/Home' : '#'} state = {{data: this.state}}>
            Submit
          </Link>
          <p>
          {this.state.zipcode}
          </p>
          <p>
          {this.state.zipcodeValid.toString()}
          </p>
        </div>
      );
    }
  
}

export default Welcome;