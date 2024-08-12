import React, { useRef } from "react";

import logo from '../../assets/logo.png'

import './footer.css'

function Footer() {
    // const companyName = useRef()
    // const date = new Date()
    // companyName.current.focus()
    // .innerHTML = "© ООО \"ВАШ ПРОЕКТ\", " + date.getFullYear() + "."
    return (
      <>
        <footer>
          <div className="footer__container">
            <div className="footer__container-info">

              <img src={logo} alt="img"/>
              <p>Телефон - +7(492) 442-23-22</p>
              <p>Почта - gmail@gmail.com</p>
              <p>Адрес - Владимирская область, Александров, Институтская улица, 6к5, офис 314, 3 этаж</p>

            </div>

            <div className="footer__container-author">
              <p>ООО "ВАШ ПРОЕКТ"</p>
              <h1>Сайт создан <a target="_blank" href="https://github.com/SemenovNikita2009">Linuxoid86</a></h1>
            </div>
            
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;