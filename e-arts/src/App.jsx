import React, { useState } from 'react'
import AboutUs from'./AboutUs'
import './App.css'

function App() {
  const [showProductList,setShowProductList]=useState(false);
  function handleGetStartedClick(){
    setShowProductList(true);
  }
  return (
    <>
      <div className="app-container">
        <div className={`landing-page${showProductList?'fade-out':''}`}>
          <div className='background-image'></div>
          <div className='content'>
            <div className="landing-content">
              <h1>Welcome to MuvWithArt</h1>
              <div className='divider'></div>
              <p>Where the creativity meets</p>
              <button onClick={handleGetStartedClick} className="get-started-btn">Get Started</button>
            </div>
            <div className='about-us-container'>
              <AboutUs/>
            </div>
          </div>
        </div>
        {/* <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div> */}
      </div>
    </>
  )
}

export default App
