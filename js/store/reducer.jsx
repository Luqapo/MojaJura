const initialSate = {
    userLogged: ''
}



const reducer = (state = initialSate,action) => {
    switch ( action.type ) {
        case 'USERIN':
            action.userData.event.preventDefault();
            const user = action.userData.login;
            const password = action.userData.password;

            fetch(`http://localhost:3010/users`)
                .then( resp => resp.json())
                .then( resp => {

                    resp.forEach( el => {
                        if(el.login === user && el.password === password) {
                            console.log('OK');
                            console.log(user);
                            return {
                                userLogged: user
                            }

                        }
                    });
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });

        case 'USEROF':
            return {
                userLogged: ''
            }
    }
    return state;
};

export default reducer;