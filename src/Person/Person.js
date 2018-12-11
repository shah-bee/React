import React from 'react';
const person = (props) => {
    return <p onClick= {props.click }>I'm a {props.name} and I am  {props.age} years old!
     {/* <h1>{props.children}</h1> */}
    </p>
}

export default person;