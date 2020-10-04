import React from 'react';
import logo from '../../photo/shop.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
           <nav>
               <a href="/Home">HOME</a>
               <a href="/web">Web Design</a>
               <a href="/devo">Web Devolopment</a>
           </nav>
        </div>
    );
};

export default Header;