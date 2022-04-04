import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about">
        <h1>About us: </h1>
        <p>We're four full-stack JavaScript developers working as consultants for School of Applied Technology in Stockholm. Garden JS is our graduation project, developed in two weeks using agile methods.</p>
        <div className="about__developers">
            <article className="developers__person">
                <img src="" alt="" />
                <h3 className="person--name">Martin Pettersen</h3>
                <p><a href="">GitHub</a> | <a>LinkedIn</a></p>
            </article>
            <article className="developers__person">
                <img src="" alt="" />
                <h3 className="person--name">Martin Pettersen</h3>
                <p><a href="">GitHub</a> | <a>LinkedIn</a></p>
            </article>
            <article className="developers__person">
                <img src="" alt="" />
                <h3 className="person--name">Martin Pettersen</h3>
                <p><a href="">GitHub</a> | <a>LinkedIn</a></p>
            </article>
            <article className="developers__person">
                <img src="" alt="" />
                <h3 className="person--name">Martin Pettersen</h3>
                <p><a href="">GitHub</a> | <a>LinkedIn</a></p>
            </article>
        </div>
        <footer className='about__footer'>
          <button><Link to='/'>Back to Garden</Link></button>
        </footer>
    </section>
  )
}

export default About