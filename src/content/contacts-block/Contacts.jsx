import React from "react";

import './contacts.css'

function Contacts() {
    return (
      <>
        <header>
          <div className="contacts__container">
            
            <h1>Контакты</h1>
            <iframe className="contacts__container-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4657e003bb1f5d19e119db072c1b52a6968958af62b137467f32a54f054ecdf8&amp;source=constructor" width="800" height="450" frameborder="0"/>

            <p>Телефон - +7(492) 442-23-22</p>
            <p>Почта - gmail@gmail.com</p>
            <p>Адрес - Владимирская область, Александров, Институтская улица, 6к5, офис 314, 3 этаж</p>
          </div>
        </header>
      </>
    );
  }
  
export default Contacts;