import React from 'react'
import './About.css'
import foto from '../assets/foto.jpg'

function About() {
    return (
        <div id="about" className="about">
            <div className="about__avatar" >
                <img src={foto} width="150px" alt="avatar" />
            </div>
            <section className="about__section">
                <h2>Sobre Mí</h2>
                <p>Me llamo Óscar, soy un desarrollador web especializado en ReactJS, con conocimientos full stack en NodeJS y Firebase. Busco nuevos retos además de aceptar proyectos como Free-lance e impartir clases de programación.</p>
                <br />
                <h2>Detalles de contacto:</h2>
                <p>Óscar Gómez Oliveira</p>
                <p> Vigo, Galicia</p>
                <p> 628 55 89 67 </p>
                <p> ogo53140@gmail.com </p>
            </section>
        </div>
    )
}

export default About
