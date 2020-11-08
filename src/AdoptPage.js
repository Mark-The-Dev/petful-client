import React, { Component } from "react";
import CongratsPage from './CongratsPage'

class AdoptPage extends Component {
  state = {
    currentPet:'',
    hasPet: false,
    congrats: false
  };
  //gets pets for the page
  componentDidMount() {
    this.props.getPets();
  }
  //stores info to state on pet selected
  storeCat = () => {
    this.setState({
      currentPet: this.props.cat,
      hasPet: true
    })
    this.props.removePet('cat')
    return;
  }
  //stores info to state on pet selected
  storeDog = () => {
    this.setState({
      currentPet: this.props.dog,
      hasPet: true
    })
    this.props.removePet('dog')
    return;
  }

  //Generates list for current Dog in Queue
  thisDog = () => {
    if(!this.props.dog.length){
      if(this.props.currentPeople[0].includes('You')){
        return (
          <>
          <img src={`${this.props.dog.imageURL}`}></img>
          <h4>{'Name: '+this.props.dog.name}</h4>
          <p>{'Age: ' + this.props.dog.age}</p>
          <p>{'Breed: '+this.props.dog.breed}</p>
          <p>{'Gender: '+this.props.dog.gender}</p>
          <p>{'Story: '+this.props.dog.story}</p>
          <button
          onClick={() => this.storeDog()}
          >Adopt Me!</button>
          </>)
          
      } else {
        return (
          <>
          <img src={`${this.props.dog.imageURL}`}></img>
          <h4>{'Name: '+this.props.dog.name}</h4>
          <p>{'Age: ' + this.props.dog.age}</p>
          <p>{'Breed: '+this.props.dog.breed}</p>
          <p>{'Gender: '+this.props.dog.gender}</p>
          <p>{'Story: '+this.props.dog.story}</p>
          </>
        )

      }
      
    } else {
      return(
        <>
        <h2>there are no more Dogs to adopt, good job!</h2>
        </>
      )
    }
    
  }
  //Generates list for current Cat in Queue
  thisCat = () => {
    if(!this.props.cat.length){
      if(this.props.currentPeople[0].includes('You')){

        return (
          <>
          <img src={`${this.props.cat.imageURL}`}></img>
          <h4>{'Name: '+this.props.cat.name}</h4>
          <p>{'Age: ' + this.props.cat.age}</p>
          <p>{'Breed: '+this.props.cat.breed}</p>
          <p>{'Gender: '+this.props.cat.gender}</p>
          <p>{'Story: '+this.props.cat.story}</p>
          <button
          onClick={() => this.storeCat()}
          >Adopt Me!</button>
          </>
        )

      } else {
        return (
          <>
          <img src={`${this.props.cat.imageURL}`}></img>
          <h4>{'Name: '+this.props.cat.name}</h4>
          <p>{'Age: ' + this.props.cat.age}</p>
          <p>{'Breed: '+this.props.cat.breed}</p>
          <p>{'Gender: '+this.props.cat.gender}</p>
          <p>{'Story: '+this.props.cat.story}</p>
          </>
        )
      }
     
    } else {
     return <h2>there are no more Cats to adopt, good job!</h2>
    }
    
    
  }

  resetFields = () => {
    this.setState({
      hasPet:false,
      congrats: false
    })
    this.props.history.push('/')
  }
  

  render() {
    if(this.state.hasPet === false){
      return (
        <div>
          <div>
            <h2>Meet your new friend!</h2>
          </div>
          <div className='row'>
          <div className="showPets">
            <h3>Cat</h3>
            {this.thisCat()}
          </div>
          <div className="showPets">
            <h3>Dog</h3>
            {this.thisDog()}
          </div>
          <footer>
          <p>Current People in Line: {this.props.listPeople()}</p>
        </footer>
          </div>
          
         
        </div>
      );

    } else {
      if(this.state.congrats === false){
        {this.props.deletePerson()}
        this.setState({congrats:true})
      }
      
      return (
        <>
        <CongratsPage
          pet={this.state.currentPet}
          reset={this.resetFields}
        />    
        <footer>
          <p>Current People in Line: {this.props.listPeople()}</p>
        </footer>
        </>
        
      )
    }
    
  }
}

export default AdoptPage;
