import React, { Component } from 'react';
import axios from 'axios';

import Category from '../../components/Category/Category';
import './Categories.css';

class Categories extends Component {

    constructor(props) {
        super(props);

        this.onClickCategory = this.onClickCategory.bind(this);

        this.state = {
            categories: null,
            category_name: null
        }
    }

    onClickCategory() {
        this.props.selectCategory = this.state.category_name;
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/category')
        .then(resonse => {
            this.setState({categories: resonse.data})
            console.log(resonse.data);
            console.log(this.state.categories);
        });
    }
    render() { 
        let value = null; 
        if(this.state.categories){
            value = (        
                this.state.categories.map( category => {
                    return <Category category = {category.category_name} key = {category._id} onClick = {this.onClickCategory}/>
                })
            );
        }
              
        return(            
            <div className="Categories">
                {value}                
            </div>
        );
    }
}

export default Categories;