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

              {/* <p>Телефон - +7(492) 442-23-22</p>
              <p>Почта - gmail@gmail.com</p>
              <p>Адрес - Владимирская область, Александров, Институтская улица, 6к5, офис 314, 3 этаж</p> */}

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