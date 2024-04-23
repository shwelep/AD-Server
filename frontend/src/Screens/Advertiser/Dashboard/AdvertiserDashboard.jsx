import { useState } from "react";
import ImpressionsLineGraph from '../../../Components/ImpressionsLineGraph';

const AdvertiserDashboard = () => {

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
        <div className="container">
            <lineChart />

            <h1>Campaigns </h1>
            <div className="row">
                <div className="col-md-4 col-lg-3 col-xl-3 col-sm-12 stats">
                    <h4>Running Campaigns</h4>
                    <p>102</p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 col-sm-12 stats">
                    <h4>Clicks</h4>
                    <p>40</p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 col-sm-12 stats">
                    <h4>Money Spent</h4>
                    <p>$24K</p>
                </div>
            </div>
            <div className="row graph-container">
                <div className="col-lg-11 graphs">
                    <ImpressionsLineGraph />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-6 col-xl-5 col-sm-12 stats">
                    <h4>Running Campaigns</h4>
                    <p>102</p>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-5 col-sm-12 stats">
                    <h4>Clicks</h4>
                    <p>40</p>
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
                    {campaigns.map((campaign, index) => (
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
                                    <button className="button" onClick={() => stopCampaign(campaign.Campaign)}>Stop</button>
                                ) : (
                                    <button className="button" disabled>Stopped</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdvertiserDashboard