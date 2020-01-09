import React, {useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import {data} from '../data';
import {putExercise, startEditing} from '../Actions';

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
display: block;
width: 30%;
margin: 1% auto;
`;
const Option = styled.option``;
const Button = styled.button`
width: 20%;
margin: 2% auto;
`;

const EditForm = props => {
    console.log(data)
    const regions = Object.keys(data);
    const [exercise, setExercise] = useState({
        ...props.editExercise

    });
    console.log({workout: exercise});


    const workoutChange = e => {
        console.log(e)
        setExercise({
            ...exercise, [e.target.name]: e.target.value
        });
    };


    const editWorkout = e => {
        e.preventDefault();
        e.stopPropagation();
       console.log(exercise);
       props.putExercise(exercise);
       props.history.push('/dashboard')
    };

    return (
        <WorkoutWrapper>
            <Form onSubmit={editWorkout}>
                <Label>Exercise Name:
                    <Input required type='text' name='name' value={exercise.name} onChange={workoutChange}/>
                </Label>
                <SelectInput required onChange={workoutChange} value={exercise.region} name='region'>
                    <Option>Region</Option>
                    {regions.map(region => <Option key={region} value={region}>{region.toUpperCase()}</Option>)}
                </SelectInput>
                {/* <SelectInput required onChange={workoutChange} name='exercise'>
                    <Option value=''>Exercise</Option> */}
                     {/* {regions.map(region => {
                        return Object.keys(data[region].exercises).map(exercise => {
                            return exercise.region === region ? <Option
                                value={exercise}>{data[region].exercises[exercise].exercisename}</Option> : <></>;
                        });
                    })} */}
                     {/* {exercise.region && Object.keys(data[exercise.region].exercises).map(exercise => {
                        return <Option value={exercise}>{exercise.toLowerCase().replace(/_/g, ' ')}</Option>
                    })}

                </SelectInput> */}
                <Label>Sets:
                    <Input value={exercise.sets} name="sets" required type='number' min='1' max='50' onChange={workoutChange}/>
                </Label>
                 <Label>Reps:
                    <Input value={exercise.reps} name="reps" required type='number' min='1'max="70" onChange={workoutChange}/>
                </Label>
                <Label>Time:
                    <Input value={exercise.time} name="time" required type='number' placeholder='In minutes' min='1' max="60" onChange={workoutChange}/>
                </Label>
                <Button type='submit'>Add</Button>
                <Button>Cancel</Button>
            </Form>
        </WorkoutWrapper>
    );
};

const mapStateToProps = state => {
    return {...state};
}

export default connect(mapStateToProps,{putExercise,startEditing})(EditForm);