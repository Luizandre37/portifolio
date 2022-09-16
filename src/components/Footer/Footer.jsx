import React from 'react'
import './Footer.css'
import {GrFacebook} from  'react-icons/gr'
import{BsGithub} from 'react-icons/bs'
import{ImInstagram}  from 'react-icons/im'
import{AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Luiz André Maceno</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experiencia</a></li>
        <li><a href="#">Portifolio</a></li>
        <li><a href="#">Testemunha</a></li> 
        <li><a href="#">Serviço</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <div className="footer_social">
        <a href="https://github.com/Luizandre37"><BsGithub/></a>
        <a href="https://www.facebook.com/luizandremaceno.maceno"><GrFacebook/></a>
        <a href="https://www.instagram.com/luizandremaceno/"><ImInstagram/></a>
        <a href="https://www.linkedin.com/in/luizandremacenoanalistaseguranca/"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Todos Direitos autorais reservado para Luiz André Maceno.</small>
      </div>

    </footer>
  )
}

export default Footer