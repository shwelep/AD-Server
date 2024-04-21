import { Link, useLocation } from "react-router-dom";
import '../sidebar/sidebar.css'

const SideBar = () => {
    const location = useLocation()

    return (
        <div className="sidebar">
            <h1 className="ad-boost">AD Boost</h1>
            <ul>
                <li className={location.pathname === '/' ? 'active': ''}><Link to='/'>Dashboard</Link></li>
                <li className={location.pathname === '/offers' ? 'active': ''}><Link to='/offers'>Offers</Link></li>
                <li className={location.pathname === '/ad-inventory' ? 'active': ''}><Link to='/ad-inventory'>Ad Inventory</Link></li>
            </ul>
        </div>
    )
}

export default SideBar;