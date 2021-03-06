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
            weekList: []
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

    render() {
        const week = ['日', '一', '二', '三', '四', '五', '六']

        return (
            <div className="dailyWrap">
                <div className="date">
                    <span
                        className="date" >2021年 03月</span>
                    <span style={{'paddingLeft': '.35rem'}}>第10周</span>
                </div>
                <div className="content">
                    <LeftOutlined className="iconfanhui" onClick={this.prevDate}/>
                    <ul className="weekDay">
                        {this.state.weekList.map(item => {
                            return (
                                <li key={item.day}>{item.day}</li>
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

ProductCalendar.propTypes = {};

export default ProductCalendar;