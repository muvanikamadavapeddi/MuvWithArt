import React, {useState} from 'react';
import './ProductList.css';


function ProductList(){
    const [showItems ,setShowItems]=useState(false);
    return(
        <>
            <navbar className='navbar-items'>
                <div className="company_logo">MuvWithArt</div>
                <div className='navbar-left'>
                    <div className='nav-links'>
                        <a href="#stationary" onClick={() => navigateToProducts("#stationary")} >Stationary</a>
                        <a href="#arts" onClick={() => navigateToProducts('#arts')}>Arts</a>
                        <a href="#crafts" onClick={() => navigateToProducts('#crafts')}>Crafts</a>
                        <a href="#help" onClick={()=>navigateToProducts('#help')}>Help</a>
                    </div>
                    {/* <button className="details_button" onClick={() => setShowItems(!showItems)}>
                        Show Details
                    </button> */}
                </div>
            </navbar>
            
        </>
    );
}
export default ProductList;