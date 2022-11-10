import React from 'react'
import './About.css'
import ME from '../../assets/pic.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
         <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="" />
          </div>
         </div>
         <div className="about__content">
          <p>A diplomat in Information Technology, Institute of Technology University of Moratuwa who is passionate about Fullstack Development. I'm really enjoying learning new languages and frameworks. I also enjoy UI designing in general.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

         </div>
      </div>
    </section>
  )
}

export default About