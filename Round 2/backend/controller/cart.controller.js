const CartModel = require("../models/cart.model");


const getProducts = async(req,res)=>{
    try {
        const data = await CartModel.find()
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error);
    }
}

const addProducts = async(req, res)=>{
    let productData= req.body;
    try {
        const data = new CartModel(productData)
        await data.save()
        res.status(201).send({msg: "Product Added", data : data})
    } catch (error) {
        console.log(error);
    }
}

// const updateProduct = async(req,res)=>{
//     const id = req.params.id;
//     try {
//         const data = {image:req.body.image,
//             title:req.body.title,
//             actualPrice:req.body.actualPrice,
//             offerPrice:req.body.offerPrice,
//            }
//         await CartModel.findByIdAndUpdate(id, {...data})
//         res.status(201).send({msg:'Product Updated', data: data})
//     } catch (error) {
//         console.log(error);
//     }
// }

const deleteProduct = async(req,res)=>{
    const id = req.params.id;
    try {
        let data = await CartModel.findOneAndDelete({_id:id})
        res.status(202).send({msg:"Product deleted!!", data : data})
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    getProducts,
    addProducts,
    // updateProduct,
    deleteProduct,
}