import {useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';

function App() {
  const products= useSelector(state=> state.cart);
  function arrayIsEmpty(array) {
 
    if (!Array.isArray(array)) {
        return false;
    }
   
    if (array.length == 0) {
      
        return true;
    }
   
    return false;
}
  return (
    <>
    <Navbar/>
    <Routes>
    <Route  path="/" element={<HomePage />} />
    <Route path='/cart'
      element={
       <ProtectedRoute isEmpty={arrayIsEmpty(products)}>
       <CartPage/>
       </ProtectedRoute>
       }
       />
    </Routes>
    </>
   
  );
}

export default App;
