import React, {Component} from 'react';
import { DatePicker, List } from 'antd-mobile';
import '../style/harassment/index.scss'

const CustomChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
        style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
    >
        {children}
        <span style={{ float: 'right', color: '#888' }}>{extra}</span>
    </div>
);

class Harassment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            harassmentMsg: {
                telphone: '',
                name: '',
                date: new Date(Date.now()),
                harassmentTool: 1,
                harassToolNumber: ''
            },
            harassmentList: [{
                "type": 1,
                "info": "电话"
            },{
                "type": 3,
                "info": "微信"
            },
            {
                "type": 2,
                "info": "短信"
            }]
        }
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            harassmentMsg: Object.assign({}, this.state.harassmentMsg, { [event.target.name]: event.target.value })
        })
    }

    selectHarassTool = (type) => {
        this.setState({
            harassmentMsg: Object.assign({}, this.state.harassmentMsg, {harassmentTool: type})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h4>客户信息</h4>
                    </li>
                    <li>
                        <span>联系电话</span>
                        <input type="text" name="telphone" value={this.state.harassmentMsg.telphone} onChange={this.handleChange}/>
                    </li>
                    <li>
                        <span>姓名</span>
                        <input type="text" name="name" value={this.state.harassmentMsg.name} onChange={this.handleChange}/>
                    </li>
                    <li>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            name="date"
                            value={this.state.harassmentMsg.date}
                            format="YYYY-MM-DD"
                            onChange={date => this.setState({ harassmentMsg: Object.assign({}, this.state.harassmentMsg, {date})})}
                        >
                            <CustomChildren>日期</CustomChildren>
                        </DatePicker>
                    </li>
                    <li>
                        <span>形式</span>
                        <div className="harass-tool">
                            {this.state.harassmentList.map(item => {
                                return (
                                    <div
                                        key={item.type}
                                        className={`${this.state.harassmentMsg.harassmentTool === item.type&&'active'}`}
                                        onClick={(e) => this.selectHarassTool(item.type, e)}>
                                        {item.info}
                                    </div>
                                )
                            })}
                        </div>
                    </li>
                    <li>
                        <span>骚扰{this.state.harassmentMsg.harassmentTool === 3?'微信':'电话'}</span>
                        <input
                            type="text"
                            name="harassToolNumber"
                            value={this.state.harassmentMsg.harassToolNumber}
                            onChange={this.handleChange}
                            placeholder={`请输入骚扰${this.state.harassmentMsg.harassmentTool === 3?'微信':'电话'}`}/>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Harassment;
