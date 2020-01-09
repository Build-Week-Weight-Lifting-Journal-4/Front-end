import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInLink  = () => {

    return (
        <ul className="right">
            <li><NavLink to="/newworkoutform"> New Workout</NavLink></li>
            <li onClick={() => {localStorage.removeItem("token")}} ><NavLink to="/login">Sign Out</NavLink></li>
            <li><NavLink to="/dashboard" className=" btn btn-floating black"> Ray</NavLink></li>
        </ul>
    )
}

export default SignedInLink