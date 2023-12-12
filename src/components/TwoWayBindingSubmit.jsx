import React , {useState} from "react";

function TwoWayBindingSubmit(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isSuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)


     const handleSubmitLogin = (e) => {
        e.preventDefault()
            console.log(email, password);

            if(email === 'the@1234' && password === '12345678'){
                setIsSuccess(true)
            }
            else 
            {
                setIsSuccess(false)
            }

            setShowAlert(true)
     }
    
    const handleGetAccount = () => {
        setEmail('the@1234')
        setPassword('12345678')
    }
    return (
        <div>
            <h1>Login Form</h1>
            {
                showAlert && isSuccess && <div class="alert alert-success d-flex justify-content-between align-items-center" role="alert">
                Login Success
                <span role="button" className="text-dark fs-5 fw-bolder"
                    onClick={() => setShowAlert(false)}
                >&times;</span>

              </div>  || 
                showAlert && !isSuccess && <div class="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                Login Fail
                <span role="button" className="text-dark fs-5 fw-bolder"
                    onClick={() => setShowAlert(false)}
                >&times;</span>
              </div>
            }
           <form onSubmit={handleSubmitLogin}>
                <div className="form-group  mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email"  className="form-control" required 
                        value ={email}
                        onInput = {(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="form-group mb-3">
                    <label className="form-lable">Password</label>
                    <input type="password"  minLength={8}  className="form-control" required
                    value ={password}
                        onInput = {(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button type = "submit" className="btn btn-dark me-3">Login</button>
                    <button type = "button" className="btn btn-warning"
                        onClick={handleGetAccount}
                    >Get Acount</button>
                </div>
           </form>
        </div>
    )
}
export  default TwoWayBindingSubmit