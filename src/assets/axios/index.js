import axios from 'axios';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Spin} from "antd";

axios.defaults.timeout = 15000;

let requestList = [];   //正在请求的接口列表
let cancelToken = axios.CancelToken;

let requestCount = 0;   //正在请求的接口数量

//显示loading
function showLoading(){
    if (requestCount === 0){
        let dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin size="large"/>,dom)
    }
    requestCount++
}

//隐藏loading
function hideLoading(){
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}


axios.interceptors.request.use(function (config) {

    //加载loading
    if (!config.hideLoading) {
        showLoading()
    }

    // 防止重复请求
    config.cancelToken = new cancelToken((cancel) => {
        let params = config.params ? JSON.stringify(config.params) : config.data?JSON.stringify(config.data):''

        let requestFlag = `${config.url}${params}${config.method}`
        console.log(requestFlag)

        if (requestList.includes(requestFlag)) {//请求标记已经存在，则取消本次请求，否则在请求列表中加入请求标记
            if (!config.hideLoading) {
                hideLoading()
            }
            cancel();//取消本次请求
        } else {
            requestList.push(requestFlag);
        }
    });

    return config;
}, function (error) {
    // 对请求错误做些什么

    if (!error.config.hideLoading) {
        hideLoading()
    }
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {

        if (!response.config.hideLoading) {
            hideLoading()
        }

        let params = response.config.params ? JSON.stringify(response.config.params) : response.config.data?JSON.stringify(response.config.data):''

        //请求返回后，将请求标记从requestList中移除
        let requestFlag = `${response.config.url}${params}${response.config.method}`
        requestList.splice(requestList.findIndex(item => item === requestFlag), 1);
        return response;
    },
    err => {
        console.log('err', err.config) // 修改后

        if (!err.config.hideLoading) {
            hideLoading()
        }

        //置空请求列表
        requestList = [];

        return Promise.reject(err)
    }
)

/**
 * hideLoading 隐藏loading图标
 */
export const GET = function({url, params, hideLoading}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            params,
            hideLoading
        }).then(res => {
            console.log(res)
            resolve(res.data);
        })
        .catch(err => {
            reject(err);
        });
    });
};

// export const axiosUtils = function ({
//         url,
//         method = 'get',
//         params = {},
//     }){
//     axios({
//         url,
//         method,
//         params,
//     })
// }





