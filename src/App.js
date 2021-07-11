import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import HealtOverview from './components/main/healtoverview/HealtOverview';
import SyncCard from './components/main/rightmid/SyncCard';
import ConsultationsCard from './components/main/rightmid/ConsultationsCard';
import Doctor from './images/drdjones.png'

function App() {
  return (
    <div className="container">
      <div className="row" style={{ 'height': '80%' }}>
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <div className="row" style={{ height: 140 }}>
            <div className="col-lg-9">
              <div className="row" style={{ flexWrap: 'unset', marginTop: 50 }}>
                <i className="fa fa-search fa-1x" aria-hidden="true" ></i>
                <input type="text" className="form-control" placeholder="Enter your search request" />
                <div className="icons">
                  <div className="notification">
                    <p>1</p>
                  </div>
                  <div className="circle">
                    <i className="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="option">
                    <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="get-consultant">
                <p>Get Consultant</p>
                <img src={Doctor} />

              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-9">
              <HealtOverview />
            </div>
            <div className="col-lg-3">
              <div className="row">
                <SyncCard />
              </div>
              <div className="row" style={{ width: 224, margin: 'auto', marginTop: 70 }}>
                <ConsultationsCard />
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 66, marginBottom: 56 }}>
            <div className="col-lg-3">
              <p style={{ marginLeft: 27, fontSize: 24, fontWeight: 'bold' }}>Prescribed Examinations and Medications</p>
            </div>
            <div className="col-lg-3">
              <div className="today-card">
                <div className="title">
                  <p>TODAY</p>
                </div>
                <div className="name">
                  <p>Black MRI</p>
                </div>
                <div className="address">
                  <p> Park Lane 25, Royal Clinic</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="aug-card">
                <div className="title">
                  <p>21 AUG</p>
                </div>
                <div className="name">
                  <p>General exam</p>
                </div>
                <div className="address">
                  <p> Baker st. 21, Dr. Watson</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="oct-card">
                <div className="title">
                  <p>25 OCT</p>
                </div>
                <div className="name">
                  <p>Nervous system</p>
                </div>
                <div className="address">
                  <p> Park Lane 25, Royal Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
