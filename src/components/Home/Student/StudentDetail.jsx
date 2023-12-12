import React from "react";  
import { useParams } from "react-router-dom";

function StudentDetail()
{
    // const params = useParams()
    // console.log(params);

    const {studentId , name } = useParams()
    return (
        <>
        <h1>Student Detail {studentId}  </h1>
        <h1>Full Name {name}</h1>
        </>
    )
 
}

export default StudentDetail