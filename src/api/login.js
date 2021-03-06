import { GET } from '../assets/axios/index'

/**
 * 登录
 * @returns {*|Promise<undefined|*>}
 */
export const login = ({userName, pwd}) => {
    return GET({
        url: `/emp/login`,
        params: {
            userName,
            pwd
        },
    })
};
