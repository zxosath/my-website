import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronDown, Menu, X, DollarSign, Activity, BarChart3, TrendingUp, HelpCircle, FileText, Building, Users } from 'lucide-react';
import './App.css';

function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9a066d3d-5907-438e-b186-f389e3dd4b4d',
          ...data
        })
      });
      
      if (response.ok) {
        setShowSuccessModal(true);
        e.target.reset();
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

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
                    <h4>AWS Cost Optimization</h4>
                    <div className="cloud-providers">
                      <div className="provider">
                        <h5>Amazon Web Services</h5>
                        <p>EC2, Lambda, Fargate Cost Optimization</p>
                        <p>RDS, ElastiCache, MemoryDB, Redshift, OpenSearch</p>
                        <p>Savings Plans & Reserved Instances Management</p>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Billing Optimization</h4>
                    <div className="resource-links">
                      <a href="#"><DollarSign size={16} /> Expert AWS Cost Management</a>
                      <a href="#"><Activity size={16} /> Strategic Resource Optimization</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Reporting & Insights</h4>
                    <div className="resource-links">
                      <a href="#"><BarChart3 size={16} /> Cost Allocation & Showback</a>
                      <a href="#"><TrendingUp size={16} /> Savings Analytics & Forecasting</a>
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
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }}><Building size={16} /> About</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); setResourcesDropdownOpen(false); }}><Users size={16} /> Contact</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); }} className="nav-item active">Pricing</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary desktop-only" onClick={() => scrollToSection('cta')}>Free Analysis</button>
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
              <button className="btn-primary" onClick={() => { scrollToSection('cta'); setMobileMenuOpen(false); }}>Free Analysis</button>
            </div>
          </div>
        )}
      </header>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2 className="animate-on-scroll">Stop Overpaying AWS. Start Saving Today.</h2>
            <p className="animate-on-scroll">While others charge you to manage your cloud costs, we only get paid when we actually save you money. No risk. No upfront fees. Just guaranteed AWS savings.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Free AWS Cost Analysis</h3>
              </div>
              <div className="pricing-badge">Free</div>
              <div className="pricing-card-content">
                <h4>Discover Your Hidden Savings</h4>
                <p>See exactly how much you're overpaying AWS and get a personalized savings roadmap. Most companies find significant savings opportunities they never knew existed.</p>
                <ul>
                  <li>Deep-dive AWS spending analysis</li>
                  <li>Compare against industry benchmarks</li>
                  <li>see potential savings potential</li>
                  <li>Read-only access - we never touch your infrastructure</li>
                </ul>
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Your Free Analysis</button>
              </div>
            </div>

            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>VIRIDITY Expert Optimization</h3>
              </div>
              <div className="pricing-badge">Percentage of Savings</div>
              <div className="pricing-card-content">
                <h4>Expert AWS Cost Optimization</h4>
                <p>Our expert team manually optimizes your AWS spend through strategic analysis and hands-on optimization, delivering consistent savings while you focus on building your business.</p>
                <ul>
                  <li>We only take a percentage of your savings, no overhead costs</li>
                  <li>Expert manual optimization by certified professionals</li>
                  <li>Real-time savings tracking and reporting</li>
                  <li>Zero infrastructure access needed</li>
                  <li>Ongoing optimization support</li>
                </ul>
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VIRIDITY is Different Section */}
      <section className="pricing-benefits-section">
        <div className="container">
          <div className="pricing-benefits animate-on-scroll">
            <h3>Why VIRIDITY is Different</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>Zero Risk, Maximum Reward</h4>
                  <p>No upfront costs, no hidden fees, no minimum spend. We only succeed when you save money.</p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>Expert-Driven Optimization</h4>
                  <p>Our certified AWS professionals work continuously to find and capture new savings opportunities through strategic analysis.</p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>Proven Results</h4>
                  <p>Average customer sees significant savings on AWS costs within the first month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Savings Compound Daily Section */}
      <section className="pricing-stats-section">
        <div className="container">
          <div className="pricing-stats animate-on-scroll">
            <h3>Your Savings Compound Daily</h3>
            <p>VIRIDITY doesn't just find savings—we capture them through expert analysis and strategic optimization. Our team continuously monitors your AWS spend, ensuring you never overpay again.</p>
            <p>Every day, our experts analyze your usage patterns to identify new savings opportunities, applying the right optimizations at the right time through hands-on management.</p>
            <div className="stats-highlight">
              <h4>Risk-Free Guarantee</h4>
              <div className="highlight-amount">Pay Only for Results</div>
              <p>We only charge a percentage of the actual savings we deliver. If we don't save you money, you don't pay us anything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Stop Overpaying AWS Section */}
      <section className="pricing-cta-section">
        <div className="container">
          <div className="pricing-cta animate-on-scroll">
            <h3>Ready to Stop Overpaying AWS?</h3>
            <p>Join hundreds of companies already saving on their AWS bills. Get your free analysis and see your savings potential in minutes.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Free Analysis</button>
              <button className="btn-secondary" onClick={() => scrollToSection('cta')}>See Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container">
          <div id="cta" className="cta" style={{ background: 'transparent', color: 'white' }}>
            <div className="cta-wrapper">
              <div className="cta-content-left animate-on-scroll">
                <h2 className="cta-headline" style={{ color: 'white' }}>
                  Unlock Your Hidden
                  <span className="highlight-gradient"> AWS Savings</span>
                </h2>

                <p className="cta-subtext" style={{ color: '#e2e8f0' }}>
                  Get a comprehensive analysis of your AWS infrastructure and discover optimization opportunities worth thousands of dollars per month.
                </p>
              </div>
              
              <div className="cta-form-container animate-on-scroll">
                <div className="cta-form" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="form-header">
                    <h3 style={{ color: 'white' }}>Submit the form to request your free AWS savings analysis.</h3>
                  </div>

                  <form onSubmit={handleFormSubmit}>
                    <input type="hidden" name="access_key" value="9a066d3d-5907-438e-b186-f389e3dd4b4d" />
                    
                    <div className="form-group">
                      <div className="form-row">
                        <div className="input-group">
                          <input type="text" name="First Name" placeholder="First Name*" required style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }} />
                        </div>
                        <div className="input-group">
                          <input type="text" name="Last Name" placeholder="Last Name*" required style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }} />
                        </div>
                      </div>
                    </div>

                    <div className="input-group">
                      <input type="email" name="Email" placeholder="Work Email*" required style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }} />
                    </div>

                    <div className="input-group">
                      <select name="Monthly Cloud Spend" required style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white' }}>
                        <option value="">Please Select</option>
                        <option value="Less than $10,000 spend">Less than $10,000 spend</option>
                        <option value="$10,000 to $50,000">$10,000 to $50,000</option>
                        <option value="$50,000 to $100,000">$50,000 to $100,000</option>
                        <option value="$100,000 to $500,000">$100,000 to $500,000</option>
                        <option value="$500,000 to $1,000,000">$500,000 to $1,000,000</option>
                        <option value="$1,000,000 to $2,000,000">$1,000,000 to $2,000,000</option>
                        <option value="$2,000,000 to $5,000,000">$2,000,000 to $5,000,000</option>
                        <option value="$5,000,000 to $10,000,000">$5,000,000 to $10,000,000</option>
                        <option value="More than $10,000,000 spend">More than $10,000,000 spend</option>
                      </select>
                    </div>

                    <button type="submit" className="btn-submit" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white' }}>
                      <span>Get Started</span>
                    </button>
                  </form>
                </div>
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
              <div className="footer-logo">
                <img src="/IMG_3102.PNG" alt="VIRIDITY Logo" className="footer-logo-icon" />
                <h3>VIRIDITY</h3>
              </div>
              <div className="footer-links">
                <a href="#/pricing">Pricing</a>
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">AWS Cost Optimization Blog</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Actions</h4>
              <div className="footer-links">
                <a href="#" onClick={() => scrollToSection('cta')}>Free Analysis</a>
                <a href="#">Start for Free</a>
                <a href="#" onClick={() => scrollToSection('cta')}>AWS Cost Analysis</a>
                <a href="#">Become a Partner</a>
                <a href="#">Resource Center</a>
                <a href="#">AWS Cost Optimization</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#">Contact Us</a>
                <a href="#">Careers</a>
                <a href="#">Legal</a>
                <a href="#">Status</a>
                <a href="#">Help Center</a>
                <a href="#">Trust Center</a>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-content">
              <h2>Application Submitted</h2>
              <p>Thank you for your interest in VIRIDITY. Our team will be in touch shortly.</p>
              
              <button 
                className="btn-primary" 
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
              
              <button 
                className="success-modal-close" 
                onClick={() => setShowSuccessModal(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing; 