import React from 'react';

const validation = (props) => {

    let message = "";

    props.length < 5 ? message = "Text is too short!" : message = "Text is too big!";
    
    return <div>
        <h3>{message}</h3>
    </div>
}

export default validation;