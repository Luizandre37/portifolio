import React from 'react'
import './Testemunha.css'
import AVARTAR1 from "../../assets/esposa.jfif" 
import AVARTAR2 from "../../assets/gato.jpg" 
import AVARTAR3 from "../../assets/eu.png" 
import AVARTAR4 from "../../assets/eu.png" 

const Testemunha = () => {
  return (
    <section id='Testemunha'>
      <h5>Revison from clients</h5>
      <h2>Testemunhas</h2>
       <div className="container testemunha_container">
        <article className='testemunha'>
          <div className="client_avatar">
            <img src={AVARTAR1} alt="" />
          </div>
          <h5 className='client_name'>Luiz André Maceno</h5>
          <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia qui! Impedit, eveniet facere fuga delectus asperiores
             non nostrum vero expedita natus nesciunt earum, error iusto quam temporibus possimus quasi!</small>
        </article>
        <article className='testemunha'>
          <div className="client_avatar">
            <img src={AVARTAR1} alt="" />
          </div>
          <h5 className='client_name'>Luiz André Maceno</h5>
          <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia qui! Impedit, eveniet facere fuga delectus asperiores
             non nostrum vero expedita natus nesciunt earum, error iusto quam temporibus possimus quasi!</small>
        </article>
        <article className='testemunha'>
          <div className="client_avatar">
            <img src={AVARTAR1} alt="" />
          </div>
          <h5 className='client_name'>Luiz André Maceno</h5>
          <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia qui! Impedit, eveniet facere fuga delectus asperiores
             non nostrum vero expedita natus nesciunt earum, error iusto quam temporibus possimus quasi!</small>
        </article>
        <article className='testemunha'>
          <div className="client_avatar">
            <img src={AVARTAR1} alt="" />
          </div>
          <h5 className='client_name'>Luiz André Maceno</h5>
          <small className='client_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia qui! Impedit, eveniet facere fuga delectus asperiores
             non nostrum vero expedita natus nesciunt earum, error iusto quam temporibus possimus quasi!</small>
        </article>
        
          

       
       </div>




    </section>
  )
}

export default Testemunha