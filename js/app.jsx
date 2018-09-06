import React from "react";
import ReactDOM from "react-dom";



document.addEventListener('DOMContentLoaded', function(){


    class Nav extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                loggedIn: false,
                schowLog: false
            }
        }

        handleLogOff = () => {
            this.setState({
                loggedIn: false,
                schowLog: false
            })
        }

        handleList = () => {
            if(typeof this.props.handleList === 'function'){
                this.props.handleList();
            }
        }

        handleJura = () => {
            if(typeof this.props.handleJura === 'function'){
                this.props.handleJura();
            }
        }

        handleLogin = () => {
            this.setState({
                schowLog: true
            })
        }

        handleSerch = () => {
            console.log("szukam");
            fetch(`http://localhost:3010/regiony?name=Pazurek`)
                .then( resp => resp.json())
                .then( resp => {
                    console.log(resp)
                    // this.setState({
                    //     data: listElements,
                    //     skaly: skalyArr
                    // })
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }

        render(){
            return (
                <div>
                    <ul className="nav">
                        <li><input onClick={this.handleSerch} placeholder="Szukaj"/></li>
                        <li><a onClick={this.handleJura} href="#">KochamJurę.pl</a></li>
                        <li><a onClick={this.handleList} href="#">Moje przejścia</a></li>
                        { this.state.schowLog ? <LoginForm handleLogOff={this.handleLogOff}/> : <li><a onClick={this.handleLogin} href="#">Login</a></li>}
                    </ul>
                </div>
            )
        }
    }

    class LoginForm extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                password: '',
                password2: '',
                addUser: false,
                login: '',
                error: '',
                userLogged: ''
            }
        }

        handleChange = (e) => {
            const value = e.target.value;
            const name = e.target.name;

            this.setState({
                [name]: value
            });

            console.log(this.state.password, this.state.login, this.state.password2);
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
                    body:  JSON.stringify( {"data": newUser} ),
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

                console.log('loguje');
                fetch(`http://localhost:3010/users?name=wernix`)
                    .then( resp => resp.json())
                    .then( resp => {

                        console.log(resp);
                        resp.forEach( el => {
                            if(el.data.login === user && el.data.password === password) {

                                this.setState({
                                    userLogged: user
                                });

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
            if (this.state.userLogged){
                return (
                    <div>
                        <h1>{this.state.userLogged}</h1>
                        <h4><a href="#" onClick={this.handleLogOff}>Wyloguj</a></h4>
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
                            <input onClick={this.handleSubmit} type="submit" value="Wyślij"/>
                        </form>
                        {this.state.addUser ? null : <h6><a style={{width: '100%', textAlign: "center", display: "block"}} href="#" onClick={this.handleAdd}>Załóż konto</a></h6>}
                    </div>
                )
            }
        }

    }

    class MyList extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                list: ''
            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/moje?name=data`)
                .then( resp => resp.json())
                .then( resp => {
                        let arr = [...resp];
                        let newArr = [];
                        arr.forEach(el => el.data.forEach( route => newArr.push(route)));

                        this.setState({
                            list: newArr
                        })

                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }

        render(){

            let rows = [];
            const myList = [...this.state.list];
            myList.forEach( (el,index) => rows.push(<tr key={index}><td>{el.date}</td><td>{el.wycena}</td><td>{el.styl}</td>
                <td>{el.name}</td><td>xxx</td><td>yyy</td><td>{el.ocena}</td><td><button>Edytuj</button></td></tr>))


            return (
                <div>
                    <table style={{width: '98%', margin: '2px', borderCollapse: "collapse"}}>
                        <thead>
                        <tr>
                            <th>Data przejcia</th>
                            <th>Wycena</th>
                            <th>Styl</th>
                            <th>Nazwa</th>
                            <th>Rejon/skałą</th>
                            <th>Komentarz</th>
                            <th>Ocena</th>
                            <th>Edytuj</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            )
        }
    }

    class EastJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                data: '',
                skaly: '',
                sklayToShow: '',

            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/regiony?name=east`)
                .then( resp => resp.json())
                .then( resp => {

                    let list = resp[0].rejony;
                    let skalyArr = [];
                    list.forEach(el => skalyArr.push(el.skaly));
                    let listElements = list.map( (el,index) => <li key={index}><a href="#" onClick={this.handleSchow} data-index={index} data-id="1">{el.name}</a></li>);


                    this.setState({
                        data: listElements,
                        skaly: skalyArr
                    })
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }

        handleClick = (e) => {
            if(typeof this.props.hanldeFlex === 'function'){
                this.props.hanldeFlex(e.target.dataset.id);
            }
        }

        handleSchow = (e)=> {
            if(typeof this.props.handleSchow === 'function'){
                this.props.handleSchow(e);

                let skalyIndex = e.target.dataset.index;
                let newArr = [...this.state.skaly[skalyIndex]];

                this.setState({
                    sklayToShow: newArr
                })
            }
        }

        render(){

            let style = this.props.flexEast == 5 ? {display: 'block'} : {display: 'none'};

            if(this.props.schowEast === false){
            return (
                <div style={{flex: this.props.flexEast,background: 'url("../img/dupa_slonia.jpg")', backgroundSize: 'cover'}} data-id="1" className="east" onClick={this.handleClick}>
                    <h1 data-id="1">Jura Południowa</h1>
                    <div style={style}>
                        <ul>
                            {this.state.data}
                        </ul>
                    </div>
                </div>
            )
        } else if(this.props.schowEast === true) {
        return <CragsList sklayToShow={this.state.sklayToShow} data={this.state.data}/>
    }
        }
    }

    class CenterJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                data: '',
                skaly: '',
                sklayToShow: ''
            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/regiony?name=center`)
                .then( resp => resp.json())
                .then( resp => {
                    let list = resp[0].rejony;
                    let skalyArr = [];
                    list.forEach(el => skalyArr.push(el.skaly));
                    let listElements = list.map( (el,index) => <li key={index}><a onClick={this.handleSchow} data-index={index} data-id="2">{el.name}</a></li>);

                    this.setState({
                        data: listElements,
                        skaly: skalyArr
                    })
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }

        handleClick = (e) => {
            if(typeof this.props.hanldeFlex === 'function'){
                this.props.hanldeFlex(e.target.dataset.id);
            }
        }

        handleSchow = (e)=> {
            if(typeof this.props.handleSchow === 'function'){
                this.props.handleSchow(e);

                let skalyIndex = e.target.dataset.index;
                let newArr = [...this.state.skaly[skalyIndex]];

                this.setState({
                    sklayToShow: newArr
                })
            }
        }

        render(){
            let style = this.props.flexCenter == 5 ? {display: 'block'} : {display: 'none'};

            if(this.props.schowCenter === false){
            return (
                <div style={{flex: this.props.flexCenter,background: 'url("../img/ogrodzieniec.jpg")', backgroundSize: 'cover'}} data-id="2" className="center" onClick={this.handleClick}>
                    <h1 data-id="2">Jura Środkowa</h1>
                    <div style={style}>
                        <ul>
                            {this.state.data}
                        </ul>
                    </div>
                </div>
            )
            } else if(this.props.schowCenter === true) {
                return <CragsList sklayToShow={this.state.sklayToShow} data={this.state.data}/>
            }
        }
    }

    class NorthJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                data: '',
                skaly: '',
                sklayToShow: ''
            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/regiony?name=north`)
                .then( resp => resp.json())
                .then( resp => {
                    let list = resp[0].rejony;
                    let skalyArr = [];
                    list.forEach(el => skalyArr.push(el.skaly));
                    let listElements = list.map( (el,index) => <li key={index}><a href="#" onClick={this.handleSchow} data-index={index} data-id="3">{el.name}</a></li>);

                    this.setState({
                        data: listElements,
                        skaly: skalyArr
                    })
                })
                .catch( err => {
                    console.log('Błąd!', err);
                });
        }

        handleClick = (e) => {
            if(typeof this.props.hanldeFlex === 'function'){
                this.props.hanldeFlex(e.target.dataset.id);
            }
        }

        handleSchow = (e)=> {
            if(typeof this.props.handleSchow === 'function'){
                this.props.handleSchow(e);

                let skalyIndex = e.target.dataset.index;
                let newArr = [...this.state.skaly[skalyIndex]];

                this.setState({
                    sklayToShow: newArr
                })
            }
        }

        render(){

            let style = this.props.flexNorth == 5 ? {display: 'block'} : {display: 'none'};

            if(this.props.schowNorth === false){
            return (
                <div style={{flex: this.props.flexNorth,background: 'url("../img/Rzędkowice.jpg")'}} data-id="3" className="north" onClick={this.handleClick}>
                    <h1 data-id="3">Jura Północna</h1>
                    <div style={style}>
                        <ul>
                            {this.state.data}
                        </ul>
                    </div>
                </div>
            )
            } else if(this.props.schowNorth === true) {
                return <CragsList sklayToShow={this.state.sklayToShow} data={this.state.data}/>
            }
        }
    }

    class MojaJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                flexEast: '1',
                flexCenter: '1',
                flexNorth: '1',
                schowEast: false,
                schowCenter: false,
                schowNorth: false
            }
        }

        handleSchow = (e) => {
            e.stopPropagation();
            let data = e.target.dataset.id;
            if(data == 1){
                this.setState({
                    schowEast: true
                })
            } else if (data == 2){
                this.setState({
                    schowCenter: true
                })
            } else {
                this.setState({
                    schowNorth: true
                })
            }
        }

        hanldeFlex = (data) => {
            if(data == 1){
                this.setState({
                    flexEast: '5',
                    flexCenter: '1',
                    flexNorth: '1',
                    schowEast: false,
                    schowCenter: false,
                    schowNorth: false
                })
            } else if (data == 2){
                this.setState({
                    flexEast: '1',
                    flexCenter: '5',
                    flexNorth: '1',
                    schowEast: false,
                    schowCenter: false,
                    schowNorth: false
                })
            } else {
                this.setState({
                    flexEast: '1',
                    flexCenter: '1',
                    flexNorth: '5',
                    schowEast: false,
                    schowCenter: false,
                    schowNorth: false
                })
            }
        }

        render(){
            return (
                <div className="mainContainer">
                    <EastJura hanldeFlex={this.hanldeFlex} flexEast={this.state.flexEast} handleSchow={this.handleSchow} schowEast={this.state.schowEast}/>
                    <CenterJura hanldeFlex={this.hanldeFlex} flexCenter={this.state.flexCenter} handleSchow={this.handleSchow} schowCenter={this.state.schowCenter}/>
                    <NorthJura hanldeFlex={this.hanldeFlex} flexNorth={this.state.flexNorth} handleSchow={this.handleSchow} schowNorth={this.state.schowNorth}/>
                </div>
            )
        }
    }

    class RouteList extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                myRoutes: [],
                addShow: false
            }
        }

        componentDidMount(){
            let newRoutes = [...this.props.routeList];
            this.setState({
                myRoutes: newRoutes
            })
        }

        handleDate = (e) => {
            let newIndex = e.currentTarget.parentElement.parentElement.dataset.index;
            let newRoutes = [...this.state.myRoutes];
            newRoutes[newIndex].date = e.target.value;

            this.setState({
                myRoutes: newRoutes
            })
        }

        handleStye = (e) => {
            let newIndex = e.currentTarget.parentElement.parentElement.dataset.index;
            let newRoutes = [...this.state.myRoutes];
            newRoutes[newIndex].styl = e.target.value.toUpperCase();

            this.setState({
                myRoutes: newRoutes
            })
        }

        handleOcena = (e) => {
            let newIndex = e.currentTarget.parentElement.parentElement.dataset.index;
            let newRoutes = [...this.state.myRoutes];
            newRoutes[newIndex].ocena = e.target.value;

            this.setState({
                myRoutes: newRoutes
            })
        }

        handleChecked = (e) => {
            let newIndex = e.currentTarget.parentElement.parentElement.dataset.index;
            let newRoutes = [...this.state.myRoutes];
            newRoutes[newIndex].checked = e.target.checked;

            this.setState({
                myRoutes: newRoutes
            })
        }

        handleSend = () => {

            let dataToSend = [];
            this.state.myRoutes.forEach( el => {
                if (el.checked){
                    dataToSend.push(el);
                }
            });


            fetch('http://localhost:3010/moje', {
                method: "POST",
            body:  JSON.stringify( {"data": dataToSend} ),
                headers: {
                    'Content-Type': 'application/json'
                }

            });

        };

        handleAdd = (e) => {
            this.setState({
                addShow: this.state.addShow === false ? true : false
            })
        }

        render(){

            let rows = [];
            this.props.routeList.forEach( (el,index) => rows.push(<tr key={index} data-index={index}><td>{el.name}</td><td>{el.wycena}</td>
                <td>{el.przejscia}</td><td>{el.ocena}</td><td><input onChange={this.handleDate} type="date"/></td>
                <td><input onChange={this.handleStye}/></td><td><input onChange={this.handleOcena} type="number"/></td>
                <td><input onChange={this.handleChecked} type="checkbox"/></td></tr>));

            return (
                <div>
                    <div className="upperList">
                        <ul>
                            {this.props.listToSend}
                        </ul>
                    </div>
                    <table style={{width: '98%', margin: '2px', borderCollapse: "collapse"}} className="green">
                        <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>Wycena</th>
                            <th>Ocena</th>
                            <th>Przejcia</th>
                            <th>Data przejcia</th>
                            <th>Styl</th>
                            <th>Twoja ocena</th>
                            <th>Wybierz</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        {this.state.addShow ? <AddRoute/> : null}
                        </tbody>
                    </table>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button onClick={this.handleAdd} style={{margin: '30px'}}>Dodaj drogę</button>
                        <button onClick={this.handleSend} style={{margin: '30px'}}>Dodaj przejścia</button>
                    </div>
                </div>
            )
        }
    }

    class AddRoute extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
               routeToAdd: '',
                name: '',
                wycena: ''
            }
        }

        handleName = (e) => {
            this.setState({
                name: e.target.value
            })
        }

        handleSelect = (e) => {
            this.setState({
                wycena: e.target.value
            })
        }

        handleSend = () => {

            let newName = this.state.name;
            let newWycena = this.state.wycena;

            const obj = {
                "name": newName,
                "wycena": newWycena,
                "przejscia": 0,
                "ocena": 0,
                "comments": []
            };
            console.log(obj);
        }

        render(){
            return (
                <tr style={{marginTop: '20px'}}><td><input onChange={this.handleName}/></td><td>
                    <select onChange={this.handleSelect}>
                        <option value="V">V</option>
                        <option value="V+">V+</option>
                        <option value="VI">VI</option>
                        <option value="VI+">VI+</option>
                        <option value="VI.1">VI.1</option>
                        <option value="VI.1+">VI.1+</option>
                        <option value="VI.2">VI.2</option>
                        <option value="VI.2+">VI.2+</option>
                        <option value="VI.3">VI.3</option>
                        <option value="VI.3+">VI.3+</option>
                        <option value="VI.4">VI.4</option>
                        <option value="VI.4+">VI.4+</option>
                        <option value="VI.5">VI.5</option>
                        <option value="VI.5+">VI.5+</option>
                        <option value="VI.6">VI.6</option>
                        <option value="VI.6+">VI.6+</option>
                        <option value="VI.7">VI.7</option>
                        <option value="VI.7+">VI.7+</option>
                    </select>
                </td><td><button onClick={this.handleSend}>Zapisz</button></td></tr>
            )
        }
    }

    class CragsList extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                schowList: false,
                routesList: '',
                listToSend: ''
            }
        }

        handleList = (e) => {
            let routeIndex = e.target.dataset.index;
            let newArray = [...this.props.sklayToShow];
            let routeToSend = newArray[routeIndex].drogi;

            let newArr = [...this.props.sklayToShow];

            let newList = newArr.map( (el,index) => <li key={index}><a onClick={this.handleList} href="#" data-index={index}>{el.name}</a></li>)

            this.setState({
                schowList: true,
                routeList: routeToSend,
                listToSend: newList
            })
        }

        render(){

            let newArr = [...this.props.sklayToShow];

            let newList = newArr.map( (el,index) => <li key={index}><a onClick={this.handleList} href="#" data-index={index}>{el.name}</a></li>)


            if(this.state.schowList === false){
            return (
                <div style={{width: '100%'}}>
                    <div className="upperList">
                        <ul>
                            {this.props.data}
                        </ul>
                    </div>
                    <div className="downList">
                        <ul>
                            {newList}
                        </ul>
                    </div>
                </div>
            )
            } else {
                return <RouteList routeList={this.state.routeList} listToSend={this.state.listToSend} />
            }
        }
    }

    class App extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                myList: false
            }
        }

        handleList = () => {
            this.setState({
                myList: true
            })
        }

        handleJura = () => {
            this.setState({
                myList: false
            })
        }

        render(){

            if(this.state.myList === false) {
            return (
                <div>
                    <Nav handleList={this.handleList} handleJura={this.handleJura}/>
                    <MojaJura/>
                </div>
            )
            } else {
                return (
                    <div>
                        <Nav handleList={this.handleList} handleJura={this.handleJura}/>
                        <MyList/>
                    </div>
                )
            }
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
