import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Bi from 'react-icons/bi'
import * as Gr from 'react-icons/gr'
import * as IoIcons from "react-icons/io";
const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },

    {
        title: '',
        path: '/gym',
        icon: <FaIcons.FaLocationArrow color="white"/>,
        cName: 'nav-text',
    },

    {
        title: 'Diets',
        path: '/bmi',
        icon: <FaIcons.FaPizzaSlice />,
        cName: 'nav-text',
    },

    {
        title: 'Workout',
        path: '/workout',
        icon: <Bi.BiCycling />,
        cName: 'nav-text',
    },

    {
        title: 'Article',
        path: '/article',
        icon: <FaIcons.FaNewspaper />,
        cName: 'nav-text',
    }
]

export default SidebarData