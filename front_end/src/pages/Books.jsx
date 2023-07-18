import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios'

const Books = () => {
    const [data, setData] = useState("")
    const [modal, setShowModal] = useState({
        add: false,
        edit: false,
    })

    console.log("data", data)
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:4040/book");
            const jsonData = await response.json();
            console.log("indata", jsonData.data)
            setData(jsonData.data);
        } catch (error) {
            console.log("Error fetching data from API:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genere: '',
        isbn: "",
        description: ""
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch('http://localhost:4040/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => console.log(response.json()))
            .then(data => {
                console.log("post data", data);
                
                fetchData();
                setShowModal({add:false});
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4040/book/${id}`)
            .then((response) => {
                alert("Book Deleted")
                fetchData()
            })
            .catch((error) => {

                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={() => setShowModal({ add: true })} style={{ fontWeight: '500', backgroundColor: "green", color: 'white', padding: "10px", border: "none", borderRadius: "5px", alignItems: "right" }}>+ ADD</button>
            {data.length > 0 ? <table className="table table-bordered" style={{ width: "80%", margin: 'auto' }}>
                <thead>
                    <tr>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>Sr No.</th>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>Title</th>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>Author</th>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>Genere</th>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>ISBN</th>
                        <th scope="col" style={{ textAlign: "center", backgroundColor: "rgb(249,180,181)" }}>Decsription</th>
                        <th scope="col" style={{ textAlign: "center", width: '15%', backgroundColor: "rgb(249,180,181)" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: "center", width: "10%", fontWeight: "500" }}>{index + 1}</td>
                            <td style={{ textAlign: "center", fontWeight: "500" }}>{item.title}</td>
                            <td style={{ textAlign: "center", fontWeight: "500" }}>{item.author}</td>
                            <td style={{ textAlign: "center", width: '18%', fontWeight: "500" }}>{item.genere}</td>
                            <td style={{ textAlign: "center", width: '18%', fontWeight: "500" }}>{item.isbn}</td>
                            <td style={{ textAlign: "center", width: '18%', fontWeight: "500" }}>{item.description}</td>
                            <td style={{ display: "flex", columnGap: '10px', }}>
                                <button style={{ fontWeight: '500', backgroundColor: "blue", color: 'white', padding: "10px", border: "none", borderRadius: "5px" }} >Edit</button>
                                <button onClick={() => handleDelete(item._id)} style={{ fontWeight: '500', backgroundColor: "red", color: 'white', padding: "10px", border: "none", borderRadius: "5px" }} >Delete</button>
                                <button style={{ fontWeight: '500', backgroundColor: "green", color: 'white', padding: "10px", border: "none", borderRadius: "5px" }}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

                : <h2 align='center'>No books found</h2>}


            <Modal show={modal.add} onHide={() => setShowModal({ add: false })} centered runTransition={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="text" style={{ marginTop: "10px" }}>
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" name="author" value={formData.author} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="genere" style={{ marginTop: "10px" }}>
                            <Form.Label>Genere</Form.Label>
                            <Form.Control type="text" name="genere" value={formData.genere} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="genere" style={{ marginTop: "10px" }}>
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control type="text" name="isbn" value={formData.isbn} onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group controlId="genere" style={{ marginTop: "10px" }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={formData.description} onChange={handleInputChange} required />
                        </Form.Group>
                        <div></div>
                        <Button variant="primary" type="submit" style={{ marginTop: "30px" }}>Add</Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </div >
    )
}

export default Books