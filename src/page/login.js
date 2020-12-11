import React, {Component} from 'react';
import { Input, Button } from 'antd';
import '../style/login/index.scss'
import {login} from "../api/login";

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

    login = () => {
        React.$GET({
            url:'/login',
            params: {
                loginName: this.state.loginName,
                pwd: this.state.pwd,
            }
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
                <Button onClick={this.login}>登录</Button>
            </div>
        );
    }
}


export default Login;
