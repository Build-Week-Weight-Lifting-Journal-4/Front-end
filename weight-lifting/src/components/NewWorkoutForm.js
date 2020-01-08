import React, {useState} from 'react';
import styled from 'styled-components';

import {data} from '../data';

const WorkoutWrapper = styled.div`

`;
const Form = styled.form`
width: 50%;
display: flex;
flex-direction: column;
margin: 0 auto;
`;
const Label = styled.label`
margin: 1% auto;
`;
const Input = styled.input`
margin: 1% auto;
`;
const SelectInput = styled.select`
width: 30%;
margin: 1% auto;
`;
const Option = styled.option``;
const Button = styled.button`
width: 20%;
margin: 2% auto;
`;

const WorkOutForm = props => {
    const regions = Object.keys(data);
    const [excercise, setExercise] = useState({
        name: '',
        region: '',
        exercise: '',
        sets: '',
        reps: '',
        time: ''
    });
    console.log({workout: excercise});


    const workoutChange = e => {
        setExercise({
            ...excercise, [e.target.name]: e.target.value
        });
    };


    const addWorkout = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log({e});

    };

    return (
        <WorkoutWrapper>
            <Form onSubmit={addWorkout}>
                <Label>Excercise Name:
                    <Input required type='text' name='name' value={excercise.name} onChange={workoutChange}/>
                </Label>
                <SelectInput required onChange={workoutChange} name='region'>
                    <Option>Region</Option>
                    {regions.map(region => <Option value={region}>{region.toUpperCase()}</Option>)}
                </SelectInput>
                <SelectInput required onChange={workoutChange} name='exercise'>
                    <Option>Exercise</Option>
                    {regions.map(region => {
                        return Object.keys(data[region].exercises).map(exercise => {
                            return excercise.region === region ? <Option
                                value={exercise}>{data[region].exercises[exercise].exercisename}</Option> : <></>;
                        });
                    })}
                </SelectInput>
                <Label>Sets:
                    <Input required type='number' min='1'/>
                </Label>
                <Label>Reps:
                    <Input required type='number' min='1'/>
                </Label>
                <Label>Time:
                    <Input required type='number' placeholder='In minutes' min='1'/>
                </Label>
                <Button type='submit'>Add</Button>
            </Form>
        </WorkoutWrapper>
    );
};

export default WorkOutForm;