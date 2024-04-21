import './App.css';
import './Assets/css/styles.css'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Dashboard from './Screens/Publisher/Dashboard/Dashboard';
import Offers from './Screens/Publisher/Offers/Offers';
import AdInventory from './Screens/Publisher/AdInventory/AdInventory';
import SideBar from './Components/sidebar/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Assets/css/styles.css'
import Campaigns from './Screens/Advertiser/Campaigns/Campaigns';
import Bids from './Screens/Advertiser/Bids/Bids';
import Creatives from './Screens/Advertiser/Creatives/Creatives';
import AdvertiserDashboard from './Screens/Advertiser/Dashboard/AdvertiserDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='container2 light-grey-background'>
        <SideBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/ad-inventory' element={<AdInventory />} />
            <Route path='/campaigns' element={<Campaigns />} /> 
            <Route path='/bids' element={<Bids />} /> 
            <Route path='/creatives' element={<Creatives />} /> 
            <Route path='/advertiser-dashboard' element={<AdvertiserDashboard/>}/>
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
