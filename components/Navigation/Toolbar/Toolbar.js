import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Toolbar.css';
import Logo from '../../../assets/logo.png';
import Cartimg from '../../../assets/cart.png';

class Toolbar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showCheckoutPage: false,
            showLoginPage: false,
            totalCartItems: 0
        };

        this.onClickCart = this.onClickCart.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }
    
    onClickCart = () => {
        this.setState({
            showCheckoutPage: true
        })
    }

    onClickLogin = () => {
        this.setState({
            showLoginPage: true
        })
    }

    render() {
        return(
            <header className="Toolbar">
                <img className="Logo" src={Logo}/>
                <Link to = "/checkout">
                    <img className="CartImg" src={Cartimg}/>
                </Link>                                
                <div className="CartQuantity">{ this.state.totalCartItems }</div>
                <Link to = "/login" className="Login">
                    LOGIN
                </Link>
            </header>
        );
    }
}

export default Toolbar;