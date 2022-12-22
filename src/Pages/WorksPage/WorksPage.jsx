import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './WorksPage.css'
import AsoiuDesign from './Photos/Asoiu--test.png'
import Design from './Photos/Desgin.png'

export default function WorksPage() {

    const storeData = useSelector(
        function(state) {
            return state;
        } 
    )

    const [workId, setWorkId] = useState(0)
    const [infoText, setInfoText] = useState(storeData.worksText[workId])
    const [imageOfWork , setImageOfWork] = useState(AsoiuDesign)

    const rightWork = (e) => {
        e.preventDefault()

        if(workId < storeData.worksText.length - 1) {
            setWorkId(workId + 1);
        }
    }

    const leftWork = (e) => {
        e.preventDefault()

        if(workId > 0) {
            setWorkId(workId - 1);
        }
    }

    useEffect(() => {
        console.log(workId)
        setInfoText(storeData.worksText[workId])
        setImageOfWork(() => {
            if(workId === 0) {
                setImageOfWork(AsoiuDesign)
            } else {
                setImageOfWork(Design)
            }
        })
    },[workId])

    return (
        <div className='worksPage'>
            <p className='text'>Works</p>

            <p className='info'>{infoText}</p>

            <button className='right' onClick={rightWork}>{""}</button>
            <span className='mainSection'> <img src={imageOfWork} alt="ASOIU Design" className='imageOnWorksPage' /> </span>
            <button className='left' onClick={leftWork}>{""}</button>

        </div>
    )
}