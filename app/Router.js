import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index';
import Album from './pages/Album';

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/album" component={Album}/>
                    <Route path="/" component={Index}/>
                </Switch>
            </Router>
        )
    }
}

