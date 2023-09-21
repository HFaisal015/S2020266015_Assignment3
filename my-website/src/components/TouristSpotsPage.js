// TouristSpotsPage.js
import React from 'react';
import './TouristSpotsPage.css'; // Create TouristSpotsPage.css for styling
import Navbar from './Navbar';

function TouristSpotsPage() {
  return (
    <div>
<Navbar />
      
    <div className="tourist-spots">
      <h1>Favorite Tourist Spots</h1>
      <div className="spot">
        <img src="spot1.jpg" alt="Tourist Spot 1" />
        <div className="spot-info">
          <h2>Tourist Spot 1</h2>
          <p>Introduction about Tourist Spot 1.</p>
        </div>
      </div>
      <div className="spot">
        <img src="spot2.jpg" alt="Tourist Spot 2" />
        <div className="spot-info">
          <h2>Tourist Spot 2</h2>
          <p>Introduction about Tourist Spot 2.</p>
        </div>
      </div>
      {/* Add more tourist spots */}
    </div>

    </div>
  )
}

export default TouristSpotsPage
