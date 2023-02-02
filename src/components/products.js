import React from 'react'
import products from './productslist'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { bag } from '../App'
import { showCart } from './bagcontext'


let CreateProducts = (props) => {

    let letShowCart = useContext(showCart)
    const navigate = useNavigate()
    const bagitems = useContext(bag)
    const { selectedFilterHere } = useParams();
    
    let goToNewProduct = (e) => {
        for(let i = 0; i < products.length; i++) {
            if (e.target.alt === products[i].alt) {
                bagitems.length = 0
                bagitems.push(products[i])
                navigate('/product-info')
                letShowCart = 'block'
            }
        }
    }


    let GetProducts = () => {
        let productsFiltered = []

        function filterer(item) {
            if (item.keywords.includes(selectedFilterHere) === true) {
                productsFiltered.push(item)
            }
        }

        function propsFilterer(item) {
            for(let i = 0; i < 1; i++) {
                let pass = true
                for (let a = 0; a < Object.keys(props.filter).length ; a++) { 
                    if (item.keywords.includes(Object.values(props.filter)[a])) {
                    } else {
                        if (Object.values(props.filter)[a] === 'Instock' || Object.values(props.filter)[a] === 'Onsale') {
                        } else {
                            pass = false
                        }
                    }
                }
                if (Object.values(props.filter)[0] === 'Instock' && item.instock === false) {
                    pass = false
                }
                if (props.filter.hasOwnProperty('Onsale') && item.sale === false) {
                    pass = false
                }

                if (pass && !productsFiltered.includes(item)) {
                    productsFiltered.push(item)
                } 
            }
        }

        if (props.filter) {
            products.filter(propsFilterer)
            if (props.length) {
                if (productsFiltered.length > props.length) {
                    productsFiltered.length = props.length
                }
            }
            if (props.sort) {
                if (props.sort === 'lowtohigh') {
                    productsFiltered.sort((a, b) => a.price - b.price);
                } else if (props.sort === 'hightolow'){
                    productsFiltered.sort((a, b) => b.price - a.price);
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



        } else if (selectedFilterHere !== undefined) {
            products.filter(filterer)
            if (props.length) {
                if (productsFiltered.length > props.length) {
                    productsFiltered.length = props.length
                }
            }
            if (props.sort) {
                if (props.sort === 'lowtohigh') {
                    productsFiltered.sort((a, b) => a.price - b.price);
                } else if (props.sort === 'hightolow'){
                    productsFiltered.sort((a, b) => b.price - a.price);
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
            let productsFiltered = products.map(item => ({...item})) 
            if (props.length) {
                if (productsFiltered.length > props.length) {
                    productsFiltered.length = props.length
                }
            }
            if (props.sort) {
                if (props.sort === 'lowtohigh') {
                    productsFiltered.sort((a, b) => a.price - b.price);
                } else if (props.sort === 'hightolow'){
                    productsFiltered.sort((a, b) => b.price - a.price);
                }
            }
            return  <>
            {productsFiltered.map((product) => (
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