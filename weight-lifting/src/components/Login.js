import React, {useState} from 'react';
import {connect} from 'react-redux';
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps';
import {postLogin} from '../Actions';

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
        props.postLogin(userCheck)
        setTimeout(() => {
            props.history.push('/dashboard')
        },4000)

    }

return (   
        
        <div id="Login">
            <form onSubmit={submitForm}>

                <label htmlFor="Username">Username:</label>
                <input id="username" type="text" placeholder="username" name="username" value={userCheck.username} onChange={handleChanges} noValidate/>
                    {/* {showError1 === true ? <span>User does not exist</span> : ""} */}
                <label htmlFor="Password">Password:</label>
                <input id="password" type="password" placeholder="" name="password" value={userCheck.password} onChange={handleChanges} noValidate/>
                    {/* {showError2 === true ? <span>Password is incorrect</span> : ""} */}
                <button type="submit">Login</button>
                
            </form> 
        </div>    
    )
}

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps,{postLogin})(Login);