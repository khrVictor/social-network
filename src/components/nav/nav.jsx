import React from "react";
import n from './nav.module.css'


const Nav = () => {
    return(
        <div className={n.nav}>
            <a href="#" className={n.link}>header</a>
            <a href="#" className={n.link}>nav</a>
            <a href="#" className={n.link}>profile</a>
            <a href="#"className={n.link}>footer</a>
        </div>
    )
}

export default Nav;