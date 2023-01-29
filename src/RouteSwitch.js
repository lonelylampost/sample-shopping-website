import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Homepage from "./components/homepage/scripts"
import FAQ from "./components/faq/scripts"
import ProductSearch from "./components/productsearch/scripts"
import ProductInfo from "./components/productinfo/scripts"
import ShoppingCartPage from "./components/shoppingcart/scripts"
import Checkout from "./components/checkout/scripts"
import { useContext } from "react"
import { bag } from "./App"
import { useNavigate } from "react-router-dom"
import products from "./components/productslist"
import { showCart } from './components/bagcontext'

const RouteSwitch = () => {
  let selectedProduct = useContext(bag)
  const navigate = useNavigate()
  const bagitems = useContext(bag)
  let letShowCart = useContext(showCart)

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

  for (let i = 0; i < document.getElementsByClassName('images').length; i++) {
    document.getElementsByClassName('images')[i].addEventListener('click', goToNewProduct)
  }

  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search">
            <Route path=":selectedFilterHere" element={<ProductSearch />} />
        </Route>
        <Route path="/product-info" element={ selectedProduct.length !== 0 ? <ProductInfo /> : <Navigate to ="/search" /> } />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  )
}

export default RouteSwitch

