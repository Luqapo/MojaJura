import React from "react";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './EastJuraStyles';

import { url } from '../../config/config';

class EastJura extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: '',
        }
    }

    componentDidMount() {
        fetch(`${url}/api/regiony/east`)
            .then( resp => resp.json())
            .then( resp => {
                this.setState({
                    data: resp
                })
            })
            .catch( err => {
                console.log('Błąd!', err);
            });
    }

    handleSchow = (e)=> {
            let rejonName = e.currentTarget.dataset.rejon;

            fetch(`${url}/api/rejony/${rejonName}`)
            .then( resp => resp.json())
            .then( resp => {
                this.props.history.push('/crags', resp);
            })   
    }

    render(){
        const { classes } = this.props;
        const data = [...this.state.data];
        let listElements = data.map( el => (
                        <div key={el._id} className={classes.buttonCenter}>
                            <Button  
                                onClick={this.handleSchow} 
                                data-rejon={el.rejon}
                                color="inherit"
                                variant="outlined">
                                {el.rejon}
                            </Button>
                        </div>)
                    );
            return (
                <div style={{background: 'url("../img/dupa_slonia.jpg")', 
                             backgroundSize: 'cover'}}
                             className={classes.myJura}>
                            {listElements}
                </div>
            )
    }
}

export default withStyles(styles)(EastJura);