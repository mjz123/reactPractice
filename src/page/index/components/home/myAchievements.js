import React, {Component} from 'react';
import '../../../../style/index/myAchievements.scss'
import {findMonthAverageNetIncome} from "../../../../api/home";

class MyAchievements extends Component {
    constructor() {
        super();
        this.state = {
            achievementsObj: {}
        }
    }

    async componentDidMount(){
        this.setState({
            achievementsObj: await findMonthAverageNetIncome()
        })
    }


    render() {
        return (
            <div className="myAchievements">
                <div className="title">我的绩效</div>

                <div className="content">
                    <div className="box">
                        <p>业务净收入</p>
                        <p>0元/100元</p>
                        <div className="progress">
                            <img src={require('../../../../assets/img/home/line.png')} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MyAchievements;
