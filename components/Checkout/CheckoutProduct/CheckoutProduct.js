import React, { Component } from 'react';
import Spinach from '../../../assets/Spinach.jpg';
import './CheckoutProduct.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CheckoutProduct extends Component {
    constructor(props) {
        super(props);

        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onClickDecrement = this.onClickDecrement.bind(this);

        this.state = {
            cartProducts: null,
            userId: null,
            productQuantity: 0,
            isUserLogged: false,
            product: {
                image: '',
                title: '',
                itemPrice: 0,
                inStock : true,
                quantity: 20
            },
            totalCartPrice: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/users/:id?id'+ this.state.userId)
        .then(resonse => {
            this.setState({cartProducts: resonse.data.cart.products})
            console.log(this.state.cartProducts);
        });
    }

    onClickDecrement() {
        let user = {}

        this.state.productQuantity <=0 ?
        this.setState({productQuantity: 0}) 
        : this.setState({productQuantity: this.state.productQuantity - 1});

        axios.patch('http://localhost:3000/api/users/:id?id'+ this.state.userId, user)
        .then(resonse => {
            this.setState({cartProducts: resonse.data.cart.products})
            console.log(this.state.cartProducts);
        });
    }

    onClickIncrement() {
        let user = {}

        this.state.product.quantity <= this.state.productQuantity ?
        this.setState({productQuantity: this.state.product.quantity})
        : this.setState({productQuantity: this.state.productQuantity + 1});

        axios.patch('http://localhost:3000/api/users/:id?id'+ this.state.userId, user)
        .then(resonse => {
            this.setState({cartProducts: resonse.data.cart.products})
            console.log(this.state.cartProducts);
        });
    }

    render(){
        let value = null;
        if(this.state.cartProducts) {
            value = (        
                this.state.cartProducts.map( cartprod => {
                    return <tr className = "Data">
                                <td><img src = {cartprod.image} className = "Image"></img></td>
                                <td className = "TitleColumn">{cartprod.title}</td>
                                 <td className = "QuantityColumn">
                                    <div className = "QuantitySection">
                                        <button className = "Decr" onClick = {this.onClickDecrement}>-</button>
                                        <h2 className = "QuantityValue">{cartprod.quantity}</h2>
                                        <button className = "Incr" onClick = {this.onClickIncrement}>+</button>
                                    </div>
                                 </td>
                                <td className = "PriceColumn">Rs. {cartprod.item_price}</td>
                            </tr>
                })
            );
        }

        return(
            <div>
                <table className = "Table">
                    <tr className = "Heading">
                        <th></th>
                        <th className = "TitleColumn">Product</th>
                        <th className = "QuantityColumn">Quantity</th>
                        <th className = "PriceColumn">Price</th>
                    </tr>            

                    <tr className = "Data">
                        <td><img src = {Spinach} className = "Image"></img></td>
                        <td className = "TitleColumn">Spinach</td>
                        <td className = "QuantityColumn">
                            <div className = "QuantitySection">
                                <button className = "Decr" onClick = {this.onClickDecrement}>-</button>
                                <h2 className = "QuantityValue">{this.state.productQuantity}</h2>
                                <button className = "Incr" onClick = {this.onClickIncrement}>+</button>
                            </div>
                        </td>
                        <td className = "PriceColumn">Rs. 50</td>
                    </tr> 
                    {value}        

                </table> 
                <h1 className = "CheckoutPrice">Total : Rs.{this.state.totalCartPrice}</h1>  
                {
                    !this.state.isUserLogged ? 
                    <Link to = "/login">
                        <button className = "CheckoutBtn">Check Out</button>
                    </Link>
                    :<Link to = "/shipping">
                        <button className = "CheckoutBtn">Check Out</button>
                    </Link>
                }       
            </div>
        );
    }
}

export default CheckoutProduct;