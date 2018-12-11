import React, { Component } from 'react';
// import Person from './Person/Person';
import Input from './Lab-01/Input/Input';
import Output from './Lab-01/Output/Output';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Asra", age: 8 },
      { name: "Amera", age: 5 },
      { name: "Umar", age: 6 },
      { name: "Amaan", age: 12 }
    ],
    userName: "Taher"
  }

  switchNameHandler = (newName) => {
    console.log('switch clicked!');

    this.setState({
      persons: [
        { name: newName, age: 8 },
        { name: "Amera Firdaus", age: 5 },
        { name: "Mohammed Umar", age: 6 }]
    });
  }

  onUserNameChangedHandler = (event) => {
    this.setState({
        userName: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        {/* <button onClick={() => this.switchNameHandler('Naseer')}>Switch Name</button>
        <Person name={this.state.persons[0].name} click={this.switchNameHandler.bind(this, 'Taher')} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >
          I'm a software developer!
        </Person> */}
        <Input nameChange={this.onUserNameChangedHandler} name={this.state.userName}></Input>
        <Output name={this.state.userName}></Output>
      </div>
    );
  }
}

export default App;
