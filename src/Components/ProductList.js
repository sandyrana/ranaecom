import axios from 'axios';
import React, { Component } from 'react'

export default class ProductList extends Component {
    constructor(){
        super();
        this.state ={
            product :[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then((res) =>{
            this.setState({product:res.data});
        }).catch((err) =>{

        })
    }


    render() {
        return (
            <div className="container">
           
          {
              this.state.product.map((productdata,i)=>            
                    <div className="col-xs-12 col-md-6" key={productdata.id}>
                        <div className="prod-info-main prod-wrap clearfix">
                                <div className="row">
                                        <div className="col-md-5 col-sm-12 col-xs-12">
                                            <div className="product-image"> 
                                                <img  src={productdata.image} className="img-responsive" alt='s' /> 
                                               <span class="tag hot">
                                                    {productdata.id}
                                                   </span> 
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-xs-12">
                                        <div className="product-deatil">
                                                <h5 className="name">
                                                    <a>
                                                       {productdata.title}
                                                    </a>
                                                    <a>
                                                        <span>{productdata.category}</span>
                                                    </a>                            
                        
                                                </h5>
                                                <p className="price-container">
                                                    <span>&#8377;{productdata.price}</span>
                                                </p>
                                               
                                        </div>
                                        <div className="description">
                                            <p>{productdata.description}</p>
                                        </div>
                                        <div className="product-info smart-form">
                                            <div className="row">
                                                <div className="col-md-12"> 
                                                    <a className="btn btn-danger">Add to cart</a>
                                                    <a className="btn btn-info">More info</a>
                                                </div>
                                                <div className="col-md-12">
                                             
                                                    <div className="rating">Rating:{productdata.rating.rate}
                                                  
                                                       
                                                      
                                                            <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger"></i></label>
                                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger"></i></label>
                                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger"></i></label>
                                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning"></i></label>
                                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning"></i></label>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                            
                    </div>          

    

              )
             
          }
          </div>         
         
          
        )
    }
}
