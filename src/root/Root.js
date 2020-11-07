import React, { Component } from "react";
import Header from "../Header";
import HomePage from "../HomePage";
import AdoptPage from "../AdoptPage";
import config from "../config";
import { Route, Switch } from "react-router-dom";

class Root extends Component {
  state = {
    people: [],
    cat:'',
    dog:'',
    currentName:''
  };
  // Grabs People List
  componentDidMount() {
    return fetch(`${config.REACT_APP_API_BASE}/people`)
      .then((exRes) => {
        if (!exRes.ok) {
          return exRes.json().then((e) => Promise.reject(e));
        }
        return exRes.json();
      })
      .then((people) => {
        this.setState({ people });
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  //A function to grab people to update rendering when needed.
  getPeople = () => {
    return fetch(`${config.REACT_APP_API_BASE}/people`)
      .then((exRes) => {
        if (!exRes.ok) {
          return exRes.json().then((e) => Promise.reject(e));
        }
        return exRes.json();
      })
      .then((people) => {
        this.setState({ people });
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  //Adds people to a list for display
  listPeople = () => {
    let list = ``;
    for (let i = 0; i < this.state.people.length; i++) {
      list += `${this.state.people[i]}, `;
    }

    return <>{list}</>;
  };
  //Adds you to the adoption list
  addPerson = (name) => {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${name} (You)`,
      }),
    }).then(() => {
      return this.getPeople();
    });
  };
  //Adds additional users once you are at the front of the line
  addPersons = (value) => {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: value,
      }),
    }).then(() => {
      return this.getPeople();
    });
  };
  //Removes a person from the queue
  removePerson = () => {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "DELETE",
    })
      
      .then(() => {
        return this.getPeople();
      })
      .then(() => {
        return this.handleAdds();
      });
  };
  // creates the new people to the list.
  handleAdds = () => {
    let ppl = ["Todd", "Schmodd", "Dod", "Slodd"];
    if (this.state.people[0].includes("You")) {
      setTimeout(() => {
        this.addPersons(ppl[0]);
      }, 2000);
      setTimeout(() => {
        this.addPersons(ppl[1]);
      }, 4000);
      setTimeout(() => {
        this.addPersons(ppl[2]);
      }, 6000);
      setTimeout(() => {
        this.addPersons(ppl[3]);
      }, 8000);
    }
    return;
  };
  //Handles the users being removed before you.
   handleRemove = () => {
    if (!this.state.people[0].includes("You")){
      this.handleRemovePets();
      
      setTimeout(() => {
        this.removePerson();
      }, 2000);
      setTimeout(() => {
        this.removePerson();
      }, 4000);
      setTimeout(() => {
        this.removePerson();
      }, 6000);
      setTimeout(() => {
        this.removePerson();
      }, 8000);
     
    } else {
      return;
    }
  }
  //removes pets from storage
  removePets = (type) => {
    fetch(`${config.REACT_APP_API_BASE}/pets/${type}`, {
      method: "DELETE",
    })
      .then((exRes) => {
        if (!exRes.ok) {
          return exRes.json().then((e) => Promise.reject(e));
        }
        return exRes.json();
      })
      .then(() => {
        return this.getPets();
      })
  }
  // A fetch to grab all pet info.
  getPets = () => {
    Promise.all([
      fetch(`${config.REACT_APP_API_BASE}/pets/cat`),
      fetch(`${config.REACT_APP_API_BASE}/pets/dog`),
    ])
      .then(([exRes, pRes]) => {
        if (!exRes.ok) {
          return exRes.json().then((e) => Promise.reject(e));
        }
        if (!pRes.ok) {
          return pRes.json().then((e) => Promise.reject(e));
        }

        return Promise.all([exRes.json(), pRes.json()]);
      })
      .then(([cat, dog]) => {
        this.setState({ cat, dog });
      })
      .catch((error) => {
        console.error({ error });
      });
  }
  // function to simulate pet adoption
  handleRemovePets = () => {
    if (!this.state.people[0].includes("You")){
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 2000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 4000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 6000);
      setTimeout(() => {
        let d = Math.random()
        if(d > 0.5){
          this.removePets('cat')
        } else{
          this.removePets('dog')
        }
      }, 8000);
      
     
    } else {
      return;
    }
  }

  grabName =(name) => {
    this.setState({currentName: name})
  }

  render() {
    
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path={"/"}
            render={(routerProps) => (
              <HomePage {...routerProps} 
              addPerson={this.addPerson}
              handleRemove={this.handleRemove}
              grabName={this.grabName}
              currentPerson={this.state.currentName}
              
              />
            )}
            exact={true}
          />
          <Route
            path={"/adopt"}
            render={(routerProps) => <AdoptPage
              {...routerProps} 
              deletePerson={this.removePerson}
              getPets={this.getPets}
              dog={this.state.dog}
              cat={this.state.cat}
              currentPeople={this.state.people}
              removePet={this.removePets}
              listPeople={this.listPeople}
              />}
            exact={true}
          />
        </Switch>

        
      </div>
    );
  }
}

export default Root;
