import React, {Component} from 'react';

class Son extends Component {
    handleClick = () => {
        this.props.deleteItem()
    }

    render() {
        return (
                <li onClick={this.handleClick}>
                    {this.props.content}
                </li>
        );
    }
}

export default Son;
