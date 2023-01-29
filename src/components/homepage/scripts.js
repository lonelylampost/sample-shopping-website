import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import cutlery from '../img/cutlery.png'

import products from '../productslist'
import { CreateProducts } from '../products'
import { useNavigate } from 'react-router-dom';
import { cart } from '../bagcontext'
import { bag } from '../../App'
import {useContext, useEffect} from 'react'


function Homepage() {

    const navigate = useNavigate()

    let selectedProduct = useContext(bag)
    selectedProduct.length = 0

    let cartItems = useContext(cart) 
    useEffect(() => {
        if (cartItems.length > 0) {
            document.getElementById('bag-counter').style.display = 'block'
        }
    });

    function goToBag() {
        navigate('/shopping-cart')
    }


    return  <>
                <div id="bag-counter">!</div>
                <img id="bag-popup" src="./img/shoppingcart.svg" onClick={goToBag}/>
                <div id="slide-container">
                    <img className="slider" src={cutlery} alt="Image of a plate"/>
                </div>
                <div id="about">FORK & Co was created in 2022 to create beautiful and sustainable cutlery. 
                    We offer tableclothes and cutlery sets for all occasions at low prices, that fit our exacting design principles.
                    We hope you can find what you are searching for here.
                </div>
                <div id="body-text">New in stock!</div>
                <div id="body-cont">
                    <ul id="productslist">
                        <CreateProducts length={4}/>
                    </ul>
                </div>
            </>
}

export default Homepage
