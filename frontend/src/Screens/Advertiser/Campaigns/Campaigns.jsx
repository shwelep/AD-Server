import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Campaigns = () => {
    const [publishersData, setPublisher] = useState([])
    const [formData, setFormData] = useState({
        // Form data
        adName: '',
        adDuration: '',
        adType: 'display',
        geography: '',
        selectChannel: '',
        adPlacement: '',
        timing: '',
        fileType: 'image',
        fileUpload: '',
        fileAltText: '',
        offerPerImpression: '',
        interests: '',
        exclusion: ''

    });

    const options = [
        "Arts and Crafts",
        "Culinary",
        "Fashion",
        "Fitness",
        "Gaming",
        "Personal Development",
        "Sports",
        "Technology",
        "Travel",
        "Vehicles"
    ];

    useEffect(() => {
        fetch('http://localhost:3002/user/get-users')
            .then(response => response.json())
            .then(data => {
                setPublisher(data)
            })
            .catch(error => console.error('Error: ', error))
    }, [])

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

    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         // Storing the file name in the form data
    //         setFormData(prevState => ({
    //             ...prevState,
    //             fileUpload: file.name
    //         }));
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/api/campaigns/${formData.adId}`, formData);
            console.log('Campaign created:', response.data);
            setFormSubmissions(prevSubmissions => [...prevSubmissions, formData]);
            setFormData({
                adName: '',
                adDuration: '',
                adType: 'display',
                geography: '',
                selectChannel: '',
                adPlacement: '',
                timing: '',
                fileType: 'image',
                fileUpload: '',
                fileAltText: '',
                offerPerImpression: '',
                interests: '',
                exclusion: ''
            });
        } catch (error) {
            console.error('Error creating campaign:', error);
        }
    };

    return (
        <div>
            <h3>Create a new campaign 📣</h3>

            <div className="form-title" style={{ backgroundColor: '#111129', color: 'white', padding: '10px', marginBottom: '20px' }}>
                <h4>Campaign</h4>
            </div>

            <form>
                {/* Campaign Section */}
                <div className="mb-3">
                    <label htmlFor="adName" className="form-label" style={{ fontWeight: 'bold' }}>Ad Name</label>
                    <input type="text" className="form-control" id="adName" value={formData.adName} onChange={handleChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="adDuration" className="form-label" style={{ fontWeight: 'bold' }}>Ad Duration</label>
                    <input type="text" className="form-control" id="adDuration" value={formData.adDuration} onChange={handleChange} />
                </div>

                {/* Targeting Section */}
                <div className="form-section" style={{ backgroundColor: '#111129', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Targeting</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="geography" className="form-label" style={{ fontWeight: 'bold' }}>Geography/Location</label>
                    <input type="text" className="form-control" id="geography" value={formData.geography} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="interests" className="form-label" style={{ fontWeight: 'bold' }}>Interests</label>
                    <select className="form-select" id="interests" value={formData.interests} onChange={handleChange}>
                        {options.sort().map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="timing" className="form-label" style={{ fontWeight: 'bold' }}>Time to show ad</label>
                    <input type="text" className="form-control" id="timing" value={formData.timing} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectChannel" className="form-label" style={{ fontWeight: 'bold' }}>Select Publisher(s)</label>
                    <select className="form-select" id="selectChannel" value={formData.selectChannel} onChange={handleChange}>
                        {publishersData.map((user) => (
                            <option key={user.id} value={user.id}>{user.UserName}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="adPlacement" className="form-label" style={{ fontWeight: 'bold' }}>Ad Placement</label>
                    <input type="text" className="form-control" id="adPlacement" value={formData.adPlacement} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="adExclusion" className="form-label" style={{ fontWeight: 'bold' }}>Ad Exclusion</label>
                    <input type="text" className="form-control" id="adExclusion" value={formData.exclusion} onChange={handleChange} />
                </div>

                {/* Creative Section */}
                <div className="form-section" style={{ backgroundColor: '#111129', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Creative</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="creativeType" className="form-label" style={{ fontWeight: 'bold' }}>Type</label>
                    <select className="form-select" id="creativeType" value={formData.creativeType} onChange={handleChange}>
                        <option value="image">Image</option>
                        <option value="banner">Banner</option>
                        <option value="video">Short Video</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="fileUpload" className="form-label" style={{ fontWeight: 'bold' }}>Select File</label>
                    <input type="file" className="form-control" id="fileUpload" value={formData.fileUpload} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fileAltText" className="form-label" style={{ fontWeight: 'bold' }}>Alt Text</label>
                    <input type="text" className="form-control" id="fileAltText" value={formData.fileAltText} onChange={handleChange} />
                </div>

                {/* Finance Section */}
                <div className="form-section" style={{ backgroundColor: '#111129', color: 'white', padding: '10px', marginBottom: '20px' }}>
                    <h4>Finance</h4>
                </div>
                <div className="mb-3">
                    <label htmlFor="offerPerImpression" className="form-label" style={{ fontWeight: 'bold' }}>Offer per Impression</label>
                    <input type="text" className="form-control" id="offerPerImpression" value={formData.offerPerImpression} onChange={handleChange} />
                </div>
                <button style={{ backgroundColor: '#111129' }} type="submit" className="btn btn-primary" onClick={handleSubmit}>Create Campaign</button>
            </form>
        </div>
    );
}

export default Campaigns;
