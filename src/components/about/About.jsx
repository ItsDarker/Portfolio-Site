import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Months Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ World Wide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>
           <p>
           I am currently pursuing my bachelor's degree in the field of computer science at Velammal Institute Of Technology, Thiruvallur. I am a quick learner with hands-on experience in HTML & CSS. Right now Javascript fascinates me as to how the webpage's functionality can be manipulated.

I freely express my creativity and imagination by designing. I like books and spend my free time by engaging in hackathons and equiping myself with practical knowledge. I'm very much interested in development and coding and have undergone certifications in basic languages like java and Python. My short-term goals include gaining practical exposure and working in a reputed company. Whilst my long term goals include working my way up as an individual and raising my standard of living...
           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About