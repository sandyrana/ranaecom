import React from 'react';
import './App.css'; 
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom';
import ProductList from './Components/ProductList';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Nofound from './Components/Nofound';


function App() {
  console.log('app com[onent');
  return (
    <React.Fragment>
       <Header />

          <Routes>
               {/* <Route to='/' element={<ProductList />} />
  <Route to='products/:category' element={<Products /> } />   */}
               <Route path="/" element={<ProductList />}></Route>
              <Route path="SignIn" element={<SignIn />}></Route>
              <Route path="SignUp" element={<SignUp />}></Route>

             
              <Route path="*" element={<Nofound />}></Route>
             





          </Routes>
    </React.Fragment>
  );
}

export default App;
