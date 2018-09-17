import * as actionTypes from './actions/actionTypes';

const initialSate = {
    userLogged: ''
}



const reducer = (state = initialSate,action) => {
    // switch ( action.type ) {
    //     case actionTypes.AUTH_START:
    //         return {
    //             ...state,
    //             userLogged: 'Lucjan'
    //         }
    // }
    //     case 'USERIN':
    //         action.userData.event.preventDefault();
    //         const user = action.userData.login;
    //         const password = action.userData.password;
    //
    //         fetch(`http://localhost:3010/users`)
    //             .then( resp => resp.json())
    //             .then( resp => {
    //
    //                 resp.forEach( el => {
    //                     if(el.login === user && el.password === password) {
    //                         console.log('OK');
    //                         console.log(user);
    //                         return {
    //                             userLogged: action.userData.login
    //                         };
    //                     }
    //                 });
    //             })
    //             .catch( err => {
    //                 console.log('Błąd!', err);
    //             });
    //
    //
    //     case 'USEROF':
    //         return {
    //             userLogged: ''
    //         };
    // }
    return state;
};

export default reducer;