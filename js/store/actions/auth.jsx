import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSucces = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCES,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    console.log(email, password);
    return dispatch => {
        dispatch( authStart());
        axios.get('http://localhost:3010/users')
            .then(function (response) {
                console.log(response);
                dispatch(authSucces(response.data));
            })
            .catch(function (error){
                console.log(error);
                dispatch(authFail(error));
            })
    };
};