import React, {Component} from 'react';
import MyAchievements from '../index/components/home/myAchievements'
import '../../style/index/home.scss'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        const iconList = [{
            name: '晨会聚焦'
        },{
            name: '开户追踪'
        },{
            name: '打新日历'
        }]

        return (
            <div>
                <div className="functionIcon">
                    <ul>
                        {
                            iconList.map( (item,index) => {
                            return (
                                <li key={index}>{item.name}</li>
                            )})
                        }
                    </ul>

                </div>

                <div>
                    KPM
                    <div><Link to="/KPM">更多</Link></div>
                </div>

                <MyAchievements/>
            </div>
        );
    }
}

export default Home;
