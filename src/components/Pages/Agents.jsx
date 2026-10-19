import React from 'react';
import { Link } from 'react-router-dom';

import team1 from './../../assets/team-3.jpg';
import team2 from './../../assets/team-2.jpg';
import team3 from './../../assets/team-1.jpg';

function Agents() {
  const agents = [
    {
      id: 1,
      image: team1,
      name: 'Nathan James',
      phone: '1-222-333-4444',
      mobile: '1-234-456-7893',
      email: 'nathan@ispire.com',
      company: 'James Estate Agents',
      properties: 4,
    },
    {
      id: 2,
      image: team2,
      name: 'Robert Wilson',
      phone: '1-222-333-5555',
      mobile: '1-234-567-8910',
      email: 'robert@ispire.com',
      company: 'James Estate Agents',
      properties: 6,
    },
    {
      id: 3,
      image: team3,
      name: 'Olivia Smith',
      phone: '1-222-333-6666',
      mobile: '1-345-678-9012',
      email: 'olivia@ispire.com',
      company: 'James Estate Agents',
      properties: 5,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to='/' className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp;
        <span className="text-muted">Agents</span>
      </div>

      {/* Agents Section */}
      <div className="container my-5">
        <h2 className="fw-bold">Agents</h2>

        <div className="row">
          {agents.map((agent) => (
            <div className="col-lg-8 col-12 mt-4" key={agent.id}>
              <div className="agent-card mb-4 p-3">

                {/* Agent Header */}
                <div className="d-flex flex-column flex-sm-row align-items-start">
                  <img
                    src={agent.image}
                    className="agent-img me-sm-4 mb-3 mb-sm-0"
                    alt={agent.name}
                  />

                  <div className="agent-info">
                    <h5 className="mb-1">
                      {agent.name}{' '}
                      <i className="fas fa-check text-primary"></i>
                    </h5>

                    <small>
                      Company Agent at The{' '}
                      <span>{agent.company}</span>
                    </small>
                  </div>
                </div>

                <hr />

                {/* Agent Contact Details */}
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <p>{agent.phone}</p>
                    </div>
                  </div>

                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Mobile</h4>
                      <p>{agent.mobile}</p>
                    </div>
                  </div>

                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Email</h4>
                      <p>{agent.email}</p>
                    </div>
                  </div>
                </div>

                <hr />

                {/* Social Icons and Properties */}
                <div className="agent-content d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                  <div className="mt-2 agent-social-icon d-flex gap-3">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                  </div>

                  <div className="mt-3 mt-sm-2">
               <Link
  to={`/agents/${agent.id}/properties`}
  className="agent-properties"
>
  {agent.properties} Listed Properties
  <i className="fas fa-caret-right"></i>
</Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Agents;