import { GET } from '../assets/axios/index'

/**
 * 理财日历
 * @returns {*|Promise<undefined|*>}
 */
export const getReduxList = () => {
    return GET({
        url: `/emp/redux`,
    })
};
