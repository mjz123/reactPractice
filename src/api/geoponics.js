import { GET } from '../assets/axios/index'

/**
 * 查询员工回流排行榜
 * @returns {*|Promise<undefined|*>}
 */
export const getBackflowRank = (sortType) => {
    return GET({
        url: `/emp/backflow/v1/backflowrank`,
        params: {
            sortType
        },
        // hideLoading: true
    })
};

/**
 * 查询名下目标客户统计
 * @returns {*|Promise<undefined|*>}
 */
export const getTargetCustomerCount = (sourceType) => {
    return GET({
        url: `/emp/backflow/v1/targetCustomerCount`,
        params: {
            sourceType
        },
        // hideLoading: true
    })
};
