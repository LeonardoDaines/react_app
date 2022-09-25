import React from "react";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import businesSwoman1 from "./image/business woman1.jpg"
import businesSwoman2 from "./image/business woman2.jpg"
import businesSwoman3 from "./image/business woman3.jpg"
import businesSwoman4 from "./image/business woman4.jpg"

function Equip(props){
    return (
        <header className='equip'>
                <div className="equipTitle">
                    <h3>{props.titulo}</h3>
                    <h2>{props.subtitulo} </h2>
                </div>
                <div className="cardEquip" >
                    <div className="mainEquip" >
                            <img src={businesSwoman1} alt="img" height="200"/>
                            <h3>Fernanda</h3>
                            <p>Destaque suas principais experiências, formação conhecimento e outros.
                            </p>
                            <Link to="/Squad">
                                <button className="mybuttonEquip">Saiba Mais</button>
                            </Link>
                    </div >
                    <div className="mainEquip">
                            <img src={businesSwoman2} alt="img" height="200"/>
                            <h3>Helena</h3>
                            <p>Destaque suas principais experiências, formação, conhecimento e outros.
                            </p>
                            <Link to="/Squad">
                                <button className="mybuttonEquip">Saiba Mais</button>
                            </Link>
                    </div>
                    <div className="mainEquip">
                            <img src={businesSwoman3} alt="img" height="200"/>
                            <h3>Josy</h3>
                            <p>Destaque suas principais experiências, formação, conhecimento e outros.
                            </p>
                            <Link to="/Squad">
                                <button className="mybuttonEquip">Saiba Mais</button>
                            </Link>
                    </div>
                    <div className="mainEquip">
                            <img src={businesSwoman4} alt="img" height="200"/>
                            <h3>Valentina</h3>
                            <p>Destaque suas principais experiências, formação, conhecimento e outros.
                            </p>
                            <Link to="/Squad">
                                <button className="mybuttonEquip">Saiba Mais</button>
                            </Link>
                    </div>
                </div>
        </header>
        
      );    
}
export default Equip;