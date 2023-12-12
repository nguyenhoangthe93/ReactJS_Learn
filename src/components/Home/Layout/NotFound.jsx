import React, { useEffect } from "react";

function NotFound(){

    useEffect(() => {
        console.log('mounted Home Page');
    }, [])
    
    return (
        <>
        <h1>Not Found</h1>
        </>
    )
}

export default NotFound;