//react
import React from 'react';
//components
import  Circulo from './components/Circulo/Circulo'
import  Footer from './components/Footer/Footer'
//css
import './app.css'


function App() {
  const fecha = new Date().getFullYear();
  return (
    <>

    <div id='app'>
     <Circulo 
     titulo='PHERLIN STUDIOS'
     fecha={fecha}
     />
    </div>
    
    <Footer
    fecha={fecha}
    />

    </>
  );
}

export default App;
