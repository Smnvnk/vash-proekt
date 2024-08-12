import React from "react";

import logo from '../../assets/logo.png'

import './about.css'

function About() {
    return (
      <>
        <header>
            <div className="about__container-top-dragient"></div>

            <div className="about__container">
    
              <div className="about__container-text">
                <img className="about__container-logo" src={logo} alt="img"/>
                <h1>ООО "ВАШ ПРОЕКТ"</h1>
                <p>— Проектирование жилых и общественных зданий</p>
                <p>— Разработка генпланов и проектов межевания</p>
              </div>

            </div>

            <div className="about__container-bottom-dragient"></div>

        </header>
      </>
    );
  }
  
export default About;