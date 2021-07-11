import React, { Component } from 'react'
import Vision from '../../../../images/vision.png'

export default class VisionCart extends Component {
    render() {
        return (
            <div className="vision-cart">
                <div className="vision-image">
                    <img src={Vision}></img>
                    <div className="number">88</div>
                    <div className="name">Vision</div>
                </div>
                <div className="vision-main">
                    <p>Exellent! One of the best result!</p>
                </div>
                <div className="vision-footer">
                    <div className="cart-button">
                        <p>More</p>
                    </div>
                </div>
            </div>
        )
    }
}
