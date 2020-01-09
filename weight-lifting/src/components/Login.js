import React, {useState} from 'react';
import {connect} from 'react-redux';
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps';
import { postLogin, loginError } from '../Actions';
import axios from 'axios';

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

    const submitForm = e => {
        e.preventDefault();
        axios.post('https://weightlift2020.herokuapp.com/users/login', userCheck)
            .then(response => {
                // localStorage.setItem('token', response.data.token)
                const { token, user_id: userId } = response.data;
                const { postLogin } = props
                postLogin(token, userId)
                props.history.push('/dashboard')
                console.log(response);
            })
            .catch(error => {
                const { loginError } = props
                // dispatch({type: POST_LOGIN_FAILURE, payload: error.response.data.error});
                loginError( error.response.data.error)
            });
        // setTimeout(() => {
            // },4000)
            console.log(userCheck)
    }
    console.log(props)
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

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps,{postLogin, loginError})(Login);