import React from "react";
import ReactDOM from "react-dom";



document.addEventListener('DOMContentLoaded', function(){


    class Nav extends React.Component{

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

        render(){
            return (
                <div>
                    <ul className="nav">
                        <li><input placeholder="Szukaj"/></li>
                        <li><a onClick={this.handleJura} href="#">KochamJurę.pl</a></li>
                        <li><a onClick={this.handleList} href="#">Moje przejścia</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            )
        }
    }

    class MyList extends React.Component{
        render(){

            let rows = [];

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
                    let skalyArr = [];
                    let list = resp[0].rejony;

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
                data: ''
            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/regiony?name=center`)
                .then( resp => resp.json())
                .then( resp => {
                    let list = resp[0].rejony;
                    let listElements = list.map( (el,index) => <li key={index}><a key={index} href="#" onClick={this.handleSchow} data-id="2">{el.name}</a></li>);

                    this.setState({
                        data: listElements
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
                return <CragsList/>
            }
        }
    }

    class NorthJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                data: ''
            }
        }


        componentDidMount() {
            fetch(`http://localhost:3010/regiony?name=north`)
                .then( resp => resp.json())
                .then( resp => {
                    let list = resp[0].rejony;
                    let listElements = list.map( (el,index) => <li key={index}><a key={index} href="#" onClick={this.handleSchow} data-id="3">{el.name}</a></li>);

                    this.setState({
                        data: listElements
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
                return <CragsList/>
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
        render(){

            let rows = [];
            this.props.routeList.forEach( (el,index) => rows.push(<tr key={index}><td>{el.name}</td><td>{el.wycena}</td><td>{el.przejscia}</td><td>{el.ocena}</td></tr>));

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
                            <th>Dodaj</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
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
