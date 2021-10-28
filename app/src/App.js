import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Campaigns from './Campaigns';
import './App.css';

function App() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then(res => setCampaigns(res.data.campaigns))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <Campaigns campaigns={campaigns}/>
    </div>
  );
}

export default App;
