import React, { useState } from 'react'
import './Contacto.css'
import { db } from '../firebase'
import firebase from 'firebase'

function Contacto() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')



    const sendMail = (e) => {
        e.preventDefault()

        db.collection('emails').add({
            name,
            mail,
            message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        alert('Mail enviado con éxito. Pronto me pondré en contacto contigo.')
        setName('')
        setMail('')
        setMessage('')
    }

    return (
        <div id="contacto" className="contacto" >
            <h2>Contacta conmigo!</h2>
            <form className="contacto__form" >

                <p>Tus datos de contacto:</p>
                <input placeholder="Nombre..." type="text" value={name} onChange={(e) => { setName(e.target.value) }} />

                <p>E-mail:</p>
                <input placeholder="Campo obligatorio..." type="text" value={mail} onChange={(e) => { setMail(e.target.value) }} />

                <p>Mensaje:</p>
                <textarea placeholder="Campo obligatorio..." value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>

                <button disabled={!mail || !message} onClick={sendMail} type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Contacto  
