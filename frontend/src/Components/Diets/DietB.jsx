import React from 'react'
import './Diet.css';
import weightLoss from '../Diets/wL.jpg'
import weightGain from '../Diets/wG.jpg'
import weightMantain from '../Diets/wM.jpg'

function DietB() {
    return (
        <div id="dietBody">
            <div className="container">
                <div className="grid1">
                    <h1>One must eat to live, not live to eat.</h1>
                    <p>At the start of your diet you might find yourself desperately counting down the hours until your next meal. However, this feeling will soon pass. When you get into the habit of eating healthily it will become second nature, and that’s when you’ll really start to lose weight.</p>
                </div>
                <div></div>
                <div className="grid2">
                    <p>Weight Gain</p>
                </div>
                <div className="grid3">
                    <p>Weight Mantain</p>
                </div>
                <div className="grid4">
                    <p>Weight Loss</p>
                </div>
            </div>
        </div>
    )
}

export default DietB
