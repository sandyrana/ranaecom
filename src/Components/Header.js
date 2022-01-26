import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(){
        super();
        this.state ={
            category:[]
        }
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then((res) =>{
           this.setState({category:res.data});
        }).catch((res) => {

        });
    }

    render() {
        return (
            <div>
                    <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                    <div className="navbar-header">
                       
                        <Link to='/' className='navbar-brand'>Rana Ecom</Link>
                    </div>
                    <ul className="nav navbar-nav">
                    {
                        this.state.category
                          .map((cat,i) =>
                            <React.Fragment key={i}>
                            <li><Link to={'/'+cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link></li>                               

                            </React.Fragment>
                          )
                      }
                      
                    </ul>
                    <ul className="nav navbar-nav navbar-right">                                                
                         <li>
                         <Link to='/cart'><i className='fa fa-shopping-cart'></i></Link>
                         <span className="cartheader hot">
                                                   1
                                                   </span>
                         </li>

                      
                        <li><Link to="/SignIn"><span className="glyphicon glyphicon-log-in"></span> Sign In</Link></li>

                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
