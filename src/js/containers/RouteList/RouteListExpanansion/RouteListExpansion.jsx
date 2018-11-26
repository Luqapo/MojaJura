import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { styles } from './RouteListExpansionStyles';
import AddAscent from '../AddAscent/AddAscent.jsx'

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
            <AddAscent />
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
    );
  }

  export default withStyles(styles)(RouteListExpansion);