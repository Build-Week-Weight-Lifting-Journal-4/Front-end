import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSignup} from '../Actions';


const SignupForm = props => {

    const [user, setNewUser] = useState({
        full_name: "",
        username: "",
        password: "",
    });
    console.log({user})
    const handleChanges = e => {
        setNewUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    let [showError1, setShowError1] = useState(false);
    let [showError2, setShowError2] = useState(false);
    const validateForm = (v) => {
        let valid;
        if (user.username.length >= 6) {
            valid = true;
            setShowError1(false);
        }
        if (user.password.length >= 8) {
            valid = true;
            setShowError2(false);
        }
        if (user.username.length < 6) {
            setShowError1(true);
            valid = false;
        }
        if (user.password.length < 8) {
            setShowError2(true);
            valid = false;
        }
        return valid;
    };

    const submitForm = a => {
        a.preventDefault();
        if (validateForm(a)) {
            console.info('Valid Form');
            props.postSignup(user);
            setTimeout(() => {
            props.history.push('/dashboard')
        },4000)
            setNewUser(user);
            setShowError1(false);
            setShowError2(false);
        } else {
            console.error('Invalid Form');
        }
    };

    return (
        <div id='form'>
            <form onSubmit={submitForm}>

                <label htmlFor='Name'>Name:</label>
                <input id='name' type='text' placeholder='name' name='full_name' value={user.full_name} onChange={handleChanges}
                       noValidate/>

                <label htmlFor='Username'>Username:</label>
                <input id='username' type='text' placeholder='username' name='username' value={user.username}
                       onChange={handleChanges} noValidate/>
                {showError1 === true ? <span>Username must be at least 6 characters</span> : ""}
                <label htmlFor='Password'>Password:</label>
                <input id='password' type='password' placeholder='' name='password' value={user.password}
                       onChange={handleChanges} noValidate/>
                {showError2 === true ? <span>Password must be at least 8 characters</span> : ""}
                <button type='submit'>Submit</button>

            </form>


        </div>

    );
};

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps, {postSignup})(SignupForm);