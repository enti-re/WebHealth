import React from 'react'
import SidebarData from './SidebarData';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import Particles from 'react-particles-js';


function SidebarOriginal(props) {
    return (
        <div className="sidebar-original">
       <IconContext.Provider value={{color:"#FFFFFF"}}>
        
        <nav className="sidebar-menu active">
                <ul className="sidebar-menu-head">
                    <li className="head-icon" onClick={props.func}>
                    <IconContext.Provider value={{color: "#FFFFFF"}}>
                            <div className="original-return"><FaIcons.FaGripLines /></div>
                        </IconContext.Provider>
                    </li>
                </ul>
                <ul className="sidebar-menu-item sidebar-menu-item-original">
            {SidebarData.map((item,index)=>{
                        return (
                            <li key={index} className="sidebar-text">
                            <Link to={item.path}>
                            <h1 id="text">{item.title}</h1>
                            <div className="original-line"></div>
                            </Link>
                            </li>
                        )
                    })}
            </ul>
            {/* <ul className="sidebar-menu-item sidebar-menu-item-original"> */}
                {/* <li><img src={image}/></li> */}
            {/* </ul> */}
        </nav>
        </IconContext.Provider>
        <Particles width="1200px" height="550px" 
            params={{
            		particles:{
                        color:{
                            value:"red",
                        }
                    }
            	}}
        />
        </div>
    )
}

export default SidebarOriginal
