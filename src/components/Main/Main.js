import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styleFirst from './styleFirst.json'
import styleSecond from './styleSecond.json'

import Blog from '../Blog/Blog'
import Works from '../Works/Works'
import About from '../About/About'
import Contact from '../Contact/Contact'


export default function FirstInfo() {

    const storeData = useSelector(function (state) {
        return state;
    })

    const [color, setColor] = useState('#EDFEEB');
    const [style, setStyle] = useState(storeData.themeReverse ? styleFirst : styleSecond);

    const dis = useDispatch();

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    const changeTheme = () => {

        if (storeData.themeReverse === 0) {
            setColor('#EDFEEB');
            setStyle(styleFirst);
        } else {
            setColor('#21252B');
            setStyle(styleSecond);
        }

        dis({
            type: 'changeThemeReverse'
        })

    }

    return (
        <div>
            <span style={style[0].rectFirstBackground}></span>
            <div>
                <button style={style[0].rect1} onClick={changeTheme}></button>
                <button style={style[0].rect2} onClick={changeTheme}></button>
            </div>
            <div style={style[0].hello}><p style={style[0].textHello}>Hello;</p></div>
            <div style={style[0].info}><p style={style[0].infoText}>I’m Matin Mammadli.<br />
                I like making fun, interactive things with code.<br />
                I also try to design.</p>
            </div>

            <Blog />
            <Works />
            <About />
            <Contact />

        </div>
    )
}