import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedOutLink  = () => {

    return (
        <ul className="right">
            <li><NavLink to="/"> SignUp</NavLink></li>
            <li><NavLink to="/"> LogIn </NavLink></li>
        </ul>
    )
}

export default SignedOutLink