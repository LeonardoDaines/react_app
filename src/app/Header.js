import React from "react";
import { Link } from "react-router-dom";

function Header(props){
    return (
        <header className='header'>
            <Link to="/">
            <div className="logo">
              <h2>BELLAVITA SALON</h2>
              <p>SPA & MAKEUP</p>
            </div>
            </Link>
          <ul className='menu'>
            <Link to="/Squad"><li>Equip</li></Link>
            <Link to="/about"><li>about</li></Link>
            <Link to="/Squad"><li>buy</li></Link>
            <Link to="/Squad"><li>contact</li></Link>
          </ul>   
        </header>
      );

}

export default Header;