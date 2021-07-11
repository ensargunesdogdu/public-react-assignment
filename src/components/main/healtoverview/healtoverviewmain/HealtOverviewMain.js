import React, { Component } from 'react'
import Lungs from '../../../../images/lungs.png';
import Heart from '../../../../images/heart.png';
import Blood from '../../../../images/blood.png';
import Pressure from '../../../../images/pressure.png';
import Gender from '../../../../images/gender.png';

export default class HealtOverviewMain extends Component {
    render() {
        return (
            <div>
                <div className="circle-item-lungs">
                    <img src={Lungs} />
                    <p className="number">65</p>
                    <p className="name">Lungs</p>
                </div>
                <div className="circle-item-heart">
                    <img src={Heart} />
                    <p className="number">95</p>
                    <p className="name">Heart</p>
                </div>
                <div className="circle-item-blood">
                    <img src={Blood} />
                    <p className="number">87</p>
                    <p className="name">Blood</p>
                </div>
                <div className="circle-item-pressure">
                    <img src={Pressure} />
                    <p className="number">49</p>
                    <p className="name">Pressure</p>
                    <div className="pressure-error-circle"><p>!</p></div>
                </div>
                <div className="circle-item-gender">
                    <img src={Gender} />
                    <div className="gender-add-circle"><p>+</p></div>
                </div>
                <div className="first-circle">
                    <p>77</p>
                    <p>Good</p>
                </div>
                <div className="second-circle"></div>
                <div className="third-circle"></div>
                <div className="fourth-circle">

                    <div className="circle-item-four">
                        <div className="item-circle"></div>
                        <p></p>
                        <p></p>
                    </div>


                </div>
            </div>
        )
    }
}
