import React from 'react';
import Radium from 'radium';
import './Char.css';

const char = (props) => {

    const style = {
      '@media (min-width: 500px)' : {
          width : '450px'
      }
    }

    return <div className="char" style={style} onClick={props.click}>
       {props.char}
    </div>
}

export default Radium(char);