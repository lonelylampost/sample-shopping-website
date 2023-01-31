import React, {useContext, useEffect, useState} from 'react'
import './styles.css'
import { cart } from '../bagcontext'
import { CreateProducts } from '../products'
import { useNavigate } from 'react-router-dom'
import { bag } from '../../App'
import border from '../img/border.png'


let ProductSearch = () => {
    const navigate = useNavigate()
    let selectedProduct = useContext(bag)
    selectedProduct.length = 0
    let cartItems = useContext(cart) 
    let [bagDisplay, setBagDisplay] = useState('none') 
    
    let goToBag = () => {
        navigate('/shopping-cart')
    }

    useEffect(() => {
        if (cartItems.length > 0) {
            setBagDisplay('block')
        }
    });

    return  <>
                <div id="bag-counter" style={{display: bagDisplay}}>{cartItems.length}</div>
                <img id="bag-popup" src="../img/shoppingcart.svg" alt="shopping-cart"onClick={goToBag}/>
                <div id="top">
                    <img id="title-img" src={border} alt='border'/>
                    <div id="main-title" className="title"></div>
                </div>
                <div id="main">
                    <div id="body-cont">
                        <ul id="products">
                            <CreateProducts />
                        </ul>
                    </div>
                </div>
            </>
}

export default ProductSearch