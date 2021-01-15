import { GET } from '../assets/axios/index'

/**
 * 我的绩效
 * @returns {*|Promise<undefined|*>}
 */
export const findMonthAverageNetIncome = () => {
    return GET({
        url: `/emp/manager/performance/findMonthAverageNetIncome`,
        params: {
        },
    })
};
