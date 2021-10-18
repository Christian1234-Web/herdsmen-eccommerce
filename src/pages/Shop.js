import React,{useContext,useState,useRef,useEffect} from 'react';
import {NavDropdown,Col,Row,OverlayTrigger} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data/data'

import {Store} from "../context/store";
import ShopCompnt from '../components/ShopCompnt';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Shop(props) {
 
  let store = useContext(Store);
  let [product, setProduct] = store.storeProduct;

  return (
     <>
      <Navbar />
      <br/>

      <section className="shopContainer">
        <div className="flex shopSec-1">
          <div>
      <p>1-24 of over 6,000 results</p>
          </div>
          <div>

            <NavDropdown title="Sort by: Feature" id="basic-nav-dropdown"
              className="text" style={{ padding: '1px', color: '#000', borderRadius: '5px', backgroundColor: '#D5D9D9', borderColor: '#adb1b8 #a2a6ac #8d9096' }}>
        <NavDropdown.Item href="#action/3.1">All document</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Arts & Crafts</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Automotive</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Baby</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Beauty and personal care </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Computers</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Digital music</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
          </div>
        </div>

        <div className="shopSec-2">
         
          
          <div className="shopCompGp">
            <div className="">
             
              {product.map((item, index) => {
                if (item.category === 'women') {
                  return (

                    <ShopCompnt
                    key={index}
                  name={item.name}
                      image={item.image}
                      price={item.price}
                  category={item.category}
                //   quantity={item.quantity}
                //   StarImg={StarImg}
                      id={item.id}
                    />
              )  }
            })}
            </div>
           
            
            <div className="shopHelp">
              <div>
                <h5>Need help?</h5>
              </div>
              <div>
                <Link to="">Visit the help section</Link> or <Link to="">contact us</Link>  
              </div>
            </div>
        
          </div>
  
        </div>
        <Footer/>
</section>
    </>
  )
}
export default Shop;