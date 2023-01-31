import React, { useContext, useState, useEffect } from 'react'
import './styles.css'
import border from '../img/border.png'
import products from '../productslist'
import { cart, cartNum } from '../bagcontext'
import { useNavigate } from 'react-router-dom'

let ShoppingCartPage = () => {

    let cartItems = useContext(cart)
    let cartItemsNum = useContext(cartNum)
    const navigate = useNavigate()

    const [absoluteTotal, setAbsoluteTotal] = useState(0)
    const [displayEmpty, setDisplayEmpty] = useState('none')
    const [showEmpty, setShowEmpty] = useState('block')
    const [onChangeEvent, setOnChangeEvent] = useState([])

    let removeProductIndex


    let goToCheckout = () => {
        if (cartItems.length !== 0){
        navigate('/checkout')
    }}

    let removeItem = (e) => {
        for (let i = 0; i < products.length; i++) {
            if (e.target.name === products[i].name) {
                setOnChangeEvent([...onChangeEvent, products[i]])
                removeProductIndex = i
                let tempIndex = cartItems.indexOf(products[i])
                cartItems.splice(tempIndex, 1)
            }
        }
    }

    let MakeItems = () => {
        if (cartItems !== [] ) {
            return <>
            {cartItems.map((indiv, index) =>  (
                <li className='item' id={indiv.id} key={indiv.id} name={indiv.name} style={ !cartItems.some(e => e.name === (indiv.name)) ? {display: 'none'} : {display: 'flex'} }>
                    <img className='item-img' src={"./img/" + indiv.image[0]} alt={indiv.alt} />
                    <div className='item-des'>
                        <div className='title'>{indiv.name}</div>
                        <div className='snippet'>{indiv.description}</div>
                    </div>
                    <div className='important'>
                        <div className='quantity'>{cartItemsNum[index]} {cartItemsNum[index] > 1 ? 'items' : 'item'}</div>
                        <div className='price'>{indiv.price}</div>
                        <div className='adding'>Adding to:</div>
                        <div className='math'>{(indiv.price) * (cartItemsNum[index])}</div>
                    </div>
                    <button className='remove' name={indiv.name} value={(indiv.price) * (cartItemsNum[index])}onClick={removeItem}>X</button>
                </li>))}
            </>
        } else {
            setDisplayEmpty('flex')
            setShowEmpty('none')
        }

    }

  useEffect(() => {
    if (removeProductIndex > -1) {
        cartItemsNum.splice([removeProductIndex], 1)
    }
    if (cartItems.length === 0) {
        setDisplayEmpty('flex')
        setShowEmpty('none')
    }
    let temp = []
    for (let i = 0; i < cartItems.length; i++) {
        temp.push(cartItems[i].price * cartItemsNum[i])
        setAbsoluteTotal(temp.reduce((a, b) => a + b, 0))
    }
 }, [onChangeEvent])


    return  <>
            <img id="border" src={border} alt='border' />
                <div id="main">
                    <ul id="item-list">
                        <div id='total'style={{display: showEmpty}}>{cartItems.length} items, adding to {absoluteTotal}</div>
                        <div id="empty" style={{display: displayEmpty}}>
                            <img id='emptycart' src="../img/shoppingcart.svg" alt="empty shopping cart"/>
                                There's nothing here...
                        </div>
                        <MakeItems />
                        <div id="bottom">
                            <button id="checkout" onClick={goToCheckout} style={{display: showEmpty}}>Checkout</button>
                        </div>
                    </ul>
                </div>
            </>
}

export default ShoppingCartPage