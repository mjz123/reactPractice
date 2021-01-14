import React, {Component, Suspense} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {router} from "./router/index";
import './App.css';

// import Geoponics from './page/geoponics'
// import Test from "./page/test";


class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback=''>
                    <Switch>
                        {
                            router.map((item, index) => {
                                return (
                                    <Route path={item.path} key={index} render={props => (
                                        <item.component {...props} routes={item.children} />
                                    )}/>
                                )
                            })
                        }
                        <Redirect exact from="/" to="/login"/>
                    </Switch>
                </Suspense>
            </Router>
        )
    }
}


export default App;

