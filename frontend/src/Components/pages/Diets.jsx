import React from 'react'
import { Container,Grid } from '@material-ui/core'
import DietB from '../Diets/DietB'
import { makeStyles } from '@material-ui/core/styles';
import '../Diets/Diet.css';
import Diet from '../Diets/displayCard'
import Sidebar from '../sidebar/sidebar';


function Diets() {
    return (
        <>
        <Sidebar />
        <div>
            <div classname="dietBody">
                <Diet></Diet>
            </div>
        </div>
        </>


       
    )
}

export default Diets
