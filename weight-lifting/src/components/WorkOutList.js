import React from 'react'
import WorkoutSum from './WorkOutSum'

const WorkOutList = ({ exercises, history }) =>  {
    return (
        <div className="workout-list section">
            {/* <WorkoutSum/>
            <WorkoutSum/>
            <WorkoutSum/> */}
            {exercises.map(exercise => {
                return <WorkoutSum key={exercise.id} history={history} exercise={exercise}/>
            })}
        </div>
    )
}
export default WorkOutList
