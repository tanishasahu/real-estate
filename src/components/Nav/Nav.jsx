
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setLoginMessage('Please enter username and password.');
      return;
    }

    setLoginMessage(
      'Form submitted successfully! Real login requires authentication.'
    );
  };

  const openLogin = () => {
    setShowModal(true);
    setLoginMessage('');
  };

  const closeLogin = () => {
    setShowModal(false);
    setLoginMessage('');
    setShowPassword(false);
  };

  return (
    <div className="nav-wrapper w-100 position-relative">
      <nav
        className="navbar navbar-expand-lg bg-white"
        style={{ height: '90px' }}
      >
        <div className="container-fluid text-center">
          {/* Logo */}
          <Link to="/" className="nav-brand nav-logo fs-3 p-0">
            DreamHomes
          </Link>

          {/* Desktop Navbar */}
          <div className="collapse navbar-collapse d-lg-flex d-none">
            <ul className="navbar-nav navbar-menu gap-4 ms-xl-0 ms-auto mb-2 mb-lg-0">
              <li className="nav-item fs-6 fw-normal p-0">
                <Link to="/" className="nav-link text-black">
                  Home
                </Link>
              </li>

              {/* Real Estate Dropdown */}
              <li className="nav-item dropdown p-0">
                <button
                  type="button"
                  className="nav-link dropdown-toggle text-black border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Real Estate
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/propertie"
                      className="dropdown-item text-black"
                    >
                      Properties
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/agents"
                      className="dropdown-item text-black"
                    >
                      Agents
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/agencies"
                      className="dropdown-item text-black"
                    >
                      Agencies
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item fs-6 p-0">
                <Link to="/gallery" className="nav-link text-black">
                  Gallery
                </Link>
              </li>

              <li className="nav-item fs-6 p-0">
                <Link to="/contact" className="nav-link text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="nav-right d-flex align-items-center gap-3 ms-auto">
            {/* Social Icons */}
            <div className="nav-social d-xl-flex d-none">
              <i className="bi bi-facebook mx-2 fs-6"></i>
              <i className="bi bi-twitter mx-2 fs-6"></i>
              <i className="bi bi-instagram mx-2 fs-6"></i>
              <i className="bi bi-youtube mx-2 fs-6"></i>
            </div>

            {/* Phone */}
            <div className="nav-user-phone px-3 border-start">
              <div className="user-phone-info">
                <i className="bi bi-telephone pe-2 fs-6"></i>
                <span>1-800-555-4241</span>
              </div>
            </div>

            {/* User Profile */}
            <div className="user-profile position-relative">
              <button
                type="button"
                className="border-0 bg-transparent p-0"
                onClick={openLogin}
                style={{ cursor: 'pointer' }}
                aria-label="Open login"
                title="Login"
              >
                <i className="bi bi-person-circle user-icon"></i>
              </button>

              {/* Favorites */}
              <button
                type="button"
                className="user-modal border-0 bg-transparent"
                onClick={openLogin}
                style={{ cursor: 'pointer' }}
              >
                <div className="user-modal-box">
                  <i className="bi bi-heart-fill">
                    <span className="fs-6"> My Favorites</span>
                  </i>
                </div>
              </button>

              {/* Login Modal */}
              {showModal && (
                <div
                  className="modal d-block position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                  style={{ zIndex: 2000 }}
                  onClick={closeLogin}
                >
                  <div
                    className="container h-100 d-flex justify-content-center align-items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="row w-100 rounded-4 overflow-hidden shadow"
                      style={{ maxWidth: '900px' }}
                    >
                      {/* Left Side */}
                      <div className="col-md-6 text-white d-flex flex-column justify-content-between login-left">
                        <div className="login-left-overlay"></div>

                        <div className="position-relative z-1">
                          <i className="bi bi-quote fs-1"></i>

                          <p className="fs-5 fw-semibold">
                            Owning a home is a keystone of wealth, both
                            financial affluence and emotional security.
                          </p>

                          <p className="fw-light">Suze Orman</p>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="col-md-6 p-4 position-relative bg-white login-right">
                        <button
                          type="button"
                          className="bi bi-x-lg login-close position-absolute border-0 bg-transparent"
                          aria-label="Close login modal"
                          onClick={closeLogin}
                          style={{
                            cursor: 'pointer',
                            top: '20px',
                            right: '20px',
                            zIndex: 10,
                          }}
                        ></button>

                        <h4 className="fw-500 fs-3 mb-3 text-muted">
                          RealHomes Ultra
                        </h4>

                        <h6
                          className="text-primary pb-2 mb-3"
                          style={{ width: 'fit-content' }}
                        >
                          Login
                        </h6>

                        {/* Login Form */}
                        <form
                          className="bg-light p-4 rounded-4 login-form"
                          onSubmit={handleLogin}
                        >
                          <div className="mb-3">
                            <label
                              htmlFor="loginUsername"
                              className="form-label"
                            >
                              Username
                            </label>

                            <input
                              id="loginUsername"
                              type="text"
                              name="username"
                              className="form-control rounded-pill px-4 py-2"
                              placeholder="Enter username"
                              autoComplete="username"
                              value={username}
                              onChange={(e) => {
                                setUsername(e.target.value);
                                setLoginMessage('');
                              }}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="loginPassword"
                              className="form-label"
                            >
                              Password
                            </label>

                            <div className="input-group">
                              <input
                                id="loginPassword"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control rounded-start-pill px-4 py-2"
                                placeholder="Enter password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                  setLoginMessage('');
                                }}
                                required
                              />

                              <button
                                type="button"
                                className="btn btn-outline-secondary rounded-end-pill"
                                onClick={() =>
                                  setShowPassword(!showPassword)
                                }
                                aria-label={
                                  showPassword
                                    ? 'Hide password'
                                    : 'Show password'
                                }
                              >
                                <i
                                  className={
                                    showPassword
                                      ? 'bi bi-eye-slash'
                                      : 'bi bi-eye'
                                  }
                                ></i>
                              </button>
                            </div>
                          </div>

                          {/* Forgot Password */}
                          <div className="text-end mb-3">
                            <button
                              type="button"
                              className="btn btn-link text-primary small p-0 text-decoration-none"
                              onClick={() =>
                                setLoginMessage(
                                  'Please contact the site administrator to reset your password.'
                                )
                              }
                            >
                              Forgot Password?
                            </button>
                          </div>

                          {/* Login Button */}
                          <button
                            type="submit"
                            className="btn btn-primary w-100 rounded-pill py-2"
                          >
                            Login
                          </button>

                          {/* Message */}
                          {loginMessage && (
                            <div
                              className="alert alert-info mt-3 mb-0"
                              role="status"
                            >
                              {loginMessage}
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-label="Open navigation"
            >
              <span className="bi bi-list fs-2"></span>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className="offcanvas offcanvas-start d-lg-none"
          tabIndex={-1}
          id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel"
        >
          <div className="offcanvas-header">
            <Link
              to="/"
              id="sidebarMenuLabel"
              className="navbar-brand nav-logo fs-3 p-0"
              data-bs-dismiss="offcanvas"
            >
              DreamHomes
            </Link>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-black"
                  data-bs-dismiss="offcanvas"
                >
                  Home
                </Link>
              </li>

              {/* Mobile Real Estate Dropdown */}
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="nav-link dropdown-toggle text-black border-0 bg-transparent"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Real Estate
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/propertie"
                      className="dropdown-item text-black"
                      data-bs-dismiss="offcanvas"
                    >
                      Properties
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/agents"
                      className="dropdown-item text-black"
                      data-bs-dismiss="offcanvas"
                    >
                      Agents
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/agencies"
                      className="dropdown-item text-black"
                      data-bs-dismiss="offcanvas"
                    >
                      Agencies
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to="/gallery"
                  className="nav-link text-black"
                  data-bs-dismiss="offcanvas"
                >
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link text-black"
                  data-bs-dismiss="offcanvas"
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link text-black border-0 bg-transparent"
                  onClick={() => {
                    openLogin();
                    const sidebar = document.getElementById('sidebarMenu');
                    if (window.bootstrap && sidebar) {
                      window.bootstrap.Offcanvas.getInstance(sidebar)?.hide();
                    }
                  }}
                >
                  <i className="bi bi-person-circle me-2"></i>
                  Login / My Favorites
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navbar Banner */}
      <div className="nav-banner bg-white overflow-hidden">
        <div className="row g-0">
          <div className="col-lg-6 m-0 p-0">
            <div className="nav-banner-left py-5 px-4 px-lg-5">
              <h2>Find Your Sweet Home</h2>
            </div>
          </div>

          <div className="col-lg-6 m-0 p-0">
            <div className="nav-banner-right justify-content-center flex-wrap py-5 px-4 px-lg-5 d-flex align-items-center gap-sm-5 gap-3">
              <h2 className="fs-5 fw-bolder text-center mb-0">
                Need Help To Choose Your Property
              </h2>

              <button type="button" className="custome-btn1">
                Let Us Call You!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
