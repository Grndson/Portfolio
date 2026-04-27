import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// No image imports needed — all images are in /public and referenced by path directly

import allProjects from './projects.js';
// eslint-disable-next-line react-refresh/only-export-components
export { allProjects };

// ─── Static data ─────────────────────────────────────────────────────────────
const TABS = ['skills', 'experience', 'education'];

const TAB_CONTENT = {
  skills: [
    { label: 'Frontend Development', detail: 'HTML5, CSS3, JavaScript (ES6+), React.js' },
    { label: 'UI/UX Design', detail: 'Figma, Canva, responsive design principles' },
    { label: 'Version Control', detail: 'Git, GitHub' },
    { label: 'Databases (Basics)', detail: 'SQL, data handling, system data verification' },
    { label: 'Networking & IT Skills', detail: 'Router setup, LAN/Wi-Fi configuration, user access control' },
    { label: 'System Support', detail: 'Troubleshooting, installation, software upgrades, remote support' },
    { label: 'Security & Backup', detail: 'Backup routines, versioning, system security practices' },
  ],
  experience: [
    { label: 'August 2025 – Present', detail: 'Revamping House of Akoma website' },
    { label: 'January 2025 – Present', detail: 'Developed a front-end real estate platform for Seven Flags' },
    { label: 'September – November 2023', detail: 'Industrial Attachment at Naya Solutions, Nairobi – Configured routers and LiteBeams, supported internal tools' },
    { label: 'August – October 2022', detail: 'Internship at Transocean Marine Surveyors (EA), Mombasa – Software installation, testing, and documentation' },
  ],
  education: [
    { label: 'September 2021 – June 2025', detail: 'BSc. Business Information Technology, JKUAT' },
    { label: '2017 – 2020', detail: 'KCSE, Nanyuki High School' },
  ],
};

const SERVICES = [
  {
    icon: 'fa-solid fa-code',
    title: 'Website Development',
    summary: 'I design and build websites in collaboration with a backend developer to deliver full-stack solutions.',
    details: [
      'Responsive layouts for mobile, tablet, and desktop',
      'React.js single-page applications',
      'Performance-optimised, accessible HTML & CSS',
      'Integration with backend APIs and databases',
      'Deployment on Vercel, Netlify, or shared hosting',
    ],
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'UI Design',
    summary: 'I create clean and functional interface designs using Figma, tailored for both web and mobile screens.',
    details: [
      'Wireframes and high-fidelity mockups in Figma',
      'Component libraries and design systems',
      'User flow diagrams',
      'Handoff-ready assets for developers',
    ],
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Technical Support',
    summary: 'I offer basic IT support including software setup, system troubleshooting, and device configuration.',
    details: [
      'Router and LiteBeam setup',
      'LAN / Wi-Fi configuration',
      'Software installation and upgrades',
      'User access control and basic security',
      'Remote desktop support',
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const TabContent = ({ items, isActive }) => (
  <div className={`tab-contents ${isActive ? 'active-tab' : ''}`}>
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <span>{item.label}</span>
          <br />
          {item.detail}
        </li>
      ))}
    </ul>
  </div>
);

const ServiceCard = ({ icon, title, summary, details }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="service-card">
      <i className={icon}></i>
      <h2>{title}</h2>
      <p>{summary}</p>
      <button
        className="service-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {open ? 'Hide details' : "What's included"}{' '}
        <i className={`fas fa-chevron-${open ? 'up' : 'down'}`} style={{ fontSize: '11px' }}></i>
      </button>
      <div className={`service-details ${open ? 'open' : ''}`}>
        <ul>
          {details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const featuredProjects = allProjects.slice(0, 3);

  useEffect(() => {
    const handleClickOutside = () => {
      if (sideMenuOpen) setSideMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sideMenuOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/xdkdwvwv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        setMessage('Message sent successfully!');
        e.target.reset();
      } else {
        setFormStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setMessage('Failed to send message.');
    } finally {
      setTimeout(() => { setFormStatus('idle'); setMessage(''); }, 5000);
    }
  };

  return (
    <div className="App">

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div id="header">
        <div className="container">
          <nav>
            <img src="/Logo.svg" alt="Logo" className="logo" />
            <ul id="sidemenu" style={{ right: sideMenuOpen ? '0' : '-200px' }}>
              <li><a href="#header"    onClick={() => setSideMenuOpen(false)}>Home</a></li>
              <li><a href="#about"     onClick={() => setSideMenuOpen(false)}>About</a></li>
              <li><a href="#services"  onClick={() => setSideMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setSideMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact"   onClick={() => setSideMenuOpen(false)}>Contact</a></li>
              <i className="fas fa-times" onClick={(e) => { e.stopPropagation(); setSideMenuOpen(false); }} />
            </ul>
            <i className="fas fa-bars" onClick={(e) => { e.stopPropagation(); setSideMenuOpen(true); }} />
          </nav>
          <div className="header-text">
            <p>Fullstack Developer</p>
            <h1>Hello, I'm <span>Edmund</span><br />Vuko From Nairobi, Kenya</h1>
          </div>
        </div>
      </div>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="/user.png" alt="Edmund Vuko" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                I am a recent graduate from Jomo Kenyatta University of Agriculture &amp; Technology (JKUAT),
                eager to apply the knowledge and skills I gained in both academic and practical environments,
                specifically in the IT and business fields. My strength is understanding what people need and
                delivering results that match those expectations.
              </p>
              <div className="tab-title">
                {TABS.map((tab) => (
                  <p
                    key={tab}
                    className={`tab-links ${activeTab === tab ? 'active-link' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </p>
                ))}
              </div>
              {TABS.map((tab) => (
                <TabContent key={tab} items={TAB_CONTENT[tab]} isActive={activeTab === tab} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Portfolio ────────────────────────────────────────────────────── */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            {featuredProjects.map((project) => (
              <div className="work" key={project.id}>
                <img src={project.img} alt={project.title} />
                <div className="layer">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="btn">See more</Link>
        </div>
      </div>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:vukoedmund670@gmail.com">vukoedmund670@gmail.com</a>
              </p>
              <p>
                <i className="fa-brands fa-whatsapp"></i>
                <a href="https://wa.me/254717280051" target="_blank" rel="noopener noreferrer">+254 717 280 051</a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+254708201839">+254 708 201 839</a>
              </p>
              <div className="social-icons">
                <a href="https://instagram.com/_vuko._" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/Grndson" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/edmundvuko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <a href="/CV.pdf" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <input type="text"  name="name"    placeholder="Your Name"    required />
                <input type="email" name="email"   placeholder="Your Email"   required />
                <textarea           name="message" placeholder="Your Message" rows="6" required />
                <button type="submit" className="btn btn2" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
              {message && <span id="msg">{message}</span>}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; Edmund {new Date().getFullYear()}</p>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;