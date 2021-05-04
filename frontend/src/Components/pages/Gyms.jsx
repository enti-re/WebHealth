import React from 'react'
import Gym from '../Gym/Gym'
import '../Gym/cards.css'
import Sidebar from '../sidebar/sidebar'
import Wallpaper from '../Gym/gym-images/wallpaper.jpg'
function Gyms() {
    return (
        <div id="gym-bg">
        <Sidebar />
        {/* <img src={Wallpaper} id="gym-bg" /> */}
            <Gym />
        </div>
    )
}

export default Gyms
