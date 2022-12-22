import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './BlogMain.css'

export default function BlogMain() {

    // const [style, setStyle] = useState(styleFirst)

    return (
        <div className='blogsPage'>

            <p className='textBlog'>Blogs</p>

            <span className='mainSection'>
                <div className="paragrafOfBlog"><Link to='BlogFirst' style={{ textDecoration: 'none', color: '#21252B' }}>consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendNam ut ligula odio....</Link></div>
                <div className="paragrafOfBlog"><Link to='BlogSecond' style={{ textDecoration: 'none', color: '#21252B' }}>Pellentesque et mauris volutpat. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hend...</Link></div>
                <div className="paragrafOfBlog">consectetur adipiscing elit. Cras a nulla enim. Pellentesque et mauris volutpat, dignissim libero at, accumsan est. Sed molestie non mauris at cursus. Vivamus pulvinar pretium justo. Nam ut ligula odio. Integer a maximus erat, tincidunt finibus lectus. Integer dictum felis sem, quis hendNam ut ligula odio....</div>
                <button className='buttonToRight'>{">"}</button>            
            </span>

        </div>
    )
}