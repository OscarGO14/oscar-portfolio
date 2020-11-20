import React from 'react'
import './Projects.css'
import wavefit from '../assets/wavefit.png'
import relojeria from '../assets/relojeria.png'
import instagram from '../assets/isntagram.png'
import beaschange from '../assets/beaschange.png'
import silvestre from '../assets/silvestre.png'

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
                        <p>Proyecto completo para wavefit.es con ReactJS y Firebase.</p>
                    </div>
                </a>
                <a href="https://pedrosilvestre.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={silvestre} width='300px' alt="Instagram clon" />
                        <p>Web para fotógrafo profesional, con ReactJS y firebase.</p>
                    </div>
                </a>
                <a
                    href="https://relojeriajoyeriagomez.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={relojeria} width='300px' alt="Amazon clon" />
                        <p>Web para Relojería Gómez con GatsbyJS. </p>
                    </div>
                </a>
                <a href="https://bscreact.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={beaschange} width='300px' alt="Instagram clon" />
                        <p>Blog de recetas 'BeasChange' con stack MERN.</p>
                    </div>
                </a>

                <a href="https://youstagram-48eb0.web.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="projects__contentItems">
                        <img src={instagram} width='300px' alt="Instagram clon" />
                        <p>Clon de Instagram con ReactJS, autenticación y base de datos.</p>
                    </div>
                </a>




            </section>
        </div>
    )
}

export default Projects
