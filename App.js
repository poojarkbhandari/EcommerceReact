import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Ecommerce from './containers/Ecommerce/Ecommerce';
import Checkout from './components/Checkout/Checkout';
import Shipping from './containers/Shipping/Shipping';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>   
      <Layout>  
        {           
          <Switch>
            <Route path = "/" exact component = { Ecommerce }/>
            <Route path = "/login" component = { Login }/>
            <Route path = "/checkout" component = { Checkout }/>
            <Route path = "/shipping" component = { Shipping }/>
            <Route path = "/signup" component = {Signup}/>
          </Switch>

          /*<Ecommerce/>
          <Login/>
          <Checkout/>
          <Shipping/>
          */
        }  
      </Layout>
    </div>
  );
}

export default App;
