import React from 'react'
import './Portifolio.css'
import IMG1 from '../../assets/Portifolio.png'
import IMG2 from '../../assets/texturap.png'
import IMG3 from '../../assets/texturap.png'
import IMG4 from '../../assets/texturap.png'
import IMG5 from '../../assets/texturap.png'
import IMG6 from '../../assets/texturap.png'
import IMG7 from '../../assets/texturap.png'
import IMG8 from '../../assets/texturap.png'
import IMG9 from '../../assets/texturap.png'


const Portifolio = () => {
  return (
    <section id='Portifolio'>
      <h5>Meus Projetos Pessoais</h5>
      <h2>Portifolio</h2>
      <div className="container portfolio_container">
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portifolio_item">
          <div className="portifolio_item-image">
            <img src={IMG1} />
          </div>
          <h3>Titulo de projetos</h3>
          <div className="portifolio_item-cta">
            <a href="https://github.com/Luizandre37" className='btn'>Github</a>
            <a href="https://dribbble.com/Luizdev2022" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        


      </div>
    </section>
  )
}

export default Portifolio