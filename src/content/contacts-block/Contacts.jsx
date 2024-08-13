import React from "react";

import './contacts.css'

import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contacts() {
    return (
      <>
        <header>  

          <div className="about__container-top-dragient"></div>

          <div className="contacts__container">
            
            <h1>Контакты</h1>

            <div className="map__container-text">
              <p id="phone-number">▪ +7(492) 442-23-22</p>
              <p id="email">▪ gmail@gmail.com</p>
            </div>

            <div className="map__container">
              <iframe className="contacts__container-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4657e003bb1f5d19e119db072c1b52a6968958af62b137467f32a54f054ecdf8&amp;source=constructor" width="800" height="450" frameborder="0"/>
            </div>

            <p id="adress" className="address">▪ Владимирская область, Александров, Институтская улица, 6к5, офис 314, 3 этаж</p>

          </div>

          <div className="about__container-bottom-dragient"></div>

        </header>
      </>
    );
  }
  
export default Contacts;