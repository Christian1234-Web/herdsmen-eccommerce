import React,{useContext,useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';
import AshLogo from '../images/logo.png'
import Noti  from '../images/noti.png'
import SearchLogo  from '../images/searchLog.png'
import Signin  from '../images/sigin.png'

// import formatCurrency from 'format-currency'


function Navbar() {
    

    return (
        <>
            <main className="fixed">

            
            <section className="navDicnt">
                <div className="discount">

                Get Free 2-pack Socks with $200 purchase

                </div>
                <div className="flag">
dkjdajakjajk
                </div>
            </section>
            <section className="ashNav">
                <ul>
                    <li>
                    <Link>New Arrivals </Link>
                    </li>
                    <li>
                    <Link>Women</Link>
                    </li>
                    <li>
                    <Link>Men </Link>
                    </li>
                    <li>
                    <Link>Gift Guide </Link>
                    </li>
                    <li>
                    <Link>About </Link>
                    </li>
                </ul>
                <ul id="logo">
                <li >
                            <Link ><img src={AshLogo} width="120rem" height="" style={{position:'absolute',left:'45%',top:'7%'}}/> </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to="signup"><img src={Signin}/> </Link>
                    </li>
                    <li>
                            <Link><img src={SearchLogo}/></Link>
                    </li>
                    <li>
                    <Link><img src={Noti}/> </Link>
                    </li>
                   
                </ul>
            </section>
            </main>
            </>
    )
}
export default Navbar;