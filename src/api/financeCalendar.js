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
