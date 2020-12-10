import { GET } from '../assets/axios/index'

/**
 * 查询员工回流排行榜
 * @returns {*|Promise<undefined|*>}
 */
export const getBackflowRank = (sortType) => {
    return GET(
        `/emp/backflow/v1/backflowrank`,
        {
            sortType
        }
    )
};

/**
 * 查询名下目标客户统计
 * @returns {*|Promise<undefined|*>}
 */
export const getTargetCustomerCount = (sourceType) => {
    return GET(
        `/emp/backflow/v1/targetCustomerCount`,
        {
            sourceType
        }
    )
};
