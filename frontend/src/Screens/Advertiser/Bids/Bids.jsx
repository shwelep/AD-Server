import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './bids.css'; 

const Bids = () => {
    const [bidHistory, setBidHistory] = useState([
        {
            Channel: 'John Sports',
            Offer: 'N$ 4k',
            Status: 'Accepted',
            Date: '12/03/2023'
        },
        {
            Channel: 'John Sports',
            Offer: 'N$ 4k',
            Status: 'Accepted',
            Date: '12/03/2023'
        },
        {
            Channel: 'Bet 365',
            Offer: 'N$ 10k',
            Status: 'Rejected',
            Date: '12/09/2023'
        },
        {
            Channel: 'Bet 365',
            Offer: 'N$ 10k',
            Status: 'Rejected',
            Date: '12/09/2023'
        }
    ]);

    const [currentBids, setCurrentBids] = useState([
        {
            Channel: 'John Sports',
            Offer: 'N$ 4k',
            Status: 'Ongoing',
            Date: '12/03/2023'
        },
        {
            Channel: 'John Sports',
            Offer: 'N$ 4k',
            Status: 'Accepted',
            Date: '12/03/2023'
        }
    ]);

    return (
        <div>
            <h1>Bids</h1>
            <div>
                <h2>Bid history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Channel</th>
                            <th>Offer</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bidHistory.map((bid, index) => (
                            <tr key={index}>
                                <td>{bid.Channel}</td>
                                <td>{bid.Offer}</td>
                                <td>{bid.Status}</td>
                                <td>{bid.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Current bids</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Channel</th>
                            <th>Offer</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBids.map((bid, index) => (
                            <tr key={index}>
                                <td>{bid.Channel}</td>
                                <td>{bid.Offer}</td>
                                <td>{bid.Status}</td>
                                <td>{bid.Date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bids;
