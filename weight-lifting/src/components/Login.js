import React, {useState} from 'react';

const Login = props => {

    const [userCheck, setUserCheck] = useState({
        username: "",
        password:"",
    });

    const handleChanges = e => {
    setUserCheck({
        ...userCheck,
        [e.target.name]: e.target.value,
    })}

    const submitForm = a => {
        a.preventDefault();
        setUserCheck(userCheck);
    }

return (   
        
        <div id="form">
            <form onSubmit={submitForm}>

                <label htmlFor="Username">Username:</label>
                <input id="username" type="text" placeholder="" name="username" value={userCheck.username} onChange={handleChanges} noValidate/>
                    {/* {showError1 === true ? <span>User does not exist</span> : ""} */}
                <label htmlFor="Password">Password:</label>
                <input id="password" type="password" placeholder="" name="password" value={userCheck.password} onChange={handleChanges} noValidate/>
                    {/* {showError2 === true ? <span>Password is incorrect</span> : ""} */}
                <button type="submit">Login</button>
                
            </form> 
        </div>    
    )
}

export default Login;