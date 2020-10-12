import React from 'react'
import './Header.css'

import flecha from '../assets/abajo.svg'
import { Link } from 'react-scroll'
import ig from '../assets/ig.png'
import lin from '../assets/lin.png'
import gh from '../assets/gh.png'

function Header() {
    return (
        <div id="header" className="header">
            <nav id="nav" className="header__nav" >
                <Link to="header"
                    smooth="true"
                    spy="true"
                    offset={0}
                    id="inicio"
                    duration={500} className="header__navLink">Inicio</Link>
                <Link
                    to="about"
                    smooth="true"
                    spy="true"
                    offset={0}
                    duration={500}
                    className="header__navLink"
                >
                    Sobre_Mí</Link>
                <Link to="resume"
                    smooth="true"
                    spy="true"
                    offset={0}
                    id="resumeOption"
                    duration={500}
                    className="header__navLink"
                >
                    Resumen</Link>
                <Link to="projects" smooth="true"
                    spy="true"
                    offset={0}
                    duration={500} className="header__navLink" >
                    Proyectos</Link>
                <Link to="contacto" smooth="true"
                    spy="true"
                    offset={0}
                    duration={500} className="header__navLink">
                    Contacto</Link>
            </nav>

            <section id="info" className="header__info" >
                <h1>Soy Óscar GO</h1>
                <p> <strong style={{ color: "white" }} >Desarrollador web de ReactJS</strong> que vive en Galicia.<br />
               Realizo proyectos como Free-lance y doy cursos de programación.</p>
                <div className="header__infoIcons" >
                    <a href="https://www.linkedin.com/in/%C3%B3scar-g%C3%B3mez-oliveira-932a951ab/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="linkedin" src={lin} width="40px" height="40px" />
                    </a>
                    <a
                        href="https://github.com/OscarGO14"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="github profile" src={gh} width="40px" height="40px" /></a>
                    <a
                        href="https://www.instagram.com/y0u5_/?hl=es"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="enlace" src={ig} width="40px" height="40px" /></a>

                </div>
            </section>

            <div className="header__more">
                <Link
                    to="about"
                    smooth="true"
                    spy="true"
                    offset={0}
                    duration={500}
                >
                    <img alt="enlace" src={flecha} width="40px" height="40px" />
                </Link>
            </div>

        </div>
    )
}

export default Header
