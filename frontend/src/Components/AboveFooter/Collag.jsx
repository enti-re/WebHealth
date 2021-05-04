import React from 'react'
import CollageComponent from './CollageItem'

function Collage(){
    return <div>
        <h1><center>Know About Us</center></h1>
        <div class="collage-container">
           <div class="item-1">
               <h1 class="center">Gym</h1>
           </div>
           <div class="item-2">
               <h1 class="center">Yoga</h1>
           </div>
           <div class="item-3">
               <h1 class="center">Food and Nutrition</h1>
           </div>
           <div class="item-4">
               <h1 class="center">Mental Health</h1>
           </div>
           <div class="item-5">
               <h1 class="center">WorkOut Plans</h1>
           </div>
           <div class="item-6">
               <h1 class="center">Articles to Read</h1>
           </div>
        </div>
    </div>
}

export default Collage;

// Components were not able to inherit grid display
// therefore not able set grid-row-start/end ...
//