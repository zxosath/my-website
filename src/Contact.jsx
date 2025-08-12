import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Clock, Send, Calendar, MessageCircle, HelpCircle, FileText, Users, DollarSign, BarChart3, Globe, Shield, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    awsSpend: '',
    message: '',
    contactReason: 'general'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9a066d3d-5907-438e-b186-f389e3dd4b4d',
          ...formData
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          monthlySpend: ''
        });
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our AWS optimization experts',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and get detailed responses',
      contact: 'support@viridity.com',
      availability: 'Response within 4 hours'
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a personalized AWS cost optimization session',
      contact: 'Book Online',
      availability: 'Flexible scheduling available'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      contact: 'Start Chat',
      availability: '24/7 Available'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 500\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@viridity.com'
    },
    {
      city: 'New York',
      address: '456 Fifth Avenue, Floor 20\nNew York, NY 10018',
      phone: '+1 (555) 234-5678',
      email: 'ny@viridity.com'
    },
    {
      city: 'Austin',
      address: '789 Congress Avenue, Suite 300\nAustin, TX 78701',
      phone: '+1 (555) 345-6789',
      email: 'austin@viridity.com'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'We can begin your free AWS cost analysis within 24 hours of initial contact. Most implementations start showing results within the first month.'
    },
    {
      question: 'What information do you need for the analysis?',
      answer: 'We only need read-only access to your AWS billing data. Our team will guide you through the secure setup process.'
    },
    {
      question: 'Is there a minimum AWS spend requirement?',
      answer: 'We work with organizations spending $10,000+ monthly on AWS. Our optimization strategies scale effectively for enterprise workloads.'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                      <a href="#"><BarChart3 size={16} /> Strategic Resource Optimization</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Reporting & Insights</h4>
                    <div className="resource-links">
                      <a href="#"><BarChart3 size={16} /> Cost Allocation & Showback</a>
                      <a href="#"><BarChart3 size={16} /> Savings Analytics & Forecasting</a>
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
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }}><Users size={16} /> About</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); setResourcesDropdownOpen(false); }} className="active"><MessageCircle size={16} /> Contact</a>
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
      <section className="hero contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact VIRIDITY</h1>
            <p>Ready to optimize your AWS costs? Our team of experts is here to help you start saving immediately.</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">
                  <method.icon size={32} />
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div className="method-contact">{method.contact}</div>
                <div className="method-availability">{method.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Start Your Free Analysis</h2>
              <p>Tell us about your AWS infrastructure and we'll provide a customized optimization assessment.</p>
              
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <Star size={48} />
                  </div>
                  <h3>Thank you for contacting us!</h3>
                  <p>We've received your request and our team will get back to you within 24 hours with your free AWS cost analysis.</p>
                  <button className="btn-primary" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="awsSpend">Monthly AWS Spend</label>
                    <select
                      id="awsSpend"
                      name="awsSpend"
                      value={formData.awsSpend}
                      onChange={handleInputChange}
                    >
                      <option value="">Select range...</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactReason">I'm interested in:</label>
                    <select
                      id="contactReason"
                      name="contactReason"
                      value={formData.contactReason}
                      onChange={handleInputChange}
                    >
                      <option value="analysis">Free AWS Cost Analysis</option>
                      <option value="consultation">Expert Consultation</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="demo">Product Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your AWS optimization challenges</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your current AWS setup, cost challenges, or optimization goals..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Office Locations</h3>
                {offices.map((office, index) => (
                  <div key={index} className="office">
                    <h4>{office.city}</h4>
                    <div className="office-details">
                      <div className="office-item">
                        <MapPin size={16} />
                        <span style={{whiteSpace: 'pre-line'}}>{office.address}</span>
                      </div>
                      <div className="office-item">
                        <Phone size={16} />
                        <span>{office.phone}</span>
                      </div>
                      <div className="office-item">
                        <Mail size={16} />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-card">
                <h3>Business Hours</h3>
                <div className="hours">
                  <div className="hours-item">
                    <Clock size={16} />
                    <div>
                      <div><strong>Sales & Support</strong></div>
                      <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                      <div>Saturday: 10:00 AM - 2:00 PM EST</div>
                    </div>
                  </div>
                  <div className="hours-item">
                    <MessageCircle size={16} />
                    <div>
                      <div><strong>Live Chat</strong></div>
                      <div>Available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Quick Questions</h3>
                {faqs.map((faq, index) => (
                  <div key={index} className="quick-faq">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-content">
            <h2>Need Immediate Assistance?</h2>
            <p>For existing customers experiencing urgent AWS cost issues or critical optimization needs.</p>
            <div className="emergency-actions">
              <button className="btn-primary">Call Emergency Line: +1 (555) 911-COST</button>
              <button className="btn-secondary">Start Priority Chat</button>
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
                <a href="#" onClick={() => scrollToSection('cta')}>Free Analysis</a>
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

export default Contact;