import React, {useState} from 'react';

const Login = props => {

return (
        <div id="Login">
            <form onSubmit={submitForm}>

                <label htmlFor="Username">Username:</label>
                <input id="username" type="text" placeholder="username" name="username" value={user.username} onChange={handleChanges} noValidate/>
                    {showError1 === true ? <span>User does not exist</span> : ""}
                <label htmlFor="Password">Password:</label>
                <input id="password" type="password" placeholder="" name="password" value={user.password} onChange={handleChanges} noValidate/>
                    {showError2 === true ? <span>Password is incorrect</span> : ""}
                <button type="submit">Login</button>
                
            </form> 
        </div>    
    )
}

export default SignupForm;