import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import products from './productslist'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { selectedFilter, bag } from '../App'
import { showCart } from './bagcontext'


function CreateProducts(props) {

    let letShowCart = useContext(showCart)
    const navigate = useNavigate()
    const bagitems = useContext(bag)
    const { selectedFilterHere } = useParams();
    
    function goToNewProduct(e) {
        for(let i = 0; i < products.length; i++) {
            if (e.target.alt === products[i].alt) {
                bagitems.length = 0
                bagitems.push(products[i])
                navigate('/product-info')
                letShowCart = 'block'
            }
        }
    }


    function GetProducts() {
        let productsFiltered = []
        function filterer(item) {
            if (item.keywords.includes(selectedFilterHere) === true) {
                productsFiltered.push(item)
            }
        }

    if (selectedFilterHere !== undefined) {
        products.filter(filterer)
         if (props.length) {
             if (productsFiltered.length > props.length) {
                 productsFiltered.length = props.length
             }
         }
        
        return  <>
        {productsFiltered.map((product) => (
            <li className='product' key={product.id}>
                <img src={'../img/' + (product.image[0])} alt={product.alt} className='images' id={product.id} onClick={goToNewProduct} />
                <div className='name'>{product.name}</div>
                <div className='price'>{product.price}</div>
            </li>
        ))}
        </>
    } else {
        return  <>
        {products.map((product) => (
            <li className='product' key={product.id}>
                <img src={'./img/' + (product.image[0])} alt={product.alt} className='images' id={product.id} onClick={goToNewProduct} />
                <div className='name'>{product.name}</div>
                <div className='price'>{product.price}</div>
            </li>
        ))}
        </>
    }}



    return  <>
    <GetProducts />
    </>
    
}


export {CreateProducts}