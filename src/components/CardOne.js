import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form,Card } from 'react-bootstrap';
// import formatCurrency from 'format-currency'
import MenBg from '../images/m-big2.jpg';
import WomenBg from '../images/w-big1.jpg';


function CartOne() {
    

    return (
        <>
            <section className="cardOn">
              <Link to="/shop"> <div className="cardImgOne">
                <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={ WomenBg}/>
  <Card.Body>
    <Card.Title className="arrTi" style={{fontWeight:'600',fontSize:'2rem'}}> WOMEN'S NEW ARRIVALS</Card.Title>
   
    <Button className="arrBtn" style={{padding:'10px',width: '10rem',
    backgroundColor: 'transparent',color:'#000',
    border:'2px solid #000',fontWeight: '600',borderRadius:'20%' }}>SHOP NOW</Button>  </Card.Body>
</Card>
          </div>
          </Link> 
                <div>
                <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={ MenBg}/>
  <Card.Body>
    <Card.Title className="arrTi" style={{fontWeight:'600',fontSize:'2rem'}}>MEN’S NEW ARRIVALS</Card.Title>
   
    <Button className="arrBtn" style={{padding:'10px',width: '10rem',
    backgroundColor: 'transparent',color:'#000',
    border:'2px solid #000',fontWeight: '600',borderRadius:'20%' }}>SHOP NOW</Button>
  </Card.Body>
</Card>
                </div>

           </section>

            </>
    )
}
export default CartOne;