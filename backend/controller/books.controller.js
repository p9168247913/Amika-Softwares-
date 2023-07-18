const BooksModel = require("../models/books.model");


const getBooks = async(req,res)=>{
    try {
        const data = await BooksModel.find()
        res.status(200).json({data: data})
    } catch (error) {
        console.log(error);
    }
}

const addBooks = async(req, res)=>{
    let bookData= req.body;
    try {
        const data = new BooksModel(bookData)
        await data.save()
        res.status(201).send({msg: "Book Added", data : data})
    } catch (error) {
        console.log(error);
    }
}

const updateBook = async(req,res)=>{
    const id = req.params.id;
    try {
        const data = {title:req.body.title,
            author:req.body.author,
            genere:req.body.genere,
            isbn:req.body.isbn,
            releaseDate:req.body.releaseDate,
            description:req.body.description,}
        await BooksModel.findByIdAndUpdate(id, {...data})
        res.status(201).send({msg:'Book Updated', data: data})
    } catch (error) {
        console.log(error);
    }
}

const deleteBook = async(req,res)=>{
    const id = req.params.id;
    try {
        let data = await BooksModel.findOneAndDelete({_id:id})
        res.status(202).send({msg:"Book deleted!!", data : data})
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    getBooks,
    addBooks,
    updateBook,
    deleteBook,
}