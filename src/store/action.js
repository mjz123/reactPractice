import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from "./actionTypes";

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