import Carousel from 'react-elastic-carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import './App.css';
import { useEffect } from 'react';

import Header from './app/Header';
import Card from './app/card';
import VisitCard from './app/VisitCart';
import Servic from './app/Servic';
import ImgCh from './app/ImgCh';
import Contact from './app/Contact';
import Video from './app/video';
import Equip from './app/equip';
import Tratamentos from './app/Tratamentos';
import Planos from './app/Planos';
import Blog from './app/Blog';
import Baseboard from './app/Baseboard';

import Squad from './app/Squad';

function App() {

  useEffect(()=> {
    Aos.init({duration: 900});
  }, []);


  return (
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={
          <div className="App">   
            <div className='background'>
              <div className='Container'>
              <Header linkss = {["Serviço", "Equipe", "Preços"]} name="Espaço de beleza" links = {["Comprar", "Contato"]}></Header>
              </div>

              <div className='Container'>
              <Carousel>
                <Card name="Bem vindo ao nosso espaço de beleza" subname="SALÃO & SPA" />
                <Card name="Bem vindo ao nosso espaço de beleza" subname="SALÃO & SPA" />
                <Card name="Bem vindo ao nosso espaço de beleza" subname="SALÃO & SPA"/>
              </Carousel>
              </div>
            </div>

            <div className='t' data-aos="fade-up">
              <VisitCard name0="TRATAMENTOS SPA DE LUXO" name1="Revitalize sua mente, corpo e espírito com o spa de luxo." 
              name2="UMA CALOROSA RECEPÇÃO" name3="Nós da Dream Spa prestamos diversos serviços à natureza dos clientes.
              Deseje como você gostaria de passar o tempo aqui podemos conversar e chegar a uma conclusão." button="Saber Mais"/>
            </div>

            <div className='Container'>
              <Servic/>
            </div>

            <div className='Container'>
              <ImgCh name='Serviço de spa de luxo Sua beleza e sucesso começa aqui' subname="Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequatuis aute irure dolor." button="Saber Mais"></ImgCh>
            </div>

            <div className='Container'>
              <Tratamentos/>
            </div>

            <div className='Container'>
              <Equip titulo='SOBRE' subtitulo='NOSSA EQUIPE'/>
              </div>


            <div className='Container'>
              <Video/>
            </div>

            <div className='Container'>
              <Planos/>
            </div>

            <div className='Container'>
            <Contact/>
            </div>

            <div className='Container'>
              <Blog/>
            </div>

            <div className='Container'>
            <Baseboard name0="TRATAMENTOS SPA DE LUXO" name1="Lorem ipsum dolor sit amet, consectetur
              adip isicing elit, sed do eiusmod tempor 
              ut aliquip ex ea commodo consequat." 
              name2="UMA CALOROSA RECEPÇÃO" name3="Nós da Dream Spa prestamos diversos serviços à natureza dos clientes.
              Deseje como você gostaria de passar o tempo aqui podemos conversar e chegar a uma conclusão." button="Saber Mais"/>
            </div>

            </div>  } />
      </Routes>

      <Routes>
        <Route path="/Squad" element={
          <div className='Container'>
            <Header/>
            <Squad/>
          </div>} 
          />
      </Routes>

      <Routes>
        <Route path="/about" element={
          <div className='Container'>
            <Header/>
         
          </div>} 
          />
      </Routes>
      
      
      
    
    </BrowserRouter>
  );
}

export default App;
