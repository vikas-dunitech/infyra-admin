import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import UserDetails from './pages/user/UserDetails';
import Login from './pages/auth/Login';
import SellNode from './pages/sell-node/SellNode';
import ReferralReport from './pages/referral/ReferralReport';
import ETH from './pages/eth/ETH';
import ActiveNodes from './pages/active-nodes/ActiveNodes';
import AddTier from './pages/tier/AddTier';
import TierDetails from './pages/tier/TierDetails';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/" element={<Login />} />
          <Route path='/sell-node' element={<SellNode/>}/>
          <Route path='/referral' element={<ReferralReport/>}/>
          <Route path='/eth' element={<ETH/>}/>
          <Route path='/active-nodes' element={<ActiveNodes/>}/>
          <Route path='/eth' element={<ETH/>}/>
          <Route path='/add-tier' element={<AddTier/>}/>
          <Route path='/tier-details' element={<TierDetails/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
