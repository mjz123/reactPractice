import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_REDUX_LIST} from "./actionTypes";
import {getReduxList} from "../api/reduxStudy";

// export const getReduxListActions = (data) => ({
//     type: GET_REDUX_LIST,
//     data
// });

//redux-thunk 获取异步数据
export const getTodoList = () => {
    const getReduxListActions = (data) => ({
        type: GET_REDUX_LIST,
        data
    });

    return async (dispatch) => {
        const data = await getReduxList()
        const action = getReduxListActions(data)
        dispatch(action)
    }
};

export const changeInputActions = (value) => ({
    type: CHANGE_INPUT,
    value
});

export const addItemActions = (value) => ({
    type: ADD_ITEM,
    value
});

export const deleteItemActions = (item) => ({
    type: DELETE_ITEM,
    item
});
