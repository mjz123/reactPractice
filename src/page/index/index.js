import React, {Component, Suspense} from 'react';
// import PropTypes from 'prop-types';
import '../../style/index/index.scss'
import {BrowserRouter as Router, Redirect, Route, Switch, Link} from "react-router-dom";
import {router} from "../../router";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: props.routes,
        }
    }

    render() {
        return (
            <div className="wrap">
                <Router>
                    <Suspense fallback=''>
                        <Switch>
                            {
                                this.props.routes.map((item, index) => {
                                    return (
                                        <Route path={item.path} key={index} render={props => (
                                            <item.component {...props} routes={item.children} />
                                        )}/>
                                    )
                                })
                            }
                            <Redirect exact from="/" to="/login"/>
                        </Switch>

                        <ul className="bottomBar border1pxBgTop">
                            <li>
                                <Link to="/index/home">主页</Link>
                            </li>
                            <li>
                                <Link to="/index/customer">客户</Link>
                            </li>
                            <li>产品</li>
                            <li>我的</li>
                        </ul>
                    </Suspense>
                </Router>

            </div>
        );
    }
}

// Index.propTypes = {};

export default Index;
