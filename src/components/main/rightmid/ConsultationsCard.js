import React, { Component } from 'react'
import ConsultationItem from './ConsultationItem';


export default class ConsultationsCard extends Component {
    render() {
        const doctors = [{
            id: 1,
            image: 'drhornby.png',
            name: 'Dr. Hornby',
            time: '21:15'
        }, {
            id: 2,
            image: 'drdjones.png',
            name: 'Dr. Djones',
            time: '43:15'
        }]
        return (
            <div className="consoltations">
                <div className="head row">
                    <p style={{ position: 'absolute', left: 45, fontWeight: 'bold' }}>Consultations</p>
                    <p style={{ position: 'absolute', right: 47, fontSize: 13, color: '#fe753f' }}>All</p>
                </div>
                <div className="content">
                    {
                        doctors.map((doctor) => {
                            return <ConsultationItem key={doctor.id} name={doctor.name} image={doctor.image} time={doctor.time} />
                            //    return <div>{doctor.name}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
