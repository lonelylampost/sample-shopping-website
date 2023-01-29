import React, {useContext, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { cart } from '../bagcontext'
import { CreateProducts } from '../products'
import { useNavigate } from 'react-router-dom'
import { bag } from '../../App'
import border from '../img/border.png'


function ProductSearch() {
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
                <img id="bag-popup" src="../img/shoppingcart.svg" onClick={goToBag}/>
                <div id="top">
                    <img id="title-img" src={border} alt='border image'/>
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