import React, { useState } from 'react'
import axios from "axios"

const AddProduct = () => {
    const [formData, setFromData] = useState({
        image: "",
        title: "",
        actualPrice: "",
        offerPrice: "",
    })

    const handleFromChange = (e) => {
        const { name, value } = e.target;
        setFromData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit =()=>{
        axios.post("http://localhost:4040/product", formData).then(()=>{
            alert('Added successfully')
            window.location.href ="/"
        })
    }
    return (
        <div>
            <h1 >Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label> Product Image URL</label><br />
                <input
                    type="text"
                    name="image"
                    id=""
                    placeholder='Product Image URL'
                    value={formData.image}
                    onChange={handleFromChange}
                /><br />

                <label>Title</label><br />
                <input
                    type="text"
                    name="title"
                    id=""
                    placeholder='Product Title'
                    value={formData.title}
                    onChange={handleFromChange}
                /><br />

                <label>Actual Price</label><br />
                <input
                    type="text"
                    name="actualPrice" id="" placeholder='Actual Price'
                    value={formData.actualPrice}
                    onChange={handleFromChange}
                /><br />

                <label> Offer Price</label><br />
                <input type="text" name="offerPrice" id="" placeholder='Offer price'
                    value={formData.offerPrice}
                    onChange={handleFromChange} /><br />

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddProduct