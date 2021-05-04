import React from 'react'
import SidebarData from './SidebarData';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import * as Cg from 'react-icons/cg'
import { Instagram, Twitter } from '@material-ui/icons';


function SidebarCollapse(props) {
    return (
        <IconContext.Provider value={{color: "#FFFFFF"}}>
            <nav className="sidebar-menu ">
                    <ul className="sidebar-menu-head" onClick={props.func}>
                    <li className="head-icon">
                    <IconContext.Provider value={{color: "#FFFFFF"}}>
                        <FaIcons.FaAlignJustify  />
                    </IconContext.Provider>
                    </li>
                    </ul>
                    <ul className="sidebar-menu-item ">
                {SidebarData.map((item,index)=>{
                            return (
                                <li key={index} className="sidebar-text">
                                <Link to={item.path}>
                                <span>{item.icon}</span>
                                </Link>
                                </li>
                            )
                        })}
                </ul>
                <ul className="sidebar-menu-media">
                <li className="sidebar-text">
                    <span><Instagram></Instagram></span>
                </li>
                {/* <li className="sidebar-text">
                    <span><Twitter></Twitter></span>
                </li> */}
                <li className="sidebar-text">
                    <span><Link to="/"><Cg.CgLogOut size={25} /></Link></span>
                </li>
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default SidebarCollapse
