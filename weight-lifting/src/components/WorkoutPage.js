import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Card = styled.div`
width: 50%;
margin: 0 auto;
border: 1px solid grey;
`;
const Name = styled.h2``;
const Region = styled.h3``;
const Attribute = styled.p`
font-size: 1.3rem;
`;
const Label = styled.label`
font-size: 2rem;
color: black;
height: 500px;
background-color: red;

`;
const Input = styled.input`
background-color: #61dafb;
`;

const WorkoutPage = props => {
    const [workout, setWorkout] = useState(props.exerciseList.find(exercise => exercise.id === Number(props.match.params.id)));
    return (
        <Card>
            <Name>{workout.name}</Name>
            <Region>{workout.region}</Region>
            <Attribute>Sets: {workout.sets}</Attribute>
            <Attribute>Reps: {workout.reps}</Attribute>
            <Attribute>Time: {workout.time} minutes</Attribute>
            <div>
                <Input type='checkbox' name='completed'/>
                <Label htmlFor='completed'>Completed
                </Label>
            </div>
        </Card>
    );
};

const mapStateToProps = state => {
    return {...state};
};

export default connect(mapStateToProps, {})(WorkoutPage);
