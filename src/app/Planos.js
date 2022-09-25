import React from "react";
import icon0 from "./image/icon_6.png"
import icon1 from "./image/icon_7.png"
import icon2 from "./image/icon_8.png"
import lotus from "./image/lotus.png"
import 'aos/dist/aos.css';

function Planos(props){
    return (
        <header className='planos'>
            <img src={lotus} alt="img" width="180" height="100"/>
            <h2>Planos</h2>
            <div className="main" data-aos="fade-right">
                <div className="main">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon0} alt="img" width="80" height="80"/>
                            <h2>Tratamento dos fios</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit,
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
                <div className="main">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon1} alt="img" width="80" height="80"/>
                            <h2>Cortes e penteados</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit, 
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
                <div className="main">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon2} alt="img" width="80" height="80"/>
                            <h2>Makeup</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit, 
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
            </div>
        </header>
      );
}
export default Planos;