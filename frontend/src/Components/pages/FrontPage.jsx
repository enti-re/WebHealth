import {React,useEffect} from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../NavigationBar/Navbar'
import video from '../HeroSection/runner.mp4';



export default function FrontPage() {
let chatbot = false;
    return (
        
        <div>
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
        </video>
            <Navbar />
            <HeroSection />
        </div>
    )
}
