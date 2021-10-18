import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form } from 'react-bootstrap';
import FreshImg from '../images/freshImg.png';
import BestImg from '../images/bestImg.png';
import WShop from '../images/w-shop.png';

// import formatCurrency from 'format-currency'


function BestSec() {
    

    return (
        <>
            <section className="bstImg">
                <div>
<img src={FreshImg}/>
                </div>
                <div>
                <img src={BestImg}/>
                </div>
                <div>
                <img src={WShop}/>
                </div>
           </section>

            </>
    )
}
export default BestSec;