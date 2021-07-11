import React, { Component } from 'react'

export default class othercard extends Component {
    render() {
        const { name, number } = this.props
        return (
            <div>
                <div className="row">
                    <p>{name}</p>
                </div>
                <div className="row" style={{ fontSize: 12, marginTop: -10}}>
                    <p style={{ fontWeight: 'bold', opacity: 0.5 }}>{number}</p> <p style={{ marginLeft: 6, opacity: 0.5 }}> points</p>
                </div>
            </div>
        )
    }
}
