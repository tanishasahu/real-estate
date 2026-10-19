
import { useEffect, useState } from 'react';
import PropertieData from './../../Data.json';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import BedRooms1 from './../../assets/Bedroom1-2d.jpg';
import BedRooms2 from './../../assets/Bedroom2-2d.jpg';
import BedRooms3 from './../../assets/Bedrooms3-2d.jpg';

import turning from './../../assets/about-properties-4.jpg';
import commenting from './../../assets/team-3.jpg';
import propertiey from './../../assets/about-properties-2.jpg';

import { useParams, Link } from 'react-router-dom';

function PropertieDetails() {
    const { id } = useParams();

    const property = PropertieData.find(
        (item) => String(item.id) === String(id)
    );

    const propIndex = PropertieData.findIndex(
        (item) => String(item.id) === String(id)
    );

    const [likedItems, setLikedItems] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [img, setImg] = useState('');

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});

        return () => {
            Fancybox.destroy();
        };
    }, []);

    const toggleLike = (propertyId) => {
        setLikedItems((prev) =>
            prev.includes(propertyId)
                ? prev.filter((item) => item !== propertyId)
                : [...prev, propertyId]
        );
    };

    const images = [BedRooms1, BedRooms2, BedRooms3];

    const floorPlans = [
        {
            title: '1 Bedroom Apartment',
            description:
                'A walk in closet and a bathroom with a vanity, toilet, and a walk-in shower are also included in the attached bedroom.',
            size: '654 sq ft',
        },
        {
            title: '2 Bedrooms Apartment',
            description:
                'A spacious layout with two bedrooms and a modern kitchen.',
            size: '850 sq ft',
        },
        {
            title: '3 Bedrooms Apartment',
            description:
                'A large family home with three bedrooms and a generous living area.',
            size: '1200 sq ft',
        },
    ];

    const assetPath = (path) => {
        if (!path) return '';
        return `/${String(path).replace(/^\/+/, '')}`;
    };

    if (!property) {
        return (
            <div className="container py-5">
                <h2>Property Not Found</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Back to Home
                </Link>
            </div>
        );
    }

    const propertyTags = Array.isArray(property.tag)
        ? property.tag
        : Array.isArray(property.tags)
            ? property.tags
            : typeof property.tag === 'string'
                ? property.tag.split(',')
                : typeof property.tags === 'string'
                    ? property.tags.split(',')
                    : [];

    const propertyTypeList = [
        'Apartment',
        'Apartment Building',
        'Office',
        'Shop',
        'Single Family',
        'Villa',
    ];

    const attachments = [
        {
            type: 'ri-file-pdf-line',
            name: 'Ultra Demo PDF file',
            size: '16.57 kb',
        },
        {
            type: 'ri-file-word-line',
            name: 'Ultra Demo Word file',
            size: '12.13 kb',
        },
        {
            type: 'ri-file-excel-line',
            name: 'Ultra Demo Excel file',
            size: '8.60 kb',
        },
        {
            type: 'ri-file-image-line',
            name: 'Ultra Demo Image file',
            size: '6.00 kb',
        },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div className="container page-section my-5 mt-5 fs-5">
                <Link to="/" className="text-decoration-none">
                    Home
                </Link>
                &nbsp; &gt; &nbsp;
                <span className="text-muted">Property Details</span>
            </div>

            {/* Property Main Image and Details */}
            <div className="container my-5 py-5 border-bottom">
                <div className="row align-items-center g-4">
                    {/* Left: Property Image */}
                    <div className="col-lg-6">
                        <div className="prop-detail-img position-relative">
                            <img
                                src={
                                    img ||
                                    (property.img
                                        ? assetPath(property.img)
                                        : propertiey)
                                }
                                className="img-fluid rounded w-100"
                                alt={property.name || 'Property'}
                                onError={() => setImg(propertiey)}
                            />

                            {/* Property Tags */}
                            <div className="property-tags position-absolute">
                                {propertyTags.map((tag, index) => {
                                    const tagText =
                                        typeof tag === 'string'
                                            ? tag.trim()
                                            : String(tag);

                                    return (
                                        <span
                                            key={index}
                                            className="property-tag"
                                        >
                                            {tagText}
                                        </span>
                                    );
                                })}

                                {property.tags &&
                                    !Array.isArray(property.tags) &&
                                    typeof property.tags === 'object' &&
                                    Object.entries(property.tags).map(
                                        ([key, tag]) => (
                                            <span
                                                key={key}
                                                className={`property-tag ${key}`}
                                            >
                                                {String(tag).trim()}
                                            </span>
                                        )
                                    )}
                            </div>

                            {/* Gallery and Video */}
                            <div className="property-img-vid position-absolute">
                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                `gallery-trigger-${propIndex}`
                                            )
                                            ?.click()
                                    }
                                >
                                    <i className="bi bi-camera-fill"></i>
                                    &nbsp;{property.images || 'View'}
                                </span>

                                <span
                                    style={{ cursor: 'pointer' }}
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                `video-trigger-${propIndex}`
                                            )
                                            ?.click()
                                    }
                                >
                                    <i className="bi bi-film"></i>
                                    &nbsp;{property.videos || 'Play'}
                                </span>

                                {property.videoSlide && (
                                    <a
                                        id={`video-trigger-${propIndex}`}
                                        data-fancybox
                                        href={assetPath(property.videoSlide)}
                                        style={{ display: 'none' }}
                                    >
                                        Watch video
                                    </a>
                                )}
                            </div>

                            {/* Property Gallery */}
                            {property.imageSlides?.length > 0 && (
                                <div style={{ display: 'none' }}>
                                    {property.imageSlides.map(
                                        (image, index) => (
                                            <a
                                                key={index}
                                                id={
                                                    index === 0
                                                        ? `gallery-trigger-${propIndex}`
                                                        : undefined
                                                }
                                                data-fancybox={`gallery-${propIndex}`}
                                                href={assetPath(image)}
                                            >
                                                <img
                                                    src={assetPath(image)}
                                                    alt={`${property.name || 'Property'} gallery ${index + 1}`}
                                                />
                                            </a>
                                        )
                                    )}
                                </div>
                            )}

                            {/* Like Button */}
                            <button
                                type="button"
                                className={`liked-property position-absolute ${
                                    likedItems.includes(property.id)
                                        ? 'liked'
                                        : ''
                                }`}
                                onClick={() => toggleLike(property.id)}
                                aria-label="Like property"
                                aria-pressed={likedItems.includes(property.id)}
                            >
                                <i className="bi bi-heart-fill"></i>
                            </button>
                        </div>
                    </div>

                    {/* Right: Property Information */}
                    <div className="col-lg-6">
                        <div className="prop-detail-content">
                            <h3>{property.type}</h3>
                            <h2>{property.name}</h2>

                            <p className="m-0">{property.address}</p>

                            <h1 className="my-3">{property.price}</h1>

                            <p className="mt-4">
                                This charming home offers a perfect blend of
                                style and functionality, ideal for families
                                seeking a comfortable living space. With
                                spacious rooms and modern finishes, the home
                                is designed to provide both convenience and
                                charm.
                            </p>

                            <p className="hied-elm">
                                The property's prime features ensure easy
                                access to local amenities such as schools,
                                shopping centers and restaurants. Whether
                                you're enjoying the spacious interior or
                                outdoor space, this home promises a delightful
                                living experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content and Right Sidebar */}
            <div className="container mt-5 pb-5">
                <div className="row g-4">
                    {/* LEFT COLUMN */}
                    <div className="col-lg-8">
                        {/* Description */}
                        <section className="mb-4">
                            <h5 className="pd-title">Description</h5>
                            <p>
                                Enhancing three bedroom, three home bath with
                                spacious one bedroom, one bath cabana, in-laws
                                quarters. Charming living area features
                                fireplace and fabulous art deco details.
                                Formal dining room.
                            </p>
                        </section>

                        {/* Additional Details */}
                        <section className="mb-4">
                            <h5 className="mt-4 pd-title">
                                Additional Details
                            </h5>

                            <div className="additional-details">
                                <div className="ad-det">
                                    <p>Bedroom Features:</p>
                                    <p>Dining Area:</p>
                                    <p>Door and Windows:</p>
                                    <p>Entry Location:</p>
                                    <p>Entries Constructions:</p>
                                    <p>Fireplace Fuel:</p>
                                    <p>Fireplace Location:</p>
                                    <p>Floors:</p>
                                </div>

                                <div className="ad-det">
                                    <p>
                                        Min Floor Master Bedroom, Walk-In Closet
                                    </p>
                                    <p>
                                        Breakfast Counter/Bar, Living/Dining
                                        Combo
                                    </p>
                                    <p>Bay Window</p>
                                    <p>Mid-Level</p>
                                    <p>Wood</p>
                                    <p>Pellet Stove</p>
                                    <p>Living Room</p>
                                    <p>
                                        Raised Foundation, Vinyl Tile,
                                        Wall-to-Wall Carpet, Wood
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Property Common Note */}
                        <section className="mb-4">
                            <h6 className="mt-4 pd-title">
                                Property Common Note
                            </h6>

                            <div className="bg-light p-3 rounded">
                                This is a common note that can be displayed
                                on all properties but controlled from one
                                simple option.
                            </div>
                        </section>

                        {/* Features */}
                        <section className="mb-4">
                            <h5 className="mt-4 pd-title">Features</h5>

                            <div className="d-flex flex-wrap gap-3 mb-4">
                                {[
                                    '2 Stories',
                                    'Home Theater',
                                    'Lawn',
                                    'Marble Floors',
                                ].map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="feature-item"
                                    >
                                        <i className="ri-checkbox-circle-line text-primary me-1"></i>
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Property Attachments */}
                        <section className="mb-4">
                            <h5 className="pd-title">
                                Property Attachments
                            </h5>

                            <div className="row">
                                {attachments.map((file, idx) => (
                                    <div
                                        className="col-md-6 mb-3"
                                        key={idx}
                                    >
                                        <div className="attachment-card p-3 d-flex align-items-center bg-light rounded">
                                            <i
                                                className={`${file.type} display-4 text-primary me-3`}
                                            ></i>

                                            <div>
                                                <h6 className="mb-1">
                                                    {file.name}
                                                </h6>
                                                <small className="text-muted">
                                                    {file.size}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Floor Plans */}
                        <section className="mb-4">
                            <h5 className="mt-5 pd-title">Floor Plans</h5>

                            <div className="floorplans-tab p-3 rounded">
                                <ul className="nav nav-tabs mb-3">
                                    {floorPlans.map((plan, idx) => (
                                        <li
                                            className="nav-item"
                                            key={idx}
                                        >
                                            <button
                                                type="button"
                                                className={`nav-link ${
                                                    activeTab === idx
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={() =>
                                                    setActiveTab(idx)
                                                }
                                            >
                                                {plan.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="floorplan-content">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                                        <strong>
                                            {floorPlans[activeTab].title}
                                        </strong>
                                        <span className="text-muted">
                                            Price On Call
                                        </span>
                                    </div>

                                    <p className="mb-3">
                                        {floorPlans[activeTab].description}
                                    </p>

                                    <div className="d-flex flex-wrap gap-4 mb-3">
                                        <span>
                                            <i className="ri-hotel-bed-line me-1"></i>
                                            <strong>
                                                {activeTab + 1}
                                            </strong>{' '}
                                            Bedroom(s)
                                        </span>

                                        <span>
                                            <i className="ri-bath-line me-1"></i>
                                            <strong>
                                                {activeTab + 1}
                                            </strong>{' '}
                                            Bathroom(s)
                                        </span>

                                        <span>
                                            <i className="ri-expand-left-right-line me-1"></i>
                                            <strong>
                                                {floorPlans[activeTab].size}
                                            </strong>
                                        </span>
                                    </div>

                                    <img
                                        src={images[activeTab]}
                                        className="img-fluid rounded w-100"
                                        alt={floorPlans[activeTab].title}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Schedule A Tour */}
                        <section className="my-5">
                            <div className="tour-form-wrapper rounded-4 shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 p-4">
                                        <h4 className="fw-bold mb-4">
                                            Schedule A Tour
                                        </h4>

                                        <form
                                            onSubmit={(e) =>
                                                e.preventDefault()
                                            }
                                        >
                                            <div className="row g-3 mb-3">
                                                <div className="col-md-6">
                                                    <div className="input-group custom-input">
                                                        <span className="input-group-text">
                                                            <i className="ri-calendar-line"></i>
                                                        </span>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            aria-label="Select date"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="input-group custom-input">
                                                        <span className="input-group-text">
                                                            <i className="ri-time-line"></i>
                                                        </span>
                                                        <input
                                                            type="time"
                                                            className="form-control"
                                                            aria-label="Select time"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tour-type-toggle d-flex flex-wrap gap-2 mb-4">
                                                <button
                                                    type="button"
                                                    className="btn tour-type active"
                                                >
                                                    In person
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn tour-type"
                                                >
                                                    Video Chat
                                                </button>
                                            </div>

                                            <div className="input-group custom-input mb-3">
                                                <span className="input-group-text">
                                                    <i className="ri-user-line"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>

                                            <div className="input-group custom-input mb-3">
                                                <span className="input-group-text">
                                                    <i className="ri-phone-line"></i>
                                                </span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Your Phone"
                                                />
                                            </div>

                                            <div className="input-group custom-input mb-3">
                                                <span className="input-group-text">
                                                    <i className="ri-mail-line"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                />
                                            </div>

                                            <div className="input-group custom-textarea mb-4">
                                                <textarea
                                                    className="form-control p-3"
                                                    placeholder="Message"
                                                    rows="3"
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary schedule-btn"
                                            >
                                                Schedule
                                            </button>
                                        </form>

                                        <div className="mt-4">
                                            <img
                                                src={turning}
                                                className="img-fluid rounded-4 mb-3"
                                                alt="Property tour"
                                            />

                                            <h6 className="fw-bold">
                                                Discover your dream Property
                                            </h6>

                                            <p className="text-muted mb-2">
                                                Immerse yourself in the
                                                captivating ambiance of our
                                                properties.{' '}
                                                <strong>
                                                    Book a personalized tour
                                                </strong>{' '}
                                                to explore their beauty and
                                                unique features.
                                            </p>

                                            <p className="text-muted">
                                                Our knowledgeable staff will
                                                guide you through the property
                                                and answer your questions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Comments */}
                        <section className="my-5">
                            <h5 className="pd-title">1 Comment</h5>

                            <div className="d-flex align-items-start gap-3 mt-3">
                                <img
                                    src={commenting}
                                    className="rounded-circle"
                                    width="60"
                                    height="60"
                                    alt="Comment author"
                                />

                                <div>
                                    <strong>John Doe</strong>

                                    <p
                                        className="text-muted mb-1"
                                        style={{ fontSize: '0.85rem' }}
                                    >
                                        September 9, 2024
                                    </p>

                                    <p className="text-muted mb-1">
                                        This is a sample comment. We have
                                        extremely pleasurable communication,
                                        honesty, and advice throughout the
                                        entire process.
                                    </p>

                                    <a
                                        href="#comment-form"
                                        className="text-primary fw-medium"
                                    >
                                        Reply
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN - Sidebar */}
                    <aside className="col-lg-4 right-side">
                        {/* Contact Form */}
                        <div className="card shadow-sm rounded-4 mb-4">
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">
                                    Contact Property
                                </h5>

                                <form
                                    id="comment-form"
                                    onSubmit={(e) =>
                                        e.preventDefault()
                                    }
                                >
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Name"
                                        aria-label="Name"
                                    />

                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        placeholder="Email"
                                        aria-label="Email"
                                    />

                                    <input
                                        type="tel"
                                        className="form-control mb-3"
                                        placeholder="Phone"
                                        aria-label="Phone"
                                    />

                                    <textarea
                                        className="form-control mb-3"
                                        rows="3"
                                        placeholder={`Hello, I am interested in ${property.name || 'this property'}`}
                                        aria-label="Message"
                                    ></textarea>

                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="gdpConsent"
                                        />
                                        <label
                                            htmlFor="gdpConsent"
                                            className="form-check-label"
                                        >
                                            I consent to having this website
                                            store my submitted information.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Featured Property */}
                        <div className="mb-5 mt-4 hide-elm-sm">
                            <h5 className="fw-bold">
                                Featured Properties
                            </h5>

                            <div className="property-card rounded-4 p-3 mt-3 border">
                                <div className="mb-2">
                                    <h6 className="fw-bold mb-1">
                                        Villa in Coral Gables
                                    </h6>

                                    <p
                                        className="text-muted mb-0"
                                        style={{ fontSize: '0.85rem' }}
                                    >
                                        <i className="ri-map-pin-line"></i>{' '}
                                        Deering Bay Drive, Coral Gables,
                                        33518, USA
                                    </p>
                                </div>

                                <div className="image-container position-relative rounded-4 overflow-hidden mb-3">
                                    <img
                                        src={propertiey}
                                        className="img-fluid w-100"
                                        alt="Villa in Coral Gables"
                                    />

                                    <div className="badge-wrapper d-flex flex-wrap gap-1 position-absolute top-0 start-0 m-2">
                                        <span className="badge-bg-primary">
                                            For Sale
                                        </span>
                                        <span className="badge-bg-secondary">
                                            Featured
                                        </span>
                                    </div>

                                    <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                                        Build 2022
                                    </span>

                                    <div className="play-icon position-absolute top-50 start-50 translate-middle">
                                        <i className="ri-play-circle-fill text-white fs-3"></i>
                                    </div>

                                    <div className="icons position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                                        <i className="ri-heart-line text-white fs-5"></i>
                                    </div>
                                </div>

                                <p className="fw-bold text-primary mb-0">
                                    $825,000
                                </p>
                            </div>
                        </div>

                        {/* Property Type */}
                        <div className="hide-elm">
                            <h5 className="fw-bold">Property Type</h5>

                            <div className="row mt-3">
                                {propertyTypeList.map((type, idx) => (
                                    <div
                                        className="col-6 mb-2"
                                        key={idx}
                                    >
                                        <i className="ri-arrow-right-s-line text-primary me-1"></i>
                                        <span>{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default PropertieDetails;
