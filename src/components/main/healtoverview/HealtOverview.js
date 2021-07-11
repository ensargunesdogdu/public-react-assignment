import React, { Component } from 'react'
import HealtOverviewMain from './healtoverviewmain/HealtOverviewMain'
import VisionCart from './vision/VisionCart'
import Brain from './brain/Brain'
import Ear from './ear/Ear'
import OtherCard from './other/OtherCard'

export default class HealtOverview extends Component {
    render() {
        return (
            <div className="healtOverview">
                <div className="hood">
                    <p>My health overview</p>
                </div>
                <div className="main">
                    <div className="row" style={{ "height": "400px" }}>
                        <div className="col-lg-3">
                            <div className="row" style={{ height: 150 }}>
                                <Brain />
                            </div>
                            <div className="row">
                                <VisionCart />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <HealtOverviewMain />
                        </div>
                        <div className="col-lg-3">
                            <Ear />
                        </div>
                    </div>
                </div>
                <div className="line-d"></div>
                <div className="lastItems">
                    <div className="row" style={{ paddingLeft: 50, paddingRight: 50, height: 120, paddingTop: 35 }}>
                        <div className="col-lg-3">
                            <p style={{ opacity: 0.5, fontSize: 13 }}>OTHER</p></div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2" style={{ paddingLeft: 27 }}>
                            <OtherCard name={'Lusia Terner'} number={97} />
                        </div>
                        <div className="col-lg-1" style={{ paddingTop: 27 }}>
                            <div className="line"></div>
                        </div>
                        <div className="col-lg-2" style={{ paddingLeft: 27 }}>
                            <OtherCard name={'David Terner'} number={91} />
                        </div>
                        <div className="col-lg-1" style={{ paddingTop: 27 }}>
                            <div className="line"></div>
                        </div>
                        <div className="col-lg-2" style={{ paddingLeft: 27 }}>
                            <OtherCard name={'Kent Terner'} number={91} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
