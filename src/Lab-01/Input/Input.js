import React from 'react';

const input = (props) => {
    return <div>
        <input type="text" value={props.name} onChange={props.nameChange}></input>
        {props.children}
    </div>
}

export default input;