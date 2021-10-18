import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form } from 'react-bootstrap';
import FooterImg from '../images/footerImg.png'

// import formatCurrency from 'format-currency'


function Footer() {
    

    return (
        <>
            <section>
                <div className="footerImg">
                    <img src={FooterImg} width="100%"/>
                </div>
           </section>

            </>
    )
}
export default Footer;