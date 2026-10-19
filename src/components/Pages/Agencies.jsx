
import React from 'react';
import { Link } from 'react-router-dom';

import agencies1 from './../../assets/agencies-bg1.png';
import agencies2 from './../../assets/agencies-bg2.png';
import propertyimg from './../../assets/about-properties-2.jpg';

function Agencies() {
  const agencies = [
    {
      id: 1,
      name: 'Dream Homes Realty',
      location: 'Jaipur, Rajasthan',
      phone: '+91 98765 43210',
      email: 'dreamhomes@example.com',
      properties: 25,
      image: agencies1,
    },
    {
      id: 2,
      name: 'Prime Estate Agency',
      location: 'Luxury Property Specialists',
      phone: '+91 98765 12345',
      email: 'primeestate@example.com',
      properties: 18,
      image: agencies2,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp;
        <span className="text-muted">Agencies</span>
      </div>

      {/* Agencies Hero */}
      <section className="agencies-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="agencies-subtitle">
                FIND YOUR TRUSTED PARTNER
              </span>

              <h1 className="agencies-heading">
                Meet Our Real Estate Agencies
              </h1>

              <p className="agencies-description">
                Connect with experienced real estate professionals to
                discover your dream home and find the right property
                for your needs.
              </p>

              <Link to="/propertie" className="agencies-btn">
                Explore Properties
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="agencies-hero-image">
                <img
                  src={propertyimg}
                  alt="Beautiful real estate property"
                  className="img-fluid"
                />

                <img
                  src={agencies1}
                  alt=""
                  className="agencies-decoration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Listing */}
      <section className="agencies-listing py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="agencies-subtitle">OUR PROFESSIONALS</span>
            <h2 className="agencies-section-title">
              Featured Agencies
            </h2>
            <p className="text-muted">
              Find the right team to help you with your property journey.
            </p>
          </div>

          <div className="row g-4">
            {agencies.map((agency) => (
              <div className="col-lg-6 col-md-6 col-12" key={agency.id}>
                <div className="agency-card h-100">
                  <div className="agency-card-image">
                    <img src={agency.image} alt={agency.name} />
                  </div>

                  <div className="agency-card-content">
                    <span className="agency-label">
                      <i className="fas fa-check-circle me-2"></i>
                      Verified Agency
                    </span>

                    <h3>{agency.name}</h3>

                    <p className="agency-location">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {agency.location}
                    </p>

                    <div className="agency-contact">
                      <p>
                        <i className="fas fa-phone me-2"></i>
                        {agency.phone}
                      </p>

                      <p>
                        <i className="fas fa-envelope me-2"></i>
                        {agency.email}
                      </p>
                    </div>

                    <div className="agency-card-footer">
                      <span>
                        <i className="fas fa-house me-2"></i>
                        {agency.properties} Properties
                      </span>

                      <Link
                        to="/propertie"
                        className="agency-view-link"
                      >
                        View Properties
                        <i className="fas fa-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="agencies-cta">
        <div className="container">
          <div className="agencies-cta-content">
            <div>
              <h2>Looking for Your Dream Property?</h2>
              <p>
                Explore available properties and find a place to call home.
              </p>
            </div>

            <Link to="/propertie" className="agencies-btn agencies-btn-light">
              Browse Properties
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agencies;
