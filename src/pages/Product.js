import React,{useContext,useState,useRef,useEffect} from 'react';
import {NavDropdown,Col,Row,OverlayTrigger} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../data/data'

import {Store} from "../context/store";
import ProductCompnt from '../components/ProductCompnt';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StandSec from '../components/StandSec';


function Product() {
    
    return (
        <>
            <Navbar />
            <br/>

            <ProductCompnt />
            <StandSec />
            <Footer/>
            </>
    )
}
export default Product;