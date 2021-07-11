import React, { Component } from 'react';
import Navi from './navigation/Navi';
import NaviBottom from './navigation/NaviBottom';
import Profile from './profile/Profile';

export default class sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="top">
                    <Profile />
                </div>
                <div className="main">
                    <Navi />
                </div>
                <div className="bottom">
                    <NaviBottom />
                </div>
            </div>
        )
    }
}
