import React, {Component} from 'react';
import '../../../../style/product/financeCalendar.scss'
import {getProductsStatistics} from "../../../../api/financeCalendar";
import PropTypes from 'prop-types';

class FinanceCalendar extends Component {
    constructor() {
        super();
        this.state = {
            financeObj: {}
        }
    }

    linkTo = () => {
        this.props.history.push('/financeCalendar')
    }

    async componentDidMount() {
        let res = await getProductsStatistics()
        this.setState({
            financeObj: res
        })
        this.props.toParent(res.todayOnSaleFirstFundCount)
    }

    render() {
        return (
            <div className="finance-calendar">
                <div>
                    <div className="title">
                        <span className="title-lf">理财日历</span>
                        <span className="title-rg" onClick={this.linkTo}>更多</span>
                    </div>
                </div>

                <div className="main">
                    <ul className="border1pxBgEe">
                        <li className="left">
                            <i className="font16">基金</i><br/>
                            在售<span className="red jg URW_DIN_Medium">{this.state.financeObj.todayOnSaleAllFundCount}</span>只
                        </li>
                        <li className="right">
                        <span>
                            <i className="gruy">首发</i><br/>
                            <span className="URW_DIN_Medium">{this.state.financeObj.todayOnSaleFirstFundCount}</span>只
                        </span>
                            <span>
                            <i className="gruy">重销</i><br/>
                            <span className="URW_DIN_Medium">{this.state.financeObj.todayOnSaleKeyFundCount}</span>只
                        </span>
                            <span>
                            <i className="gruy">持营</i><br/>
                            <span className="URW_DIN_Medium">{this.state.financeObj.todayOnSaleContinueFundCount}</span>只
                        </span>
                        </li>
                    </ul>
                    <ul className="border1pxBgEe">
                        <li className="left border1pxBgRight">
                            <i className="font16">定期</i><br/>
                            <span className="open">开放<span className="red jg URW_DIN_Medium">{this.state.financeObj.todayOpenFixedCount}</span>只</span>
                            到期<span className="green jg URW_DIN_Medium">{this.state.financeObj.todayExpiredFixedCount}</span>只
                        </li>
                        <li className="right">
                            <i className="font16">高端</i><br/>
                            开放 <span className="red jg URW_DIN_Medium">{this.state.financeObj.todayOpenHighEndCount}</span> 只
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

FinanceCalendar.propTypes = {
    toParent: PropTypes.func,
}

export default FinanceCalendar;
