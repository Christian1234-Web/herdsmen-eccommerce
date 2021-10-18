import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Table,Button,Form } from 'react-bootstrap';
import BodySlider from '../components/BodySlider';
import CardOne from '../components/CardOne';
import QualSec from '../components/QualSec';
import StandSec from '../components/StandSec';
import BestSec from '../components/BestSec';
import Footer from '../components/Footer';

// import formatCurrency from 'format-currency'


function Index() {
    

    return (
        <>
            <Navbar />
            <br/>

            <BodySlider />
            <CardOne />
            <QualSec />
            <StandSec />
            <BestSec />
            <Footer/>

            </>
    )
}
export default Index;