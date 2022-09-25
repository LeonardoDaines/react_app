import React from "react";
import icon0 from "./image/icon_0.png"
import icon1 from "./image/icon_1.png"
import icon2 from "./image/icon_2.png"
import icon3 from "./image/icon_3.png"
import icon4 from "./image/icon_4.png"
import icon5 from "./image/icon_5.png"
import 'aos/dist/aos.css';

function Servic(props){
    return (
        <header className='servic'>
            <h3>{props.titulo}</h3>
            <h2>{props.subtitulo}</h2>
            <div className="main" >
                <div className="main" data-aos="fade-right">
                    <div className="mainelement" >
                        <button className="icon" >
                            <img src={icon0} alt="img" width="80" height="80"/>
                            <h2>Tratamento dos fios</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit,
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
                <div className="main" data-aos="fade-right">
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
                <div className="main" data-aos="fade-right">
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
                <div className="main" data-aos="fade-right">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon3} alt="img" width="80" height="80"/>
                            <h2>Cuidados com a pele</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit, 
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
                <div className="main" data-aos="fade-right">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon4} alt="img" width="80" height="80"/>
                            <h2>Cuidados com as unhas</h2>
                            <p>Lorem ipsum dolor sit amet,
                            consectetur adip isicing elit, 
                            sed do eiusmod tempor incididunt ut
                             labore et dolore magna aliqua.</p>
                        </button>
                    </div>  
                </div>
                <div className="main" data-aos="fade-right">
                    <div className="mainelement">
                        <button className="icon">
                            <img src={icon5} alt="img" width="80" height="80"/>
                            <h2>Estética facil e corporal</h2>
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


export default Servic;