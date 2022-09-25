import React from "react";
import 'aos/dist/aos.css';

function Baseboard(props){
    return (
        <header className='baseboard'>
           <h3>{props.name0}</h3>
          <p>{props.name1} </p>
          <h2>{props.name2}</h2>
          <p>{props.name3}</p>
        </header>
      );
}

export default Baseboard;