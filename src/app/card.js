import React from "react";

function Card(props){
    return (
        <header className='card'>
           <p>{props.subname}</p>
          <h1>{props.name} </h1>
        </header>
      );
}
export default Card;