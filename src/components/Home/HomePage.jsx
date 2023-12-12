import React, { useEffect } from "react";

function HomePage(){

    useEffect(() => {
        console.log('mounted Home Page');
    }, [])
    
    return (
        <>
        <h1>Home page</h1>
        </>
    )
}

export default HomePage;