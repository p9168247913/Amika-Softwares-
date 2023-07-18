import React, { useState } from 'react'

const Login = () => {
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4040/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        alert("Login SuccessFull")
        
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
        localStorage.setItem("token", data.token)
        localStorage.setItem("allowedPages", data.allowedPages)
        setEmail('');
        setPassword('');
      } else {
        alert("Invalid Email or Password")
      }
    } catch (error) {
      console.log(error);
    }

    // const email = "admin@admin.com"

  };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
            <input type='email' value={email} onChange={handleEmailChange} placeholder='Enter email'  required/><br/>
            <label>Password</label><br/>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter Password' required/><br/><br/>
            <button type="submit"> Login</button>
            </form>
        </div>
    )
}

export default Login