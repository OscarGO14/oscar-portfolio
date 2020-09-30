import React from 'react'
import './Header.css'

import flecha from './assets/abajo.svg'

function Header() {
    return (
        <div className="header">
            <nav id="nav" className="header__nav" >
                <a href="#" className="header__navLink">Inicio</a>
                <a href="#" className="header__navLink">Sobre Mí</a>
                <a href="#" className="header__navLink" >Resumen</a>
                <a href="#" className="header__navLink" >Proyectos</a>
                <a href="#" className="header__navLink">Contacto</a>
            </nav>
            <section id="info" className="header__info" >
                <h1>Soy Óscar G.O</h1>
                <p> Soy un <strong style={{ color: "white" }} >desarrollador web de ReactJS e ingeniero</strong> que vive en Galicia.</p>
                <p>Realizo proyectos como Free-lance y doy cursos de programación.</p>
                <div className="header__infoIcons" >
                    <a><img alt="enlace" src="https://www.flaticon.es/svg/static/icons/svg/733/733617.svg" width="40px" height="40px" /></a>
                    <a><img alt="enlace" src="https://www.flaticon.es/svg/static/icons/svg/733/733609.svg" width="40px" height="40px" /></a>
                    <a><img alt="enlace" src="https://www.flaticon.es/svg/static/icons/svg/1617/1617440.svg" width="40px" height="40px" /></a>

                </div>
            </section>
            <div className="header__more">
                <a><img alt="enlace" src={flecha} width="50px" height="50px" /></a>
            </div>
        </div>
    )
}

export default Header
