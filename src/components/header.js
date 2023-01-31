import React, { useEffect } from 'react'
import logo from './img/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'



let Header = () => {

  const navigate = useNavigate();
  const [selectedFilterHere, setSelectedFilterHere] = useState('')

  let toSearchPage = (e) => {
    setSelectedFilterHere(e.target.name)
  }

  let toHomepage = (event) => {
    navigate('./homepage');
  }

  useEffect(() => {
    if(selectedFilterHere !== '') {
      navigate(`./search/${selectedFilterHere}`)
    }
  }, [selectedFilterHere])


    return  <div id="header">
                <div id="headerimg">
                  <img id="logo" src={logo} alt="logo" onClick={toHomepage}></img>
                </div>
              <div id="header-container">
                <div className="dropdown">
              <div className="dropbtn">Plates and Utensils</div>
              <div className="dropdown-content">
                <a className="productlink" name='Table Sets' onClick={toSearchPage}>Table Sets</a>
                <a className="productlink" name='Plates' onClick={toSearchPage}>Plates</a>
                <a className="productlink" name='Spoons, forks and knives' onClick={toSearchPage}>Spoons, forks and knives</a>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropbtn">Kitchen knives</div>
              <div className="dropdown-content">
                <a className="productlink" name='Luxury knives' onClick={toSearchPage}>Luxury knives</a>
                <a className="productlink" name='Specialty knives' onClick={toSearchPage}>Specialty knives</a>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropbtn">Home Decor</div>
              <div className="dropdown-content">
                <a className="productlink" name='Ornaments' onClick={toSearchPage}>Ornaments</a>
                <a className="productlink" name='Gifts' onClick={toSearchPage}>Gifts</a>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropbtn">Kitchen Appliances</div>
              <div className="dropdown-content">
                <a className="productlink" name='Mixers and Blenders' onClick={toSearchPage}>Mixers and Blenders</a>
                <a className="productlink" name='Food Processors' onClick={toSearchPage}>Food Processors</a>
                <a className="productlink" name='Other appliances' onClick={toSearchPage}>Other appliances</a>
              </div>
            </div>
      </div>
  </div>
}






export { Header}