import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const EditProduct = () => {
    const {id} = useParams()
    const [formData, setFromData] = useState({
        image: "",
        title: "",
        actualPrice: "",
        offerPrice: "",
    })

    const fetchProductDetail = () => {
        axios.get(`http://localhost:4040/product/${id}`).then((response) => {
            // setFromData(response.data.data);
            console.log(response.data.data)
        });
      };
    
      useEffect(() => {
        fetchProductDetail();
        console.log(formData )
      }, []);
    
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFromData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4040/product/${id}`, formData).then(() => {
          console.log('Updated successfully');
          window.location.href='/';
        });
      };
    
    return (
        <div>
            <h1 >Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <label> Product Image URL</label><br />
                <input
                    type="text"
                    name="image"
                    id=""
                    placeholder='Product Image URL'
                    value={formData.image}
                    onChange={handleFormChange}
                /><br />

                <label>Title</label><br />
                <input
                    type="text"
                    name="title"
                    id=""
                    placeholder='Product Title'
                    value={formData.title}
                    onChange={handleFormChange}
                /><br />

                <label>Actual Price</label><br />
                <input
                    type="text"
                    name="actualPrice" id="" placeholder='Actual Price'
                    value={formData.actualPrice}
                    onChange={handleFormChange}
                /><br />

                <label> Offer Price</label><br />
                <input type="text" name="offerPrice" id="" placeholder='Offer price'
                    value={formData.offerPrice}
                    onChange={handleFormChange} /><br />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default EditProduct