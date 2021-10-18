import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form } from 'react-bootstrap';
import SecImgG from '../images/sec2-bg-1.jpg'
// import formatCurrency from 'format-currency'


function QualSec() {
    
    return (
        <>
            <section className="qulSec">
                <div>
                    <img src={SecImgG}/>
</div>
                <div className="bgGoat">
<h1  style={{fontWeight:'600',fontSize:'2rem', color:'#fff'}}>
                        FINEST MATERIALS, EXCEPTIONAL QUALITY</h1>
                        <Button className="arrBtn" style={{padding:'10px',width: '10rem',
    backgroundColor: 'transparent',color:'#fff',
    border:'2px solid #fff',fontWeight: '600',borderRadius:'20%' }}>LEARN MORE</Button>                </div>
            </section>

            </>
    )
}
export default QualSec;