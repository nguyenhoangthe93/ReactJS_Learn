import React from "react";
function Heading(props){
    return (
            <h1 style={{color: props.color, background: props.background}} className='display-3 fw-bolder'>{props.children}</h1>
    )
}

export  default Heading;