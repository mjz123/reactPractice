const defaultStatus = {
    inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultStatus, action) => {
    switch (action.type) {
        case 'changeInput':
            return {
                ...state,
                inputValue: action.value,
            };
        case 'addItem':
            return {
                ...state,
                inputValue : '',
                list: [...state.list, action.value]
            };
        case 'deleteItem':
            return {
                ...state,
                list: state.list.filter(item => {
                    return item !== action.value
                })
            };
        default:
            return state
    }

    // return state
}