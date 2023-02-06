import React from "react";
import h from './header.module.css'
import logo from '../img/img_logo.png'
import user from '../img/user.png'
import korz from '../img/corz.png'

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.logo_heade_input}>
                <img src={logo} />
                <input type='search' placeholder="search" />
            </div>
            <div className={h.user_wrapper}>
                <a href=""><img width='30' src={user} /></a>
                <a href=""><img width='30' src={korz} /></a>
            </div>   
        </div>
    )
}

export default Header;