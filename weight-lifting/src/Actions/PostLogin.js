// import axiosWithAuth from '../utlis/axiosWithAuth';

export const POST_LOGIN_START = 'POST_LOGIN_START';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

export const postLogin = (token, userId) => dispatch => {
    // dispatch({type: POST_LOGIN_START});
    // axiosWithAuth()
    //     .post('users/login', creds)
    //     .then(res => {
    //         console.log('post login res',res)
            dispatch({type: POST_LOGIN_SUCCESS, payload:{token, userId }});

    //     })
    //     .catch(error => {
    //         dispatch({type: POST_LOGIN_FAILURE, payload: error.response.data.error});
    //     });
    console.log(token, userId)
};