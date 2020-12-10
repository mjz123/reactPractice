import React, {Component} from 'react';
import { Input, Button } from 'antd';
import '../style/login/index.scss'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginName: '',
            pwd: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input
                    addonBefore="用户名"
                    placeholder="请输入用户名"
                    name="loginName"
                    value={this.state.loginName}
                    onChange={this.handleChange}/>
                <Input
                    addonBefore="密码"
                    placeholder="请输入密码"
                    name="pwd"
                    value={this.state.pwd}
                    onChange={this.handleChange}/>
                <Button>登录</Button>
            </div>
        );
    }
}


export default Login;
