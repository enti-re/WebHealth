import { Grid } from '@material-ui/core'
import React, { useState,useEffect } from 'react';
import Input from '../Register/Input'
import LButton from '../Register/Button'
import axios from 'axios';
import './cards.css';
import List from './GymData'
import * as Hi from 'react-icons/hi'
import Image1 from './gym-images/one.jpg'
import Image2 from './gym-images/two.jpg'
import Image3 from './gym-images/three.jpg'
import Image4 from './gym-images/four.jpg'
import Image5 from './gym-images/five.jpg'
import Image6 from './gym-images/six.jpg'
import Image7 from './gym-images/seven.jpg'
import Image8 from './gym-images/eight.jpg'
import Image9 from './gym-images/nine.jpg'
import Image10 from './gym-images/ten.jpg'


const array = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10]
function Gym() {

    const [arr,setarr] = useState([]);
    const [gymName,setgymName] = useState({
        Name: '',
        Description: '',
        Location: '',
    })
    
    const [isContinue,setisContinue] = useState(false);
    


    useEffect(async() => {
        const list = await axios.get("http://localhost:4000/app/gymData");
        setarr([...list.data])
      }, []);

    const handleChange = (event)=>{
        setgymName({
            ...gymName,
            [event.target.name]: event.target.value,
        })
    }

    
    const handleSubmit = async (event)=>{
        event.preventDefault()
        const obj = {
            gymName: gymName.Name,
            gymDescription: gymName.Description,
            gymLocation: gymName.Location,
        }

        
        await axios.post('http://localhost:4000/app/gymData',obj);
        const list = await axios.get("http://localhost:4000/app/gymData");
        setarr([...list.data])
        
        console.log(arr);
        setgymName({
            ...gymName,
            Name: '',
            Description: '',
            Location: '',
        })
    }

    function displayContinue(){
        return <button onClick={()=>{
            setisContinue(!isContinue)
        }}>
            Continue
        </button>
    }

    function addGym(){
        return <form classname="gym-form" onSubmit={handleSubmit}>
        
        <Input type="text" placeholder="Gym Name" name="Name" value={gymName.Name} onChange={handleChange}></Input>
        <Input type="text" placeholder="Gym Description" name="Description" value={gymName.Description} onChange={handleChange}></Input>
        <Input type="url" placeholder="Location" name="Location" value={gymName.Location} onChange={handleChange}></Input>
      <LButton classname="rbutton" text="Add Gym"></LButton>
    </form>
    }
    
    function operate(){
        
        if(isContinue)
            return addGym();
        else 
            return displayContinue();
    }

    function randomImage(index){
        const image = array[index%10];
        console.log("debug");
        return `url(${image})`
    }

    
    // randomImage();
    return (
        <div className="gym-cover">
            <div className="gym-cover-color">
            <Grid container>
            <Grid sm={11}>
            </Grid>
            <Grid sm={11}>
            <div className="head">
                <h1>Gyms for You</h1>
                <div className="gym-switch" onClick={()=>setisContinue(!isContinue)}><Hi.HiSwitchVertical size="45" /></div> 
            </div>
            </Grid>
                <Grid item sm={7}>
                <div className="gym-list">
            {arr.map((item,index)=>{
                        return(
                    <div className="whole">
                    <div className="container">
                    <div className="card">
                    <h2 className="card-head">{item.gymName}</h2>
                    <a href={item.gymLocation} target="_blank"><i className="fas fa-arrow-right"></i></a>
                    <p>{item.gymDescription}</p>
                    <div className="pic" style={{backgroundImage: randomImage(index)}}></div>
                    <ul>
                    </ul>
                    <div className="social">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <button>
                    </button>
                    </div>
                </div>
                </div>
                        )
            })}
            </div>
                </Grid>
                <Grid item sm={5}>
                <div className="box">
                <h1>Want to add your gym</h1>
                {operate()}
                </div>
                </Grid>
            </Grid>
            </div>
            </div>
    )
}

export default Gym
