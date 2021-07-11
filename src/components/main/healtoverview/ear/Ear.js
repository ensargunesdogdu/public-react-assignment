import React, { Component } from 'react';
import EarImage from '../../../../images/ear.png';

export default class Ear extends Component {
    render() {
        return (
            <div>
                <div className="circle-item-ear">
                    <img src={EarImage} />
                    <div className="ear-add-circle"><p>+</p></div>
                </div>
            </div>
        )
    }
}
