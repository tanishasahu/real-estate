import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import heroimage1 from './../../assets/hero-bg-1.jpg';
import heroimage2 from './../../assets/hero-bg-2.jpg';
import heroimage3 from './../../assets/hero-bg-3.jpg';

import heroicon1 from './../../assets/hero-icon1.svg';
import heroicon2 from './../../assets/hero-icon2.svg';
import heroicon3 from './../../assets/hero-icon3.svg';

import test1 from './../../assets/team-1.jpg';
import test2 from './../../assets/team-2.jpg';
import test3 from './../../assets/team-3.jpg';
import test4 from './../../assets/team-4.jpg';

import bannerbg from './../../assets/banner-bg.png';

import team1 from './../../assets/team-1.jpg';
import team2 from './../../assets/team-2.jpg';
import team3 from './../../assets/team-3.jpg';
import team4 from './../../assets/team-4.jpg';

import agentprop1 from './../../assets/agent-properties-1.jpg';
import agentprop2 from './../../assets/agent-properties-2.jpg';
import agentprop3 from './../../assets/agent-properties-3.jpg';

import discover1 from './../../assets/discover-1.jpg';
import discover2 from './../../assets/discover-2.jpg';
import discover3 from './../../assets/discover-3.jpg';
import discover4 from './../../assets/discover-4.jpg';

import news1 from './../../assets/news-1.jpg';
import news2 from './../../assets/news-2.jpg';
import news3 from './../../assets/news-3.jpg';
import news4 from './../../assets/news-4.jpg';
import newsClient from './../../assets/news-client.jpg';

import brand1 from './../../assets/brand-1.png';
import brand2 from './../../assets/brand-2.png';
import brand3 from './../../assets/brand-3.png';
import brand4 from './../../assets/brand-4.png';
import brand5 from './../../assets/brand-5.png';

import PropertieData from './../../Data.json';

const heroImages = [heroimage1, heroimage2, heroimage3];

const propertyIcons = [
  { image: heroicon1, alt: 'Bedrooms', value: '3' },
  { image: heroicon2, alt: 'Bathrooms', value: '3.5' },
  { image: heroicon3, alt: 'Property area', value: '3500 sq ft' },
];

const testimonials = [
  {
    image: test1,
    name: 'Daisybee',
    text: 'This is genuinely the best theme I have ever bought in terms of super easy and clear instructions to follow.',
  },
  {
    image: test2,
    name: 'Mandy Caps',
    text: 'The theme is fantastic, flexible and simply excellent to use. I cannot recommend it enough!',
  },
  {
    image: test3,
    name: 'Ronald J R',
    text: 'A wonderful experience with a clean design and simple instructions.',
  },
  {
    image: test4,
    name: 'Jhon Doe',
    text: 'An excellent theme for presenting properties in a professional way.',
  },
];

const agents = [
  {
    id: 1,
    image: team1,
    name: 'Alice Brian',
    agency: 'Alice Brian Agency',
    count: 3,
  },
  {
    id: 2,
    image: team2,
    name: 'Robert Wilson',
    agency: 'Robert Wilson Agency',
    count: 3,
  },
  {
    id: 3,
    image: team3,
    name: 'Olivia Smith',
    agency: 'Olivia Smith Agency',
    count: 2,
  },
  {
    id: 4,
    image: team4,
    name: 'James Anderson',
    agency: 'James Anderson Agency',
    count: 2,
  },
];

const cities = [
  { name: 'Miami', count: 7, image: discover1 },
  { name: 'Coral Gables', count: 2, image: discover2 },
  { name: 'Doral', count: 1, image: discover3 },
  { name: 'Little Havana', count: 2, image: discover4 },
];

const news = [
  { image: news1, title: "As The Real Estate Market Heats Up, Here's How First Time Buyers Can Keep Their Cool" },
  { image: news2, title: 'Tips for Finding Your Perfect Dream Home' },
  { image: news3, title: 'How to Choose the Right Property for Your Family' },
  { image: news4, title: 'The Latest Trends in the Real Estate Market' },
];

const brands = [brand1, brand2, brand3, brand4, brand5];

// Public folder ke image/video paths handle karega.
const assetPath = (path) => {
  if (!path) return '';
  if (/^(https?:|blob:|data:)/i.test(path)) return path;
  return `/${String(path).replace(/^\/+/, '')}`;
};

function PropertyIcons({ items = propertyIcons }) {
  return (
    <div className="property-detail">
      {items.map((item, index) => (
        <span key={`${item.alt}-${index}`}>
          <img src={item.image} alt={item.alt} className="img-fluid" />
          {item.value}
        </span>
      ))}
    </div>
  );
}

function PropertyTags({ tags }) {
  return (
    <div className="property-tags position-absolute">
      {Object.values(tags || {}).slice(0, 3).map((tag, index) => (
        <span key={`${tag}-${index}`} className={`span${index + 1}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function Index() {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const toggleLike = (id) => {
    setLikedItems((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <>
      {/* HERO SECTION */}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="hero-swiper mb-4"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="hero-main mb-4 position-relative">
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="hero-image"
              />

              <div className="hero-content">
                <div className="container my-5">
                  <div className="hero-info p-4 p-md-5 rounded-4 shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
                    <div>
                      <h5 className="mb-1 fs-4 fw-semibold">
                        Home in Coral Gables
                        <small className="text-muted ms-2 fs-6 fw-normal">
                          Built 2020
                        </small>
                      </h5>
                      <p className="mb-2 text-muted">
                        <strong>Added:</strong> June 8, 2022
                      </p>
                    </div>

                    <div className="d-flex gap-4 align-items-center my-3 my-md-0">
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon1} alt="Bedrooms" className="hero-icon me-2" />
                        4
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon2} alt="Bathrooms" className="hero-icon me-2" />
                        4.5
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img src={heroicon3} alt="Area" className="hero-icon me-2" />
                        3800 sq ft
                      </div>
                    </div>

                    <div className="text-start text-md-end mt-3 mt-md-0 hero-sale">
                      <span className="d-block mb-1">For Sale</span>
                      <h4 className="mb-0 fw-bold fs-3">$850,000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PROPERTIES SECTION */}

      <div className="container position-relative py-5">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={PropertieData.length > 3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: '.property-swiper-prev',
            nextEl: '.property-swiper-next',
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            576: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="property-swiper mt-5 py-5"
        >
          {PropertieData.map((property, propertyIndex) => (
            <SwiperSlide key={property.id ?? propertyIndex}>
              <div className="property-card card h-100">
                <div className="property-image position-relative">
                  <img
                    src={assetPath(property.img)}
                    className="img-fluid rounded"
                    alt={property.name || 'Property'}
                    onError={(event) => {
                      console.error(
                        'Property image load nahi hui:',
                        event.currentTarget.src
                      );
                    }}
                  />

                  <PropertyTags tags={property.tags} />

                  <div className="property-img-vid position-absolute">
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        document
                          .getElementById(`gallery-trigger-${propertyIndex}`)
                          ?.click()
                      }
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          document
                            .getElementById(`gallery-trigger-${propertyIndex}`)
                            ?.click();
                        }
                      }}
                    >
                      <i className="bi bi-camera-fill"></i>
                      &nbsp;{property.images || 'View'}
                    </span>

                    <span
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        document
                          .getElementById(`video-trigger-${propertyIndex}`)
                          ?.click()
                      }
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          document
                            .getElementById(`video-trigger-${propertyIndex}`)
                            ?.click();
                        }
                      }}
                    >
                      <i className="bi bi-film"></i>
                      &nbsp;{property.videos || 'Play'}
                    </span>

                    {property.videoSlide && (
                      <a
                        id={`video-trigger-${propertyIndex}`}
                        data-fancybox
                        href={assetPath(property.videoSlide)}
                        style={{ display: 'none' }}
                      >
                        Watch video
                      </a>
                    )}
                  </div>

                  <div style={{ display: 'none' }}>
                    {property.imageSlides?.map((image, index) => (
                      <a
                        key={image + index}
                        id={
                          index === 0
                            ? `gallery-trigger-${propertyIndex}`
                            : undefined
                        }
                        data-fancybox={`gallery-${propertyIndex}`}
                        href={assetPath(image)}
                      >
                        <img
                          src={assetPath(image)}
                          alt={`${property.name} gallery ${index + 1}`}
                        />
                      </a>
                    ))}
                  </div>

                  <span
                    className={`liked-property position-absolute ${
                      likedItems.includes(property.id) ? 'liked' : ''
                    }`}
                    onClick={() => toggleLike(property.id)}
                    role="button"
                    tabIndex={0}
                    aria-label="Like property"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') toggleLike(property.id);
                    }}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </span>
                </div>

                <Link
                  to={`/propertie/property/${property.id}`}
                  className="text-decoration-none"
                >
                  <div className="property-content mt-3 px-3">
                    <h2>{property.name}</h2>

                    <p>
                      <i className="bi bi-geo-alt-fill"></i>{' '}
                      {property.address}
                    </p>

                    <h5>{property.type}</h5>

                    <div className="d-flex mt-3 pb-3 justify-content-between align-items-center w-100">
                      <h3 className="m-0">{property.price}</h3>
                      <PropertyIcons />
                    </div>

                    <p>
                      Added: <span>{property.date}</span>
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="swiper-button-prev swiper-btn property-swiper-prev"
          aria-label="Previous properties"
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>

        <button
          type="button"
          className="swiper-button-next swiper-btn property-swiper-next"
          aria-label="Next properties"
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>

      {/* ABOUT PROPERTY SECTION */}

      <section className="about-property position-relative">
        <div className="dots-element position-absolute"></div>
        <div className="dots-element2 position-absolute"></div>

        <div className="container mt-5 py-5 position-relative">
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            loop={PropertieData.length > 1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="about-property-swiper"
          >
            {PropertieData.slice(0, 4).map((property) => (
              <SwiperSlide key={property.id}>
                <div className="ap-wrapper row">
                  <div className="col-lg-6">
                    <div className="ap-img rounded position-relative">
                      <img
                        src={assetPath(property.apImg || property.img)}
                        className="img-fluid rounded"
                        alt={property.name || 'Property'}
                        onError={(event) => {
                          console.error(
                            'About image load nahi hui:',
                            event.currentTarget.src
                          );
                        }}
                      />

                      <div
                        className="property-img-vid position-absolute"
                        style={{
                          top: '20px',
                          right: '15px',
                          zIndex: 10,
                        }}
                      >
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            document
                              .getElementById(`about-gallery-${property.id}`)
                              ?.click()
                          }
                        >
                          <i className="bi bi-camera-fill"></i>
                          &nbsp;{property.images || 'View'}
                        </span>

                        <span
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            document
                              .getElementById(`about-video-${property.id}`)
                              ?.click()
                          }
                        >
                          <i className="bi bi-film"></i>
                          &nbsp;{property.videos || 'Play'}
                        </span>

                        {property.videoSlide && (
                          <a
                            id={`about-video-${property.id}`}
                            data-fancybox
                            href={assetPath(property.videoSlide)}
                            style={{ display: 'none' }}
                          >
                            Watch video
                          </a>
                        )}
                      </div>

                      <div style={{ display: 'none' }}>
                        {property.imageSlides?.map((image, index) => (
                          <a
                            key={image + index}
                            id={
                              index === 0
                                ? `about-gallery-${property.id}`
                                : undefined
                            }
                            data-fancybox={`about-gallery-${property.id}`}
                            href={assetPath(image)}
                          >
                            <img
                              src={assetPath(image)}
                              alt={`${property.name} gallery ${index + 1}`}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="ap-content mt-4 d-flex flex-column gap-3">
                      <div className="ap-tags">
                        {Object.values(property.tags || {})
                          .slice(0, 3)
                          .map((tag, index) => (
                            <span
                              key={`${tag}-${index}`}
                              className={`span${index + 1}`}
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      <h2 className="mt-2 mb-0">{property.name}</h2>

                      <p>
                        <i className="bi bi-geo-alt-fill"></i>{' '}
                        {property.address}
                      </p>

                      <div className="ap-info my-3">
                        {propertyIcons.map((item) => (
                          <span key={item.alt}>
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt={item.alt}
                            />
                            {item.value}
                          </span>
                        ))}
                      </div>

                      <h1 className="mt-3">{property.price}</h1>

                      <p className="ap-pere">
                        Enhancing a beautiful home with spacious living areas
                        and comfortable modern interiors.
                      </p>

                      <Link
                        to={`/propertie/property/${property.id}`}
                        className="btn btn1 align-self-start"
                      >
                        View Property
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}

      <section className="container py-5 text-center position-relative">
        <h2 className="fw-bold mb-5">Customers Loves Us</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={testimonials.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div
                className="bg-white rounded-4 p-4 p-md-5 mx-auto"
                style={{ maxWidth: '900px' }}
              >
                <div className="row align-items-center">
                  <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                    <div className="test-img">
                      <img
                        src={testimonial.image}
                        className="rounded-circle shadow"
                        alt={testimonial.name}
                        style={{
                          width: '150px',
                          height: '150px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-8 text-start">
                    <h4 className="text-primary fw-bold mb-3 fs-2">
                      {testimonial.text}
                    </h4>

                    <p className="text-muted mb-3">
                      I have been a web designer for many years. The theme is
                      flexible and easy to use.
                    </p>

                    <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                    <span className="text-muted">Verified Customer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* BANNER SECTION */}

      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="hero-heading">
                Finding a perfect property have never
                <br />
                been this easy earlier
              </h1>

              <p className="hero-subtext">
                You can find perfectly suited properties for all your needs
                with ease.
              </p>
            </div>

            <div className="col-md-4 text-md-end text-start mt-4 mt-md-0">
              <Link to="/propertie" className="btn check-button">
                Check Properties
              </Link>
            </div>
          </div>

          <div className="herodivider">
            <div className="row hero-contact text-center text-md-start">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="contact-label">Email</div>
                <p className="contact-info">hello@yoursite.com</p>
              </div>

              <div className="col-md-6 mb-3 mb-md-0">
                <div className="contact-label">Phone Number</div>
                <p className="contact-info">+1 800 555 4321</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={bannerbg}
          className="img-fluid position-absolute banner-img"
          alt=""
        />
      </section>

      {/* AGENTS SECTION */}

     {/* AGENTS SECTION */}

<div className="our-agents py-5 my-5 position-relative">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="agents-title col-lg-6">
        <h2>Meet Our Agents</h2>
      </div>

      <div className="agents-btn col-lg-6 d-flex justify-content-end">
        <Link to="/agents" className="btn btn1">
          View All
        </Link>
      </div>
    </div>
  </div>

  <div className="agents-swiper mt-5">
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      modules={[Navigation]}
      navigation={{
        nextEl: ".agents-next",
        prevEl: ".agents-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="agents-slider"
    >
      {[
        { id: 1, name: "Alice Brian", agency: "Alice Brian Agency", image: team1, count: 3 },
        { id: 2, name: "Robert Wilson", agency: "Robert Wilson Agency", image: team2, count: 3 },
        { id: 3, name: "Olivia Smith", agency: "Olivia Smith Agency", image: team3, count: 2 },
        { id: 4, name: "James Anderson", agency: "James Anderson Agency", image: team4, count: 2 },
      ].map((agent) => (
        <SwiperSlide key={agent.id}>
          <div className="agent-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
            <div className="agent-info d-flex align-items-center gap-3">
              <div className="agent-img">
                <img
                  src={agent.image}
                  className="img-fluid"
                  alt={agent.name}
                />
              </div>

              <div className="agent-dot">
                <h2>{agent.name}</h2>
                <p>{agent.agency}</p>
              </div>
            </div>

            <div className="agent-gallery mt-3">
              <div className="agent-gallery-col d-flex gap-3">
                <img src={agentprop1} className="img-fluid rounded" alt="Property 1" />
                <img src={agentprop2} className="img-fluid rounded" alt="Property 2" />
                <img src={agentprop3} className="img-fluid rounded" alt="Property 3" />
              </div>

              <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                <Link to="/agents" className="btn btn1">
                  View Profile
                </Link>

                <Link to={`/agents/${agent.id}/properties`}>
                  {agent.count} Listed Properties
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

      {/* DISCOVER PROPERTIES SECTION */}

      <section className="discover-propertie py-5">
        <div className="container">
          <div className="row">
            <div className="dis-prop-head">
              <h2>Discover Properties</h2>
              <p>Find Properties In Your Favourite Cities</p>
            </div>
          </div>

          <div className="row mt-5">
            {cities.map((city) => (
              <div
                key={city.name}
                className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              >
                <div className="dis-prop-col rounded">
                  <div className="dis-prop-img position-relative">
                    <img src={city.image} alt={`${city.name} properties`} />

                    <div className="dis-prop-content text-center rounded">
                      <span>{city.name}</span>
                      <h2>{city.count}</h2>
                      <p className="m-0 text-muted">Properties</p>
                    </div>

                    <Link
                      to="/propertie"
                      className="btn dis-prop-view-btn position-absolute"
                    >
                      View All <i className="bi bi-caret-right-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}

      <section className="latest-news py-5 my-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="dis-prop-head">
              <h2>Latest News &amp; Updates</h2>
              <p>Latest News About Real Estate</p>
            </div>
          </div>

          <div className="row mt-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={news.length > 3}
              modules={[Navigation]}
              navigation={{
                nextEl: '.news-swiper-next',
                prevEl: '.news-swiper-prev',
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 15 },
                576: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 20 },
              }}
              className="news-swiper"
            >
              {news.map((item, index) => (
                <SwiperSlide key={item.image}>
                  <div className="news-card">
                    <div className="news-card-img position-relative">
                      <img src={item.image} className="img-fluid rounded" alt="Real estate news" />

                      <div className="news-client-info d-flex align-items-center position-absolute">
                        <img src={newsClient} className="img-fluid" alt="Author" />
                        <p className="ms-2">By John Doe</p>
                      </div>
                    </div>

                    <div className="news-card-content mt-3">
                      <p>June 16, 2025</p>
                      <h5>{item.title}</h5>
                      <a href={`#news-${index}`}>Luxury</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="news-swiper-prev new-swiper-btn swiper-btn"
              aria-label="Previous news"
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>

            <button
              type="button"
              className="news-swiper-next new-swiper-btn swiper-btn"
              aria-label="Next news"
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}

      <section className="container-fluid">
        <div className="container py-5">
          <h2>
            <strong>Partners of RealHomes</strong>
          </h2>

          <p>We are pleased to work with our partners</p>

          <div className="row d-flex justify-content-between">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="col-12 col-sm-6 col-md-6 col-lg-2 mt-4 mt-lg-0"
              >
                <div className="partner-card">
                  <img
                    src={brand}
                    className="partner-img"
                    alt={`Partner ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;