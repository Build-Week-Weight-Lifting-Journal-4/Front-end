import React from 'react'
import WorkoutSum from './WorkOutSum'

const WorkOutList = ({ exercises }) =>  {
    return (
        <div className="workout-list section">
            {/* <WorkoutSum/>
            <WorkoutSum/>
            <WorkoutSum/> */}
            {exercises.map(exercise => {
                return <WorkoutSum exercise={exercise}/>
            })}
        </div>
    )
}
export default WorkOutList
