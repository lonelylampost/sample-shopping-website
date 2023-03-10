import React from 'react'
import { useNavigate } from 'react-router-dom';


let Footer = () => {

    const navigate = useNavigate();

    let goToFAQ = () => {
        navigate('/faq')
    }


    return  <footer>
                <div id="footer-cont">
                    <div id="left">
                        <a onClick={goToFAQ}>About Us</a>
                        <a onClick={goToFAQ}>Shipping</a>
                        <a onClick={goToFAQ}>Contact us</a>
                    </div>
                    <div id="right">
                        <div id="rightright">
                        <input id="foremailsubmit"placeholder="YourEmail@email.com" />
                        <button id="emailsubmit" onClick={submitEmail}>{'>'}</button>
                    </div>
                    <div id="input">Join our monthly Newsletter!</div>
                </div>
            </div>
            <div id="footerfooter">Copyright 2023 - Digital Design Porfolio</div>
            </footer>
}

let submitEmail = () => {
    if (document.getElementById('foremailsubmit').value !== "") {
        document.getElementById('foremailsubmit').textContent = ''
        document.getElementById('input').textContent = 'Thank you!'
    }
}

export {submitEmail , Footer}