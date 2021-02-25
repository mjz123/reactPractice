import React, {Component} from 'react';
import '../../style/KPM/index.scss'



class Index extends Component {
    constructor() {
        super();
        this.state={
            completeStatus: '0'
        }
    }

    handTab = (type) => {
        this.setState({
            completeStatus: type
        })
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

        return (
            <div>
                <div className="title">KPM</div>
                <div className="content">
                    <ul>
                        {
                            tabList.map(item => {
                                return (
                                    <li onClick={(e) => this.handTab(item.type, e)} className={`${this.state.completeStatus === item.type&&'active'}`}>
                                        {item.name}
                                    </li>
                                )
                            })
                        }

                        {/*<li onClick={(e) => this.handTab('0', e)} className={`${this.state.completeStatus === '0'&&'active'}`}>全部</li>*/}
                        {/*<li onClick={(e) => this.handTab('1', e)} className={`${this.state.completeStatus === '1'&&'active'}`}>待处理</li>*/}
                        {/*<li>已完成</li>*/}
                    </ul>
                </div>

            </div>
        );
    }
}

export default Index;
