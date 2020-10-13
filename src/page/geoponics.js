import React, {Component} from 'react';
import Pic from "../assets/img/header.png";
import RankingItem from "../components/geoponics/rankingItem";
import FootBox from "../components/geoponics/footBox";
import '../style/geoponics/index.scss'

class Geoponics extends Component {
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
                <FootBox></FootBox>
            </div>
        );
    }
}

export default Geoponics;
