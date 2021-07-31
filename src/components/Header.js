import React, { useState, useRef, useEffect } from 'react'
import "../css/Header.css"
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import { useHistory } from "react-router-dom"

function Header() {
    const history = useHistory()


    const goToHomePage = () => history.push('/')

    return (
        <div>
            <div className="header__wrapper">
                <div className="header">
                    <div className="header__right">
                        <ArrowBackOutlinedIcon className="header__rightAvatar" onClick={goToHomePage} />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Header
