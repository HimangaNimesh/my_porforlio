import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/himanganimesh/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/HimangaNimesh' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://www.facebook.com/profile.php?id=100075998283360' target="_blank" rel="noreferrer"><BsFacebook/></a>
        
    </div>
  )
}
