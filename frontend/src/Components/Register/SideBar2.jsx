import React, { useState } from 'react';
import Login from './Login'
import SignUp from './SignUp';

function SideBar2(){
            const [Log,setLog] = useState(true);

        function func1(){
            setLog(true);
        }

        function func2(){
            setLog(false);
        }

        function check(){
            return Log?<SignUp></SignUp>:<Login></Login>;
        }


    

    return <div class="sidebar-2 center">
        <div class="oneLine sidebar2-container">
            <h1 className={Log ? "select11" : "select1"} onClick={func1}>SignUp</h1>
            <h1 className={Log ? "select2" : 'select12'} onClick={func2}>LogIn</h1>
        </div>
        {check()}        
    </div>
}

export default SideBar2;