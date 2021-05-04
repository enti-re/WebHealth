import React from "react";

function FooterElement(props){
    return <div>
        <h1>{props.contactInfo}</h1>
        <p>{props.details}</p>
    </div>
}

export default FooterElement;