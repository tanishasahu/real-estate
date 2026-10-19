
import React, { useState, useEffect } from 'react'

import PropertieData from './../../Data.json'
import heroicon1 from './../../assets/hero-icon1.svg'
import heroicon2 from './../../assets/hero-icon2.svg'
import heroicon3 from './../../assets/hero-icon3.svg'

import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { Link } from 'react-router-dom'

// Images and videos are stored inside the public folder
const assetPath = (path) => {
  if (!path) return ''
  return path.startsWith('/') ? path : `/${path}`
}

function Properties() {
  const [likedItems, setLikedItems] = useState([])

  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {})

    return () => {
      Fancybox.destroy()
    }
  }, [])

  // Like / Unlike property
  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container page-section my-5 mt-5 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp;
        <span className="text-muted">All Properties</span>
      </div>

      <div className="container">
        {/* Page Heading */}
        <div className="row">
          <div className="prop-page-top">
            <div className="prop-page-head">
              <h2>All Properties</h2>
              <p>
                <strong>1</strong> to{' '}
                <strong>{PropertieData.length}</strong> out of{' '}
                <strong>{PropertieData.length}</strong> Properties
              </p>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="row g-4">
          {PropertieData.map((PropData, propIndex) => (
            <div className="col-lg-4 col-md-6 col-12" key={PropData.id ?? propIndex}>
              <div className="property-card card h-100">

                {/* Property Image */}
                <div className="property-image position-relative">
                  <img
                    src={assetPath(PropData.img)}
                    className="img-fluid rounded"
                    alt={PropData.name || 'Property'}
                  />

                  {/* Property Tags */}
                  <div className="property-tags position-absolute">
                    {Object.values(PropData.tags || {})
                      .slice(0, 3)
                      .map((tag, index) => (
                        <span
                          key={index}
                          className={`span${index + 1}`}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {/* Gallery and Video Buttons */}
                  <div className="property-img-vid position-absolute">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        document
                          .getElementById(`gallery-trigger-${propIndex}`)
                          ?.click()
                      }}
                    >
                      <i className="bi bi-camera-fill"></i>
                      &nbsp;{PropData.images || 'View'}
                    </span>

                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        document
                          .getElementById(`video-trigger-${propIndex}`)
                          ?.click()
                      }}
                    >
                      <i className="bi bi-film"></i>
                      &nbsp;{PropData.videos || 'Play'}
                    </span>

                    {/* Hidden Video Trigger */}
                    {PropData.videoSlide && (
                      <a
                        id={`video-trigger-${propIndex}`}
                        data-fancybox
                        href={assetPath(PropData.videoSlide)}
                        style={{ display: 'none' }}
                      >
                        Watch video
                      </a>
                    )}
                  </div>

                  {/* Hidden Image Gallery */}
                  <div style={{ display: 'none' }}>
                    {PropData.imageSlides?.map((img, index) => (
                      <a
                        key={index}
                        id={
                          index === 0
                            ? `gallery-trigger-${propIndex}`
                            : undefined
                        }
                        data-fancybox={`gallery-${propIndex}`}
                        href={assetPath(img)}
                      >
                        <img
                          src={assetPath(img)}
                          alt={`${PropData.name || 'Property'} gallery ${index + 1}`}
                        />
                      </a>
                    ))}
                  </div>

                  {/* Like Button */}
                  <span
                    className={`liked-property position-absolute ${
                      likedItems.includes(PropData.id) ? 'liked' : ''
                    }`}
                    onClick={() => toggleLike(PropData.id)}
                    role="button"
                    aria-label="Like property"
                    aria-pressed={likedItems.includes(PropData.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </span>
                </div>
       <Link to={`property/${PropData.id}`} className='text-decoration-none'>

                {/* Property Content */}
                <div className="property-content mt-3 px-3">
                  <h2>{PropData.name}</h2>

                  <p>
                    <i className="bi bi-geo-alt-fill"></i>{' '}
                    {PropData.address}
                  </p>

                  <h5>{PropData.type}</h5>

                  <div className="d-flex mt-3 pb-3 justify-content-between align-items-center w-100">
                    <h3 className="m-0">{PropData.price}</h3>

                    <div className="property-detail">
                      <span>
                        <img
                          src={heroicon1}
                          className="img-fluid"
                          alt="Bedrooms"
                        />
                        3
                      </span>

                      <span>
                        <img
                          src={heroicon2}
                          className="img-fluid"
                          alt="Bathrooms"
                        />
                        3.5
                      </span>

                      <span>
                        <img
                          src={heroicon3}
                          className="img-fluid"
                          alt="Area"
                        />
                        3500 sq ft
                      </span>
                    </div>
                  </div>

                  <p>
                    Added: <span>{PropData.date}</span>
                  </p>
                </div>
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Properties
