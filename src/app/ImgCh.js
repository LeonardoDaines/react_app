import React from "react";
import 'aos/dist/aos.css';

function ImgCh(props){  
    return (
        <header className='imgCh' >
                <h1 data-aos="fade-down">{props.name}</h1>
                <p data-aos="fade-up">{props.subname} </p>
                <button className="mybutton" data-aos="fade-up">{props.button}</button>
        </header>
      );    
}
export default ImgCh;