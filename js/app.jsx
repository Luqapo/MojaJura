import React from "react";
import ReactDOM from "react-dom";


document.addEventListener('DOMContentLoaded', function(){


    class Nav extends React.Component{
        render(){
            return (
                <div>
                    <ul className="nav">
                        <li><input placeholder="Szukaj"/></li>
                        <li><a href="#">KochamJurę.pl</a></li>
                        <li><a href="#">Moje przejścia</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            )
        }
    }

    class EastJura extends React.Component{

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

            let style = this.props.flexEast == 5 ? {display: 'block'} : {display: 'none'};

            if(this.props.schowEast === false){
            return (
                <div style={{flex: this.props.flexEast,background: 'url("../img/dupa_slonia.jpg")', backgroundSize: 'cover'}} data-id="1" className="east" onClick={this.handleClick}>
                    <h1 data-id="1">Jura Południowa</h1>
                    <div style={style}>
                        <ul>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Rzędkowice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Mirów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Łutowiec</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Podlesice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Morsko</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Skarżyce</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Suliszwice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Dolina wiercicy</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Trzebniów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="1">Mirów</a></li>
                        </ul>
                    </div>
                </div>
            )
        } else if(this.props.schowEast === true) {
        return <CragsList/>
    }
        }
    }

    class CenterJura extends React.Component{

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
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Rzędkowice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Mirów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Łutowiec</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Podlesice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Morsko</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Skarżyce</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Suliszwice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Dolina wiercicy</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Trzebniów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="2">Mirów</a></li>
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
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Rzędkowice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Mirów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Łutowiec</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Podlesice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Morsko</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Skarżyce</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Suliszwice</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Dolina wiercicy</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Trzebniów</a></li>
                            <li><a href="#" onClick={this.handleSchow} data-id="3">Mirów</a></li>
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

            return (
                <div>
                    <div className="upperList">
                        <ul>
                            <li><a href="#">Rzędkowice</a></li>
                            <li><a href="#">Mirów</a></li>
                            <li><a href="#">Łutowiec</a></li>
                            <li><a href="#">Podlesice</a></li>
                            <li><a href="#">Morsko</a></li>
                            <li><a href="#">Skarżyce</a></li>
                            <li><a href="#">Suliszwice</a></li>
                            <li><a href="#">Dolina wiercicy</a></li>
                            <li><a href="#">Trzebniów</a></li>
                            <li><a href="#">Mirów</a></li>
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
                schowList: false
            }
        }

        handleList = (e) => {
            this.setState({
                schowList: true
            })
        }

        render(){

            if(this.state.schowList === false){
            return (
                <div style={{width: '100%'}}>
                    <div className="upperList">
                        <ul>
                            <li><a href="#">Rzędkowice</a></li>
                            <li><a href="#">Mirów</a></li>
                            <li><a href="#">Łutowiec</a></li>
                            <li><a href="#">Podlesice</a></li>
                            <li><a href="#">Morsko</a></li>
                            <li><a href="#">Skarżyce</a></li>
                            <li><a href="#">Suliszwice</a></li>
                            <li><a href="#">Dolina wiercicy</a></li>
                            <li><a href="#">Trzebniów</a></li>
                            <li><a href="#">Mirów</a></li>
                        </ul>
                    </div>
                    <div className="downList">
                        <ul>
                            <li><a onClick={this.handleList} href="#">Rzędkowice!!</a></li>
                            <li><a onClick={this.handleList} href="#">Mirów!!!!!!</a></li>
                            <li><a onClick={this.handleList} href="#">Łutowiec!!!!!!!!!</a></li>
                            <li><a onClick={this.handleList} href="#">Podlesice!!!!!!!</a></li>
                            <li><a onClick={this.handleList} href="#">Morsko</a></li>
                            <li><a onClick={this.handleList} href="#">Skarżyce</a></li>
                            <li><a onClick={this.handleList} href="#">Suliszwice!!!!!</a></li>
                            <li><a onClick={this.handleList} href="#">Dolina wiercicy</a></li>
                            <li><a onClick={this.handleList} href="#">Trzebniów!!!!!!!</a></li>
                            <li><a onClick={this.handleList} href="#">Mirów!!!!!</a></li>
                        </ul>
                    </div>
                </div>
            )
            } else {
                return <RouteList/>
            }
        }
    }

    class App extends React.Component{
        render(){
            return (
                <div>
                    <Nav/>
                    <MojaJura/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
