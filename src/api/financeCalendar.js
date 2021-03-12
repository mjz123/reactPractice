import { GET } from '../assets/axios/index'
import moment from "moment";

/**
 * 理财日历
 * params date 日期
 * @returns {*|Promise<undefined|*>}
 */
export const getProductsStatistics = () => {
    return GET({
        url: `/emp/scrm/api/products/statistics`,
        params: {
            date: moment().format('YYYY-MM-DD')
        },
    })
};


/**
 * 理财日历产品
 * params date 日期
 * @returns {*|Promise<undefined|*>}
 */
export const getProducts = (date) => {
    return GET({
        url: `/emp/products`,
        params: {
            date
        },
    })
};

/**
 * 理财日历产品搜索
 * params productCode 产品代码
 * @returns {*|Promise<undefined|*>}
 */
export const getProductsClassifications = (productCode) => {
    return GET({
        url: `/emp/scrm/api/products/classifications`,
        params: {
            productCode
        },
    })
};
