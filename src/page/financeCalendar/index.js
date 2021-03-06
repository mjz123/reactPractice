import React, {Component} from 'react';
import '../../style/financeCalendar/index.scss'
import ProductCalendar from './components/productCalendar'

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="financeCalendar">
                <div className="title">理财日历</div>

                <ProductCalendar/>
            </div>
        );
    }
}

export default Index;
