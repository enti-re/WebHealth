import { Card } from '@material-ui/core'
import Back from '../home/Back'
import React from 'react'
import Background from '../home/BackGym.jpg';
import '../home/home.css';
import Sidebar from '../sidebar/sidebar';

const useStyle = {
    backgroundColor: "red",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
}

function Home() {

    return (
        <>
         <Sidebar />
        <div className="home">
            <div className="home-cover">
                <Back />
            </div>
        </div>
        </>
    )
}

export default Home
