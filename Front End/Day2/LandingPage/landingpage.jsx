import React from 'react';
import './landingpage.css';
import {Link} from 'react-router-dom';
function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <a href="#" className="logo">NIIT<b> PVT LTD</b></a>
          <ul className="links">
            <Link to = '/'><li>Home</li></Link>
            
           <Link to = '/login'><li>AdminLogin</li></Link> 
            <Link to = '/staffsign'><li>StaffLogin</li></Link>
            <Link to = '/userlog'><li>UserLogin</li></Link>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <div className="info">
            <h1> Searching For Courses !</h1>
            <p> Then you are at the right platform! We are here to give you many course with certificate.</p>
           
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="landing page image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
