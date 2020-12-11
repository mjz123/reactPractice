import { GET } from '../assets/axios/index'

/**
 * 登录
 * @returns {*|Promise<undefined|*>}
 */
export const login = ({userName, pwd}) => {
    return GET({
        url: `/login`,
        params: {
            userName,
            pwd
        },
        // hideLoading: true
    })
};
