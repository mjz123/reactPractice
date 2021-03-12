import React, {Component} from 'react';
import '../../style/financeCalendar/index.scss'
import ProductCalendar from './components/productCalendar'
import {getProducts} from "../../api/financeCalendar";
import moment from "moment";
import {Link, useLocation} from "react-router-dom";
import {
    SearchOutlined
} from '@ant-design/icons';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            productList: []
        }
    }

    setDate = (date) => {
        if (date !== this.state.date) {
            this.setState({
                date
            },() => {
                this.getProductsList()
            })
        }
    }

    async getProductsList(){
        let productList = await getProducts(this.state.date)
        this.setState({
            productList
        })
    }

    componentDidMount() {
        //获取路由query参数
        var searchParams = new URLSearchParams(this.props.location.search)
        console.log(searchParams.get('date'))

        this.setState({
            date: searchParams.get('date') || moment().format('YYYY-MM-DD')
        },() => {
            this.getProductsList()
        })
    }

    render() {
        return (
            <div className="financeCalendar">
                <div className="title">理财日历 <Link to='/financeCalendar/search'><SearchOutlined /></Link></div>

                <ProductCalendar toParent={this.setDate}/>

                <div>
                    <ul>
                        {this.state.productList.map(item => {
                            return (
                                <li key={item.id}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Index;
