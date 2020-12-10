import React, {Component} from 'react';
import { getTargetCustomerCount } from "../../api/geoponics";
import '../../style/geoponics/footBox.scss'
import {Link} from "react-router-dom";

class FootBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            targetCustomerCount: {}
        }
    }

    async componentDidMount() {
        this.setState({
            targetCustomerCount: await getTargetCustomerCount(1)
        })
    }

    render() {
        return (
            <div>
                <div className="footBox">
                    <div className="footBox-lf">{this.state.targetCustomerCount.rank}名</div>
                    <div className="footBox-md">
                        <div>累计回流客户数: {this.state.targetCustomerCount.totalBackFlowNumber}人</div>
                        <div>昨日回流客户数: {this.state.targetCustomerCount.lastBackFlowNumber}人</div>
                    </div>
                    <div className="footBox-rg">
                        <Link to='/harassment'><button>我的目标客户</button></Link>
                    </div>
                    <div className="me">我</div>
                </div>
            </div>

        );
    }
}

export default FootBox;
