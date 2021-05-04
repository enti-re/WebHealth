import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';
import Input from './Input'
import LButton from './Button'


function Login(){

    const [customerLogIn,setcustomerLogIn] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event)=>{
        setcustomerLogIn({
            ...customerLogIn,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(customerLogIn);
            const {data} = await axios.post('http://localhost:4000/app/login',customerLogIn)
            if(data.msg=="Valid Credential")
            {
                localStorage.setItem("username",data.username)
                window.location = "/home";  
            }
            else
                alert("Invalid Credential");
                return;
    }

    return <div class="sidebar2-form">
    <form onSubmit={handleSubmit}>
    <br />
        <Input type="text" placeholder="UserName" name="username" value={customerLogIn.username} onChange={handleChange}></Input>
        <Input type="password" placeholder="Password" minLength="10" name="password" value={customerLogIn.password} onChange={handleChange}></Input>
        <br />
        <LButton classname="rbutton" text="LogIn"></LButton>
    </form>
    </div>
}

export default Login;