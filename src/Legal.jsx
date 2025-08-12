import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, FileText, Shield, Eye, Lock, Users, HelpCircle, DollarSign, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Legal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('privacy');
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

  const legalSections = [
    { id: 'privacy', title: 'Privacy Policy', icon: Eye, description: 'Overview of the information we collect, how we use it, and circumstances when we disclose it.' },
    { id: 'terms', title: 'Service Terms', icon: FileText, description: 'Governs the use of our AWS cost optimization services and manual analysis.' }
  ];

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
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/legal'); setResourcesDropdownOpen(false); }} className="active"><FileText size={16} /> Legal</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }}><Users size={16} /> About</a>
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
      <section className="hero legal-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Legal</h1>
            <p>Transparency and trust in our AWS cost optimization services</p>
          </div>
        </div>
      </section>

      {/* Legal Navigation */}
      <section className="legal-nav">
        <div className="container">
          <div className="legal-tabs">
            {legalSections.map((section) => (
              <button
                key={section.id}
                className={`legal-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon size={20} />
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="legal-content">
        <div className="container">
          {activeSection === 'privacy' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Privacy Policy</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>Information We Collect</h3>
                  <p>We collect only the information necessary to provide our AWS cost optimization services, including AWS billing data, usage metrics, resource configurations, and account information required for analysis and optimization.</p>
                </div>

                <div className="legal-item">
                  <h3>How We Use Your Information</h3>
                  <p>Your information is used exclusively for analyzing usage patterns to identify optimization opportunities, implementing cost-saving strategies, monitoring the effectiveness of optimizations, providing detailed reports and recommendations, and improving our optimization methodologies.</p>
                </div>

                <div className="legal-item">
                  <h3>Data Security</h3>
                  <p>We implement comprehensive security measures including TLS 1.3 encryption for data transmission, AES-256 encryption for data storage, SOC 2 Type II compliance, and regular security audits. Your AWS data is never shared with third parties.</p>
                </div>

                <div className="legal-item">
                  <h3>Data Retention</h3>
                  <p>We retain your data only for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to legal retention requirements.</p>
                </div>

                <div className="legal-item">
                  <h3>Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you. We will respond to all privacy-related requests within 30 days.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'terms' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Service Terms</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>Agreement to Terms</h3>
                  <p>By using VIRIDITY's AWS cost optimization services, you agree to be bound by these Terms of Service. These Terms apply to all users of our Services, including any modifications we may make from time to time.</p>
                </div>

                <div className="legal-item">
                  <h3>Description of Services</h3>
                  <p>VIRIDITY provides expert AWS cost optimization services designed to reduce your cloud spending through strategic analysis and implementation. Our comprehensive service portfolio includes manual analysis and optimization of AWS resources, Reserved Instance and Savings Plans management, cost monitoring and reporting, strategic consultation, and continuous optimization support.</p>
                </div>

                <div className="legal-item">
                  <h3>Performance-Based Pricing</h3>
                  <p>Our pricing model is based on a percentage of verified cost savings achieved through our optimization efforts. You only pay when we deliver measurable results. We provide transparent monthly billing with detailed breakdowns of all optimizations implemented and savings achieved.</p>
                </div>

                <div className="legal-item">
                  <h3>Access and Permissions</h3>
                  <p>To provide our services, you grant VIRIDITY limited, read-only access to your AWS billing and usage data. We implement the principle of least privilege and never access application data, user data, or sensitive business information. You retain full control over your AWS infrastructure at all times.</p>
                </div>

                <div className="legal-item">
                  <h3>Intellectual Property</h3>
                  <p>All optimization strategies, methodologies, and proprietary techniques developed by VIRIDITY remain our intellectual property. Any insights or recommendations provided are licensed for your use in connection with your AWS infrastructure.</p>
                </div>

                <div className="legal-item">
                  <h3>Limitation of Liability</h3>
                  <p>VIRIDITY's liability is limited to the fees paid for our Services in the preceding 12 months. We are not liable for any indirect, consequential, or punitive damages arising from the use of our Services.</p>
                </div>

                <div className="legal-item">
                  <h3>Termination</h3>
                  <p>Either party may terminate this agreement with 30 days written notice. Upon termination, you retain all cost savings and optimizations implemented during our engagement. We will provide a comprehensive transition report.</p>
                </div>

                <div className="legal-item">
                  <h3>Governing Law</h3>
                  <p>These Terms are governed by the laws of Delaware, United States. Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Legal;