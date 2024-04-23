import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Campaigns = () => {
    const [formData, setFormData] = useState({
        // Form data
        adName: '',
        adDuration: '',
        selectDate: '',
        adType: 'display',
        campaign: '',
        geography: '',
        selectChannel: '',
        adFrequency: '',
        adPlacement: '',
        timing: '',
        fileType: 'image',
        fileUpload: '',
        fileAltText: '',
        offer: '',
        offerPerImpression: ''
        
    });

    // useEffect(() => {
        
    //     async function fetchCampaigns() {
    //         try {
    //             const response = await axios.get('/api/campaigns');
    //             setCampaigns(response.data);
    //         } catch (error) {
    //             console.error('Error fetching campaigns:', error);
    //         }
    //     }

    const [formSubmissions, setFormSubmissions] = useState([]);

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Storing the file name in the form data
            setFormData(prevState => ({
                ...prevState,
                fileUpload: file.name
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // await axios.post(`/api/campaigns/${formData.adId}`, formData);
        setFormSubmissions(prevSubmissions => [...prevSubmissions, formData]);
        setFormData({
            // Reset form data after submission
            adName: '',
            adDuration: '',
            selectDate: '',
            adType: 'display',
            campaign: '',
            geography: '',
            selectChannel: '',
            adFrequency: '',
            adPlacement: '',
            timing: '',
            fileType: 'image',
            fileUpload: '',
            fileAltText: '',
            offer: '',
            offerPerImpression: '',
            
        });
    };


    return (
        <div>
            <h3>Create a new campaign 📣</h3>

            <div className="form-title" style={{ backgroundColor: '#8D699A', color: 'white', padding: '10px', marginBottom: '20px' }}>
                <h4>Campaign</h4>
            </div>

            <form>
                {/* Campaign Section */}
                <div className="mb-3">
                    <label htmlFor="adName" className="form-label" style={{ fontWeight: 'bold' }}>Ad Name</label>
                    <input type="text" className="form-control" id="adName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="adDuration" className="form-label" style={{ fontWeight: 'bold' }}>Ad Duration</label>
                    <input type="text" className="form-control" id="adDuration" />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectDate" className="form-label" style={{ fontWeight: 'bold' }}>Select Date</label>
                    <input type="date" className="form-control" id="selectDate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="adType" className="form-label" style={{ fontWeight: 'bold' }}>Campaign</label>
                    <select className="form-select" id="adType">
                        <option value="campaign1">Games</option>
                        <option value="campaign2">Stationary</option>
                        <option value="campaign3">Transport Services</option>
                        <option value="campaign4">Fasion</option>
                        <option value="campaign5">Furniture</option>
                        <option value="campaign6">Sports/Gym</option>
                        <option value="campaign7">Technology</option>
                        <option value="campaign8">Travel</option>
                        <option value="campaign9">Other</option>
                        
                    </select>
                </div>
                
               

                 {/* Targeting Section */}
                 <div className="form-section" style={{ backgroundColor: '#8D699A', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Targeting</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="geography" className="form-label" style={{ fontWeight: 'bold' }}>Geography/Location</label>
                    <input type="text" className="form-control" id="geography" />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectChannel" className="form-label" style={{ fontWeight: 'bold' }}>Select Channel(s)</label>
                    <select className="form-select" id="selectChannel">
                        <option value="channel1">Channel 1</option>
                        <option value="channel1">Channel 2</option>
                        <option value="channel1">Channel 3</option>
                        <option value="channel1">Channel 4</option>
                        <option value="channel1">Channel 5</option>
                        <option value="channel1">Channel 6</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="adFrequency" className="form-label" style={{ fontWeight: 'bold' }}>Ad Frequency</label>
                    <input type="text" className="form-control" id="adFrequency" />
                </div>
                <div className="mb-3">
                    <label htmlFor="adPlacement" className="form-label" style={{ fontWeight: 'bold' }}>Ad Placement</label>
                    <input type="text" className="form-control" id="adPlacement" />
                </div>
                <div className="mb-3">
                    <label htmlFor="timing" className="form-label" style={{ fontWeight: 'bold' }}>Timing</label>
                    <input type="text" className="form-control" id="timing" />
                </div>

                {/* Creative Section */}
                <div className="form-section" style={{ backgroundColor: '#8D699A', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Creative</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="creativeType" className="form-label" style={{ fontWeight: 'bold' }}>Type</label>
                    <select className="form-select" id="creativeType" onChange={handleChange} value={formData.fileType}>
                        <option value="image">Image</option>
                        <option value="banner">Banner</option>
                        <option value="video">Short Video</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="fileUpload" className="form-label" style={{ fontWeight: 'bold' }}>Select File</label>
                    <input type="file" className="form-control" id="fileUpload" onChange={handleFileUpload} accept="image/*" />
                </div>
                <div className="mb-3">
                    <label htmlFor="fileAltText" className="form-label" style={{ fontWeight: 'bold' }}>Alt Text</label>
                    <input type="text" className="form-control" id="fileAltText" value={formData.fileAltText} onChange={handleChange} />
                </div>

                {/* Finance Section */}
                <div className="form-section" style={{ backgroundColor: '#8D699A', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Finance</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="offer" className="form-label" style={{ fontWeight: 'bold' }}>Offer</label>
                    <input type="text" className="form-control" id="offer" value={formData.offer} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="offerPerImpression" className="form-label" style={{ fontWeight: 'bold' }}>Offer per Impression</label>
                    <input type="text" className="form-control" id="offerPerImpression" value={formData.offerPerImpression} onChange={handleChange} />
                </div>
                




                <button style={{ backgroundColor: '#111129' }} type="submit" className="btn btn-primary">Create Campaign</button>
            </form>

        
        </div>
    );
}

export default Campaigns;
