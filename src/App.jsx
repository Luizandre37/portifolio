import React from 'react'
import Header from './components/Hedear/Hedear'
import Nav from './components/Nav/Nav'
import Experiencia from './components/Experiencia/Experiencia'
import About from './components/About/About'
import Servico from './components/Service/Servico'
import Portifolio from './components/Portifolio/Portifolio'
import Testemunha from './components/Testemunha/Testemunha'
import Footer from './components/Footer/Footer'
import Contato from './components/Contato/Contato'


const App = () => {
  return (
  <>
  <Header/> 
  <Nav/>
  <About/>
  <Experiencia/>
  <Servico/>
  <Portifolio/>
  <Testemunha/>
  <Contato/>
  <Footer/>
  
  </>

  )
}

export default App