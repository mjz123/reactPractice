import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/geoponics/rankingItem.scss'
import { getBackflowRank } from "../../api/geoponics";

class RankingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backflowActive: '0',
            backflowList: []
        }
    }

    sort = async(sortType) => {
        this.setState({
            backflowActive: sortType,
        })
        let backflowList = (await getBackflowRank(sortType)).Data.resultList
        this.setState({
            backflowList
        })
    }

    async componentDidMount() {
        let backflowList = (await getBackflowRank(0)).Data.resultList
        this.setState({
            backflowList
        })
    }

    render() {
        return (
            <div className='wrap'>
                <ul>
                    <li className="ranking-title">
                        <span>排名</span>
                        <span>姓名</span>
                        <span className={`${this.state.backflowActive === '0'&& 'red'}`} onClick={(e) => this.sort('0', e)}>累计回流</span>
                        <span className={`${this.state.backflowActive === '1'&& 'red'}`} onClick={(e) => this.sort('1', e)}>昨日回流</span>
                        <span>营业部</span>
                    </li>
                </ul>
                <ul>
                    {
                        this.state.backflowList.map((item, index) => {
                            return (
                                <li className="ranking">
                                    <span>{item.rankNumber}</span>
                                    <span>{item.personName}</span>
                                    <span>{item.totalBackFlowNumber}</span>
                                    <span>{item.lastBackFlowNumber}</span>
                                    <span>{item.businessDepart}</span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}

RankingItem.propTypes = {};

export default RankingItem;
