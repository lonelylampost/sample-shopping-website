import React from 'react'
import './styles.css'
import border from '../img/border.png'

import { useNavigate } from 'react-router-dom';
import { cart } from '../bagcontext'
import {useContext, useEffect, useState} from 'react'
import { bag } from '../../App'

function FAQ() {

    const navigate = useNavigate()
    let selectedProduct = useContext(bag)
    selectedProduct.length = 0
    let cartItems = useContext(cart) 
    let [bagDisplay, setBagDisplay] = useState('none') 

    useEffect(() => {
        if (cartItems.length > 0) {
            setBagDisplay('block')
        }
    });

    function goToBag() {
        navigate('/shopping-cart')
    }

    return  <>
                <div id="bag-counter" style={{display: bagDisplay}}>{cartItems.length}</div>
                <img id="bag-popup" src="./img/shoppingcart.svg" alt="shopping-cart" onClick={goToBag}/>
                <img id="border" src={border} alt="border" />
                <div id='main-body'>
                    <div className="big">FORK & Co Company Policies</div>
                    <div className="mid">FORK & Co Mission Statement</div>
                    <div className="about">FORK & Co was created in 2022 to create beautiful and sustainable cutlery. 
                    We offer tableclothes and cutlery sets for all occasions at low prices, that fit our exacting design principles.
                    We hope you can find what you are searching for here.</div>
                    <div className="mid">Shipping Policies</div>
                    <div className="about">FORK & Co only ships within Canada.</div>
                    <div className="mid">Contact Us</div>
                    <div className="about">Business Hours : 9AM - 5PM, Monday - Saturday</div>
                    <div className="about">We can be reached at 1-800-454-4566, or by our email at forkco@gmail.com</div>
                </div>
            </>
}

export default FAQ