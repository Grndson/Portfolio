import React, { useState, useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import user from './assets/user.png';
import logo from './assets/Logo.svg';
import realestate from './assets/partnership1.jpg';
import cafeteria from './assets/cafateria_system.jpg';
import transocean from './assets/Transocean.jpg';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xdkdwvwv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        e.target.reset();
      } else {
        setMessage('Something went wrong. Please try again.');
      }

      setTimeout(() => {
        setMessage('');
      }, 5000);

    } catch (error) {
      setMessage('Failed to send message.');
      console.error(error);
    }
  };

  // Close side menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (sideMenuOpen) {
        setSideMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sideMenuOpen]);

  const TabContent = ({ tabId, isActive, children }) => (
    <div className={`tab-contents ${isActive ? 'active-tab' : ''}`} id={tabId}>
      {children}
    </div>
  );

  return (
    <div className="App">
      {/* Header Section */}
      <div id="header">
        <div className="container">
          <nav>
            <img src={logo} alt="Logo" className="logo" />
            <ul id="sidemenu" style={{ right: sideMenuOpen ? '0' : '-200px' }}>
              <li><a href="#header" onClick={() => setSideMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setSideMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setSideMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setSideMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => setSideMenuOpen(false)}>Contact</a></li>
              <i 
                className="fas fa-times" 
                onClick={(e) => {
                  e.stopPropagation();
                  setSideMenuOpen(false);
                }}
              ></i>
            </ul>
            <i 
              className="fas fa-bars" 
              onClick={(e) => {
                e.stopPropagation();
                setSideMenuOpen(true);
              }}
            ></i>
          </nav>
          <div className="header-text">
            <p>Front-End Developer</p>
            <h1>Hello, I'm <span>Edmund</span><br />Vuko From Nairobi, Kenya</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={user} alt="Edmund Vuko" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>I am a recent graduate from Jomo Kenyatta University of Agriculture & Technology (JKUAT), eager to apply the knowledge and skills I gained in both academic and practical environments, specifically in the IT and business fields. My strength is understanding what people need and delivering results that match those expectations. I follow instructions carefully to ensure the outcome aligns with the goal.</p>

              <div className="tab-title">
                <p 
                  className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </p>
                <p 
                  className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </p>
                <p 
                  className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </p>
              </div>

              <TabContent tabId="skills" isActive={activeTab === 'skills'}>
                <ul>
                  <li><span>Frontend Development</span><br /> HTML5, CSS3, JavaScript (ES6+), React.js</li>
                  <li><span>UI/UX Design</span><br /> Figma, Canva, responsive design principles</li>
                  <li><span>Version Control</span><br /> Git, GitHub</li>
                  <li><span>Databases (Basics)</span><br /> SQL, data handling, system data verification</li>
                  <li><span>Networking & IT Skills</span><br /> Router setup, LAN/Wi-Fi configuration, user access control</li>
                  <li><span>System Support</span><br /> Troubleshooting, installation, software upgrades, remote support</li>
                  <li><span>Security & Backup</span><br /> Backup routines, versioning, system security practices</li>
                </ul>
              </TabContent>

              <TabContent tabId="experience" isActive={activeTab === 'experience'}>
                <ul>
                  <li><span>August 2025 – Present</span><br />Revamping House of Akoma website</li>
                  <li><span>January 2025 – Present</span><br />Developed a front-end real estate platform for Seven Flags</li>
                  <li><span>September 2023 – November 2023</span><br />Industrial Attachment at Naya Solutions, Nairobi – Configured routers and LiteBeams, supported internal tools</li>
                  <li><span>August 2022 – October 2022</span><br />Internship at Transocean Marine Surveyors (EA), Mombasa – Assisted with software installation, testing, and documentation</li>
                </ul>
              </TabContent>

              <TabContent tabId="education" isActive={activeTab === 'education'}>
                <ul>
                  <li><span>September 2021 – June 2025</span><br />Bsc. Business Information Technology at JKUAT</li>
                  <li><span>2017-2020</span><br />KCSE from Nanyuki High school</li>
                </ul>
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Website Development</h2>
              <p>I design and build websites in collaboration with a backend developer to deliver full-stack solutions.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-solid fa-palette"></i>
              <h2>UI Design</h2>
              <p>I create clean and functional interface designs using Figma, tailored for both web and mobile screens.</p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-solid fa-headset"></i>
              <h2>Technical Support</h2>
              <p>I offer basic IT support including software setup, system troubleshooting, and device configuration.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My work</h1>
          <div className="work-list">
            <div className="work">
              <img src={realestate} alt="Seven Flags Real Estate Platform" />
              <div className="layer">
                <h3>Seven Flags Real Estate Platform</h3>
                <p>Front-end real estate website for Seven Flags with property listings, investment plans, and travel guide sections.</p>
                <a href="https://sevenflags.world" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={cafeteria} alt="Cafeteria Automation System" />
              <div className="layer">
                <h3>Cafeteria Automation System</h3>
                <p>Back-end system with user food ordering, admin meal management, and order tracking.</p>
                <a href="https://cafeteria.kesug.com/home.php" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={transocean} alt="Transocean Marine Surveyors E-Commerce Website" />
              <div className="layer">
                <h3>Transocean Marine Surveyors E-Commerce Website</h3>
                <p>Front-end e-commerce prototype for a marine surveying company.</p>
                <a href="https://reliable-seahorse-e3ced6.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>

      {/* Contact Section */}
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
                <a href="https://wa.me/254717280051" target="_blank" rel="noopener noreferrer">+254717280051</a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+254708201839">+254708201839</a>
              </p>
              <div className="social-icons">
                <a href="https://instagram.com/_vuko._" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/Grndson" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/edmundvuko/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <a href="CV.pdf" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg">{message}</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright ⓒ Edmund 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;