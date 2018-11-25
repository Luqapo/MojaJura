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
import Button from '@material-ui/core/Button';

import { styles } from './RouteListStyles';

class RouteList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            style: '',
            ocena: '',
            comment: '',
            addShow: false,
        }
    }

    handleChage = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSend = () => {
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

    render(){
        const { classes } = this.props;
        let rows = [];
        this.props.history.location.state.forEach( el => rows.push(<tr key={el._id} 
                                                          data-droga={el.droga}>
            <td>{el.droga}</td>
            <td>{el.wycena}</td>
            <td>{el.przejscia}</td>
            <td>{el.ocena}</td>
            <td>
                <TextField
                    name="comment"
                    label="Komentarz" 
                    onChange={this.handleChage}
                    value={this.state.comment} 
                    placeholder="Komentarz"/>
            </td>
            <td>
                <TextField 
                    id="date" 
                    name="date"
                    label="Data przejścia"
                    value={this.state.date} 
                    onChange={this.handleChage} 
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}/></td>
            <td>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="style">Styl</InputLabel>
                    <Select 
                        onChange={this.handleChage}
                        value={this.state.style}
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
                        onChange={this.handleChage}
                        value={this.state.ocena}
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
            <td>
                <Button variant="outlined" color="primary">
                    Dodaj
                </Button>
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
                    {this.props.history.location.state.map( route => ( 
                         <RouteListExpansion
                            key={route._id}
                            data-droga={route.droga}
                            name={route.droga}
                            wycena={route.wycena}
                            przejscia={route.przejscia}/>
                        ))}
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