import React from 'react';

const output = (props) => {
    return <div>
        <p>{props.name}</p>
        {props.children}
    </div>
}

export default output;