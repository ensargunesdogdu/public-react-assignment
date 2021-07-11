import React, { Component } from 'react'
import BrainImage from '../../../../images/brain.png'

export default class brain extends Component {
    render() {
        return (
            <div>
                <div className="circle-item-brain">
                    <img src={BrainImage} />
                    <div className="brain-add-circle"><p>+</p></div>
                </div>
            </div>
        )
    }
}
