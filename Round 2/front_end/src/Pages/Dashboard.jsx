import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"

const Dashboard = () => {
    const [products, setProducts] = useState([])
    // console.log("product", products);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts =()=>{
        axios.get('http://localhost:4040/product').then((res) => {
            console.log(res.data.data)
            setProducts(res.data.data.reverse())
        })
    }

    const handleDelete =(id)=>{
        axios.delete(`http://localhost:4040/product/${id}`).then((res) => {
          fetchProducts()
          alert("Deleted!!")
        })
    }

    const handleAddToCart = (product) => {
        axios.post("http://localhost:4040/cart", product).then((response) => {
          console.log("Product added to cart:", response.data);
          alert("Product Added!!")
        });
      };


      
    return (
        <div>
            <h2>Dashboard</h2>
            <button ><Link to="/add-product">Add Products</Link></button>
            <div  style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", rowGap:"30px" , marginTop:"30px"}}>
                {
                    products.map((product) => (
                        <div key={product._id} style={{margin:"auto",width:"60%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                            <img src={product.image} alt={product.name} style={{width:"80%", height:"40%"}}/>
                            <h4>{product.title}</h4>
                            <p>Actual Price: {product.actualPrice}/-</p>
                            <p>Offer Price: {product.offerPrice}/-</p>
                            <button><Link to={`/edit-product/${product._id}`}>Edit</Link></button>
                            <button onClick={()=>handleDelete(product._id)}>Delete</button>
                            <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Dashboard