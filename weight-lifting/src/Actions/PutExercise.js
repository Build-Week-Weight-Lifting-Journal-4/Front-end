import axiosWithAuth from '../utlis/axiosWithAuth';

export const PUT_EXERCISE_START = 'PUT_EXERCISE_START';
export const PUT_EXERCISE_SUCCESS = 'PUT_EXERCISE_SUCCESS';
export const PUT_EXERCISE_FAILURE = 'PUT_EXERCISE_FAILURE';
export const STOP_EDITING = 'RESET_EDITING';

export const stopEditing = () => dispatch => {
    dispatch({type:STOP_EDITING})
};

export const startEditing = exercise => dispatch => {
    dispatch({type:PUT_EXERCISE_START,payload:exercise})
};

export const putExercise = exercise => dispatch => {
    axiosWithAuth()
        .put(`exercise/${exercise.id}`,exercise)
        .then(res => {
            console.log('put exercise res', res)
            dispatch({type:PUT_EXERCISE_SUCCESS,payload:exercise})
        })
        .catch(error => {
            dispatch({type:PUT_EXERCISE_FAILURE,payload:error.message})
        })
}