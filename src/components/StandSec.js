import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table,Button,Form ,Carousel} from 'react-bootstrap';
import SldImgOne from '../images/slidOne.png';
import SldImgTwo from '../images/slideTwo.png';

// import formatCurrency from 'format-currency'


function StandSec() {
    

    return (
        <>
            <section>
                <div className="stndCont">
                    <h1>STANDOUT STYLES OF THE SEASON</h1>
                    <p>A reinterpretation of apparels, your daily staple outfits can be urban chic.</p>
                </div>
          </section>
            <section className="outImg">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SldImgOne}
      alt="First slide"
    />
                        <div>
                            
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SldImgTwo}
      alt="Second slide"
    />

                        <div>
                            
    </div>
  </Carousel.Item>
  
</Carousel>
</section>
            </>
    )
}
export default StandSec;