import React from 'react'
import './Resume.css'
//imagenes
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import typescript from "../assets/typescript.svg"
import git from "../assets/git.png"
import mongodb from "../assets/mongodb.png"
import css from "../assets/css.svg"
import sass from "../assets/sass.svg"
import firebase from "../assets/firebase.png"

function Resume() {
    return (
        <div id="resume" className="resume">
            <div className="resume__container" >
                <div className="resume__containerTitle">
                    <h2>Formación
                    </h2>
                </div>
                <div className="resume__containerInfo">
                    <h3 >Universidad de la Coruña</h3>
                    <p>Grado en Ingeniería Naval y Oceánica, 2020</p>
                </div>
            </div>
            <hr style={{ width: '70%', margin: '0 auto' }} />
            <div className="resume__container" >
                <div className="resume__containerTitle">
                    <h2 >Trabajo</h2>
                </div>

                <div className="resume__containerInfo">
                    <h3 > Free-Lance </h3>
                    <p>Web para clínica deportiva Wavefit, en Agosto 2020. </p>
                    <h3 >Maessa</h3>
                    <p> Ingeniero en el proyecto 'Havila' del astillero Barreras (Vigo), en 2019.</p>
                </div>
            </div>
            <hr style={{ width: '70%', margin: '0 auto', color: 'lightgray' }} />

            <div className="resume__container" >
                <div className="resume__containerTitle">
                    <h2>Habilidades</h2>
                </div>
                <div className="resume__containerInfo">

                    <div className="resume__containerTechs">
                        <img width="100px" height="100px" src={typescript} alt="typescript" />
                        <img width="100px" height="100px" src={react} alt="react" />
                        <img width="100px" height="100px" src={nodejs} alt="nodejs" />
                    </div>
                    <div className="resume__containerTechs">

                    </div>
                    <div className="resume__containerTechs">
                        <img width="100px" height="100px" src={css} alt="css3" />
                        <img width="100px" height="100px" src={sass} alt="sass" />
                    </div>
                    <div className="resume__containerTechs">
                        <img width="100px" height="100px" src={mongodb} className="circle" alt="mongodb" />
                        <img width="100px" height="100px" src={firebase} alt="firebase" />
                        <img width="100px" height="100px" src={git} alt="git" />
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Resume
