
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus(
      'Form validation successful! To send your message, connect an email service.'
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp;
        <span className="text-muted">Contact</span>
      </div>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-subtitle">
              WE ARE HERE TO HELP
            </span>

            <h1>
              Let's Find Your
              <span> Dream Home</span>
            </h1>

            <p>
              Have questions about a property? Our team is ready to
              help you find the perfect home or investment.
            </p>

            <a href="#contact-form" className="contact-main-btn">
              Get In Touch
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>
                <a href="mailto:info@example.com">
                  info@example.com
                </a>
              </p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>
                <a href="tel:+911234567890">
                  +91 12345 67890
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Left Content */}
            <div className="col-lg-5">
              <div className="contact-form-info">
                <span className="contact-subtitle">
                  CONTACT OUR TEAM
                </span>

                <h2>
                  We'd Love to
                  <span> Hear From You</span>
                </h2>

                <p>
                  Fill out the form and tell us what you're looking
                  for. Our team can help with property enquiries,
                  visits and general questions.
                </p>

                <div className="contact-promise">
                  <i className="fas fa-check-circle"></i>
                  <span>Personalized property assistance</span>
                </div>

                <div className="contact-promise">
                  <i className="fas fa-check-circle"></i>
                  <span>Help with property enquiries</span>
                </div>

                <div className="contact-promise">
                  <i className="fas fa-check-circle"></i>
                  <span>Friendly customer support</span>
                </div>

                <div className="contact-decoration">
                  <i className="fas fa-house"></i>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-7">
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <h3>Send Us a Message</h3>

                <p className="contact-form-description">
                  Enter your details below.
                </p>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label htmlFor="contact-name">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select subject</option>
                      <option value="Buy Property">
                        Buy Property
                      </option>
                      <option value="Rent Property">
                        Rent Property
                      </option>
                      <option value="Sell Property">
                        Sell Property
                      </option>
                      <option value="General Enquiry">
                        General Enquiry
                      </option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                    >
                      Submit Message
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>

                  {status && (
                    <div className="col-12">
                      <p
                        className="contact-status"
                        role="status"
                      >
                        {status}
                      </p>
                    </div>
                  )}

                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
