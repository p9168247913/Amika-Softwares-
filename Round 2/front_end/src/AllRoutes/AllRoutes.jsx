import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Cart from '../Pages/Cart';
import AddProduct from '../Pages/AddProduct';
import EditProduct from '../Pages/EditProduct';

const AllRoutes = () => {

  return (
    <div>
      <nav>
        <button ><Link to="/">Dashboard</Link></button>
        <button><Link to="/cart">Cart</Link></button>
      </nav>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/edit-product/:id" element={<EditProduct/>} />
          {/* <Route exact path="/cart" component={Cart} />  */}
          <Route path="/cart" element={<Cart/>} />
        </Routes>

    </div>
  );
};

export default AllRoutes;
