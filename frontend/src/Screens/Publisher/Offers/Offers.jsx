import { useState } from "react"

const Offers = () => {

    let offers = [
        {Ad:'URL Shortener', AdID: 1232142, format: 'Image', type:'Pop up', offer:'N$ 4000', date:'12/03/2023'},
        {Ad:'URL Shortener', AdID: 1232143, format: 'Image', type:'Top banner', offer:'N$ 4000', date:'12/03/2023'},
        {Ad:'URL Shortener', AdID: 4632342, format: 'Image', type:'Top banner', offer:'N$ 4000', date:'12/03/2023'},
        {Ad:'URL Shortener', AdID: 2432142, format: 'Image', type:'Left Banner', offer:'N$ 4000', date:'12/03/2023'},
    ]

    console.log(offers)

    const acceptOffer = (offerID) => {
        console.log(`Offer ${offerID} accepted`)
    }

    const rejectOffer = (offerID) => {
        console.log(`Offer ${offerID} rejected`)
    }

    return(
        <div>
            <h1>Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Format</th>
                        <th>Type</th>
                        <th>Offer</th>
                        <th>Date</th>
                        <th>Accept/Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer) =>(
                        <tr key={offer.AdID}>
                            <td>{offer.Ad}</td>
                            <td>{offer.format}</td>
                            <td>{offer.type}</td>
                            <td>{offer.offer}</td>
                            <td>{offer.date}</td>
                            <td>
                                <button className="button" onClick={() => acceptOffer(offer.AdID)}>Accept</button>
                                <button className="button" onClick={() => rejectOffer(offer.AdID)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Offers