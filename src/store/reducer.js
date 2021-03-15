import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_REDUX_LIST} from "./actionTypes";

const defaultStatus = {
    inputValue : '',
    list:[]
}
export default (state = defaultStatus, action) => {
    switch (action.type) {
        case GET_REDUX_LIST:
            return {
                ...state,
                ...action.data,
            };
        case CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.value,
            };
        case ADD_ITEM:
            return {
                ...state,
                inputValue : '',
                list: [...state.list, action.value]
            };
        case DELETE_ITEM:
            return {
                ...state,
                list: state.list.filter(item => {
                    return item !== action.item
                })
            };
        default:
            return state
    }

    // return state
}
