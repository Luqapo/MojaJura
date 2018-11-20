import React from "react";
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MojaJura from "./MojaJura.jsx";
import MyList from "./MyList.jsx";
import Nav from "./containers/Nav/Nav.jsx";
import SearchResult from './SearchResult/SearchResult.jsx';

    class App extends React.Component{

        render(){
            return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route path="/mylist" component={MyList} />
                            <Route path="/search" component={SearchResult} />
                            <Route path="/" exact component={MojaJura} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
            );
        }
    }

    export default App;
