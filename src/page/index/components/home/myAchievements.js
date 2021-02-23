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
        const width = this.state.achievementsObj.currentValue/this.state.achievementsObj.targetValue*100 + '%'

        return (
            <div className="myAchievements">
                <div className="title">我的绩效</div>

                <div className="content">
                    <div className="box">
                        <p>业务净收入
                            {this.state.achievementsObj.excess === '1' && <span className="ce">超额完成</span>}
                        </p>
                        <p>{this.state.achievementsObj.currentValue}元/{this.state.achievementsObj.targetValue}元</p>
                        <div className="progress">
                            <img src={require('../../../../assets/img/home/line.png')} style={{'width': width}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAchievements;
