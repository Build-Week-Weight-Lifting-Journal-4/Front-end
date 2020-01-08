import axiosWithAuth from '../utlis/axiosWithAuth';

export const POST_EXERCISE_START = 'POST_EXERCISE_START';
export const POST_EXERCISE_SUCCESS = 'POST_EXERCISE_SUCCESS';
export const POST_EXERCISE_FAILURE = 'POST_EXERCISE_FAILURE';

export const postExercise = friend => dispatch => {
    dispatch({type: POST_EXERCISE_START});
    axiosWithAuth()
        .post('excercise', friend)
        .then(res => {
            console.log('post exercise res', res);
            dispatch({type: POST_EXERCISE_SUCCESS, payload: res.data});
        })
        .catch(error => {
            dispatch({type: POST_EXERCISE_FAILURE, payload: error.message});
        });
};