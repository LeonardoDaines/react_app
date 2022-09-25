import React from "react";

function VisitCard(props){
    return (
        <header className='sobre'>
          <img src={props.img} alt="img" height="200"/>v
          <h2>{props.h2} </h2>
          <p>{props.p}</p>
        </header>
      );
}


export default VisitCard;