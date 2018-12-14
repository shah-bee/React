import React, { Component } from 'react';
import Validation from './Lab-02/Validation';
import Char from './Lab-02/Char';
import './App.css';

class App extends Component {
 state =  {
   name : "",
   length: 0
 }
  
 onInputChange = (event) => {
  const inputLength = event.target.value.length;
   this.setState({
      name : event.target.value,
      length : inputLength
   });
 }

 removeChar = (index) => {
 // console.log(event.target.innerText, index);
  let updateName = this.state.name.split('');
 updateName.splice(index, 1);
 const updatedName = updateName.join('');
  this.setState({
    name: updatedName
  })
  console.log(updateName, index);
 }

  render() {

    const charArray =  
         this.state.name.split('').map((char, index) => {
          return <Char char={char} key={index} click={() => this.removeChar(index)}></Char>
          })

    return (
      <div className="App">
        <h1>Hi I am working on assignment 3!</h1>
       <input type="text" value={this.state.name} onChange={this.onInputChange} />
       <p>
         {this.state.name}
       </p>
       <Validation length={this.state.length}></Validation>
      {charArray}
      </div>
    );
  }
}

export default App;
