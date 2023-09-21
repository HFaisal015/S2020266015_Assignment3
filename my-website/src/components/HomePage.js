import React from 'react'
import Navbar from './Navbar'
function HomePage() {
  return (
    <div>
      

    <Navbar/>
    <div className="home">
    <h1>Welcome to My Website</h1>
    <p>
      I am Muhammad Rizwan, an expert in various skills, and my profession is XYZ. I admire leaders and mentors in my field, and my hobbies include ABC.
    </p>
    {/* Add additional content */}
  




   {/*  PersonalitiesPage  */}
<div>

<h1>Favorite Personalities</h1>
<div className="personality">
  <img src="rizubhai.jpg" alt="Personality 1" />
  <div className="personality-info">
    <h2>Personality 1</h2>
    <p>Introduction about Personality 1.</p>
  </div>
</div>
<div className="personality">
  <img src="rizubhai.jpg" alt="Personality 2" />
  <div className="personality-info">
    <h2>Personality 2</h2>
    <p>Introduction about Personality 2.</p>
  </div>
</div>
{/* Add more personalities */}
</div>


    </div>
{/* Cities Page */}


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


<div>

</div>

{/* Cities Page */}
<div>

</div>

<div className="contact">
<h1>Contact Information</h1>
<form>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" />
  </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" />
  </div>
  <div className="form-group">
    <label>Contact Number:</label>
    <input type="tel" />
  </div>
  <button type="submit">Submit</button>
</form>
</div>

</div>


   
  )


}

export default HomePage

