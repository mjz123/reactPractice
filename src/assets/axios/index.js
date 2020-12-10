import axios from 'axios';

axios.defaults.timeout = 15000;

let requestList = [];
let cancelToken = axios.CancelToken;

axios.interceptors.request.use(function (config) {
    // 防止重复请求
    config.cancelToken = new cancelToken((cancel) => {
        let params = config.params ? JSON.stringify(config.params) : config.data?JSON.stringify(config.data):''

        let requestFlag = `${config.url}${params}${config.method}`
        console.log(requestFlag)

        if (requestList.includes(requestFlag)) {//请求标记已经存在，则取消本次请求，否则在请求列表中加入请求标记
            cancel();//取消本次请求
        } else {
            requestList.push(requestFlag);
        }
    });

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        let params = response.config.params ? JSON.stringify(response.config.params) : response.config.data?JSON.stringify(response.config.data):''

        //请求返回后，将请求标记从requestList中移除
        let requestFlag = `${response.config.url}${params}${response.config.method}`
        requestList.splice(requestList.findIndex(item => item === requestFlag), 1);
        return response;
    },
    error => {
        //置空请求列表
        requestList = [];

        return Promise.reject(error)
    }
)


export const GET = function(url, params) {
    console.log(params)
    return new Promise((resolve, reject) => {
        axios
            .get(url, params)
            .then(res => {
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





