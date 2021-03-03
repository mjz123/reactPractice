import { GET } from '../assets/axios/index'

/**
 * KPM列表
 * params completeStatus 完成状态
 * params start 开始时间
 * params end 结束时间
 * @returns {*|Promise<undefined|*>}
 */
export const getKPMList = ({completeStatus, start, end}) => {
    return GET({
        url: `/emp/kpmmanage/v2/queryKpmUnList`,
        params: {
            completeStatus,
            start,
            end
        },
    })
};
