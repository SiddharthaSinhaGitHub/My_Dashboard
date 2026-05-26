import React, { useState, useEffect } from "react";
import "./App.css";
import ChatBot from "./ChatBot";

import profilePic from "./assets/IMG.jpeg";
import resumePdf from "./assets/Siddhartha_Resume.pdf";

import companyLogoCurrent from "./assets/company-logo.jpg";
import companyLogoPrevious from "./assets/company-logo-2.jpg";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";
import Certificate3 from "./assets/Certificate3.png";
import Certificate4 from "./assets/Certificate4.png";

import appreciationBg from "./assets/appreciation-email1.png";
import appreciationBg2 from "./assets/appreciation-email2.png";
import appreciationBg3 from "./assets/appreciation-email3.png";
import appreciationBg4 from "./assets/appreciation-email4.png";

import dashboard1 from "./assets/dashboard1.png";
import dashboard2 from "./assets/dashboard2.png";
import Dashboard3 from "./assets/Dashboard3.png";
import dashboard4 from "./assets/Dashboard4.png";
import Dashboard5 from "./assets/Dashboard5.png";

import washingImage from "./assets/Commercial-Laundry-Services-1.jpg";
import ladyImage from "./assets/commercial-laundry-staff.jpg";

export default function App() {
  const certificates = [certificate1, certificate2, Certificate3, Certificate4];
  const backgrounds = [appreciationBg, appreciationBg2, appreciationBg3, appreciationBg4];
  const [bgIndex, setBgIndex] = useState(0);

  // Laundry booking modal state
  const [showLaundryForm, setShowLaundryForm] = useState(false);
  const [laundryForm, setLaundryForm] = useState({
    name: "",
    whatsapp: "",
    location: "",
    buckets: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input changes
  const handleLaundryInput = (e) => {
    const { name, value } = e.target;
    setLaundryForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleLaundrySubmit = (e) => {
    e.preventDefault();
    // Save to localStorage as a simple JSON array
    const prev = JSON.parse(localStorage.getItem("laundryBookings") || "[]");
    prev.push(laundryForm);
    localStorage.setItem("laundryBookings", JSON.stringify(prev));
    setFormSubmitted(true);
    setLaundryForm({ name: "", whatsapp: "", location: "", buckets: "" });
    setTimeout(() => {
      setShowLaundryForm(false);
      setFormSubmitted(false);
    }, 1200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="profile-container">
          <img src={profilePic} alt="Siddhartha" className="profile-pic" />
          <h1>Siddhartha Sinha</h1>
          <h2>AI & Cloud Solutions Engineer</h2>
          <p>
            Building scalable AI-powered systems, dashboards, and cloud-native applications.
          </p>

          <div className="buttons">
            <a href="#work" className="btn primary">View Work</a>
            <a href="#contact" className="btn">Hire Me</a>

            <a
              href="https://www.linkedin.com/in/siddhartha-sinha-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn connect-btn"
            >
              Connect
            </a>

            <a
              href="https://www.instagram.com/charming.siddharth/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn follow-btn"
            >
              Follow
            </a>
          </div>
        </div>

        {/* ✅ DROPDOWNS */}
        <div className="top-bar">
          <div className="dropdown">
            <button className="dropbtn">Clients</button>
            <div className="dropdown-content">
              <p>FCB - Infosys</p>
              <p>STC - IBM</p>
            </div>
                                    {/* COMMERCIAL LAUNDRY SERVICE SECTION */}
      <section className="laundry-service" style={{margin: '2rem auto', maxWidth: 600, padding: 20, border: '2px solid #4caf50', borderRadius: 16, background: '#f9fff9'}}>
        <h2 style={{color: '#388e3c'}}>COMMERCIAL LAUNDRY SERVICES (Startup)</h2>
        <div style={{display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap'}}>
          <img src={washingImage} alt="Washing Clothes" style={{width: 120, borderRadius: 12, border: '1px solid #ccc'}} />
          <img src={ladyImage} alt="Lady Washing Clothes" style={{width: 120, borderRadius: 12, border: '1px solid #ccc'}} />
        </div>
        <ul style={{textAlign: 'left', marginTop: 16}}>
          <li>Door-to-door laundry service by a local lady</li>
          <li>Wash at your home <b>or</b> we pick up & deliver (no delivery charge!)</li>
          <li>Low cost: <b>Per bucket rate</b> (mention in form)</li>
          <li>Service available <b>within 1km</b> of our location</li>
        </ul>
        <p style={{margin: '1rem 0', color: '#444'}}>Fill the form below to book your laundry service. We will contact you and arrange everything!</p>
        <button
          onClick={() => setShowLaundryForm(true)}
          style={{
            display: 'inline-block',
            background: '#4caf50',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: 8,
            fontWeight: 'bold',
            fontSize: 18,
            textDecoration: 'none',
            marginTop: 12,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Book Laundry Service
        </button>
        {/* Laundry Booking Modal */}
        {showLaundryForm && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{background: '#fff', padding: 32, borderRadius: 16, minWidth: 320, boxShadow: '0 4px 24px #0002', position: 'relative', maxWidth: 400}}>
              <button onClick={() => setShowLaundryForm(false)} style={{position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888'}}>×</button>
              <h3 style={{marginBottom: 8, color: '#388e3c'}}>Laundry Booking Form</h3>
              <div style={{marginBottom: 12, color: '#444', fontSize: 15}}>
                Please fill in your details below. All fields are required.
              </div>
              <form onSubmit={handleLaundrySubmit}>
                <div style={{marginBottom: 12}}>
                  <label style={{fontWeight: 500}}>Full Name:<br/>
                    <input name="name" value={laundryForm.name} onChange={handleLaundryInput} required placeholder="Enter your full name" style={{width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4}} />
                  </label>
                </div>
                <div style={{marginBottom: 12}}>
                  <label style={{fontWeight: 500}}>WhatsApp Number:<br/>
                    <input name="whatsapp" value={laundryForm.whatsapp} onChange={handleLaundryInput} required pattern="[0-9]{10,}" title="Enter valid WhatsApp number" placeholder="e.g. 9876543210" style={{width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4}} />
                  </label>
                </div>
                <div style={{marginBottom: 12}}>
                  <label style={{fontWeight: 500}}>Location (address or landmark):<br/>
                    <input name="location" value={laundryForm.location} onChange={handleLaundryInput} required placeholder="e.g. Near City Mall, Sector 5" style={{width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4}} />
                  </label>
                </div>
                <div style={{marginBottom: 12}}>
                  <label style={{fontWeight: 500}}>Number of Buckets:<br/>
                    <input name="buckets" value={laundryForm.buckets} onChange={handleLaundryInput} required type="number" min="1" placeholder="e.g. 2" style={{width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4}} />
                  </label>
                </div>
                <button type="submit" style={{background: '#4caf50', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: 8, fontWeight: 'bold', fontSize: 16, cursor: 'pointer', marginTop: 8}}>Submit</button>
                {formSubmitted && <div style={{color: '#388e3c', marginTop: 12}}>Booking submitted!</div>}
              </form>
            </div>
          </div>
        )}
      </section>
          </div>

          <div className="dropdown">
            <button className="dropbtn">AI Trainer Platforms</button>
            <div className="dropdown-content">
              <p>Outlier</p>
              <p>RWS</p>
              <p>Innodata</p>
              <p>Turing</p>
            </div>
          </div>
        </div>

        {/* ✅ FIXED POSITION (MOVED OUTSIDE OVERLAY) */}
        <section className="highlight">
          <h2>What I Do</h2>
          <div className="grid">
            <div className="card">⚡ AI Solutions</div>
            <div className="card">☁️ Cloud Architecture</div>
            <div className="card">📊 Dashboard Engineering</div>
          </div>
        </section>

        {/* ✅ MAIN CONTENT */}
        <div className="overlay">
          <div className="logo-section">
            <img src={companyLogoPrevious} alt="" className="company-logo" />
            <img src={companyLogoCurrent} alt="" className="company-logo" />
          </div>

          <div className="certificates-marquee">
            <div className="marquee-track">
              {certificates.concat(certificates).map((cert, idx) => (
                <img key={idx} src={cert} alt="" className="certificate" />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ✅ NEW APPRECIATION SECTION */}
      <section
        className="appreciation-section"
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
        }}
      >
        <div className="overlay">
          <h2>Client Appreciation</h2>
          <p>
            Recognition from clients for delivering high-impact AI and cloud solutions.
          </p>
        </div>
      </section>

      {/* WORK SHOWCASE */}
      <section id="work" className="section">
        <h2>My Work</h2>
        <div className="grid">
          <div className="card">
            <img src={dashboard1} alt="" />
            <h3>Service Monitoring Dashboard</h3>
            <p>Real-time monitoring system with alerts, maps, and analytics.</p>
          </div>

          <div className="card">
            <img src={dashboard2} alt="" />
            <h3>Cloud NOC Dashboard</h3>
            <p>Unified cloud monitoring platform with ticketing insights.</p>
          </div>

          <div className="card">
            <img src={Dashboard3} alt="" />
            <h3>AIOps Dashboard</h3>
            <p>Visualizes Circuits model metrics and performance trends.</p>
          </div>
          <div className="card">
            <img src={dashboard4} alt="Amazon Clone" />
            <h3>Amazon Web Page Clone</h3>
            <p>Responsive e-commerce UI clone replicating Amazon homepage design.</p>
          </div>
          <div className="card">
            <img src={Dashboard5} alt="Closed Loop" />
            <h3>Closed Loop</h3>
            <p>Closed Loop Automation Effectiveness Dashboard.</p>
          </div>
        </div>
      </section>

      {/* ✅ PROJECTS */}
      <section className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">AI-Driven Workflow Automation</div>
          <div className="card">SQL / SSIS Project</div>
          <div className="card">Referral System – Financial Client</div>
          <div className="card">Real-Time E-Commerce Security Dashboard</div>
          <div className="card">AI Copilot for Secure Plugin Development</div>
          <div className="card">Wireless Tester</div>
        </div>

        <div className="links">
          <p>● Amazon Web Page Clone and JTest</p>
          <p>● Magento Automation</p>
          <p>● Tic Tac Toe (Game App)</p>
          <p>
            ● <a href="https://github.com/Siddhartha01Sinha" target="_blank" rel="noreferrer">GitHub Repo 1</a>
          </p>
          <p>
            ● <a href="https://github.com/SiddharthaSinhaGitHub" target="_blank" rel="noreferrer">GitHub Repo 2</a>
          </p>
          <p>● Ansys Maxwell Design Project</p>
          <p>● Developing my own AI tools (Personal Assistant)</p>
        </div>
      </section>


      {/* ✅ AWARDS */}
      <section className="section">
        <h2>Awards</h2>
        <div className="grid">
          <div className="card">🏆 Topper of Branch (Gaya College Of Engineering, Govt. Bihat)</div>
          <div className="card">🏆 Star Performer Award (Infosys)</div>
          <div className="card">🏆 INSTA Award for Excellence (Infosys)</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">AI Model Integration & Training</div>
          <div className="card">React Dashboard Development</div>
          <div className="card">Microservices & API Development</div>
          <div className="card">Cloud Deployment (AWS, Azure)</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>IBM India Pvt. Ltd.</h3>
          <p>Application Developer | 2026 - Present</p>
        </div>

        <div className="card">
          <h3>Infosys Ltd.</h3>
          <p>Senior Systems Engineer | 2022 - 2025</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <div className="tags">
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>AI / LLM</span>
        </div>
      </section>
      
      <section className="section resume-section">
        <h2>Resume</h2>

        <div className="resume-card">
          <h3>Professional Resume</h3>

          <p>
            View or download my complete professional resume including
            experience, projects, certifications, and technical skills.
          </p>

          <div className="resume-buttons">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>

            <a
              href={resumePdf}
              download
              className="btn"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: sidsinha01beg@gmail.com</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/siddhartha-sinha-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SiddharthaSinhaGitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p>Phone: 9731227618</p>
      </section>
      <ChatBot />
    </div>
  );
}
