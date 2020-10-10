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
                <p>Soy un desarrollador web 'full stack' especializado en Javascript y su ecosistema. Domino ReactJS y lo combino habitualmente con NodeJS para el backend, y MongoDB como base de datos, aunque recientemente he realizado proyectos con el BAAS de Google, Firebase.
                    <p>
                        Actualmente estoy formándome en PHP y bases de datos SQL.
                    </p>
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
