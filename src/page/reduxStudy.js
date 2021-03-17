import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from "../store";
import {changeInputActions, addItemActions, deleteItemActions, getTodoList} from "../store/action";
// import {getReduxList} from "../api/reduxStudy";
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            // ...store.getState()
        }

        // store.subscribe(this.storeChange)
    }

    // handleChange = (e) => {
    //     const action = changeInputActions(e.target.value)
    //     store.dispatch(action)
    // }

    handleClick=()=>{
        const action = addItemActions(this.state.inputValue)
        store.dispatch(action)
    }

    handleDeleteClick=(item)=>{
        const action = deleteItemActions(item)
        store.dispatch(action)
    }

    // storeChange = () => {
    //     this.setState(store.getState())
    // }

    async componentDidMount() {
        // const data = await getReduxList()
        const action = getTodoList()
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={this.props.handleChange}
                    />
                    <Button type="primary" onClick={this.handleClick}>增加</Button>
                    {this.props.inputValue}
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item=>(<List.Item onClick={()=>this.handleDeleteClick(item)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = changeInputActions(e.target.value)
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);
