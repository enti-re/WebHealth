import React from 'react';

function CollageComponent(props)
{
    console.log(props.h);
    const myStyle = {
        backgroundImage: `url(${props.Background})`,
        backgroundPosition: "center center",
        height: `${props.h}`,
    }
    
    return <div style={myStyle}>
        <h1>{props.heading}</h1>
    </div>
}

export default CollageComponent;