import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../style/financeCalendar/productCalendar.scss'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import moment from 'moment'

class ProductCalendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            weekList: [],
            selectedDay: moment().format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        this.init()
    }

    init = () => {

        let weekList =[];
        for (let i = 0; i<7; i++){
            let time = moment().week(moment().week()).startOf('week').add(i,"days");
            weekList.push({
                day:moment(time).format('DD'),
                date:moment(time).format('YYYY-MM-DD')
            })
        }

        this.setState({
            weekList: weekList
        })
    };

    prevDate = () => {
        let weekList = this.state.weekList.map(item => {
            return {
                day: moment(item.date).add(-7,"days").format('DD'),
                date:moment(item.date).add(-7,"days").format('YYYY-MM-DD')
            }
        });

        this.setState({
            weekList: weekList
        })
    };

    nextDate = () => {
        let weekList = this.state.weekList.map(item => {
            return {
                day: moment(item.date).add(7,"days").format('DD'),
                date:moment(item.date).add(7,"days").format('YYYY-MM-DD')
            }
        });

        this.setState({
            weekList: weekList
        })
    };

    handleClick = (date) => {
        this.setState({
            selectedDay: date
        })

        this.props.toParent(date)
    };

    render() {
        const week = ['日', '一', '二', '三', '四', '五', '六']

        return (
            <div className="dailyWrap">
                <div className="date">
                    <span
                        className="date" >{this.state.weekList.length&&moment(this.state.weekList[0].date).format('YYYY年MM月')}</span>
                    <span style={{'paddingLeft': '.35rem'}}>第{this.state.weekList.length&&moment(this.state.weekList[0].date).week()}周</span>
                </div>
                <div className="content">
                    <LeftOutlined className="iconfanhui" onClick={this.prevDate}/>
                    <ul className="weekDay">
                        {this.state.weekList.map(item => {
                            return (
                                <li key={item.day}
                                    onClick={() => this.handleClick(item.date)}
                                    className={`${item.date === moment().format('YYYY-MM-DD') ? 'current' : ''} ${item.date === this.state.selectedDay && 'active'}`}>
                                    {item.day}
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="week">
                        {week.map(item => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ul>
                    <RightOutlined className="iconNR-arrows" onClick={this.nextDate}/>
                </div>
            </div>
        );
    }
}

ProductCalendar.propTypes = {
    toParent: PropTypes.func,
};

export default ProductCalendar;
