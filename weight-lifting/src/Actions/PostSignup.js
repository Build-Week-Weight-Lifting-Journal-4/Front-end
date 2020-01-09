import axiosWithAuth from '../utlis/axiosWithAuth';
import axios from 'axios'

export const POST_SIGNUP_START = 'POST_SIGNUP_START';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';

export const postSignup = creds => dispatch => {
    dispatch({type: POST_SIGNUP_START});
    axiosWithAuth()
        .post('users/register', creds)
        .then(res => {
            console.log('post signup res', res)
            dispatch({type: POST_SIGNUP_SUCCESS, payload: res.data.token});

        })
        .catch(error => {
            dispatch({type: POST_SIGNUP_FAILURE, payload: error.response});
        });
};