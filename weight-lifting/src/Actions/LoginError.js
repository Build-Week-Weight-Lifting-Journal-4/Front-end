export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

export const loginError = error => dispatch => {
    dispatch({type: POST_LOGIN_FAILURE, payload:error});
    console.log(error)
};