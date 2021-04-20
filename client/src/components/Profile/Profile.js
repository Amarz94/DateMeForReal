import React, { Component } from "react";
import "./Profile.css";
import API from "../../utils/API";
import UserCard from "../Cards/Cards"

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserGender = this.onChangeUserGender.bind(this);
    this.onChangeUserAge = this.onChangeUserAge.bind(this);
    this.onChangeUserUrl = this.onChangeUserUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      gender: "",
      age: "",
      url: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserGender(e) {
    this.setState({ gender: e.target.value });
  }

  onChangeUserAge(e) {
    this.setState({ age: e.target.value });
  }

  onChangeUserUrl(e) {
    this.setState({ url: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      age: this.state.age,
      url: this.state.url,
    };

    console.log("UserObject API call:", userObject);

    API.updateUser(userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "", email: "", gender: "", age: "", url: "" });
    console.log("printing state: ", this.state);
  }

  render() {
    return (
      <div id="inputCon">
      <div className="formWrap">
        <h1>Update Profile</h1>
      <form className="formInput" onSubmit={this.onSubmit}>
        <label>Name :</label>
        <br />
        <input
          placeholder="Enter Your Name"
          onChange={this.onChangeUserName}
          value={this.state.name}
          type="text"
        />
        <br />
        <br />
        <label>Email :</label>
        <br />
        <input
          placeholder="Enter Your Email"
          onChange={this.onChangeUserEmail}
          value={this.state.email}
          type="email"
        />
        <br />
        <br />
        <label>
          Gender : <br/>
          <select style={{width: "100%"}} onChange={this.onChangeUserGender} value={this.state.value}>
          <option value="disabled" disabled selected hidden>-Select a Gender-</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <br />
        <label>Age :</label>
        <br />
        <input
          placeholder="Enter Your Age"
          onChange={this.onChangeUserAge}
          value={this.state.age}
          type="number"
        />
        <br />
        <br />
        <label>Photo URL :</label>
        <br />
        <input
          placeholder="Provide an image address"
          onChange={this.onChangeUserUrl}
          value={this.state.url}
          name="url"
          type="url"
        />
        <br />
        <br />
        <input className="submitButton" type="submit" value="Submit" />
        <br />
      </form>
      </div>

              <div id="cardExample">
                  <div
                    className="swipe"
                    key={this.state.name}
                    preventSwipe={["up", "down"]}
                  >
                    <img
                      src={this.state.url}
                      id="imgCard"
                      
                    />
                    <h3 className="userInfo"><b>{this.state.name} | {this.state.age} | {this.state.email}</b></h3>
                  </div>
              </div>



      </div>
      
    );
  }
}
