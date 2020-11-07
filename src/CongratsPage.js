import React, { Component } from "react";
//simple Page to display the pet you selected
class CongratsPage extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Well done! You truly are a a good person!</h2>
        <h3>Meet your new friend!</h3>
        <img src={`${this.props.pet.imageURL}`}></img>
        <h4>{"Name: " + this.props.pet.name}</h4>
        <p>{"Age: " + this.props.pet.age}</p>
        <p>{"Breed: " + this.props.pet.breed}</p>
        <p>{"Gender: " + this.props.pet.gender}</p>
        <p>{"Story: " + this.props.pet.story}</p>
      </>
    );
  }
}

export default CongratsPage;
