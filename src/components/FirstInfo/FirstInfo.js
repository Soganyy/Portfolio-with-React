import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function FirstInfo() {

    const [color, setColor] = useState('#EDFEEB');
    const [cssName, setName] = useState();

    const dis = useDispatch();
    const storeData = useSelector(function (state) {
        return state;
    })

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    const changeTheme = () => {

        if (storeData.themeReverse === 0) {
            setColor('#21252B');
            setName('./FirstInfoReverse.css');
        } else {
            setColor('#EDFEEB');
            setName('./FirstInfo.css');
        }

        dis({
            type: 'changeThemeReverse'
        })

    }

    return (
        <div>
            <span className="rectFirstBackground"></span>
            <div>
                <button className="rect1" onClick={changeTheme}></button>
                <button className="rect2" onClick={changeTheme}></button>
            </div>
            <div className="hello"><p className="textHello">Hello;</p></div>
            <div className="info"><p className="infoText">I’m Matin Mammadli.<br />
                I like making fun, interactive things with code.<br />
                I also try to design.</p>
            </div>
        </div>
    )
}