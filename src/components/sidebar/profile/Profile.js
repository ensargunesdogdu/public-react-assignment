import React, { Component } from 'react'
import ImageMan from '../../../images/user_avatar_man.png'

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="avatar">
                    <img src={ImageMan} />
                    <div className="notification">1</div>
                </div>
                <div className="name">
                    <p>Bill Terner</p>
                </div>
                <div className="family">
                    <p>Family</p>
                    <div className="row">
                        <img src={ImageMan} />
                        <img src={ImageMan} />
                        <img src={ImageMan} />
                    </div>
                </div>
            </div>
        )
    }
}
