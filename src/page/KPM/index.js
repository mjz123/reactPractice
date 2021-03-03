import React, {Component} from 'react';
import '../../style/KPM/index.scss'
import { DatePicker } from 'antd';
import moment from 'moment'
import {getKPMList} from "../../api/KPM";


class Index extends Component {
    constructor() {
        super();
        this.state={
            completeStatus: '0',
            startDate: moment().subtract('days', 6),
            endDate: moment(),
            KPMList: [],
            showMore: [false,false,false]
        }
    }

    handTab = (type) => {
        this.setState({
            completeStatus: type,
        })
    }

    onDateChange = (date, dateString) => {
        console.log(date, dateString)
        this.setState({
            startDate: dateString[0],
            endDate: dateString[1]
        })
        // this.init()
    }

    init = async () => {

        let res = await getKPMList({
            completeStatus: this.state.completeStatus,
            start: this.state.startDate,
            end: this.state.endDate
        })

        this.setState({
            KPMList: res
        })

    }

    missingLevelFormat = (status) => {
        if (status === '0') {
            return '紧急'
        } else if (status === '1') {
            return '重要'
        } else {
            return '普通'
        }
    }

    handleShowMore = (index) => {
        let showMore = this.state.showMore
        showMore[index] = !showMore[index]

        this.setState({
            showMore
        })
    }

    componentDidMount() {
        this.init()
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
                                    <li onClick={() => this.handTab(item.type)} className={`${this.state.completeStatus === item.type&&'active'}`} key={item.type}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <RangePicker onChange={this.onDateChange} defaultValue={[this.state.startDate, this.state.endDate]}/>

                <section className="linkInfo">
                    {
                        this.state.KPMList.map((item1, index1) => {
                            return (
                                <ul key={item1.missingLevel}>
                                    <li className="title">
                                        <span>{this.missingLevelFormat(item1.missingLevel)}</span>
                                        <span>{item1.finishedNumber}已完成 {item1.completion}%完成度</span>
                                    </li>
                                    {item1.missingList.map((item2, index2) => {
                                        return (
                                            (this.state.showMore[index1] || index2 < 3) &&
                                            <li key={item2.missingId}>
                                                <span>{item2.missingName}</span>
                                                <span>进度: {item2.schedule}</span>
                                            </li>
                                        )
                                    })}
                                    <li className="spread" onClick={() => this.handleShowMore(index1)}>{this.state.showMore[index1]?'收起':'展开全部'}</li>
                                </ul>
                            )
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Index;
