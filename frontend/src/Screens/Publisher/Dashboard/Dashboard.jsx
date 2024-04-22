import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LineGraph from '../../../Components/lineChart';
import AdEngagementBarGraph from '../../../Components/AdEngagements';
import ImpressionsLineGraph from '../../../Components/ImpressionsLineGraph';

const Dashboard = () => {

    const [campaigns, setCampaigns] = useState([
        {
            Campaign: 'Campaign 1',
            Impressions: '20K',
            Clicks: 234,
            Leads: 8,
            Status: 'Running',
            DateStarted: '12/02/2023',
            DateStopped: 'Running',
            Budget: '$ 3123'
        },
        {
            Campaign: 'Campaign 2',
            Impressions: '2K',
            Clicks: 34,
            Leads: 2,
            Status: 'Running',
            DateStarted: '21/12/2023',
            DateStopped: 'Running',
            Budget: '$ 4000'
        },
        {
            Campaign: 'Campaign 3',
            Impressions: 93,
            Clicks: 4,
            Leads: 0,
            Status: 'Running',
            DateStarted: '05/01/2024',
            DateStopped: 'Running',
            Budget: '$ 1500'
        }
    ]);


    console.log(campaigns);

    const stopCampaign = (campaignName) => {
        console.log(`Campaign ${campaignName} stopped`);
    };

    return (
        <div className="">
            <h1>Dashboard</h1>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 stats">
                    <h4>Revenue</h4>
                    <p>N$ 23435</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 stats">
                    <h4>Offers</h4>
                    <p>12</p>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 stats">
                    <h4>CTR</h4>
                    <p>321</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10'>
                    <LineGraph />
                    
                    
                </div>
                <div className='col-md-10'>
                    <AdEngagementBarGraph />
                </div>
            </div>
            <lineChart />

            <h1>Campaigns </h1>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12 stats">
                    <h4>Running Campaigns</h4>
                    <p>102</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 stats">
                    <h4>Clicks</h4>
                    <p>40</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 stats">
                    <h4>Money Spent</h4>
                    <p>$24K</p>
                </div>
            </div>
            <div className="row graph-container">
                <div className="col-md-8">
                    <ImpressionsLineGraph />
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 stats">
                            <h4>Leads</h4>
                            <p>14</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 stats">
                            <h4>Conversions</h4>
                            <p>1K</p>
                        </div>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Campaign</th>
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>Leads</th>
                        <th>Status</th>
                        <th>Date Started</th>
                        <th>Date Stopped</th>
                        <th>Budget</th>
                        <th>Stop Campaign</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) =>(
                        <tr key={index}>
                            <td>{campaign.Campaign}</td>
                            <td>{campaign.Impressions}</td>
                            <td>{campaign.Clicks}</td>
                            <td>{campaign.Leads}</td>
                            <td>{campaign.Status}</td>
                            <td>{campaign.DateStarted}</td>
                            <td>{campaign.DateStopped}</td>
                            <td>{campaign.Budget}</td>
                            <td>
                                {campaign.Status === 'Running' ? (
                                    <button className="stopButton" onClick={() => stopCampaign(campaign.Campaign)}>Stop</button>
                                ) : (
                                    <button className="disabledButton" disabled>Stopped</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
