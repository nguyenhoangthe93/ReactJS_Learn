import React, {useState} from "react";



function UseState(){
    //logic
    const [number , setNumber] = useState(10);
    const handleIncreament = () => {
        setNumber(number + 1);
    }

    const handleDecreament = () => {
        setNumber(number - 1);
    }
    //UI
    return (
        <div>
            <h1>{number}</h1>
            <button onClick= {handleIncreament}>Increament</button>
            <button onClick= {handleDecreament}>Decreament</button>

        </div>
    )
}

export default UseState