import React , {useState} from "react";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

function TwoWayBindingSubmit3(){

    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [isSuccess, setIsSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const [state, setState  ] = useState({
        email : '',
        password : '',
        mobile : '',
        isSuccess: false
    })
     const handleSubmitLogin = (e) => {
        e.preventDefault()
            // console.log(email, password);

            if(email === 'the@1234' && password === '12345678'){
                setState(
                        {
                            ...state,
                            isSuccess: true,
                        }
                    )
            }
            else 
            {
                setState(
                    {
                        ...state,
                        isSuccess: false,
                    }
                )
            }

            setShowAlert(true)
           
     }
    
    const handleGetAccount = () => {

        setState({
            ...state,
            email: 'the@1234',
            password: '12345678'
        })
    }

    const handleInputValue = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }
    console.log(state);
    const {email, password, mobile, isSuccess} = state;
    return (
        <div>
            <h1>Login Form</h1>
            {
                isSuccess &&  <SuccessAlert showAlert={showAlert} setShowAlert = {setShowAlert} content={'Đăng nhập thành công.'}/>
                || !state.isSuccess && <ErrorAlert showAlert={showAlert} setShowAlert = {setShowAlert} content={'Đăng nhập thất bại.'}/>
            }
           <form onSubmit={handleSubmitLogin}>
                <div className="form-group  mb-3">
                    <label className="form-lable">Email</label>
                    <input type="email"  className="form-control" required 
                        value ={email}
                        name="email"
                        onInput = {handleInputValue}
                    />
                </div>

                <div className="form-group  mb-3">
                    <label className="form-lable">Mobile</label>
                    <input type="tel"  className="form-control" required 
                        value ={mobile}
                        name="mobile"
                        onInput = {handleInputValue}
                    />
                </div>

                <div className="form-group mb-3">
                    <label className="form-lable">Password</label>
                    <input type="password"  minLength={8}  className="form-control" required
                    value ={password} name="password"
                        onInput ={handleInputValue}
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
export  default TwoWayBindingSubmit3