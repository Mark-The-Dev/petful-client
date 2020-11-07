import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//simple home page
class HomePage extends Component {
  state = {  }
  


  
  render() { 
    return ( 
    <div>
      <h3>Would you like a new friend?</h3>
      <p>Here at Petful We have arranged a quque of lovely cats and dogs that need a new home!
        The way this site works, if you decide to adopt a pet you will join the line and when you reach the front,
        you will be given an option of a cat or a dog!
      </p>
      <button
      onClick={() => this.props.addPerson().then(()=> {this.props.history.push('/adopt')}).then(() => {this.props.handleRemove()})}
      type='button'
      >
        Lets get Started! 
       
       
      </button>
    </div> );
  }
}
 
export default HomePage;