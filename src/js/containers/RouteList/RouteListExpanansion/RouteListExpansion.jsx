import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { styles } from './RouteListExpansionStyles';

function RouteListExpansion(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
              <Typography className={classes.heading}>{props.name}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{props.wycena}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{props.przejscia}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.columnDown}>
                <TextField 
                  onChange={props.handleComment}
                  className={classes.formControl} 
                  placeholder="Komentarz"/>
            </div>
            <div className={classes.columnDown}>
                <TextField 
                    id="date" 
                    label="Data przejścia" 
                    onChange={props.handleDate} type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}/>
            </div>
            <div className={classes.columnDown}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="style">Styl</InputLabel>
                    <Select 
                        onChange={props.handleStlye}
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
            </div>
            <div className={classes.columnDown}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="ocena">Ocena</InputLabel>
                    <Select 
                        onChange={props.handleOcena}
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
            </div>
            <div className={classes.columnDown}>
              <Button variant="outlined" color="primary">
                Dodaj
              </Button>
            </div>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
    );
  }

  export default withStyles(styles)(RouteListExpansion);