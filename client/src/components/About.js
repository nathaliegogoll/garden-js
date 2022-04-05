import React from 'react'
import { Link } from 'react-router-dom'
import marinaKinalone from '../resources/developers/marinakinalone.png'
import nathalieGogoll from '../resources/developers/nathaliegogoll.png'
import martin from '../resources/developers/martin.png'
import seyfettin from '../resources/developers/Seyfettin.png'

const About = () => {
  return (
    <section className="about">
        <h1 className="about__title">About us</h1>
        <p className="about__description">We're four full-stack JavaScript developers working as consultants for School of Applied Technology in Stockholm. Garden JS is our graduation project, developed in two weeks using agile methods.</p>
        <div className="about__developers">
            <h2 className="developers__title">Our team</h2>
            <article className="developers__person">
                <img src={marinaKinalone} alt="Marina Kinalone Simonnet" />
                <h3 className="person--name">Marina Kinalone Simonnet</h3>
                <p className="person--links"><a href="https://github.com/marinakinalone"  target="_blank" rel="noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/marinakinalone-simonnet/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </article>
            <article className="developers__person">
                <img src={seyfettin} alt="Seyfettin Baskara" />
                <h3 className="person--name">Seyfettin Baskara</h3>
                <p className="person--links"><a href="https://github.com/SeyfBaskara" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/seyfettinbaskara/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </article>
            <article className="developers__person">
                <img src={nathalieGogoll} alt="Nathalie Jacobsson Gogoll" />
                <h3 className="person--name">Nathalie Jacobsson Gogoll</h3>
                <p className="person--links"><a href="https://github.com/nathaliegogoll" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/nathaliejacobssongogoll/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </article>
            <article className="developers__person">
            <img src={martin} alt="Martin" />
                <h3 className="person--name">Martin Pettersen</h3>
                <p className="person--links"><a href="https://github.com/MartinPettersen" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/martinpettersen89/?locale=en_US" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </article>
        </div>
        <footer className='about__footer'>
          <button><Link to='/'>Back to Garden</Link></button>
        </footer>
    </section>
  )
}

export default About