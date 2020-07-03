import React, { Component } from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.onClickClearCart = this.onClickClearCart.bind(this);
        this.state = {
            totalCartItems: 0
        }
    }    

    onClickClearCart() {
        this.setState({totalCartItems: 0})
    }

    render() {
        return(
            <div>
                <div className = "Checkout">
                    <p>You have {this.state.totalCartItems} items in your shopping cart.</p>
                    <button className = "ClearCart" onClick = {this.onClickClearCart}>Clear Shopping Cart</button>
                </div>
                <CheckoutProduct/>
            </div>
        );
    }
}

export default Checkout;