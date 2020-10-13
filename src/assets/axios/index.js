import axios from 'axios';


export const GET = function(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};



