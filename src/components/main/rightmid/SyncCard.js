import React, { Component } from 'react'
import SyncImage from '../../../images/right-image.png';

export default class SyncCard extends Component {
    render() {
        return (
            <div className="sync-card">
                <img src={SyncImage} />
                <p style={{ width: 144, marginLeft: 38, marginTop: 20, fontSize: 15, fontWeight: 'bold' }}>Sync with your medical record</p>
                <p style={{ width: 130, fontSize: 12, marginLeft: 46, marginTop: -5 }}>Keep your doctor informed about the condition</p>
                <div className="sync-button">
                    <p>Sync</p>
                </div>
            </div>
        )
    }
}
