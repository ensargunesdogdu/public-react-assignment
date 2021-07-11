import React, { Component } from 'react'
import PlayImage from '../../../images/play-image.png';
export default class ConsultationItem extends Component {
    render() {
        const { image, name, time } = this.props;
        return (
            <div className="row">
                <div className="col-lg-2">
                    <img src={require('../../../images/' + image + '').default} />
                </div>
                <div className="col-lg-8">
                    <p>{name}</p>
                    <p>{time}</p>
                </div>
                <div className="col-lg-2" style={{ marginLeft: -21 }}>
                    <img src={PlayImage} />
                </div>
            </div>
        )
    }
}
