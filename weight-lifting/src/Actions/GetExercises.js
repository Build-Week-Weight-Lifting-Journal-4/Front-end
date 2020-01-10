import axiosWithAuth from '../utlis/axiosWithAuth';

export const GET_EXERCISES_START = 'GET_EXERCISES_START';
export const GET_EXERCISES_SUCCESS = 'GET_EXERCISES_SUCCESS';
export const GET_EXERCISES_FAILURE = 'GET_EXERCISES_FAILURE';

export const getExercises = () => dispatch => {
    // dispatch({type: GET_EXERCISES_START});
    console.log("hey")
    axiosWithAuth()
        .get('https://weightlift2020.herokuapp.com/exercise')
        .then(res => {
            console.log('get exercise res',res)
            dispatch({type:GET_EXERCISES_SUCCESS,payload:res.data})
        })
        .catch(error => {
            dispatch({type:GET_EXERCISES_FAILURE,payload:error})
    })
};