import React from 'react'
import WorkoutSum from './WorkOutSum'

const WorkOutList = () =>  {
    return (
        <div className="workout-list section">
            <WorkoutSum/>
            <WorkoutSum/>
            <WorkoutSum/>
        </div>
    )
}
export default WorkOutList
