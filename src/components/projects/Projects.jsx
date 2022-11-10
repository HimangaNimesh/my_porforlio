import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/SQL.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is project name',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: IMG1,
    title: 'This is project name',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    image: IMG1,
    title: 'This is project name',
    github: '#',
    demo: '#'
  }
]

function Projects() {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='project_item'>
                <div className="project_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                {/*<div className="project_item-cta">
                  <a href={github} className='btn' target='_black' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_black' rel="noreferrer">Live Demo</a>
            </div>*/}
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects