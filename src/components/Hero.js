import React, { useRef, useState, useEffect } from 'react'
import "../css/Hero.css"
import SearchIcon from '@material-ui/icons/Search'
import { useHistory } from "react-router-dom"

function Hero() {
    const history = useHistory()
    const inputRef = useRef()
    let local
    if (localStorage.getItem('cart') == null) {
        local = ['dog']
    }
    else {
        local = JSON.parse(localStorage.getItem('cart'))
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const search = inputRef.current.value

        if (search)
            history.push(`/s/${search}`)
    }

    return (

        <div className="hero">
            <img src="https://images.unsplash.com/photo-1606055854326-12a2fdcac6c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" className="hero__image" />
            <div className="hero__content">
                <div className="hero__contentWrapper">
                    <h1 className="hero__contentTitle">Flickr</h1>
                    <br />
                    <form onSubmit={handleSearchSubmit} className="hero__contentInput">
                        <SearchIcon className="header__icon" />
                        <input ref={inputRef} type="text" className="hero__contentInputField" placeholder="Search free photos" list="browsers" name="browser" id="browser" />
                        <input type="submit" value="Submit" className="header__button" />                        <datalist id="browsers">
                            {local.map((data, index) => (
                                <option value={data} key={index} />
                            ))}
                        </datalist>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Hero
