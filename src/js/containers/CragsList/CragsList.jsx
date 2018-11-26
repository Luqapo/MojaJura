import React, {Component} from "react";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './CragsListStyles';
import { url } from '../../config/config';

class CragsList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            routesList: '',
            listToSend: '',
            skala: '',
            rejon: ''
        }
    }

    handleList = (e) => {
        let skalaName = e.currentTarget.dataset.skala;
        let newArr = [...this.props.history.location.state];
        let rejon = newArr[0].rejon

        fetch(`${url}/api/skaly/${skalaName}`)
            .then( resp => resp.json())
            .then( resp => {
                    resp.rejon = rejon;
                    resp.skala = skalaName;
                    this.props.history.push('/routes', resp);
            })   

        
    }

    render(){
        const { classes } = this.props;
        let newArr = [...this.props.history.location.state];

        let newList = newArr.map( el => (
                            <div key={el._id} className={classes.buttonCenter}>
                                <Button
                                    onClick={this.handleList} 
                                    data-skala={el.skala}
                                    variant="outlined">
                                    {el.skala}
                                </Button>
                            </div>)
                            )
            return (
                    <div className={classes.myJura}>
                            <ul>
                            {newList}
                            </ul>
                    </div>
        )
    }
}

export default withStyles(styles)(CragsList);