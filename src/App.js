import React, { useState, useEffect } from "react";
import "./App.css";

import companyLogoCurrent from "./assets/company-logo.jpg";
import companyLogoPrevious from "./assets/company-logo-2.jpg";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";
import Certificate3 from "./assets/Certificate3.png";
import Certificate4 from "./assets/Certificate4.png";

import appreciationBg from "./assets/appreciation-email1.png";
import appreciationBg2 from "./assets/appreciation-email2.png";
import appreciationBg3 from "./assets/appreciation-email3.png";

import dashboard1 from "./assets/dashboard1.png";
import dashboard2 from "./assets/dashboard2.png";
import Dashboard3 from "./assets/Dashboard3.png";

export default function App() {
  const certificates = [certificate1, certificate2, Certificate3, Certificate4];

  // ✅ Background images
  const backgrounds = [appreciationBg, appreciationBg2, appreciationBg3];

  // ✅ Shared slider state
  const [bgIndex, setBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  }, 3000);

  return () => clearInterval(interval);
}, [backgrounds.length]);

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section
        className="hero"
        // style={{
        //   backgroundImage: `url(${backgrounds[bgIndex]})`,
        // }}
      >
        <div className="overlay">
          <div className="logo-section">
            <img src={companyLogoPrevious} alt="" className="company-logo previous-logo" />
            <img src={companyLogoCurrent} alt="" className="company-logo current-logo" />
          </div>

          <div className="certificates-marquee">
            <div className="marquee-track">
              {certificates.concat(certificates).map((cert, idx) => (
                <img key={idx} src={cert} alt="" className="certificate" />
              ))}
            </div>
          </div>

          <h1>Siddhartha Sinha</h1>
          <h2>AI & Cloud Solutions Engineer</h2>
          <p>
            Building scalable AI-powered systems, dashboards, and cloud-native applications.
          </p>

          <div className="buttons">
            <a href="#work" className="btn primary">View Work</a>
            <a href="#contact" className="btn">Hire Me</a>
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

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: sidsinha01beg@gmail.com</p>
        <a href="https://www.linkedin.com/in/siddhartha-sinha-profile/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <p>Phone: 9731227618</p>
      </section>
    </div>
  );
}
