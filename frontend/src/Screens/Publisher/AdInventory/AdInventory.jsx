const AdInventory = () => {
    let adInventory = [
        { AdName: 'URL Shortener', AdID: 1232142, format: 'Image', type: 'Pop up', size: '400 x 300', availableSlots: 13 },
        { AdName: 'Research AI', AdID: 1232143, format: 'Image', type: 'Top banner', size: '1000 x 400', availableSlots: 7 },
        { AdName: 'Quil bot', AdID: 4632342, format: 'Image', type: 'Interstitial', size: 'Full Screen', availableSlots: 3 },
        { AdName: 'Book keep', AdID: 2432142, format: 'Video', type: 'Left Banner', size: '720p', availableSlots: 10 },
    ]

    const generateAdTag = (id) => {
        const adItem = adInventory.find(item => item.AdID === id)
        if (adItem) {
            const adTag = `<script type="text/javascript" src="http://localhost:3001/ad?placement=${id}"`
            alert(`Ad Tag for ${adItem.AdName}:\n\nn${adTag}`)
        }
    }

    return (
        <div>
            <h1>Ad inventory</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Format</th>
                        <th>Size</th>
                        <th>Type</th>
                        <th>Available slots</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {adInventory.map((ad) => (
                        <tr key={ad.AdID}>
                            <td>{ad.AdName}</td>
                            <td>{ad.format}</td>
                            <td>{ad.size}</td>
                            <td>{ad.type}</td>
                            <td>{ad.availableSlots}</td>
                            <td><button style={{width:150}} className="button" onClick={() => generateAdTag(ad.AdID)}>Generate Ad Tag</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdInventory