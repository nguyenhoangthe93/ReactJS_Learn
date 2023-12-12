import React, { useState } from "react";

function InitStateCallback(){

    
    const [amount, setAmount] = useState()
    const [totalAmount, setTotalAmount] = useState(() => {

        const bill = [200, 250 , 540, 230]
        const total = bill.reduce(function(prevValue,curvalue)
        {
            return prevValue + curvalue;
        })
        return total;
    })

    const handleInputAmount = (e) => {
        setAmount(Number(e.target.value));
    }

    const handlePayment = () => {
        setTotalAmount(totalAmount + amount);
    }
    return (
        <div className="containter mt-4">
            <input type="number" onInput={handleInputAmount}/>
            <button onClick={handlePayment}>Payment</button>

            <br />
            <h1>Total Amount: {totalAmount} </h1>
        </div>
    )
}

export default InitStateCallback