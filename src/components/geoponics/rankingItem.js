import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/geoponics/rankingItem.scss'

class RankingItem extends Component {
    render() {
        return (
            <div className='wrap'>
                <li className="ranking-title">
                    <span>排名</span>
                    <span>姓名</span>
                    <span>累计回流</span>
                    <span>昨日回流</span>
                    <span>营业部</span>
                </li>

                <li>

                </li>
            </div>
        );
    }
}

RankingItem.propTypes = {};

export default RankingItem;
