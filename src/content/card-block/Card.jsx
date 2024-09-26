import React from "react";

import Doc from '../../assets/card.pdf'

import './card.css'

function Card() {

    return (
      <>
        <header>
          <div className="about__container-top-dragient"></div>

            <div className="card__container">

              <div className="card__container-content">
                <h1>Скачать карточку предприятия</h1>

                <a className="card__container-btn" href={Doc} download="Карточка предприятия.pdf">Скачать</a>

                <embed className="card__container-document" src={Doc} type="application/pdf"/>
              </div>
              
            </div>

            <div className="about__container-bottom-dragient"></div>
        </header>
      </>
    );
  }
  
export default Card;