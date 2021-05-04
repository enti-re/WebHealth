import {React,useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import SidebarData from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SidebarCollapse from './SidebarCollapse';
import SidebarOriginal from './SidebarOriginal';
import './sidebar.css'

function Sidebar(){

    const [sidebar,setSidebar] = useState(true)
    const showSidebar = ()=> setSidebar(!sidebar);

   const show = ()=> {
    return <SidebarCollapse  /> 
   }
     
    return (
        <div>
          {show()}
        </div>
    )
}

export default Sidebar
