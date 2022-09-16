import React from 'react'
import './Experiencia.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experiencia = () => {
  return (
   <section id='Experience'>
   <h5>Quais são minhas habilidades</h5>
   <h2>Minhas Experiencia</h2>
   <div className="container experiencie_container">

    <div className="experiencie_Frontend">
      <h3>Frontend Development</h3>
       <div className="experiencie_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'  /> 
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>React js </h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>Angular Cli</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        
       
       </div>

       {/*BACKEND*/}


    </div>
    <div className="experiencie_Backend">
    <h3>Backend Development</h3>
    <div className="experiencie_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>NODE JS</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>MONGO DB</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>MYSQL</h4>
          <small className='text-light'>Experiência</small>
          </div>

        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/> 
          <div>
          <h4>PYTHON</h4>
          <small className='text-light'>Experiência</small>
          </div>

        
        </article>
       
       </div>


      
</div>
   </div>
   
   
   </section>
  )
}

export default Experiencia