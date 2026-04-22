import React, { useState, useEffect } from "react";
import "./App.css";
import ChatBot from "./ChatBot";

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
import dashboard4 from "./assets/Dashboard4.png";

export default function App() {
  const certificates = [certificate1, certificate2, Certificate3, Certificate4];

  const backgrounds = [appreciationBg, appreciationBg2, appreciationBg3];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">

        {/* ✅ DROPDOWNS */}
        <div className="top-bar">
          <div className="dropdown">
            <button className="dropbtn">Clients</button>
            <div className="dropdown-content">
              <p>FCB - Infosys</p>
              <p>STC - IBM</p>
            </div>
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
          <div className="card">
            <img src={dashboard4} alt="Amazon Clone" />
            <h3>Amazon Web Page Clone</h3>
            <p>Responsive e-commerce UI clone replicating Amazon homepage design.</p>
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
            ● <a href="https://github.com/Siddhartha01Sinha" target="_blank">GitHub Repo 1</a>
          </p>
          <p>
            ● <a href="https://github.com/SiddharthaSinhaGitHub" target="_blank">GitHub Repo 2</a>
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
