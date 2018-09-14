import React from "react";
import { connect } from 'react-redux'

class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            password2: '',
            addUser: false,
            login: '',
            error: ''
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.addUser){
            if(this.state.login.length > 5 && this.state.password.length > 5 && this.state.password === this.state.password2){
                const newUser = {
                    "login": this.state.login,
                    "password": this.state.password
                }


                fetch('http://localhost:3010/users', {
                    method: "POST",
                    body:  JSON.stringify( newUser ),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });

                this.setState({
                    addUser: false,
                    error: ''
                })
            } else {
                console.log('Błędne dane');
                this.setState({
                    error: '1px solid red'
                });
            }
        } else {

            const user = this.state.login;
            const password = this.state.password;

            fetch(`http://localhost:3010/users`)
                .then( resp => resp.json())
                .then( resp => {

                    resp.forEach( el => {
                        if(el.login === user && el.password === password) {
                            console.log('OK');


                        }
                    });
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }
    }

    handleAdd = () => {
        this.setState({
            addUser: this.state.addUser ? false : true
        })
    }

    handleLogOff = () => {
        if(typeof this.props.handleLogOff === 'function'){
            this.props.handleLogOff();
        }

        this.setState({

        })
    }


    render(){
        if (this.props.userIn){
            return (
                <div>
                    <h1>{this.props.userIn}</h1>
                    <h6><a href="#" onClick={this.handleLogOff}>Wyloguj</a></h6>
                </div>
            )
        } else {
            return (
                <div>
                    <form style={{width: '200px',border: this.state.error}}>
                        <label>
                            Login:
                            <input name="login" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Hasło:
                            <input name="password" onChange={this.handleChange} type="password"/>
                        </label>
                        {this.state.addUser ? <label>
                            Hasło2:
                            <input name="password2" onChange={this.handleChange} type="password"/>
                        </label> : null}
                        <input onClick={() => this.props.setUser(event, this.state.login, this.state.password) } type="submit" value="Wyślij"/>
                    </form>
                    {this.state.addUser ? null : <h6><a style={{width: '100%', textAlign: "center", display: "block"}} href="#" onClick={this.handleAdd}>Załóż konto</a></h6>}
                </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        userIn: state.userLogged
    };
};

const mapDispatchToProps = dispatch => {
        return {
            setUser: (event, login, pass) => dispatch({type: 'USERIN', userData: {event: event, login: login, password: pass}}),
            deleteUser: () => dispatch({type: 'USEROF'})
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);