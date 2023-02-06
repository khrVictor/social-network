import React from "react";
import f from './footer.module.css'
import inst from '../img/instagram.png'
import face from '../img/facebook.png'
import tele from '../img/telegram.png'

const Footer = () => {
    return (
        <div className={f.footer}>
            <div className={f.footer_numbers}>
                <h3>FOOTER</h3>
                <a href="tel:+380955265812">380955265812</a>
                <a href="#">676-8-27</a>
            </div>
            <div className={f.partners}>
                <ul>
                    <li>Coca-cola</li>
                </ul>
                <ul>
                    <li>Pepsi</li>
                </ul>
                <ul>
                    <li>Sprite</li>
                </ul>

            </div>
            <div className={f.social}>
                <a href="#"><img src={inst} /></a>
                <a href="#"><img src={face} /></a>
                <a href="#"><img src={tele} /></a>
            </div>
        </div>
    )
}

export default Footer;