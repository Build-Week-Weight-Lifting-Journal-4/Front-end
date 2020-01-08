import axiosWithAuth from '../utlis/axiosWithAuth';

export const PUT_EXERCISE_START = 'PUT_FRIEND_START';
export const PUT_EXERCISE_SUCCESS = 'PUT_FRIEND_SUCCESS';
export const PUT_EXERCISE_FAILURE = 'PUT_FRIEND_FAILURE';
export const STOP_EDITING = 'RESET_EDITING';

export const stopEditing = () => dispatch => {
    dispatch({type:STOP_EDITING})
};

export const startEditing = id => dispatch => {
    dispatch({type:PUT_EXERCISE_START,payload:id})
};

export const putExercise = exercise => dispatch => {
    axiosWithAuth()
        .put(`exercise/${exercise.id}`,exercise)
        .then(res => {
            console.log('put exercise res', res)
            dispatch({type:PUT_EXERCISE_SUCCESS,payload:res.data})
        })
        .catch(error => {
            dispatch({type:PUT_EXERCISE_FAILURE,payload:error.message})
        })
}