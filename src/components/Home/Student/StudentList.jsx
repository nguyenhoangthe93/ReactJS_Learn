import React, { useEffect } from "react";  
import { Link, useNavigate } from "react-router-dom";

function StudentList()
{
    const navigate = useNavigate()
    useEffect(() => {
        return () => {
            console.log('unmouted student list');
        }
    },[])

    const handleNavigate = () => {
        navigate("/student/add");
    }

    const studentList = [
        {
            id: 1, 
            fullname: 'Khoa nguyễn'
        },
        {
            id: 2, 
            fullname: 'Thế'
        },
        {
            id: 3, 
            fullname: 'Sơn'
        },
    ]

    return (
        <>
            <div className="d-flex align-items-center">
                <h1 className="me-3">Student List</h1>
                {/* <button  onClick={handleNavigate} className="btn btn-sm btn-primary">Create Student</button> */}
                <Link to={"/student/add"} className="btn btn-sm btn-primary">Create Student</Link>

            </div>
            <div>
                <ul>
                    {
                        studentList.map((student) => (
                            <li key={student.id}>
                                <Link className="btn btn-sm btn-link ms-3" to={`/student/detail/${student.id}/${student.fullname}`}>{student.fullname}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
 
}

export default StudentList