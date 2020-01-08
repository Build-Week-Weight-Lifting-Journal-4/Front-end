import {
    POST_SIGNUP_START,
    POST_SIGNUP_SUCCESS,
    POST_SIGNUP_FAILURE,
    POST_LOGIN_START,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE,
    GET_EXERCISES_START,
    GET_EXERCISES_SUCCESS,
    GET_EXERCISES_FAILURE,
    POST_EXERCISE_START,
    POST_EXERCISE_SUCCESS,
    POST_EXERCISE_FAILURE,
    PUT_EXERCISE_START,
    PUT_EXERCISE_SUCCESS,
    PUT_EXERCISE_FAILURE,
    STOP_EDITING
} from '../Actions';

const initialState = {
    isFetching: false,
    isEditing: false,
    isLoggingIn: false,
    isPosting: false,
    editId: '',
    error: '',
    loggedIn: false,
    exerciseList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SIGNUP_START:
            return {
                ...state,
                isFetching: true
            };
        case POST_SIGNUP_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isFetching: false
            };
        case POST_SIGNUP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case POST_LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            };
        case POST_LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true
            };
        case POST_LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;