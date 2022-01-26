import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

export default class ProductContainer extends Component {
    constructor(){
        super();
        this.state ={
            category:[],
            product:[],
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res) =>{
            // alert(1)
           this.setState({category:res.data});
        }).catch((res) => {

        });
    }
  render() {
    return(
        <Header category ={this.state.category}/>
    );
  }
}
