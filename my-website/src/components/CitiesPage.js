// CitiesPage.js
import React from 'react';
import './CitiesPage.css'; // Create CitiesPage.css for styling
import Navbar from './Navbar';
function CitiesPage() {
  return (


<>
<Navbar />


    <div className="cities">
    <h1>Favorite Cities</h1>
    <div className="city">
      <img src="lahore.jpg" alt="City 1" />
      <div className="city-info">
        <h2>City 1</h2>
        <p>Introduction about City 1.</p>
      </div>
    </div>
    <div className="city">
      <img src="lahore.jpg" alt="City 2" />
      <div className="city-info">
        <h2>City 2</h2>
        <p>Introduction about City 2.</p>
      </div>
    </div>
    </div>
    </>
    )
}

export default CitiesPage
