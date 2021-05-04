import { blue } from '@material-ui/core/colors';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Button(props){
    return <div>
        <button type="submit" class="sidebar-button">{props.text}</button>    
        <ToastContainer />
    </div>
}

export default Button;