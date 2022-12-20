import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styleFirst from './Contact.json'
import styleSecond from './ContactDark.json'
import "./Contact.css"

export default function Contact() {

    const [style, setStyle] = useState(styleFirst)

    const storeData = useSelector(function (state) {
        return state;
    })

    useEffect(() => {
        if (storeData.themeReverse === 0) {
            setStyle(styleSecond)
        } else {
            setStyle(styleFirst)
        }
    })

    const submitForm = (e) => {
        e.preventDefault();

        console.log(e)

    }

    return (
        <>
            <div style={style[0].contactHeading}><p style={style[0].contactText}><Link to='Contact' style={{ textDecoration: 'none' }}>Contact</Link></p></div>
            <div style={style[0].contactSection} className="flexItems">

                <p className="paragr" style={style[0].paragr}>Fusce eu elementum justo. Nunc vitae viverra purus. Sed sapien leo, imperdiet luctus mattis a, sodales quis elit. Curabitur sit amet pulvinar lectus, eu tincidunt neque. Nulla facilisi.</p>

                <form className="form" style={style[0].form}>

                    <label htmlFor="name" style={style[0].label}> Name: <br />
                        <input type="text" name='name' className='nameInput' style={style[0].input} />
                    </label> <br />

                    <label htmlFor="email" style={style[0].label}> Email: <br />
                        <input type="email" name="email" className='emailInput' style={style[0].input} />
                    </label> <br />

                    <label htmlFor="message" style={style[0].label}> Message: <br />
                        <input type="text" name="message" className='messageInput' style={style[0].input} />
                    </label> <br />

                    <button onClick={submitForm} className="submitButton">Submit</button>

                </form>
            </div>
        </>
    )
}