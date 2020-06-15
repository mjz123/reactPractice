import React from 'react'
import Son from "./son";
import PropTypes from 'prop-types'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: ['1','2']
        }
    }

    inputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    addList(){
        this.setState({
            list: [...this.state.list, this.state.value]
        })
    }

    deleteItem = (value) =>{
        this.setState(state => ({
            list: state.list.filter(item => {
                return item !== value
            })
        }))
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.value} onChange={this.inputChange}/>
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul className='list'>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                // <li
                                //     key={index}
                                //     onClick={this.deleteItem.bind(this,item)}
                                // >
                                //     {item}
                                // </li>
                                <Son
                                    content={item}
                                    key={index}
                                    deleteItem={(e)=>this.deleteItem(item,e)}>
                                </Son>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

App.propTypes={
    content: PropTypes.string,
    deleteItem: PropTypes.func
}

export default App
