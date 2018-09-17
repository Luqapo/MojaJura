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

export const auth = (login, password) => {
    console.log(login, password);
    return dispatch => {
        dispatch( authStart());
        axios.get('http://localhost:3010/users')
            .then(function (response) {
                console.log(response);
                let logged = false;

                response.data.forEach( el => {
                    if ( el.login ===  login && el.password === password){
                        logged = true;
                    }
                })

                if (logged){
                    dispatch(authSucces(login));
                } else {
                    dispatch (authFail('błędne dane'));
                };
            })
            .catch(function (error){
                console.log(error);
                dispatch(authFail(error));
            })
    };
};