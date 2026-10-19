
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PropertieData from './../../Data.json';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Gallery() {
  const [filter, setFilter] = useState('All');

  // Initialize Fancybox
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Filter properties
  const getFilteredProperties = () => {
    if (filter === 'All') {
      return PropertieData;
    }

    if (filter === 'For Rent') {
      return PropertieData.filter(
        (property) => property.tags?.forRent
      );
    }

    if (filter === 'For Sale') {
      return PropertieData.filter(
        (property) => property.tags?.forSale
      );
    }

    return PropertieData;
  };

  const filteredProperties = getFilteredProperties();

  return (
    <>
      {/* Breadcrumb */}
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>

        &nbsp; &gt; &nbsp;

        <span className="text-muted">Gallery</span>
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container my-5">

          {/* Heading */}
          <div className="gallery-heading">
            <span className="gallery-subtitle">
              EXPLORE OUR COLLECTION
            </span>

            <h1 className="gallery-title">
              Property Gallery
            </h1>

            <p className="gallery-description">
              Discover beautiful properties and find the perfect
              place to call home.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="gallery-tab mb-4"
            role="group"
            aria-label="Filter properties"
          >
            <button
              type="button"
              onClick={() => setFilter('All')}
              className={`btn ${
                filter === 'All' ? 'active' : ''
              }`}
              aria-pressed={filter === 'All'}
            >
              All
            </button>

            <button
              type="button"
              onClick={() => setFilter('For Rent')}
              className={`btn ${
                filter === 'For Rent' ? 'active' : ''
              }`}
              aria-pressed={filter === 'For Rent'}
            >
              For Rent
            </button>

            <button
              type="button"
              onClick={() => setFilter('For Sale')}
              className={`btn ${
                filter === 'For Sale' ? 'active' : ''
              }`}
              aria-pressed={filter === 'For Sale'}
            >
              For Sale
            </button>
          </div>

          {/* Properties Grid */}
          <div className="row g-4 gallery-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={property.id}
                >
                  <div className="card property-card gallery-card shadow position-relative h-100">

                    {/* Property Image */}
                    <img
                      src={property.img}
                      className="card-img-top"
                      alt={property.name || 'Property'}
                      loading="lazy"
                    />

                    {/* Image Preview Button */}
                    <a
                      href={property.img}
                      data-fancybox="gallery"
                      data-caption={property.name}
                      className="position-absolute gallery-icon"
                      aria-label={`View ${property.name || 'property'} image`}
                      title="View image"
                    >
                      <i className="fas fa-search-plus"></i>
                    </a>

                    {/* Property Details */}
                    <div className="card-body">
                      <p className="card-text">
                        {property.name}
                      </p>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="gallery-empty">
                  <i className="fas fa-house"></i>

                  <h3>No properties found</h3>

                  <p>
                    There are no properties available in this category.
                  </p>

                  <button
                    type="button"
                    className="btn gallery-reset-btn"
                    onClick={() => setFilter('All')}
                  >
                    View All Properties
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Gallery;
