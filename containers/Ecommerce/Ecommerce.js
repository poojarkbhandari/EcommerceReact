import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import './Ecommerce.css';

class Ecommerce extends Component{
    state = {
        selectedCategory: 'AllCategory'
    }
    render(){
        return(
            <Aux>
                <div className="Ecommerce">
                    <Categories selectedCategory = {this.state.selectedCategory}/>
                    {console.log(this.state.selectedCategory)}
                    <Products/>
                </div>                
            </Aux>
        );
    }
}

export default Ecommerce;