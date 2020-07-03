import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    
    constructor(props) {
        super(props);

        this.onClickAddtoCart = this.onClickAddtoCart.bind(this);
        this.onClickDecrement = this.onClickDecrement.bind(this);
        this.onClickIncrement = this.onClickIncrement.bind(this);

        this.state = {
            product: {
                image: props.product.image,
                title: props.product.title,
                itemPrice: props.product.itemPrice,
                inStock : props.product.inStock,
                quantity: props.product.quantity
            },
            cart: {
                products: [],
                total_price: 0
             },
            addToCart: false,
            addToCartBtn: null,
            count: 1,
            data: {
                Cartimage: '',
                Carttitle: '',
                Cartquantity: 0,
                Cartitem_price: 0,
                price: 0
            }        
        }        
    }

    onClickAddtoCart() {
        this.setState({addToCart: true});
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data.Cartimage = this.props.product.image;
            data.Carttitle = this.props.product.title;
            data.Cartquantity = 1;
            data.Cartitem_price = this.props.product.itemPrice;
            data.price = this.props.product.itemPrice * 1;
            return{data};
        });
        console.log(this.state.data);
        this.setState({
            cart: {
                products: [...this.state.cart.products, this.state.data]
            } 
        });
        console.log(this.state.cart);
    }

    onClickDecrement() {
        this.state.count <=0 ?
        this.setState({count: 0}) 
        : this.setState({count: this.state.count - 1});
    }

    onClickIncrement() {
        this.state.product.quantity <= this.state.count ?
        this.setState({count: this.state.product.quantity})
        : this.setState({count: this.state.count + 1});
    }

    render() {
        return(
            <div className = "Product">
                <img src = {this.state.product.image} className = "ProductImg"></img>
                <h1 className = "Title">{this.state.product.title}</h1>
                <h4 className = "Cost">Rs. {this.state.product.itemPrice}</h4>    
                { 
                    !this.state.product.inStock ? 
                    <h4 className = "Stock">Not in Stock</h4> 
                    : null
                }    
                { 
                    !this.state.addToCart ? 
                    !this.state.product.inStock ? 
                        <button className = "DisableButton">ADD TO CART</button> 
                        : <button className = "Button" onClick = {this.onClickAddtoCart}>ADD TO CART</button>
                    : <div className = "QuantitySection">
                        <button className = "Decr" onClick = {this.onClickDecrement}>-</button>
                        <h2 className = "QuantityValue">{this.state.count} in cart</h2>
                        <button className = "Incr" onClick = {this.onClickIncrement}>+</button>
                    </div>
                }
            </div>
        );
    }
}

export default Product;