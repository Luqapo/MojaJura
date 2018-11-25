import React from "react";
import AddRoute from "../../AddRoute.jsx";
import RouteListExpansion from './RouteListExpanansion/RouteListExpansion.jsx';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import { styles } from './RouteListStyles';

class RouteList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            myRoutes: [],
            addShow: false,
        }
    }

    componentDidMount(){
        let newRoutes = this.props.history.location.state.map(a => ({ ...a }));
        this.setState({
            myRoutes: newRoutes
        })
    }

    handleDate = (e) => {
        let drogaName = e.currentTarget.parentElement.parentElement.dataset.droga;
        let newRoutes = [...this.state.myRoutes];
        let newIndex = null;

        newRoutes.forEach((el,index) => {
            if(el.droga === drogaName){
                newIndex = index;
            }
        })

        newRoutes[newIndex].date = e.target.value;

        this.setState({
            myRoutes: newRoutes
        })
    }

    handleStlye = (e) => {
        let drogaName = e.currentTarget.parentElement.parentElement.dataset.droga;
        let newRoutes = [...this.state.myRoutes];
        let newIndex = null;

        newRoutes.forEach((el,index) => {
            if(el.droga === drogaName){
                newIndex = index;
            }
        })
        newRoutes[newIndex].styl = e.target.value.toUpperCase();

        this.setState({
            myRoutes: newRoutes
        })
    }

    handleOcena = (e) => {
        let drogaName = e.currentTarget.parentElement.parentElement.dataset.droga;
        let newRoutes = [...this.state.myRoutes];
        let newIndex = null;

        newRoutes.forEach((el,index) => {
            if(el.droga === drogaName){
                newIndex = index;
            }
        })
        newRoutes[newIndex].ocena = e.target.value;

        this.setState({
            myRoutes: newRoutes
        })
    }

    handleChecked = (e) => {
        let drogaName = e.currentTarget.parentElement.parentElement.dataset.droga;
        let newRoutes = [...this.state.myRoutes];
        let newIndex = null;

        newRoutes.forEach((el,index) => {
            if(el.droga === drogaName){
                newIndex = index;
            }
        })
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
        console.log(dataToSend, this.props.userIn);

        fetch('https://mojajura.herokuapp.com/api/ascents/add', {
                method : 'POST',
                body : JSON.stringify({
                    user: this.props.userIn,
                    rejon: this.props.rejonName,
                    data: dataToSend
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then( resp => resp.json())
            .then(function (response) {
                    console.log(response);
                })
            .catch(function (error) {
                    console.log(error);
                })

    };

    handleAdd = (e) => {
        this.setState({
            addShow: this.state.addShow === false ? true : false
        })
    }

    handleComment = (e) => {
        let drogaName = e.currentTarget.parentElement.parentElement.dataset.droga;
        let newRoutes = [...this.state.myRoutes];
        let newIndex = null;

        newRoutes.forEach((el,index) => {
            if(el.droga === drogaName){
                newIndex = index;
            }
        })
        newRoutes[newIndex].comment = e.target.value;

        this.setState({
            myRoutes: newRoutes
        })
    }

    render(){
        const { classes } = this.props;
        let rows = [];
        this.props.history.location.state.forEach( el => rows.push(<tr key={el._id} 
                                                          data-droga={el.droga}>
            <td>{el.droga}</td>
            <td>{el.wycena}</td>
            <td>{el.przejscia}</td>
            <td>{el.ocena}</td>
            <td><TextField onChange={this.handleComment} placeholder="Komentarz"/></td>
            <td>
                <TextField 
                    id="date" 
                    label="Data przejścia" 
                    onChange={this.handleDate} type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}/></td>
            <td>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="style">Styl</InputLabel>
                    <Select 
                        onChange={this.handleStlye}
                        inputProps={{
                            name: 'style',
                            id: 'style',
                          }}>
                        <MenuItem value="">Wybierz</MenuItem>
                        <MenuItem value="OS">OS</MenuItem>
                        <MenuItem value="FL">FL</MenuItem>
                        <MenuItem value="RP">RP</MenuItem>
                        <MenuItem value="PP">PP</MenuItem>
                    </Select>
                </FormControl>
            </td>
            <td>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="ocena">Ocena</InputLabel>
                    <Select 
                        onChange={this.handleOcena}
                        inputProps={{
                            name: 'ocena',
                            id: 'ocena',
                          }}>
                        <MenuItem value="">Oceń</MenuItem>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                    </Select>
                </FormControl>
            </td>
            <td><Checkbox 
                    onChange={this.handleChecked}
                    tabIndex={-1}
                    disableRipple />
            </td>
        </tr>));

        return (
            <Paper className={classes.root}>
                <table style={{width: '98%', margin: '2px', borderCollapse: "collapse"}} className={classes.sectionDesktop}>
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Wycena</th>
                        <th>Przejcia</th>
                        <th>Ocena</th>
                        <th>Komentarz</th>
                        <th>Data przejcia</th>
                        <th>Styl</th>
                        <th>Twoja ocena</th>
                        <th>Wybierz</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    {this.state.addShow ? <AddRoute skala={this.props.skalaName}/> : null}
                    </tbody>
                </table>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    { this.props.userIn ? <button onClick={this.handleAdd} 
                                                style={{margin: '30px'}}>Dodaj drogę</button> : null }
                    { this.props.userIn ? <button onClick={this.handleSend} 
                                                style={{margin: '30px'}}>Dodaj przejścia</button> : null }
                </div>
                <div className={classes.sectionMobile}>
                    {this.props.history.location.state.map( route => { 
                       return  <RouteListExpansion
                            key={route._id}
                            name={route.droga}
                            wycena={route.wycena}
                            przejscia={route.przejscia}/>
                        })}
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    return {
        userIn: state.userLogged
    };
};

export default connect(mapStateToProps)(withStyles(styles)((RouteList)));