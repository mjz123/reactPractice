import React, {Component, Suspense} from 'react';
import "lib-flexible"
import axios from 'axios';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {router} from "./router/index";

// import Geoponics from './page/geoponics'
// import Test from "./page/test";


class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback=''>
                    {
                        router.map((item, index) => {
                            return (
                                <Route path={item.path} key={index} render={props => (
                                    <item.component {...props} routes={item.children} />
                                )}/>
                            )
                        })
                    }
                    <Redirect to="/login" from="/" exact/>
                </Suspense>
            </Router>
        )
    }
}


export default App;

