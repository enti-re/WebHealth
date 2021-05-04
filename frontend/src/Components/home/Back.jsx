import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import './home.css'
import * as Bs from "react-icons/bs";
let Username="";
function Back() {

    Username =  localStorage.getItem("username");
    return <div className="home-back">
    <div>
        <div className="typewriter">
            <p>Improve Your LifeStyle With Us</p>
        </div>
        <div className="home-contain">
            <Link to="/gym">
                <h1 className="home-one">Gym</h1>
            </Link>
            <Link to="/bmi">
                <h1 className="home-two">Diet</h1>
            </Link>
            <Link to="/workout">
                <h1 className="home-three">WorkOut</h1>
            </Link>
            <Link to="/article">
            <h1 className="home-four">Article</h1>
            </Link>
        </div>  
        <div className="home-username">
            {Username && (
                <div>
                    <h3> <Bs.BsPerson size={30} /> {Username}</h3>
                </div>)}
        </div>
    </div>
    <div className="particle">
        <Particles width="1000px" height="550px"
         />
    </div>
    </div>
}

export default Back
