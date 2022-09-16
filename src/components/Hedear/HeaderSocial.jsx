import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithubAlt} from 'react-icons/fa'
import{FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className="hedear_social">
        <a href='https://www.linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithubAlt/></a>
        <a href='https://dribbble.com' target="_blank"><FiDribbble/></a>
        
    </div>
  )
}

export default HeaderSocial