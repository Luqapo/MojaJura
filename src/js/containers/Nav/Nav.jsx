import React from "react";
import {Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import LoginForm from "../Authorization/LoginForm.jsx";
import * as actions from "../../store/actions/auth.jsx";
import { styles } from './NavStyles'

class Nav extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            schowLog: false,
            search: '',
            anchorEl: null,
            mobileMoreAnchorEl: null,
        }
    }

    handleLogOff = () => {

        this.setState({
            loggedIn: false,
            schowLog: false
        });
        this.props.logOff();
    }

    handleLogin = () => {
        this.setState({
            schowLog: this.state.schowLog ? false : true
        })
    }

    handleSerch = (e) => {
        console.log(e.target.value);
        this.setState({
            search: e.target.value
        });
    }

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://mojajura.herokuapp.com/api/search', {
                method : 'POST',
                body : JSON.stringify({
                    search: this.state.search
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then( resp => resp.json())
            .then( response => {
                    this.props.history.push('/search', response);
                })
            .catch( error => {
                    console.log(error);
                })
            this.setState({
                search: ''
            })
               
    }

    render(){
        const { classes } = this.props;
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const MyJura = props => <Link to="/" {...props}/>
        const MyList = props => <Link to="/mylist" {...props}/>

        const renderMobileMenu = (
            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMobileMenuOpen}
              onClose={this.handleMobileMenuClose}
            >
              <MenuItem>
                <div className={classes.upBarItem}>
                    <Button component={MyList} color="inherit" onClick={this.handleMobileMenuClose}>
                        Moje przejścia
                    </Button>
                </div>
              </MenuItem>
              <MenuItem>
                <div className={classes.upBarItem}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                                </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        onChange={this.handleSerch}
                                        />
                                </div>
                </div>
              </MenuItem>
              <MenuItem onClick={this.handleProfileMenuOpen}>
                    <div className={classes.upBarItem}>    
                        { this.state.schowLog ? <LoginForm handleLogOff={this.handleLogOff} 
                                                            show={this.state.schowLog} 
                                                            showHandle={this.handleLogin}/> : 
                                                <Button color="inherit" size="large"
                                                        onClick={this.handleLogin}>
                                                        Login</Button>}
                                </div>
              </MenuItem>
            </Menu>
          );
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                         <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                        <div className={classes.upBar}>
                            <div className={classes.upBarItem}>
                                <Button component={MyJura} color="inherit">
                                    Moja Jura
                                </Button>
                            </div>
                            <div className={classes.sectionDesktop}>
                                <div className={classes.upBarItem}>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                        <SearchIcon />
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            onChange={this.handleSerch}
                                        />
                                    </div>
                                </div>
                                <div className={classes.upBarItem}>
                                    <Button component={MyList} color="inherit">
                                        Moje przejścia
                                    </Button>
                                </div>
                                <div className={classes.upBarItem}>    
                                    { this.state.schowLog ? <LoginForm handleLogOff={this.handleLogOff} 
                                                                        show={this.state.schowLog} 
                                                                        showHandle={this.handleLogin}/> : 
                                                                <Button color="inherit" size="large"
                                                                        onClick={this.handleLogin}>
                                                                Login</Button>}
                                </div>
                            </div>
                        </div>
                        {renderMobileMenu}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userIn: state.userLogged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logOff: () => dispatch ( actions.logOff())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(withRouter(Nav)));