import React from 'react'
import './FirstInfo.css'

export default function FirstInfo() {
    return (
        <>
            <span className="rectFirstBackground"></span>
            <div>
                <span className="rect1"></span>
                <span className="rect2"></span>
            </div>
            <div className="hello"><p className="textHello">Hello;</p></div>
            <div className="info"><p className="infoText">I’m Matin Mammadli.<br />
                I like making fun, interactive things with code.<br />
                I also try to design.</p>
            </div>
        </>
    )
}