import React from "react";

function VisitCard(props){
    return (
        <header className='visitcard'>
           <h3>{props.name0}</h3>
          <h2>{props.name1} </h2>
          <h2>{props.name2}</h2>
          <p>{props.name3}</p>
          <button className="mybutton">{props.button}</button>
        </header>
      );
}


export default VisitCard;