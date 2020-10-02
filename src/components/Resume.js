import React from 'react'
import './Resume.css'
function Resume() {
    return (
        <div id="resume" className="resume">
            <div className="resume__container" >
                <div className="resume__containerTitle">
                    <h2>Educación</h2>
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
                    <p>Proyecto para clínica deportiva Wavefit.</p>
                    <h3 >Maessa</h3>
                    <p> Ingeniero en proyecto 'Havila' de astillero Barreras (Vigo).</p>
                </div>
            </div>
            <hr style={{ width: '70%', margin: '0 auto', color: 'lightgray' }} />
            <div className="resume__container" >
                <div className="resume__containerTitle">
                    <h2>Habilidades</h2>
                </div>
                <div className="resume__containerInfo">
                    <h4>ReactJS</h4>
                    <div className="progressbars"><p style={{ width: '80%' }}></p></div>
                    <h4>NodeJS</h4>
                    <div className="progressbars"><p style={{ width: '65%' }}></p></div>
                    <h4>CSS</h4>
                    <div className="progressbars"><p style={{ width: '75%' }}></p></div>
                    <h4>MongoDB</h4>
                    <div className="progressbars"><p style={{ width: '60%' }}></p></div>
                    <h4>GIT</h4>
                    <div className="progressbars"><p style={{ width: '55%' }}></p></div>
                </div>
            </div>

        </div>
    )
}

export default Resume