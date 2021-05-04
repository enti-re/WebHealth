import React from 'react'



function Input(props)
{
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} required autoComplete="off" />
        </div>
    )   
}

export default Input;