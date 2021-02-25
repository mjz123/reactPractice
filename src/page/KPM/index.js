import React, {Component} from 'react';
import '../../style/KPM/index.scss'
import { DatePicker } from 'antd';
import moment from 'moment'


class Index extends Component {
    constructor() {
        super();
        this.state={
            completeStatus: '0',
            startDate: moment().subtract('days', 6),
            endDate: moment(),
        }
    }

    handTab = (type) => {
        this.setState({
            completeStatus: type,

        })
    }

    onDateChange = (date, dateString) => {
        console.log(date, dateString);
    }


    render() {
        const tabList = [{
            name: '全部',
            type: '0'
        },{
            name: '待处理',
            type: '1'
        },{
            name: '已完成',
            type: '2'
        }]

        const { RangePicker } = DatePicker;


        return (

            <div>
                <div className="title">KPM</div>
                <div className="content">
                    <ul>
                        {
                            tabList.map(item => {
                                return (
                                    <li onClick={(e) => this.handTab(item.type, e)} className={`${this.state.completeStatus === item.type&&'active'}`} key={item.type}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <RangePicker onChange={this.onDateChange} defaultValue={[this.state.startDate, this.state.endDate]}/>
                </div>

            </div>
        );
    }
}

export default Index;
