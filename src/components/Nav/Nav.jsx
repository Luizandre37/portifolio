import React from 'react'
import './Nav.css'
import {SiHomebridge} from "react-icons/si"
import {HiOutlineUserCircle} from "react-icons/hi"
import {GiBookmarklet} from "react-icons/gi"
import {RiServiceLine} from "react-icons/ri"
import {TbMessages} from "react-icons/tb"
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
 <nav> 
  <a href="#"onClick={()=>setActiveNav('#')} className={activeNav==='#' ?  'active' : ''}><SiHomebridge /></a>
  <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav==='#About' ?  'active' : ''}><HiOutlineUserCircle/></a>
  <a href="#Experience"onClick={()=>setActiveNav('#Experience')} className={activeNav==='#Experience' ?  'active' : ''}><GiBookmarklet/></a>
  <a href="#Servico"onClick={()=>setActiveNav('#Servico')} className={activeNav==='#Servico' ?  'active' : ''}><RiServiceLine/></a>
  <a href="#contato"onClick={()=>setActiveNav('#contato')} className={activeNav==='#contato' ?  'active' : ''}><TbMessages /></a>


  
   
 </nav>
  )
}

export default Nav