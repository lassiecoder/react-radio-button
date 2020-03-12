import React from "react";
// import logo from "./logo.svg";
import "./App.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: "none"
    };
  }

  handleGenderChange = changeEvent => {
    this.setState({
      selectedGender: changeEvent.target.value
    });
  };

  handleGenderSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("Selected gender is: ", this.state.selectedGender);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleGenderSubmit}>
          <div className="textField">
            <label>
              <input
                type="radio"
                name="reactRadio"
                value="male"
                checked={this.state.selectedGender === "male"}
                onChange={this.handleGenderChange}
                className="formRadioButton"
              />
              Male
            </label>
          </div>
          <div className="textField">
            <label htmlFor="radio">
              <input
                type="radio"
                name="reactRadio"
                value="female"
                checked={this.state.selectedGender === "female"}
                onChange={this.handleGenderChange}
                className="formRadioButton"
              />
              female
            </label>
          </div>
          <div className="textField">
            <label htmlFor="radio">
              <input
                type="radio"
                name="reactRadio"
                value="other"
                checked={this.state.selectedGender === "other"}
                onChange={this.handleGenderChange}
                className="formRadioButton"
              />
              Other
            </label>
          </div>

          <div className="btnSection">
            <button type="submit">SAVE</button>
          </div>
        </form>
      </div>
    );
  }
}
