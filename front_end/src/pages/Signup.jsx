import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4040/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            console.log(response.json())
            if (response) {
                alert("Registration SuccessFull")

                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000);
                setName('')
                setEmail('');
                setPassword('');
            } else {
                alert("Error in Registering!!")
            }
        } catch (error) {
            console.log(error);
        }

        // const email = "admin@admin.com"

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' value={name} onChange={handleNameChange} placeholder='Enter Name' required /><br />
                <label>Email</label><br />
                <input type='email' placeholder='Enter email' value={email} onChange={handleEmailChange} required /><br />
                <label>Password</label><br />
                <input type="password" placeholder='Enter Password' value={password} onChange={handlePasswordChange} required /><br /><br />
                <button type="submit"> Login</button>
            </form>
        </div>
    )
}

export default Signup