import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Users, MessageCircle, FileText, HelpCircle, BarChart3, Activity, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="logo-container">
              <img src="/IMG_3102.PNG" alt="VIRIDITY Logo" className="logo-icon" />
              <h2>VIRIDITY</h2>
            </a>
          </div>
          
          <nav className="nav-desktop">
            <div className="nav-item dropdown" onMouseEnter={() => setProductDropdownOpen(true)} onMouseLeave={() => setProductDropdownOpen(false)}>
              <span>Product <ChevronDown size={16} /></span>
              {productDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h4>Amazon Web Services</h4>
                    <div className="resource-links">
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/our-process'); setProductDropdownOpen(false); }}><Activity size={16} /> Our Process</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/how-we-save'); setProductDropdownOpen(false); }}><DollarSign size={16} /> How we save</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/reporting'); setProductDropdownOpen(false); }}><BarChart3 size={16} /> Reporting</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <div className="resource-links">
                      <a href="#" onClick={(e) => { e.preventDefault(); setProductDropdownOpen(false); }}><span style={{opacity: 0.5}}>Google Cloud - Coming soon</span></a>
                      <a href="#" onClick={(e) => { e.preventDefault(); setProductDropdownOpen(false); }}><span style={{opacity: 0.5}}>Microsoft Azure - Coming soon</span></a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="nav-item dropdown" onMouseEnter={() => setResourcesDropdownOpen(true)} onMouseLeave={() => setResourcesDropdownOpen(false)}>
              <span>Resources <ChevronDown size={16} /></span>
              {resourcesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <div className="resource-links">
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/help-center'); setResourcesDropdownOpen(false); }}><HelpCircle size={16} /> Help Center</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/legal'); setResourcesDropdownOpen(false); }}><FileText size={16} /> Legal</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }} className="active"><Users size={16} /> About</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); setResourcesDropdownOpen(false); }}><MessageCircle size={16} /> Contact</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); }} className="nav-item">Pricing</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary desktop-only">Free Analysis</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Product</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Resources</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); setMobileMenuOpen(false); }}>Pricing</a>
            </div>
            <div className="mobile-menu-actions">
              <button className="btn-primary">Free Analysis</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About</h1>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h1>Our mission</h1>
              <p className="mission-lead">The cloud is incredibly powerful, but operating it cost effectively is complicated and time-consuming.</p>
              <p className="mission-statement">Our mission is to remove complexity and deliver savings outcomes so every business can prosper in the cloud.</p>
              
              <h2>Our Story</h2>
              <p>We're a group of technologists and economics geeks who love solving problems and serving customers. Before founding VIRIDITY, we worked at some of the world's largest AWS Premier Consulting Partners and led cloud cost optimization initiatives for Fortune 500 companies.</p>
              <p>From serving thousands of customers at consulting firms to running our own optimization service, we saw firsthand the importance of cost optimization, but also how hard it was to master. Doing it well requires a rare blend of finance and engineering expertise. Over the years, we've developed extensive experience with virtually every cost optimization solution, most of which overload users with recommendations and lack context to see the complete picture. DevOps and FinOps teams are smart—but busy—and in a world of increasingly complex and dynamic cloud environments, ongoing cloud economic optimization requires an approach that unifies the technical and financial worlds.</p>
              <p>We knew there had to be a better way—so we started VIRIDITY. We combine expert human analysis with proven methodologies to help you conquer cloud economics. We want your business to prosper in the cloud—not only by saving you money, but also by giving you time back to focus on the important things.</p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <Users size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); }}>Pricing</a>
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <div className="footer-links">
                <a href="#">AWS Cost Optimization Blog</a>
                <a href="#">Resource Center</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/help-center'); }}>Help Center</a>
                <a href="#">Status</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact Us</a>
                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/legal'); }}>Legal</a>
                <a href="#">Trust Center</a>
                <a href="#">Free Analysis</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 VIRIDITY, Inc. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Website Terms</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;