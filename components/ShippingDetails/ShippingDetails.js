import React, { Component } from 'react';
import axios from 'axios';
import './ShippingDetails.css';

class ShippingDetails extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddrLine1 = this.onChangeAddrLine1.bind(this);
        this.onChangeAddrLine2 = this.onChangeAddrLine2.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.OnClickPlaceOrder = this.OnClickPlaceOrder.bind(this);

        this.state = {
            name: '',
            addrLine1: '',
            addrLine2: '',
            city: '',
            userId: '',
            userName: '',
            products: [],
            total: 0
        }    
    }
    
    onChangeName(e) {
        this.setState({name: e.target.value})
    }

    onChangeAddrLine1(e) {
        this.setState({addrLine1: e.target.value})
    }

    onChangeAddrLine2(e) {
        this.setState({addrLine2: e.target.value})
    }

    onChangeCity(e) {
        this.setState({city: e.target.value})
    }

    OnClickPlaceOrder() {
        const order = {
            user:{
                userId: this.state.userId,
                userName: this.state.userName
            },
            orderDate: new Date(),
            status: 'Processed',
            products: this.state.products,
            total: this.state.total,
            shipping:{
                name: this.state.name,
                address: this.state.addrLine1 + this.state.addrLine2,
                city: this.state.city
            }
        }

        if(window.confirm("Do you want to place order ?")) {
            axios.post('http://localhost:3000/api/orders', order)
                .then(respose => {
                    if(respose.status == 201) {
                        alert("\nOrder Placed Successfully!");
                    }
                })
                .catch(error => {
                    alert("\nOrder Placed Unsuccessfully! \nPlease try again.");
                });            
        }

        this.setState({name: ''});
        this.setState({addrLine1: ''});
        this.setState({addrLine2: ''});
        this.setState({city: ''});
    }

    render() {
        return(
            <div className = "Form">
                <form>
                    <label className = "FormLabels">Name</label><br/>
                    <input type = "text" placeholder = "Name" className = "FormInputs" value = {this.state.name} onChange = {this.onChangeName}></input><br/>
                    <label className = "FormLabels">Address</label><br/>
                    <input type = "text" placeholder = "Line 1" className = "FormInputs" value = {this.state.addrLine1} onChange = {this.onChangeAddrLine1}></input><br/>
                    <input type = "text" placeholder = "Line 2" className = "FormInputs" value = {this.state.addrLine2} onChange = {this.onChangeAddrLine2}></input><br/>
                    <label className = "FormLabels">City</label><br/>
                    <input type = "text" placeholder = "City" className = "FormInputs" value = {this.state.city} onChange = {this.onChangeCity}></input><br/>
                </form>                  
                <button className = "PlaceOrderBtn" onClick = {this.OnClickPlaceOrder}>Place Order</button>
            </div>            
        );
    }
}

export default ShippingDetails; 