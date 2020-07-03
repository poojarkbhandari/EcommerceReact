import React, { Component } from 'react';
import './Shipping.css';

import ShippingDetails from '../../components/ShippingDetails/ShippingDetails'; 
import OrderSummary from '../../components/OrderSummary/OrderSummary';

class Shipping extends Component {
    render(){
        return(
            <div>
                <h1 className = "Heading">Shipping</h1>
                <span className = "Shipping">
                    <ShippingDetails/>
                    <OrderSummary/>
                </span>           
            </div>
        );
    }
}

export default Shipping;