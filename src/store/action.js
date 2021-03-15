import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_REDUX_LIST} from "./actionTypes";

export const getReduxListActions = (data) => ({
    type: GET_REDUX_LIST,
    data
});

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
