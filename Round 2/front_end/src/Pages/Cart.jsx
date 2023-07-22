
import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetchCartProducts();
    }, []);

    const fetchCartProducts = () => {
        // Fetch the cart products from the cart API
        axios.get("http://localhost:4040/cart").then((response) => {
            setCartProducts(response.data.data);
        });
    };

    const calculateTotalOfferPrice = () => {
        
        if(!Array.isArray(cartProducts)){
            return 0
        }

        return cartProducts.reduce((total, product) => total + parseFloat(product.offerPrice), 0);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4040/cart/${id}`).then((res) => {
            fetchCartProducts()
            alert("Deleted!!")
        })
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <h2>Total Offer Price: {calculateTotalOfferPrice()}/-</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", rowGap: "30px", marginTop: "30px" }}>
                {cartProducts.map((product) => (
                    <div key={product.id} style={{ margin: "auto", width: "60%", border: "1px solid red" }}>
                        <img src={product.image} alt={product.title} style={{ width: "80%", height: "40%" }} />
                        <h3>{product.title}</h3>
                        <p>Price: {product.offerPrice}/-</p>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
