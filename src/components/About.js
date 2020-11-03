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
                <p>Soy un desarrollador web especializado en Javascript y PHP. Domino diferentes frameworks de JavaScript como React o Vue para el frontend y los combino habitualmente con NodeJS o PHP para el backend.
                MongoDB y MySQL son las alternativas que manejo para bases de datos junto con Firebase.
               <p>
                        Busco nuevos retos además de aceptar proyectos como Free-lance e impartir clases de programación.</p>
                </p>
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
