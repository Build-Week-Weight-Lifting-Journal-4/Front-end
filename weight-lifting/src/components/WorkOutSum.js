import React from 'react'
import axiosWithAuth from "../utlis/axiosWithAuth";
const WorkoutSum = ({ exercise }) => {
    const { name, region, updated_at, id} = exercise
    return (
    <div className="card z-depth-0 workout-summary">
        <div className="card-content grey-text text-darken-3 ">
            <span className="card-title">{name}</span>
            <p>{region} </p>
             <p className="grey-text"> on{updated_at}</p>
        </div>
        <button onClick={() => {
            axiosWithAuth().delete(`https://weightlift2020.herokuapp.com/exercise/${id}
            `)
            .then(res => {
                console.log(res);
            })
        }}>Delete</button>
    </div>
    )
}
export default WorkoutSum