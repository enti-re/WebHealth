import React from 'react';
import SideBar1 from './SideBar1';
import SideBar2 from './SideBar2';
import './Register.css';

function Register(){
    return <div className="register-back">
    <div className="register-body">
        <div className="register-container">
            <SideBar1></SideBar1>
            <SideBar2></SideBar2>
        </div>
    </div>
    </div>
}

export default Register