import React from "react";
import ReactDOM from "react-dom";


document.addEventListener('DOMContentLoaded', function(){


    class Nav extends React.Component{
        render(){
            return (
                <div>
                    <h1>MojaJura</h1>
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

        render(){

            let style = this.props.flexEast == 5 ? {display: 'block'} : {display: 'none'};

            return (
                <div style={{flex: this.props.flexEast,background: 'url("../img/dupa_slonia.jpg")'}} data-id="1" className="east" onClick={this.handleClick}>
                    <h1 data-id="1">Jura Południowa</h1>
                    <div style={style}>
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
                </div>
            )
        }
    }

    class CenterJura extends React.Component{

        handleClick = (e) => {
            if(typeof this.props.hanldeFlex === 'function'){
                this.props.hanldeFlex(e.target.dataset.id);
            }
        }

        render(){
            let style = this.props.flexCenter == 5 ? {display: 'block'} : {display: 'none'};


            return (
                <div style={{flex: this.props.flexCenter,background: 'url("../img/wielka-cima.jpg")', backgroundSize: 'cover'}} data-id="2" className="center" onClick={this.handleClick}>
                    <h1 data-id="2">Jura Środkowa</h1>
                    <div style={style}>
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
                </div>
            )
        }
    }

    class NorthJura extends React.Component{

        handleClick = (e) => {
            if(typeof this.props.hanldeFlex === 'function'){
                this.props.hanldeFlex(e.target.dataset.id);
            }
        }

        render(){

            let style = this.props.flexNorth == 5 ? {display: 'block'} : {display: 'none'};

            return (
                <div style={{flex: this.props.flexNorth,background: 'url("../img/Rzędkowice.jpg")'}} data-id="3" className="north" onClick={this.handleClick}>
                    <h1 data-id="3">Jura Północna</h1>
                    <div style={style}>
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
                </div>
            )
        }
    }

    class MojaJura extends React.Component{
        constructor(props) {
            super(props);

            this.state = {
                flexEast: '1',
                flexCenter: '1',
                flexNorth: '1'
            }
        }

        hanldeFlex = (data) => {
            console.log(data);
            if(data == 1){
                console.log('jestem w 1');
                this.setState({
                    flexEast: '5',
                    flexCenter: '1',
                    flexNorth: '1'
                })
            } else if (data == 2){
                this.setState({
                    flexEast: '1',
                    flexCenter: '5',
                    flexNorth: '1'
                })
            } else {
                console.log('jestem w 3');
                this.setState({
                    flexEast: '1',
                    flexCenter: '1',
                    flexNorth: '5'
                })
            }
            console.log(this.state.flexNorth, this.state.flexCenter, this.state.flexEast);
        }

        render(){
            return (
                <div className="mainContainer">
                    <EastJura hanldeFlex={this.hanldeFlex} flexEast={this.state.flexEast}/>
                    <CenterJura hanldeFlex={this.hanldeFlex} flexCenter={this.state.flexCenter}/>
                    <NorthJura hanldeFlex={this.hanldeFlex} flexNorth={this.state.flexNorth}/>
                </div>
            )
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
