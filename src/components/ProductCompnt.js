import React,{useRef,useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {Col,Row,OverlayTrigger,Button} from 'react-bootstrap';
import { Store } from "../context/store";

import StarImg from '../images/star-img.png'
import ProSocial from '../images/productSocial-img.png'
import ProDeliver from '../images/proDeliver-img.png'

import ProductSM1 from '../images/productSm-img1.jpg'
import ProductSM2 from '../images/productSm-img2.jpg'
import ProductSM3 from '../images/productSm-img3.jpg'
import ProductSM4 from '../images/productSm-img4.jpg'
import ProductSM5 from '../images/productSm-img5.jpg'
import ProductSM6 from '../images/productSm-img6.jpg'
import ProductSM7 from '../images/productSm-img7.jpg'
import ProductLg1 from '../images/productLg-img1.jpg'
import ProductLg2 from '../images/productLg-img2.jpg'
import ProductLg3 from '../images/productLg-img3.jpg'
import ProductLg4 from '../images/productLg-img4.jpg'
import ProductLg5 from '../images/productLg-img5.jpg'
import ProductLg6 from '../images/productLg-img6.jpg'
import ProductLg7 from '../images/productLg-img7.jpg'
// import { Button } from 'bootstrap';


function ProductCompnt() {
    let store = useContext(Store)
    let [cart, setCart] = store.ctx;
    let [msg, setMsg] = store.info;
    let [price, setPrice]=store.storePrice
    let [image, setImage] =store.storeImg;
    let [name, setName] = store.storeName;
    let [ids, setIds] = store.storeId;
    let [length, setLength]=store.storeLength;
    let [waist, setWaist] =store.storeWaist;
    let [arm, setArm] = store.storeArm;
    let  [chestW, setChestW]= store.storeChestW;

    let [show, setShow] = useState(false);
    let [hide, setHide] = useState(false);

    let img1 = useRef();
    let img2 = useRef();
    let img3 = useRef();
    let img4 = useRef();
    let img5 = useRef();
    let img6 = useRef();
    let img7 = useRef();
    let formShow = useRef();

   
    function cusFnc() {
        if (!hide) {
            formShow.current.style.display = "block"
        } else {
            formShow.current.style.display = "none"

        }
        setHide(!hide)

        }

    function addCart() {
       setImage(image);
        setIds(ids)
         setName(name);
        setPrice(price)
        let cart_ = { ids, count: 1, image, name, price };
        let item = cart.find((x) => x.ids === ids);
        if (!item) {
            cart.push(cart_);
            msg += 1
            setMsg(msg)
            console.log(cart);
        }

}
    function addUp() {
        msg += 1
        setMsg(msg)
    }
    function block1(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "block"
            img3.current.style.display = "none"
            img4.current.style.display = "none"
            img5.current.style.display = "none"
            img6.current.style.display = "none"
            img7.current.style.display = "none"


        }

    }
    function block2(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "none"
            img3.current.style.display = "block"
            img4.current.style.display = "none"
            img5.current.style.display = "none"
            img6.current.style.display = "none"
            img7.current.style.display = "none"

        }

    }
    function block3(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "none"
            img3.current.style.display = "none"
            img4.current.style.display = "block"
            img5.current.style.display = "none"
            img6.current.style.display = "none"
            img7.current.style.display = "none"

        }

    }
    function block4(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "none"
            img3.current.style.display = "none"
            img4.current.style.display = "none"
            img5.current.style.display = "block"
            img6.current.style.display = "none"
            img7.current.style.display = "none"

        }

    }
    function block5(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "none"
            img3.current.style.display = "none"
            img4.current.style.display = "none"
            img5.current.style.display = "none"
            img6.current.style.display = "block"
            img7.current.style.display = "none"

        }

    }
    function block6(e) {
        if (!show) {
            img1.current.style.display = "none"
            img2.current.style.display = "none"
            img3.current.style.display = "none"
            img4.current.style.display = "none"
            img5.current.style.display = "none"
            img6.current.style.display = "none"
            img7.current.style.display = "block"

        }

    }
    function block7(e) {
        if (!show) {
            img1.current.style.display = "block"
            img2.current.style.display = "none"
            img3.current.style.display = "none"
            img4.current.style.display = "none"
            img5.current.style.display = "none"
            img6.current.style.display = "none"
            img7.current.style.display = "none"

        }

    }
    

    return (
        <>
            <section className="proTablet"> 
                <div className="flex proHd">
                    <Link to="">Electronics </Link>
                    <Link to="">Computers & Accessories </Link>    
                    <Link to=""> Computers & Tablets</Link>    
            </div>
            
                <div className="proSec01 flex">
                    <div className="proMenu">
                        <div className="proMenuImg">
                            <img src={ProductSM1}
                                onMouseEnter={(e) => block7(e)}
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM2}
                                onMouseEnter={(e) => block1(e)
                            
                            } 
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM3}
                                onMouseEnter={(e) => block2(e)}
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM4}
                                onMouseEnter={(e) => block3()}
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM5}
                                onMouseEnter={(e) => block4()}
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM6}
                                onMouseEnter={(e) => block5()}
                            />
                        </div>
                        <div className="proMenuImg">
                            <img src={ProductSM7}
                                onMouseEnter={(e) => block6()}
                            />
</div>
                    </div>
                    <div className="proLargeImgDIv">
                    <div className="proLargeImg">
                          
                            <img src={ProductLg7} ref={img7} id="img7" style={{display:'none'}}/>
                            <img src={ProductLg6} ref={ img6} id="img6"style={{display:'none'}} />                        
                            <img src={ProductLg5} ref={img5} id="img5"style={{display:'none'}} />
                            <img src={ProductLg4}  ref={ img4}style={{display:'none'}} />
                            <img src={ProductLg3} ref={img3} style={{display:'none'}}/>
                            <img src={ProductLg2} ref={img2} style={{display:'none'}}/>
                            <img src={image}
                                ref={img1 }
                                style={{ display: 'block' }}
                            />
                          

</div>
                    </div>
                    
                    <div className="flex propLargeImgAbout">
                        <div className="proImgDetails">
                            <div>
                                <h2 className="proImgDetailsH1">
                                   
                                    {name}
                                </h2>
                            </div>
                            <div>
                                <Link to="">Visit the Winnovo Store</Link>
                            </div>
                            <div>
                            {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2">
              <p>Sorry, content is not available.</p>

         </div>
      }
                          
       >
 <div className="starImage">
                    <img src={StarImg} alt="flag" />
         <Link>85 ratings</Link> | <Link>33 answered questions</Link>
                    </div>
                    
                  </OverlayTrigger>
  ))}
                            </div>
                            {/* $69.99 */}
                            <div className="proPrice flex">
                                <p className="proSmFt">Price:</p>
                                <p className="proBgFt">{price} </p>
                                <p className="pro+">+ $36.39 Shipping & Import Fees Deposit<br></br> to Nigeria <Link>Details</Link></p>
                                
                                
</div>
                            <div className="proBrand">
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Material</p>
                                    </Col>
                                    <Col>
                                    <p>Akara</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Size</p>
                                    </Col>
                                    <Col>
                                    <p>25</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Standard/Default Size<br></br>
                                            </p>
                                    </Col>
                                    <Col>
                                    <p><input type="checkbox"/></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="proBrandBold">Custom Size <br></br>
                                        </p>
                                    </Col>
                                    <Col>
                                        <p><button onClick={()=> cusFnc()} style={{ border:'none',outline:'none'}}><input type="checkbox"/></button></p>
                                    </Col>
                                </Row>
                                <Row ref={formShow}style={{display:'none'}}>
                                    <Col>
                                        <p className="proBrandBold">Waist Width <br/>
                                            <input placeholder="Waist Width" value={waist} onChange={(e)=>setWaist(e.target.value)}  />
                                        </p>
                                    </Col>
                                    <Col>
                                        <p className="proBrandBold">Round Arm <br/>
                                            <input placeholder="Round Arm" value={arm} onChange={(e)=>setArm(e.target.value)}/>
</p>
                                    </Col>
                                    <Col> 
                                        <p className="proBrandBold">Length (shoulder to foot) <br/>
                                            <input placeholder="Length" value={length} onChange={(e)=>setLength(e.target.value)}/>
</p>
                                    </Col>
                                    <Col> 
                                        <p className="proBrandBold"> Chest Width <br/>
                                            <input placeholder="Chest Width" value={waist} onChange={(e)=>setWaist(e.target.value)}/>
</p>
                                    </Col>
                                    <Col> 
                                        <p className="proBrandBold">
                                            <button className="submitC">Submit</button>
                                        </p>
                                    </Col>
                                </Row>
                               
</div>

                           
                            
                        </div>
                       
                        <div className="proCartImg">
                        {/* $69.99 */}
                            <div>
                                <p className="proBgFt">{price} </p>
                                <p className="pro+">+ $36.39 Shipping & Import Fees Deposit to Nigeria <Link>Details</Link></p>
                                
                            </div>
                           
                            <div className="flex">
                                <p>Arrives:</p><p className="proBrandBold">Monday, Aug 2</p>
                            </div>
                            <div>
                                <div>
                                    <img src={ProDeliver}/>
                                </div>
                                <select>
                                    <option>
                                        Qty 1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                    <option>
                                        3
                                    </option>
                                    <option>
                                        4
                                        </option>
                                </select>
                            </div>
                            <Link to="/cart" >
                            <div>
                                    <button className="signBtn" onClick={(e) => addCart((ids) => {
                                         return(
                                            <div></div>
                                       )
                                    }
                              
                           )} >Add to Cart</button>
                                </div>
                                </Link>
                            <div>
                            <button className="signBtn">Buy Now</button>

</div>
                            <div>
                                <Link>  Secure transaction</Link>
                            </div>
                            <div className="proShipFrom" style={{fontSize:'12px'}}>
                                <Row>
                                    <Col>
                                <p>                                       
                                Ships  from </p>
                                    </Col>
                                    <Col>
                                     <p> asHDress </p> 
                                    </Col>
                                </Row>
                                <div className="flex">
                                    <Col>
                                   <p>Sold by</p>
                                    </Col>
                                    <div>
                                      <Link  style={{fontSize:'12px'}}>LapTab Factory</Link>  
                                    </div>
</div>
                            </div>
                            <div className="flex">
                                <p>Return Policy:</p>
                                
                                {[ 'bottom'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
          <div className="bg-white p-2" style={{border:'1px solid gainsboro',fontFamily:'sans-serif',padding:'5px'}}>
              <p>This item is non-returnable, but if the item arrives damaged or<br></br> defective, you may request a refund or replacement.
</p>
<Link>Read full return policy</Link>
         </div>
      }
                          
       >
 <div className="starImage">
 <Link>This item is non-returnable</Link>

                    </div>
                    
                  </OverlayTrigger>
  ))}
         
                            </div>
                          
                            <div className="proAdd">
                                <div>
                                <p className="proBrandBold"> Add an Accessory:</p>   
                                </div>
                                <div className="flex">
                                    <input type="checkbox" />
                                    <Link  style={{paddingLeft:'5px'}}>Rescue Monthly Whole Home Data and Image Recovery ... $4.99</Link>
                                </div>
                                <div className="flex">
                                    <input type="checkbox" />
                                    <p  style={{paddingLeft:'5px'}}>Add a gift receipt for easy returns</p>
                                </div>
                                <div style={{borderTop:'1px solid gainsboro',padding:'10px'}}>
                                    <button className="logBtn2"> Add to List</button>
</div>

                            </div>

                            <div className="proSocial">
                                <img src={ProSocial} />
                            </div>
                        </div>
                    </div>
            </div>
            
            </section>
            </>
    )
}
export default ProductCompnt;