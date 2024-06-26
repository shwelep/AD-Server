import React from 'react';

// Define the function to generate the ad tag based on the adId
const generateAdTag = (adId) => {
  // Construct the ad tag string with dynamic adId
  return `
    <div>
      <script src="https://example.com/ad.js?adId=${adId}"></script>
      <textarea readOnly rows={4} cols={50} value={\`
        <script src="https://example.com/ad.js?adId=${adId}">
        </script>
      \`} />
    </div>
  `;
};

const AdInventory = () => {

    let adInventory = [

        { AdName: 'URL Shortener', AdID: 1232142, format: 'Image', type: 'Pop up', size: '400 x 300', availableSlots: 13 },

        { AdName: 'Research AI', AdID: 1232143, format: 'Image', type: 'Top banner', size: '1000 x 400', availableSlots: 7 },

        { AdName: 'Quil bot', AdID: 4632342, format: 'Image', type: 'Interstitial', size: 'Full Screen', availableSlots: 3 },

        { AdName: 'Book keep', AdID: 2432142, format: 'Video', type: 'Left Banner', size: '720p', availableSlots: 10 },

    ];

  const placementIds = {
    sidebarBanner: 'abc123',
    topBanner: 'def456',
    footerAd: 'ghi789',
  };

  // Function to handle generating and downloading ad tag
  const handleGenerateAdTag = (adId) => {
    const adTag = generateAdTag(adId); // Generate the ad tag string
    const blob = new Blob([adTag], { type: 'text/plain' }); // Create a Blob object

    // Use URL.createObjectURL instead of appending to body
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ad_tag_${adId}.txt`); // Set download attribute

    // Trigger the download programmatically (no need to append to body)
    link.click();

    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(url);
  };

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
              <td>
                <button
                  style={{ width: 150 }}
                  className="button"
                  onClick={() => handleGenerateAdTag(ad.AdID)}
                >
                  Generate Ad Tag
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdInventory;
