import React from "react";

function AppCountJS(){
    const handleIncreament = () => {
        document.getElementById('number').innerHTML = Number(document.getElementById('number').innerHTML) + 1;
    }
    return (
        <div>
            <h1 id="number">0</h1>
            <button onClick={handleIncreament} >Increament</button>
        </div>
    )
}
export default AppCountJS