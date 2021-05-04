import { Button } from '@material-ui/core';

import React, { useState } from 'react';
import Input from './Input';
import SButton from './Button';
import axios from 'axios';
function SignUp(){

    const [customerSignUp,setCustormerSignUP]=useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
       
        console.log(event.target.name);
        setCustormerSignUP({
            ...customerSignUp, 
            [event.target.name]: event.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(customerSignUp);
        axios.post('http://localhost:4000/app/signup',customerSignUp)
        localStorage.setItem("username",customerSignUp.username);
        window.location = "/home"
    }

    return <div class="sidebar1-form">
    <form classname="register-form" onSubmit={handleSubmit}>
    <br />
        <Input type="text" placeholder="UserName" name="username" value={customerSignUp.username} onChange={handleChange}></Input>
        <Input type="email" placeholder="Email" name="email" value={customerSignUp.email} onChange={handleChange}></Input>
        <Input type="password" placeholder="Password" name="password" minLength="10" value={customerSignUp.password} onChange={handleChange}></Input>
    <br />
        <SButton text="Register"></SButton>
    </form>
    </div>
}

export default SignUp;