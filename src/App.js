import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "lib-flexible"
import './style/geoponics/index.scss'
import ReactDOM from "react-dom";
import Pic from './assets/img/header.png';
import RankingItem from "./components/geoponics/rankingItem";


class App extends Component {
    render() {
        return (
            <div className="mainBox">
                <div className='topDiv'>
                    <img className='topPic' src={Pic} alt=''/>
                </div>

                <div className="content">
                    <div className="cList">
                         - 回流排行榜 -
                    </div>

                    <RankingItem></RankingItem>
                </div>
            </div>
        );
    }
}

App.propTypes = {};

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
