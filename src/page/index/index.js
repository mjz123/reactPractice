import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '../../style/index/index.scss'
import {Route, Link} from "react-router-dom";
// import {router} from "../../router";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: props.routes,
        }
    }

    render() {
        return (
            <div className="wrap" key={this.props.location.key}>
                {/*<Router>*/}
                {/*    <Suspense fallback=''>*/}
                {/*        <Switch>*/}
                            {
                                this.props.routes.map((item, index) => {
                                    return (
                                        <Route path={item.path} key={index} render={props => (
                                            <item.component {...props} routes={item.children} />
                                        )}/>
                                    )
                                })
                            }
                        {/*</Switch>*/}

                        <ul className="bottomBar border1pxBgTop">
                            <li>
                                <Link to="/index/home">主页</Link>
                            </li>
                            <li>
                                <Link to="/index/customer">客户</Link>
                            </li>
                            <li>
                                <Link to="/index/product">产品</Link>
                            </li>
                            <li>我的</li>
                        </ul>
                    {/*</Suspense>*/}
                {/*</Router>*/}

            </div>
        );
    }
}

// Index.propTypes = {};

export default Index;
