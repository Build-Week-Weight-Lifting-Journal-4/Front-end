import React from 'react'
import {connect} from 'react-redux';
import { deleteExercise, startEditing } from '../Actions';
const WorkoutSum = ({ exercise, deleteExercise, startEditing, history }) => {
    const { name, region, updated_at, id} = exercise
    return (
    <div className="card z-depth-0 workout-summary">
        <div className="card-content grey-text text-darken-3 ">
            <span className="card-title">{name}</span>
            <p>{region} </p>
            <p className="grey-text"> on{updated_at}</p>
        </div>
        <button onClick={() => {deleteExercise(id)}}>Delete</button>
        <button onClick={() => {startEditing(exercise);history.push(`/edit/${exercise.id}`)}}>Edit</button>
    </div>
    )
}

const mapStateToProps = state => {
    return {...state};
}

export default connect(mapStateToProps,{deleteExercise,startEditing})(WorkoutSum)