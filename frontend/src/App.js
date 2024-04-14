import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Dashboard from './Screens/Publisher/Dashboard/Dashboard';
import AdSpaceManagement from './Screens/Publisher/AdSpaceManagement/AdSpaceManagement';
import Offers from './Screens/Publisher/Offers/Offers';
import AdInventory from './Screens/Publisher/AdInventory/AdInventory';
import SideBar from './Components/sidebar/sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <SideBar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/ad-space-management' element={<AdSpaceManagement />} />
            <Route path='/ad-inventory' element={<AdInventory />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
