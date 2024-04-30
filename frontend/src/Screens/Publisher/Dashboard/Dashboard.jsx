import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineGraph from '../../../Components/lineChart';
import AdEngagementBarGraph from '../../../Components/AdEngagements';

const Dashboard = () => {

    return (
        <div className="">
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 stats">
                    <h4>Revenue</h4>
                    <p>N$ 23435</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 stats">
                    <h4>Offers</h4>
                    <p>12</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-10 stats">
                    <h4>CTR</h4>
                    <p>321</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-5 col-lg-5 graphContaine graphs'>
                    <LineGraph />
                    
                    
                </div>
                <div className='col-xl-5 col-lg-5 graphContainer graphs'>
                    <AdEngagementBarGraph />
                </div>
            </div>
            <lineChart />
        </div>
    );
};

export default Dashboard;
