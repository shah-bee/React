import React from 'react';
import Classes from './Char.css';

const char = (props) => {

    const style = {
   
    }

    return <div className={Classes.char} style={style} onClick={props.click}>
       {props.char}
    </div>
}

export default char;