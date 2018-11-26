import React from "react";
import AddRoute from "../../AddRoute.jsx";
import RouteListExpansion from './RouteListExpanansion/RouteListExpansion.jsx';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { styles } from './RouteListStyles';
import AddAscent from './AddAscent/AddAscent.jsx'

class RouteList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            addShow: false,
        }
    }

    handleAdd = (e) => {
        this.setState({
            addShow: this.state.addShow === false ? true : false
        })
    }

    render(){
        const { classes } = this.props;
        const disabled = Boolean(!this.props.userIn);
        let rows = [];
        this.props.history.location.state.forEach( el => rows.push(<tr key={el._id} 
                                                          data-droga={el.droga}>
            <td>{el.droga}</td>
            <td>{el.wycena}</td>
            <td>{el.przejscia}</td>
            <td>{el.ocena}</td>
            <td>
                <AddAscent
                    key={el._id}
                    data-droga={el.droga}
                    name={el.droga}
                    wycena={el.wycena}
                    przejscia={el.przejscia} />
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
                        <th>Dodaj przejście</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    {this.state.addShow ? <AddRoute skala={this.props.skalaName}/> : null}
                    </tbody>
                </table>
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
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={this.handleAdd}
                        variant="outlined"
                        color="primary"
                        disabled={disabled}>
                        Dodaj drogę
                    </Button>
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