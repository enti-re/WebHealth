import {React,useState,useEffect} from 'react'
import * as Fa from 'react-icons/fa'
import './bmi.css'
import * as Bi from 'react-icons/bi'
import {list1a,list1b,list2a,list2b,list3a,list3b,list4,list5a,list5b} from './BmiData'

let calorie=0;
let res=0;

function Bmi() {
    
    const [bmi,setbmi]=useState({
        bweight: "",
        bheight: "",
        bage: "",
        bgender: "",
        bphysicalActivity: 0,
    })
    
    const [flag,setflag] = useState(false)
    const [bmiFlag,setbmiFlag] = useState(false)
    
    
    function onchange(event){
        console.log(bmi);
        setbmi({
            ...bmi,
            [event.target.name]: [event.target.value],
        })
        return;
    }
    
    function onsubmit(event){
        event.preventDefault()
        let w = parseFloat(bmi.bweight);
        let h = parseFloat(bmi.bheight);
        res = w/(h*h);
        res = Math.round(res * 100) / 100
        document.querySelector("#bmiDisplay").innerHTML=`YOUR BMI: ${res}`;
        
        let g = bmi.bgender;
        console.log(g);
        if(g=="F")
            calorie=((655.1 + 9.6*parseFloat(bmi.bweight) + 190*parseFloat(bmi.bheight))/(4.7*parseInt(bmi.bage)))*bmi.bphysicalActivity;
        else
            calorie=((66.5 + 13.8*parseFloat(bmi.bweight) + 500*parseFloat(bmi.bheight))/(6.8*parseInt(bmi.bage)))*bmi.bphysicalActivity;

            setbmi({
                bweight: "",
                bheight: "",
                bage: "",
                bgender: "",
                bphysicalActivity: 0,
            })
        setflag(true);
        return;
    }
    
    
    function BmiCalculator()
    {
        return <div>
    <h1><center><Bi.BiHealth color="#00ACC1"/>  BMI CALCULATOR</center></h1>
        <form className="bmi-form" onSubmit={onsubmit}>
            <p>ENTER YOUR DETAILS</p>
            <input type="number" step="0.01" min="0" placeholder="Weight(kg)" name="bweight" value= {bmi.bweight} onChange={onchange} required autoComplete="off"/>
            <input type="number" min="0" step="0.01" placeholder="Height(m)" name="bheight" value={bmi.bheight} onChange={onchange} required autoComplete="off"/>
            <input type="number" min="0" placeholder="Age" name="bage" value={bmi.bage} onChange={onchange} required autoComplete="off"/>
            <input type="text" placeholder="Gender m/f" name="bgender" value={bmi.bgender} onChange={onchange} required autoComplete="off"/>
            <div className="bmi-radio">
            <p>Physical Activity</p>
            <input type="radio" id="bmi-low" name="bphysicalActivity" value="1" onChange={onchange} required autoComplete="off"/>
            <label for="bmi-low">Low</label><br />
            <input type="radio" id="bmi-medium" name="bphysicalActivity" value="2" onChange={onchange} required autoComplete="off"/>
            <label for="bmi-medium">Medium</label><br />
            <input type="radio" id="bmi-heavy" name="bphysicalActivity" value="3" onChange={onchange} required autoComplete="off"/>
            <label for="bmi-heavy">Heavy</label>
            </div>
            <button>Sumbit</button>
        </form>
    </div>
}

function Calorie1()
{
    // return <h1>Hello12</h1>
    console.log(list1a);
    return <div className="calorie-grid">
        <div>
            <ul>
            <h1>Veg</h1>
                {list1a.map((item)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
        <div>
        <h1>Non Veg</h1>
            <ul>
                {list1b.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
    </div>
}
function Calorie2()
{
    return <div className="calorie-grid">
        <div>
            <ul>
            <h1>Veg</h1>

                {list2a.map((item,index)=>{
                        return <li>{item}</li>  
                })}
            </ul>
        </div>
        <div>
            <ul>
            <h1>Non Veg</h1>
                {list2b.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
    </div>
}
function Calorie3()
{
    return <div className="calorie-grid">
        <div>
            <ul>
            <h1>Veg</h1>
                {list3a.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
        <div>
            <ul>
            <h1>Non Veg</h1>
                {list3b.map((item,index)=>{
                    <li>{item}</li>  
                })}
            </ul>
        </div>
    </div>
}
function Calorie4()
{
    return <div className="calorie-grid">
        <div>
            <ul>
            <h1>Veg and Non-Veg</h1>
                {list4.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
    </div>
}
function Calorie5()
{
    return <div className="calorie-grid">
        <div>
            <ul>
            <h1>Veg</h1>
                {list5a.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
        <div>
            <ul>
            <h1>Non Veg</h1>
                {list5b.map((item,index)=>{
                    return <li>{item}</li>  
                })}
            </ul>
        </div>
    </div>
}
function Calorie(){

    if(calorie<=1500)
        return Calorie1();

    if(calorie<=2000)
    return Calorie2();

    if(calorie<=2500)
    return Calorie3();

    if(calorie<=3000)
    return Calorie4();

    return Calorie5();
}

    return (
        <div className="bmi-grid">
            <div className="bmi-grid1"><h1>Find Diet Suitable For Your Life</h1>
            <div className="bmi-calc" onClick={()=>{
                setflag(false)
                setbmiFlag(false)
            }}><Bi.BiHome size={35}/></div>
            </div>
            <div className="bmi-grid2">
            <div className="bmi-grid2-color">
                { !bmiFlag && BmiCalculator() }
                <div className="bmi-result">
                {!bmiFlag && <div id="bmiDisplay"></div>}
                {flag && !bmiFlag && <button onClick={()=>{setbmiFlag(true)} }>Click here for Diet Recommendation</button>}
                </div>
                {bmiFlag && Calorie()}
            </div>
            </div>
            
        </div>
    )
}

export default Bmi
