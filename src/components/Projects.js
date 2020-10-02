import React from 'react'
import './Projects.css'

import wavefit from '../assets/wavefit.png'
import amazon from '../assets/amazon.png'
import instagram from '../assets/isntagram.png'
import beaschange from '../assets/beaschange.png'

function Projects() {
    return (
        <div id="projects" className="projects">
            <h2>Mis últimos trabajos</h2>
            <section className="projects__content" >

                <a
                    href="https://wavefit.es"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={wavefit} width='300px' alt="wavefit" />
                        <p>Proyecto completo para wavefit.es con ReactJS</p>
                    </div>
                </a>

                <a
                    href="https://yousmazon.web.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={amazon} width='300px' alt="Amazon clon" />
                        <p>Amazon clon con ReactJS</p>
                    </div>
                </a>

                <a href="https://youstagram-48eb0.web.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={instagram} width='300px' alt="Instagram clon" />
                        <p>Instagram clon con ReactJS</p>
                    </div>
                </a>
                <a href="https://bscreact.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={beaschange} width='300px' alt="Instagram clon" />
                        <p>Blog de recetas 'BeasChange' con stack MERN</p>
                    </div>
                </a>

            </section>
        </div>
    )
}

export default Projects
