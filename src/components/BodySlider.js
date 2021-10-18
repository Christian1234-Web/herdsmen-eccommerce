import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form ,Carousel} from 'react-bootstrap';
// import formatCurrency from 'format-currency'
import BgSlider1 from '../images/bg-sld1.jpg';
import BgSlider2 from '../images/bg-sld2.jpg';
import BgSlider3 from '../images/bg-sld3.jpg';


function BodySlider() {
    
    return (
        <>
            <section className="bodSlider">
            <Carousel>
                    <Carousel.Item>
                    <div className="corazor0">
                            <h1>
                                FINAL SALE
                            </h1>
                            <h1>
                            UP TO 60% OFF
                            </h1>
                            <h1>
                            Extra 20% off with code: FINAL20
                            </h1>
                            <button className="btnTrans">SHOP NOW</button>
   </div>

    <img
      className="d-block w-100"
      src={BgSlider1}
      alt="First slide"
                        />
                           <Carousel.Caption>
<p style={{color:'white',fontSize:'15px',fontWeight:'600'}}>Final Sale: Please note that final sales cannot be exchanged or returned.</p>
    </Carousel.Caption>

  </Carousel.Item>
                    <Carousel.Item>
                    <div className="corazor">
                    <h1>
                    SUMMERTIME HUES,
                            </h1>
                            <h1>
                            SUMMER BREEZE
                            </h1>
                            
                            <button className="btnTrans">SHOP WOMENS'S</button>
                            <button className="btnTrans">SHOP MEN'S</button>

   </div>
    <img
      className="d-block w-100"
      src={BgSlider2}
      alt="Second slide"
    />
  </Carousel.Item>
                    <Carousel.Item>
    
    <img
      className="d-block w-100"
      src={BgSlider3}
      alt="Third slide"
                        />
                        <Carousel.Caption>
                        <button className="btnTrans">LEARN MORE</button>

    </Carousel.Caption>
                        
  </Carousel.Item>
</Carousel>
            </section>
            </>
    )
}
export default BodySlider;
