import { Grid } from '@material-ui/core';
import {React,useState} from 'react';
import gender from './images/gender.jpg';
import * as Cg from 'react-icons/cg';
import * as Gi from 'react-icons/gi';
import * as Bi from 'react-icons/bi';
import {list4a,list4b,list3a,list3b,list3c,list2a,list2b,list1} from './workoutlist1';



function Diet() {

    const [flag,setFlag] = useState(0);
    const [workoutInfo,setworkoutInfo] = useState({
        gen: "",
        age: "notTeen",
        type: 0,
    });

    function start(){
        return <div>
            <h1>Start Your Workout Analysis</h1>
            <div className="diet-flex">
                <button className="diet-button diet-button-1" onClick={changeFlag}>Start</button>
            </div>
        </div>
    }
    function gender(){
        return <div>
            <h1>What's Your Gender??</h1>
            <div className="diet-flex">
                    <div>
                        <button className="diet-button diet-button-2" onClick={()=>{
                            changeFlag();
                            setworkoutInfo({
                                ...workoutInfo,
                                gen: "male"
                            })
                        }}>Male</button>
                    </div>
                    <div>
                        <button className="diet-button diet-button-1" onClick={()=>{
                            changeFlag();
                            setworkoutInfo({
                                ...workoutInfo,
                                gen: "female"
                            })
                        }}>Female</button>
                    </div>
                </div>
        </div>
    }
    
    function ageGroup(){
        return <div>
            <h1>Select Your Age Group??</h1>
            <div className="diet-flex">
                    <div>
                        <button className="diet-button diet-button-2" onClick={()=>{
                            changeFlag();
                            setworkoutInfo({
                                ...workoutInfo,
                                age: "teen",
                            })
                        }}>Teen</button>
                    </div>
                    <div>
                        <button className="diet-button diet-button-1" onClick={changeFlag}>20's</button>
                    </div>
                    <div>
                        <button className="diet-button diet-button-2" onClick={changeFlag}>30's</button>
                    </div>
                </div>
        </div>
    }
    
    function goal(){
        return <div>
            <h1>Select Your Goal??</h1>
            <div className="diet-flex">
                    <div className="diet-buildBody" onClick={()=>{
                        changeFlag()
                        setworkoutInfo({
                                ...workoutInfo,
                                type: 1,
                            })
                    }}>
                        <h1>Build Muscle</h1>
                        <p>I have a low amount of body fat and need want to build more muscle.</p>
                    </div>
                    <div className="diet-buildBody" onClick={()=>{
                        changeFlag()
                        setworkoutInfo({
                                ...workoutInfo,
                                type: 2,
                            })
                    }} >
                        <h1>Build&Define</h1>
                        <p>I'm "skinny fat". Half skinny, half fat. I know I need more muscle, but there's still fat covering my abs.</p>
                    </div>
                </div>
            <div className="diet-flex">
                    <div className="diet-buildBody" onClick={()=>{
                        changeFlag()
                        setworkoutInfo({
                                ...workoutInfo,
                                type: 3,
                            })
                    }} >
                        <h1>Lean&Tone</h1>
                        <p>I have a good amount of muscle, but I still need to drop fat to reveal my existing muscle definition.</p>
                    </div>
                    <div className="diet-buildBody" onClick={()=>{
                        changeFlag()
                        setworkoutInfo({
                                ...workoutInfo,
                                type: 4,
                            })
                    }}>
                        <h1>LoseALotOfFat</h1>
                        <p>I have a high amount of body fat. I can't tell how much muscle I have. I just need to lose a lot of fat fast.</p>
                </div>
            </div>
        </div>
    }

    function showworkoutgenderA(){
        if(workoutInfo.gender=="male")
        return <h1>Warm Up Cardio : 25 seconds per interval</h1>
        else
        return <h1>Warm Up Cardio : 35 seconds per interval</h1>
    }

    function showworkoutgenderB(){
        if(workoutInfo.gender=="male")
        return <h1> HIIT Workout: 20 Seconds on, 10 seconds rest, x 3 per exercise</h1>
        else
        return <h1> HIIT Workout: 20 Seconds on, 10 seconds rest, x 2 per exercise</h1>
    }

    function LoseFat(){
        return <div>
            <div className="diet-flex-list">
                    <div className="diet-buildBody-list">
                        {showworkoutgenderA()}
                    <ul>
                    {
                        list4a.map((item,index)=>{
                            return(
                                    <li>{item}</li>
                            )
                        })
                    }
                    </ul>
                    </div>
                    <div className="diet-buildBody-list">
                            {showworkoutgenderB()}
                        <ul>
                        {
                            list4b.map((item,index)=>{
                                return(
                                        <li>{item}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
        </div>
    }
    
    function LeanAndToneAgeGender()
    {
        if(workoutInfo.gen.localeCompare("male")==0 && workoutInfo.age.localeCompare("teen")==0)
        {
            return (
                <div className="diet-buildBody-list">
                <h1>Exercise Warm-Up Sets WorkSets Rest</h1>
                        <ul>
                        {
                            list3a.map((item,index)=>{
                                return(
                                        <li>{item}</li>
                                )
                            })
                        }
                        </ul>
                </div>
            )
        }
        
        
        if(workoutInfo.gen.localeCompare("male")==0)
        {
            return (
                <div className="diet-buildBody-list">
                <h1>Exercise Warm-Up Sets WorkSets Rest</h1>
                    <ul>
                    {
                        list3b.map((item,index)=>{
                            return(
                                    <li>{item}</li>
                            )
                        })
                    }
                    </ul>
            </div>
            )   
        }
        
        return <div className="diet-buildBody-list">
                    <h1>Exercise Warm-Up Sets WorkSets Rest</h1>
                <ul>
                {
                    list3c.map((item,index)=>{
                        return(
                                <li>{item}</li>
                        )
                    })
                }
                </ul>
            </div>
    }

    function LeanAndTone()
    {
        return <>
            <div className="diet-flex-list">
                    {LeanAndToneAgeGender()}
                </div>
        </>
    }

    function buildMuscle()
    {
        return <div className="diet-flex-list">
        <div className="diet-buildBody-list">
        <h1>Build Muscle</h1>
        <ul>
        {
        list1.map((item,index)=>{
            return(
                    <li>{item}</li>
                )
            })
        }
        </ul>
    </div>
    </div>
    }
    
    function SetPerformance()
    {
        if(workoutInfo.gen.localeCompare("male")==0)
        return <h1>Perform 3 Sets of each exercise</h1>
        return <h1>Perform 2 Sets of each exercise</h1>
    }
    function buildAndDefine()
    {
        return  <div>
            {SetPerformance()}
        <div className="diet-flex-list">
                <div className="diet-buildBody-list">
                <h1>Chest</h1>
                <ul>
                {
                    list2a.map((item,index)=>{
                        return(
                                <li>{item}</li>
                        )
                    })
                }
                </ul>
                </div>
                <div className="diet-buildBody-list">
                    
                    <h1>Arms</h1>
                    <ul>
                    {
                        list2b.map((item,index)=>{
                            return(
                                    <li>{item}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
    </div>
    }

    function dietDisplay(){
        console.log(workoutInfo)
        if(flag==0)
            return start()
        if(flag==1)
            return gender()

        if(flag==2)
            return ageGroup()
        
        if(flag==3)
        return goal()

        if(flag==4)
        {
            if(workoutInfo.type==1)
            return buildMuscle()

            if(workoutInfo.type==2)
            return buildAndDefine()
            
            if(workoutInfo.type==3)
            return LeanAndTone()
            
            if(workoutInfo.type==4)
            return LoseFat()
        }

    }

    function changeFlag(){
        setFlag(flag+1);
    }

    function colorChange1(){
        if(flag>=1)
        return "#FB475E";
        return "white";
    }
    function colorChange2(){
        if(flag>=2)
        return "#019992";
        return "white";
    }
    function colorChange3(){
        if(flag>=3)
        return "#FFB001";
        return "white";
    }
    
    function BackButton()
    {
        return <button className="back-btn-workout" onClick={()=>{
            setFlag(0)
        }}>Back</button>
    }
    

    function displayShowUpperBar(){
        if(flag>=4)
            return BackButton()
            
        if(flag<4)
            return showUpperBar()
    }

    function showUpperBar(){
        return (
        <div className="diet-flex-icon">
            <div className="diet-flex-item diet-item-1" style={{color: colorChange1(), borderColor: colorChange1()}} onClick={()=>{
                if(flag>1)
                setFlag(1)}
                }>
                <Bi.BiMale size={80} />
                <h3>Gender</h3>
            </div>
            <div className="diet-flex-item diet-item-2" style={{color: colorChange2(), borderColor: colorChange2()}} onClick={()=>{
                if(flag>1)
                setFlag(2)
            }}>
                 <Cg.CgSandClock size={75}/>
                <h3>Age</h3>
            </div>
            <div className="diet-flex-item diet-item-3" style={{color: colorChange3(),borderColor: colorChange3()}} onClick={()=>{
                if(flag>3)
                setFlag(3)
            }}>
                 <Gi.GiNetworkBars size={75} />
                <h3>Goal</h3>
            </div>
         </div>)
    }
    
    return (
        <div className="diet-body">
            <div className="diet-body-color">
                {displayShowUpperBar()}
                <br />
                {dietDisplay()}
            </div>
        </div>
    )
}

export default Diet
