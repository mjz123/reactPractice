import React, {Component} from 'react';
import FinanceCalendar from './components/product/financeCalendar'


class Product extends Component {
    constructor() {
        super();
        this.state = {
            fundNum: 0
        }
    }

    setFundNum = (val) => {
        this.setState({
            fundNum: val
        })
    }

    render() {
        return (
            <div>
                <div>今日有只首发{this.state.fundNum}基金</div>

                {/*history二级路由向一级路由跳转添加*/}
                <FinanceCalendar toParent={this.setFundNum} history={this.props.history}/>
            </div>
        );
    }
}

export default Product;
