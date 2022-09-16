import React from 'react'
import'./contato.css'
import {MdOutlineMail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{ImWhatsapp} from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contato = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kcsg1ij', 'template_qq7knov', form.current, 'p2pgBqEwCgsKVuzV9')
    e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
   <section id='contato'>
    <h5>Fale comigo </h5>
    <h2>Contato</h2>
    <div className="container contacto_container">
      <div className="contacto_options">
   
      <article className="contato_opcoes">
        <MdOutlineMail  className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>lamaceno2005@gmail.com</h5>
        <a href="https://www.facebook.com/luizandremaceno.maceno">Enviar mensagem</a>
      </article>
      <article className="contato_opcoes">
        <RiMessengerLine  className='contact_option-icon' />
        <h4>Facebook</h4>
        <h5>Menssegem</h5>
        <a href="mailto:lamaceno2005@gmail.com">Enviar mensagem</a>
      </article>
      <article className="contato_opcoes">
        <ImWhatsapp  className='contact_option-icon' />
        <h4>Whatsapp</h4>
        <h5>55 11 939430606</h5>
        <a href="https://api.whatsapp.com/send?phone=5511939430606&text=Ol%C3%A1%20seja%20bem%20%20vindo%20a%20minha%20pagina%20dentro%20instante%20iremos%20te%20atender">Enviar mensagem</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail}> 
      <input type="text" name='name' placeholder='Digite seu nome' required />
      <input type="email" name='email' placeholder='digite seu email' required/>
      <textarea name="message" rows="7" placeholder='Digite sua mensagem' required></textarea>
      <button type='submit' className='btn btn-primary'>Enviar sua messagem </button>
      
    
     </form>
    </div>

   </section>
  )
}

export default Contato;