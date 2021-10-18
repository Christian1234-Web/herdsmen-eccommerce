import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/Index";
import StoreContext from "./context/store";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



// import {Carousel,Row,Col} from 'react-bootstrap'

function App() {
  return (
    <StoreContext>
 <BrowserRouter>
      <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/index">
            <Index/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
</Route>
    </Switch>
      </BrowserRouter>
      </StoreContext>
  );
}
export default App;
