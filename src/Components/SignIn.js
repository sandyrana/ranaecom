import React, { Component } from 'react';
import {Link} from 'react-router-dom';
;


export default class SignIn extends Component {
  render() {
    return (

      <div className="container">
      
          <form>  
                       
          <div className="row jumbotron"> 
          <h5 className="fw-normal mb-3 pb-3" style={{coletterSpacinglor:"1px"}}>Sign into your account</h5>
              
              <div className="col-sm-12 col-lg-7 form-group">
                  <label htmlFor="email">Username</label>
                  <input type="text" className="form-control" name="username" id="username" placeholder="Enter your phone/email." required />
              </div>
              <div className="col-sm-12 col-lg-7 form-group">
                  <label htmlFor="email">Username</label>
                  <input type="text" className="form-control" name="username" id="username" placeholder="Enter your phone/email." required />
              </div>
              <div className="col-sm-12 col-lg-7 form-group" >
              <button className="btn btn-dark btn-lg btn-block" type="button" style={{backgroundColor:"#5bc0de"}} >Login</button>
            </div>   
            
            <div className="col-sm-12 col-lg-7 form-group">
            <a className="small text-muted" href="#!">Forgot password?</a>
            <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to='/SignUp'><span className="glyphicon glyphicon-user"></span> Sing Up</Link></p>
            <a href="#!" className="small text-muted">Terms of use.</a>
            <a href="#!" className="small text-muted">Privacy policy</a>
             </div>
            
            
          </div>
          
          </form>
      </div>
     
     
 
    )
  }
}
