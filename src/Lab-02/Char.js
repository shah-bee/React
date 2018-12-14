import React from 'react';

const char = (props) => {

    const style = {
        display : 'inline-block',
        margin: '10px',
        padding: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }

    return <div style={style} onClick={props.click}>
       {props.char}
    </div>
}

export default char;