import React from "react";
import Avatar from "../Avatar/Avatar";


const profile = {
    name : 'The Nguyen',
    age : 20,
    gender: 'male',
    mobile : '123456',
    email : '123456@gmail.com',
    avatarUrl : 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/3-512.png'
  }

  
const Profile = () => {
  let admin = true;
  let permissions = {
    role: 'admin',
    status: 'active',
  }
  console.log(permissions.role);
    return (
        <section>
        <div className="card mb-3" >
          <div className='row g-0 d-flex align-items-center justify-content-center'>
              <div className='col-md-4'>
                  {/* <img src={profile.avatarUrl} className="card-img-top" alt="..." /> */}
                   <Avatar avatarUrl={profile.avatarUrl} />

              </div>
              <div className='col-md-8'>
                  <div className="card-body">
                    <h5 className="card-title">{profile.name}</h5>
                    {
                      // admin && <span>Admin</span>
                      Object.keys(permissions).length > 0 && <span className="text-danger">Admin</span>
                    }
                    <ul className='list-group'>
                      <li className='list-group-item'>Age : <span className='fw-bolder'>{profile.age}</span></li>
                      <li className='list-group-item'>Gender : <span className='fw-bolder'>{profile.gender}</span></li>
                      <li className='list-group-item'>Email : <span className='fw-bolder'>{profile.email}</span></li>
                      <li className='list-group-item'>Mobile : <span className='fw-bolder'>{profile.mobile}</span></li>
                    </ul>
                  </div>
              </div>
          </div>
        </div>
        </section>
    )
}

export default Profile