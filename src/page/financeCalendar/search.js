import React, {Component} from 'react';
import { Input } from 'antd';
import {getProductsClassifications} from "../../api/financeCalendar";
import '../../style/financeCalendar/search.scss'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchList: []
        }
    }

    onSearch = async value => {
        let searchList = await getProductsClassifications(value)
        this.setState({
            searchList
        })
    };

    backToCal = (date) => {
        this.props.history.push(`/financeCalendar/index?date=${date}`)
    }

    render() {
        const { Search } = Input;

        return (
            <div>
                <Search placeholder="input search text" onSearch={this.onSearch} style={{ width: 200 }} />

                <div>
                    <ul>
                        {this.state.searchList.map(item => {
                            return (
                                <li key={item.id}>
                                    <div>{item.name}</div>
                                    <div className="back" onClick={() => this.backToCal(item.startDate)}>回到日历</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Search;
