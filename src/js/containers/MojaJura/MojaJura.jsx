import React from "react";
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './MojaJuraStyles';


class MojaJura extends React.Component{
    render(){
        const { classes } = this.props;
        const EastJura = props => <Link to="/east" {...props}/>
        const CenterJura = props => <Link to="/center" {...props}/>
        const NorthJura = props => <Link to="/north" {...props}/>
        return (
            <div className={classes.mainContainer}>
                <div className={classes.eastJura}>
                    <div className={classes.buttonCenter}>
                        <Button component={EastJura} size="large">
                            Jura Połdniowa
                        </Button>
                    </div>
                </div>
                <div className={classes.centerJura}>
                    <div className={classes.buttonCenter}>
                        <Button component={CenterJura} size="large">
                            Jura Środkowa
                        </Button>
                    </div>
                </div>
                <div className={classes.northJura}>
                    <div className={classes.buttonCenter}>
                        <Button component={NorthJura} size="large">
                            Jura Północna
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MojaJura);