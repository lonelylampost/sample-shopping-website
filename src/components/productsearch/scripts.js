import React, {useContext, useEffect, useState, useRef} from 'react'
import './styles.css'
import { cart } from '../bagcontext'
import { CreateProducts } from '../products'
import { useNavigate, useParams } from 'react-router-dom'
import { bag } from '../../App'
import border from '../img/border.png'
import products from '../productslist'


let ProductSearch = () => {
    const navigate = useNavigate()
    let selectedProduct = useContext(bag)
    selectedProduct.length = 0
    let cartItems = useContext(cart) 

    let [bagDisplay, setBagDisplay] = useState('none') 
    const { selectedFilterHere } = useParams();
    const removeAllProducts = useRef()

    let [formSorted, setFormSorted] = useState(null)
    let [filterSet, setFilterSet] = useState(null)
    let [resorter, setResorter] = useState(null)
    let [newSort, setNewSort] = useState(null)

    let goToBag = () => {
        navigate('/shopping-cart')
    }

    useEffect(() => {
        if (cartItems.length > 0) {
            setBagDisplay('block')
        }
    });

    let reSort = (e) => {
        if (e.target.value === "lowtohigh") {
            setResorter(e.target.value)
        } else if (e.target.value === "hightolow") {
            setResorter(e.target.value)
        }
    }

    let MakeSidebar = () => {
        let keywordCheck = []
        products.map((product) => (
            product.keywords.map((keyword) => {
                if (!keywordCheck.includes(keyword)) {
                    keywordCheck.push(keyword)
                }
            })
        ))

        return (keywordCheck.map((keyword, index) => (
            <div key={index}>
            <input className='checkbox' id={keyword} type='checkbox' name={keyword} value={keyword} defaultChecked={selectedFilterHere === keyword ? true : false}></input>
            <label className='check' htmlFor={keyword}>{keyword}</label>
        </div>
        )))
    }

    let useFilter = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        setFormSorted(Object.fromEntries(formData.entries()))
    }

    useEffect(() => {
        if (formSorted) {
            setFilterSet(formSorted)
        }
    }, [formSorted])

    useEffect(() => {
        if (resorter) {
            setNewSort(resorter)
        }
    },[resorter])


    return  <>
                <div id="bag-counter" style={{display: bagDisplay}}>{cartItems.length}</div>
                <img id="bag-popup" src="../img/shoppingcart.svg" alt="shopping-cart"onClick={goToBag}/>
                <div id="top">
                    <img id="title-img" src={border} alt='border'/>
                    <div id="main-title" className="title"></div>
                </div>
                <div id="main">
                <div id="topics">
                    <form id="input" onSubmit={useFilter}>
                        <div>
                            <input className="checkbox" id="Instock" type="checkbox" name="Instock" value="Instock" />
                            <label className="check">In-stock</label>
                        </div>
                        <div>
                            <input className="checkbox" id="Onsale" type="checkbox" name="Onsale" value="Onsale" />
                            <label className="check">On sale</label>
                        </div>
                        <MakeSidebar />
                        <input id="parameter-btn" type="submit" value="Submit" />
                    </form>
                </div>
                    <div id="body-cont">
                        <div id="sorting">
                            <select name="inputdata" id="sort" onChange={reSort}>
                                <option value="recommended">Recommended</option>
                                <option value="lowtohigh">Price: low to high</option>
                                <option value="hightolow">Price: high to low</option>
                            </select>
                        </div>
                        <ul id="products" ref={removeAllProducts}>
                            <CreateProducts filter={filterSet} sort={newSort}/>
                        </ul>
                    </div>
                </div>
            </>
}

export default ProductSearch