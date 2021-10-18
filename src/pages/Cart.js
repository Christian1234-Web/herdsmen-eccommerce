import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Table,Button,Form } from 'react-bootstrap';
// import formatCurrency from 'format-currency'
import Footer from '../components/Footer';
import { Store } from "../context/store";
import StandSec from '../components/StandSec';
import ShopImg1 from '../images/shopImg1.jpg';
import ShopImg2 from '../images/shopImg2.jpg';
import ShopImg3 from '../images/shopImg3.jpg';
import StarImg from '../images/star-img.png'
import CartImg1 from '../images/cart-img1.png'

// import {useCart} from 'react-use-cart'

function Cart() { 
    let store = useContext(Store)
    let [cart, setCart] = store.ctx;
    let [msg, setMsg] = store.info;
    let [price, setPrice]=store.storePrice
    let [image, setImage] =store.storeImg;
    let [name, setName] = store.storeName;
    let [ids, setIds] = store.storeId;

  let [quntyCount, setquntyCount] = useState(0);
  let [total, setTotal] = useState(0);

  let btnHide = useRef();
  let btnShow = useRef();
//   let history = useHistory();
  let opts = { format: "%s%v", symbol:"$"}
  let totalPrice = cart.reduce((x,e)=> x + e.price, 0)

  
  let btnIncr = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
    item.count++;
    setCart(items);

  };
  let btnDecr = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
    item.count--;
    setCart(items);
    console.log(items)
    console.log(items.count,id)

  };
  let btnDelet = (id) => {
    let items = [...cart];
    let item = items.find((x) => x.id === id);
   items.delete(id,1)
    setCart(items);
  };

  function addCart(id) {
  
  };

        function addUp() {
          msg += 1
          setMsg(msg)
  }
  
  if (name === ' ' || price === ' ' || image === '') {
    return (
      <section className="cartPage" style={{ width: '100%' }}>
      <Navbar/>

<div className="flex"style={{width:'100%'}}>
  <div className="cartSec1">
 
      <div className="cartBtn cartSec1-01" >
      <div className="flex" ref={btnShow} style={{display:'flex'}}>
        
      <div>
      <img src={CartImg1}/>
    </div>
    <div  style={{padding:'30px'}}>
    <div>
      <h3>
      Your asHDress Cart is empty
        </h3>
      </div>
      <div>
        <Link t0="/" >Shop today's deals</Link>
      </div>
      <div>
        <button className="cartBtn1">Sign in to your account</button>
     
        <button className="cartBtn2"onClick={()=> addUp()}>Sign up now</button>
      </div>
      </div>
      </div>
      <div>

       

      </div>
            </div>
            <div className="cartSec1-sub">
            </div>
            
             <div style={{fontSize:'11.5px',paddingTop:'20px'}}>
               The price and availability of items at asHDress.com are subject to change.
               The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
               Shopping Cart <Link to="" style={{fontSize:'11.5px'}}>Learn more</Link> 
             
             <p>
             Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
               </p>
               </div>
           </div>
          
           <div className="cartSec2">
             <div>
               <h4>
               Your recently viewed items
               </h4> 
             </div>
     
 
             <div className="starBtn">
               <div className="flex">
                 <div className="cartImg">
                   <img src={ShopImg1} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Latest Design</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">6,870</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$269.99</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex ">
                 <div className="cartImg">
                   <img src={ShopImg2} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Latest Design...</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">1,237</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$1.199.00</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex">
                 <div className="cartImg">
                   <img src={ShopImg3} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Latest Design...</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to="">4,303</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$603.35</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
               </div>
               
               <div className="flex">
                 <div className="cartImg">
                   <img src={ShopImg1} />
                 </div>
                 
                 <div className="sec2Sec02">
                   <div>
                   <Link to="">Latest Design...</Link>
                </div>
                   <div>
                     <img src={StarImg}/> <Link to=""> 21,040</Link>
                   </div>
                   <div className="cartAmnt">
                     <Link to="">$79.99</Link>
                   </div>
                   <div>
                     <button onClick={()=> addUp()}>Add to Cart</button>
                   </div>
                 </div>
 </div>
               
             </div>
           </div>
         </div>
       
 
      
       <StandSec

       />
         <Footer />
         </section>
    )
  }
  
  
  else {
   
    return (
      <section className="cartPage" style={{ width: '100%',height:'100%' }}>
              <Navbar/>

        <div className="flex"style={{width:'100%',height:'100%'}}>
          <div className="cartSec11">
            <h1>Shopping Cart</h1>
          {
      cart.map((e,i) => {
            return(
            
        
          <div className="cartBtn cartSec1-011 flex" key={i}>
              <div className="flex" ref={btnShow} style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                
              <div>
                  <img src={e.image} style={{objectFit:'contain',width:'150px',height:'150px'}}/>
            </div>
            <div  style={{padding:'30px'}}>
            <div>
              <h3>
                {e.name}
              </h3>
                  </div>
                  <div>
                <Link>This a gift Learn more</Link>
                  </div>
                  <div className="btnQuanty">
                   
                    <Button variant="danger" type="button" onClick={()=>btnDelet(i)}>Delete </Button>
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
                        <option>
                                        5
                        </option>
                        <option>
                                        6
                        </option>
                        <option>
                                        7
                        </option>
                        <option>
                                        8
                        </option>
                        <option>
                                        10..
                                        </option>
                        
                                </select>
                    <Button variant="success" type="button"> Save for folder </Button>
                    <Button variant="light" type="button"> Compare with similar items </Button>

            </div>
              </div>
              </div>
                <div style={{ color: 'red', padding: '10px' }}>
                  <p>Price</p>
       ${e.price}
                </div>
                <hr></hr>       

              </div>
  )
})}
     <hr></hr>       
     <div className="checkout">
              <div><Link to="/login"><Button variant="primary" >Proceed to checkout</Button></Link></div>
            <div style={{marginLeft:'',fontWeight:'800',width:'',color:'darkRed'}}>Subtotal({msg} items):${totalPrice}
</div>
            </div>
            
            <div className="cartSec1-sub1">
             
            </div>
            <div style={{fontSize:'11.5px',margin:'10px'}}>
              The price and availability of items at asHDress.com are subject to change.
              The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
              Shopping Cart <Link to="" style={{fontSize:'11.5px'}}>Learn more</Link> 
            
            <p>
            Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
              </p>
              </div>
          </div>
         
          <div className="cartSec21">
            <div>
              <h4>
              Your recently viewed items
              </h4> 
            </div>
    

            <div className="starBtn">
                        <div className="flex">
                            
                <div className="cartImg">
                  <img src={ShopImg1} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Latest Design</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">6,870</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$269.99</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex ">
                <div className="cartImg">
                  <img src={ShopImg2} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Latest Design...</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">1,237</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$1.199.00</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="cartImg">
                  <img src={ShopImg3} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Latest Design...</Link>
               </div>
                  <div>
                    <img src={StarImg}/> <Link to="">4,303</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$603.35</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="cartImg">
                  <img src={ShopImg1} />
                </div>
                
                <div className="sec2Sec02">
                  <div>
                  <Link to="">Latest Design...</Link>
               </div>
                  <div className="">
                    <img src={StarImg}/> <Link to=""> 21,040</Link>
                  </div>
                  <div className="cartAmnt">
                    <Link to="">$79.99</Link>
                  </div>
                  <div>
                    <button onClick={()=> addUp()}>Add to Cart</button>
                  </div>
                </div>
</div>
              
            </div>
          </div>
        </div>
      

        <div>
        <StandSec

/>
     </div>
     
        <Footer />
        </section>
        )
  }
 
}
export default Cart;