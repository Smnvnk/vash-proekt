import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import About from './content/about-block/About.jsx'
import Card from './content/card-block/Card.jsx'
import Contacts from './content/contacts-block/Contacts.jsx'

import Footer from './content/footer/Footer.jsx'

import './index.css';

export default function App(){
    return (
      <>
        <About/>
        <Contacts/>
        <Card/>
        <Footer/>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>, StrictMode=false);