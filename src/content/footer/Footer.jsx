import React, { useRef } from "react";

import logo from '../../assets/logo.png'

import './footer.css'

function Footer() {

    const date = new Date()

    return (
      <>
        <footer>
          <div className="footer__container">
            
            <img className="footer__logo" src={logo} alt="img"/>

            <div className="footer__container-info">

              <div className="footer__container-author">
                <h1>Сайт создан <a target="_blank" href="https://github.com/SemenovNikita2009">Linuxoid86</a></h1>
                <p>© ООО "ВАШ ПРОЕКТ", {date.getFullYear()}.</p>
              </div>

            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;