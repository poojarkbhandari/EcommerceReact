import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/Product/Product';
import './Products.css';

class Products extends Component {

    state = {
        products: null,
        selecteCategory: 'AllCategories'
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/product')
        .then(resonse => {
            this.setState({products: resonse.data})
            console.log(resonse.data);
            console.log(this.state.products)
        });
    }

    render() {
        let products = null;
        if(this.state.products){
            products = (
                this.state.products.map( product => {
                    if((this.state.selecteCategory === product.category) || (this.state.selecteCategory === 'AllCategories'))
                    {
                        return <Product product = {product} key = {product._id}/>
                    }
                })
            ); 
        }
        return(
            <div className = "Products">
                {products}               
            </div>
        );
    }    
}

export default Products;