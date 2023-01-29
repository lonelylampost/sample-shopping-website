import React from 'react'
import './styles.css'
import { CreateProducts } from '../products'
import { useNavigate, redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import products from '../productslist'

import { useContext } from 'react';
import { cart, cartNum, showCart } from '../bagcontext'
import { bag } from '../../App'

function ProductInfo() {
    let selectedProduct = useContext(bag)
    let letShowCart = useContext(showCart)

    const navigate = useNavigate()

    let cartItems = useContext(cart) 
    let cartItemsNum = useContext(cartNum) 

    const [bagAmount, setBagAmount] = useState(cartItems.length);
    let [currentDisplay, setCurrentDisplay] = useState(letShowCart);
    const [inputValue, setInputValue] = useState('')

    for (let i = 0; i < document.getElementsByClassName('images').length; i++) {
        document.getElementsByClassName('images')[i].addEventListener('click', function() {
            letShowCart = 'flex'
            setCurrentDisplay(letShowCart)
        })
      }

    
    function setBagItems(e) {
        e.preventDefault()
        for(let i = 0; i < products.length; i++) {
            if (e.target.className === products[i].name) {
                cartItems.push(products[i])
                cartItemsNum.push(parseInt(inputValue))
                setBagAmount(cartItems.length)
                if (cartItems.includes(e.target.className)) {
                    letShowCart = 'none'
                    setCurrentDisplay(letShowCart)
                }
            }
        }
    }

    function goToBag() {
        navigate('/shopping-cart')
    }

    


    useEffect(() => {        
        if (cartItems.length > 0) {
            document.getElementById('bag-counter').style.display = 'block'
        }
        if (letShowCart !== 'flex') {
            letShowCart = 'flex'
            setCurrentDisplay(letShowCart)
        }
    })

    return  <>
                <div id="bag-counter">!</div>
                <img id="bag-popup" src="./img/shoppingcart.svg" onClick={goToBag}/>
                <div id="imgdes">
                    <div id="lefty">
                        <img src={'./img/' + (selectedProduct)[0].image[0]} alt={(selectedProduct)[0].alt} />
                    </div>
                    <div id="righty">
                        <div id='title'>{(selectedProduct)[0].name}</div>
                        <div id='itemtype'>{(selectedProduct)[0].snippet}</div>
                        <div id='price'>{(selectedProduct)[0].price}</div>
                        <form id='purchase' style={{display: currentDisplay}}>
                            <input id='quantity' className={(selectedProduct)[0].name} type="number" name="quantity" min="1" max="99" onChange={(e) => setInputValue(e.target.value)}></input>
                            <input type="submit" id='bag' className={(selectedProduct)[0].name} onClick={setBagItems} />
                        </form>
                        <div id='item-des'>{(selectedProduct)[0].description}</div>
                    </div>
                </div>
                <div id="body-cont">
                    <div id="reccs">Recommended for you:</div>
                    <ul id="products">
                        <CreateProducts length={4}/>
                    </ul>
                </div>
            </>
}

export default ProductInfo