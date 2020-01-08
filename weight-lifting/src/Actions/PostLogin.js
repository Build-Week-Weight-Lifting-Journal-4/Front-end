import axiosWithAuth from '../utlis/axiosWithAuth';

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

export const postLogin = creds => dispatch => {
    dispatch({type: POST_LOGIN_START});
    axiosWithAuth()
        .post('users/login', creds)
        .then(res => {
            console.log('post login res',res)
            dispatch({type: POST_LOGIN_SUCCESS, payload: res.data.token});

        })
        .catch(error => {
            dispatch({type: POST_LOGIN_FAILURE, payload: error.response.data.error});
        });
};