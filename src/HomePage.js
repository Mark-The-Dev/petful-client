import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import dogs from './dogs.jpg'

//simple home page
class HomePage extends Component {
  state = {  }
  


  
  render() { 
    return ( 
    <div>
      <h3>Would you like a new friend?</h3>
      <img src={dogs}></img>
      <p>Here at Petful We have arranged a quque of lovely cats and dogs that need a new home!
        The way this site works, if you decide to adopt a pet you will join the line and when you reach the front,
        you will be given an option of a cat or a dog!
      </p>
      <label htmlFor='yourName'>Your Name:</label>
      <input 
      id='yourName'
      onChange={(e) => {this.props.grabName(e.target.value)}}
      >

      </input>
      <button
      onClick={() => this.props.addPerson(this.props.currentPerson).then(()=> {this.props.history.push('/adopt')}).then(() => {this.props.handleRemove()})}
      type='button'
      >
        Lets get Started! 
      </button>
    </div> );
  }
}
 
export default HomePage;