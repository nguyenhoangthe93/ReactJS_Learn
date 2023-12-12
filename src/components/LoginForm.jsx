import React from "react";

function LoginForm({theme , handleChangeTheme}) {
    return (
      <div className={`p-2 ${theme}`}>
        <h3>Login Form</h3>
        <form>
          <div className='form-group mb-3'>
            <input type="email" className='form-control' placeholder='email'/>
          </div>
  
          <div className='form-group mb-3'>
            <input type="password" className='form-control' placeholder='password'/>
          </div>
  
          <div className='form-group mb-3'>
             <button type='submit' className='btn btn-success me-3'> Login</button>
  
             <button type='button' className='btn btn-danger'
                 onClick={handleChangeTheme}
              > Dark mode </button>
          </div>
        </form>
      </div>
    )
  }

  export default LoginForm