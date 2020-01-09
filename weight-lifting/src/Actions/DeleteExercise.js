import axiosWithAuth from '../utlis/axiosWithAuth';

export const DELETE_EXERCISES_START = 'DELETE_EXERCISES_START';
export const DELETE_EXERCISES_SUCCESS = 'DELETE_EXERCISES_SUCCESS';
export const DELETE_EXERCISES_FAILURE = 'DELETE_EXERCISES_FAILURE';

export const deleteExercise = id => dispatch => {
    dispatch({type: DELETE_EXERCISES_START});
    axiosWithAuth()
        .delete(`exercise/${id}`)
        .then(res => {
            console.log('delete res', res);
            dispatch({type: DELETE_EXERCISES_SUCCESS, payload:id});
        })
        .catch(error => {
            dispatch({type: DELETE_EXERCISES_FAILURE, payload: error.message});
        });
};

export default deleteExercise;