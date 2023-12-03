import React from "react";
import MainLayout from "../Layout/MainLayout";

const joblist = [
    {
      id:'task-01',
      name:'Javascript',
      status:'Looking for',
      hrName: 'Khoa Nguyen',
      count: 2
    },
    {
      id:'task-02',
      name:'ReactJs/Angular',
      status:'Done',
      hrName: 'Trang',
      count: 5
    },
    {
      id:'task-03',
      name:'PHP/Laravel',
      status:'Looking for',
      hrName: 'Sơn Nguyen',
      count: 7
    },
    {
      id:'task-04',
      name:'.NET Core MVC',
      status:'Done',
      hrName: 'Thương Phạm',
      count: 9
    },
  ]

function JobList() {
  // const handleClick = (job) => { 
  //      console.log(job);
  // }
        return (
          <MainLayout>
               <section>
            <table className="table table-striped table-hover">
                <thead className='table-success'>
                    <tr>
                      <th>#ID</th>
                      <th>Task Name</th>
                      <th>Count</th>
                      <th>Status</th>
                      <th>HR Name</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {
                     joblist.map((job) => (
                        // <TableRow 
                        //  {...job}
                        // // key = {job.key}
                        // // id = {job.id}
                        // // name = {job.name}
                        // // count = {job.count}
                        // // status = {job.status}
                        // onClick={() => handleClick(job)}
                        // />
                        <TableRow key = {job.key} { ...job} />
                      ))
                  }
                 
                </tbody>
            </table>
            
          </section>
          </MainLayout>
           
        )
}

function TableRow(job){
  const handleClick = (job) => { 
    console.log(job);
}
  return (
              <tr key={job.id}>
                            <td>{job.id}</td>
                            <td>{job.name}</td>
                            <td>{job.count}</td>
                            <td> <span className= {`${job.status != 'Done'? 'badge bg-success': "badge bg-warning"}`} > {job.status}</span> </td>
                            <td>{job.hrName}</td>
                            <td>
                              <button className='btn btn-outline-primary btn-sm me-1'>
                              <i className='fa fa-eye' onClick={ () => handleClick(job)}>
                              </i>
                              </button>
  
                              <button className='btn btn-outline-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                              </button>
                            </td>
                        </tr>
                        
  )
}
export default JobList