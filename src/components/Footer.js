import React from 'react'
import './Footer.css'

import flecha from '../assets/arriba.svg'
import { Link } from 'react-scroll'
import ig from '../assets/ig1.svg'
import lin from '../assets/lin1.svg'
import gh from '../assets/gh1.svg'

function Footer() {
    return (
        <div className="footer" >

            <Link
                to="header"
                smooth="true"
                spy="true"
                offset={0}
                duration={500}
            >
                <img alt="enlace" src={flecha} width="40px" height="40px" />
            </Link>

            <div className="footer__infoIcons" >
                <p><span role="img" aria-label="cohete" >🚀</span> Mis RRSS<span aria-label="cohete" role="img" >🚀</span>:</p>

                <a href="https://www.linkedin.com/in/%C3%B3scar-g%C3%B3mez-oliveira-932a951ab/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="linkedin" src={lin} width="30px" height="30px" />
                </a>
                <a
                    href="https://github.com/OscarGO14"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="github profile" src={gh} width="30px" height="30px" /></a>
                <a
                    href="https://www.instagram.com/y0u5_/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img alt="enlace" src={ig} width="30px" height="30px" /></a>
            </div>
            <p>Web made by ÓscarGO de GOW-WEB</p>
        </div>
    )
}

export default Footer
