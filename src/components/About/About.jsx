import React from 'react'
import'./About.css'
import Me from '../../assets/eu1.png'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
   <section id='About'>
    <h5>Saiba Mais</h5>
    <h2> Sobre mim</h2>
    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt="About Image" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <h5>Experência</h5>
            <FaAward className='about_icon'/>
            <small>2 anos de trabalho</small>


          </article>
          <article className='about_card'>
            <h5>Cliente</h5>
            <FiUsers className='about_icon'/>
            <small>20 no  estado de São Paulo</small>


          </article>
          <article className='about_card'>
            <h5>Projeto Pessoais</h5>
            <AiOutlineFolderOpen className='about_icon'/>
            <small>20 completados</small>
          </article>
        </div>
        <p>
      Meu nome Luiz André Maceno , tenho 39 anos eu nasci em  São Paulo. Atualmente, vivo com ,minha esposa e filhos.
      Sou Formado em analise e desenvolvimento  de sistema pela universidade
      Nove de julho.
      Estou procurando desenvolver as minhas capacidades de Front- end. De
      Fazer carreira nesta área de que sempre despertou o meu interesse
      Para mim, é um prazer trabalhar com isso .Também uso meu tempo
      Livre para aprender novas linguagens de programação .
      Utilizo esses conhecimento para atualizar nossa meus projetos que 
      E algo que considero muito valioso. Adoraria trazer minhas 
      habilidades minha paixão pelo aprendizado de novas  tecnologias 
      para a  sua empresa
        </p>
        <a href="#contato" className='btn btn-primary'>saiba mais </a>
      </div>
    </div>
   
   </section>
  )
}

export default About