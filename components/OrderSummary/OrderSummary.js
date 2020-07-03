import React, { Component } from 'react';
import axios from 'axios';
import './OrderSummary.css';

class OrderSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prods:null,
            total:0
        }
    }   
    
    componentDidMount() {
        axios.get('http://localhost:3000/api/users/:id?id'+ this.state.userId)
        .then(resonse => {
            this.setState({prods: resonse.data.cart.products})
            console.log(this.state.cartProducts);
        });
    }

    render() {
        let prodvalue = null;
        if(this.state.prods) {
            prodvalue = (        
                this.state.prods.map( cartprod => {
                    return <tr>
                                <td className = "Title">{cartprod.quantity} x {cartprod.title}</td>                                 
                                <td className = "Price">Rs. {cartprod.item_price}</td>
                            </tr>
                })
            );
        }
        return(
            <div className = "OrderSummary">
                <h1 className = "OrderSummaryTitle">Order Summary</h1>
                <h3 className = "OrderItems">You have __ items in your shopping cart.</h3>
                <hr/>
                <div className = "OrderItems">
                    {prodvalue}
                </div>
                <hr/>
                <h3>Total : Rs. {this.state.total}</h3>
            </div>
        );
    }
}

export default OrderSummary;