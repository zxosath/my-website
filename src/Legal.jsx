import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, FileText, Shield, Eye, Lock, Users, HelpCircle, DollarSign, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Legal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('terms');
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
    { id: 'terms', title: 'Terms of Service', icon: FileText },
    { id: 'privacy', title: 'Privacy Policy', icon: Eye },
    { id: 'security', title: 'Security & Compliance', icon: Shield },
    { id: 'data', title: 'Data Processing', icon: Lock }
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
            <h1>Legal & Compliance</h1>
            <p>Transparency, security, and trust in every aspect of our AWS cost optimization services</p>
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
          {activeSection === 'terms' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Terms of Service</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>1. Agreement to Terms</h3>
                  <p>By accessing and using VIRIDITY's AWS cost optimization services ("Services"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all users of our Services.</p>
                </div>

                <div className="legal-item">
                  <h3>2. Description of Services</h3>
                  <p>VIRIDITY provides expert AWS cost optimization services including:</p>
                  <ul>
                    <li>Manual analysis and optimization of AWS resources</li>
                    <li>Reserved Instance and Savings Plans management</li>
                    <li>Cost monitoring and reporting</li>
                    <li>Strategic consultation on AWS spending</li>
                  </ul>
                </div>

                <div className="legal-item">
                  <h3>3. Performance-Based Pricing</h3>
                  <p>Our pricing model is based on a percentage of verified cost savings achieved. You only pay when we deliver measurable results. Detailed billing information will be provided monthly with transparent reporting of all optimizations implemented.</p>
                </div>

                <div className="legal-item">
                  <h3>4. Access and Permissions</h3>
                  <p>To provide our Services, you grant VIRIDITY limited, read-only access to your AWS billing and usage data. We require only the minimum permissions necessary to analyze and optimize your costs. You retain full control over your AWS infrastructure at all times.</p>
                </div>

                <div className="legal-item">
                  <h3>5. Intellectual Property</h3>
                  <p>All optimization strategies, methodologies, and proprietary techniques developed by VIRIDITY remain our intellectual property. Any insights or recommendations provided are licensed for your use in connection with your AWS infrastructure.</p>
                </div>

                <div className="legal-item">
                  <h3>6. Limitation of Liability</h3>
                  <p>VIRIDITY's liability is limited to the fees paid for our Services in the preceding 12 months. We are not liable for any indirect, consequential, or punitive damages arising from the use of our Services.</p>
                </div>

                <div className="legal-item">
                  <h3>7. Termination</h3>
                  <p>Either party may terminate this agreement with 30 days written notice. Upon termination, you retain all cost savings and optimizations implemented during our engagement.</p>
                </div>

                <div className="legal-item">
                  <h3>8. Governing Law</h3>
                  <p>These Terms are governed by the laws of Delaware, United States. Any disputes will be resolved through binding arbitration.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Privacy Policy</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>1. Information We Collect</h3>
                  <p>We collect only the information necessary to provide our AWS cost optimization services, including AWS billing data, usage metrics, and account information required for analysis and optimization.</p>
                </div>

                <div className="legal-item">
                  <h3>2. How We Use Your Information</h3>
                  <p>Your information is used exclusively for:</p>
                  <ul>
                    <li>Analyzing AWS cost optimization opportunities</li>
                    <li>Implementing and monitoring cost-saving strategies</li>
                    <li>Providing detailed reports and recommendations</li>
                    <li>Improving our optimization methodologies</li>
                  </ul>
                </div>

                <div className="legal-item">
                  <h3>3. Data Security</h3>
                  <p>We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security audits. Your AWS data is never shared with third parties.</p>
                </div>

                <div className="legal-item">
                  <h3>4. Data Retention</h3>
                  <p>We retain your data only for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.</p>
                </div>

                <div className="legal-item">
                  <h3>5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Security & Compliance</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>1. Security Standards</h3>
                  <p>VIRIDITY maintains the highest security standards to protect your AWS infrastructure and data. Our security practices are designed to meet enterprise requirements and industry best practices.</p>
                </div>

                <div className="legal-item">
                  <h3>2. Access Controls</h3>
                  <p>We implement strict access controls and authentication mechanisms. All team members undergo background checks and sign confidentiality agreements. Access to client data is limited to authorized personnel only.</p>
                </div>

                <div className="legal-item">
                  <h3>3. Data Encryption</h3>
                  <p>All data is encrypted in transit and at rest using industry-standard encryption protocols. We use secure connections and encrypted storage for all client information.</p>
                </div>

                <div className="legal-item">
                  <h3>4. Compliance</h3>
                  <p>Our practices align with major compliance frameworks including SOC 2, GDPR, and AWS security best practices. We regularly undergo security audits and assessments.</p>
                </div>

                <div className="legal-item">
                  <h3>5. Incident Response</h3>
                  <p>We maintain comprehensive incident response procedures and will notify you immediately of any security incidents that may affect your data or services.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className="legal-section">
              <div className="legal-header">
                <h2>Data Processing</h2>
                <p>Last updated: December 2024</p>
              </div>
              <div className="legal-text">
                <div className="legal-item">
                  <h3>1. Data Processing Purpose</h3>
                  <p>We process your AWS data solely for the purpose of providing cost optimization services. This includes analyzing usage patterns, identifying optimization opportunities, and implementing cost-saving strategies.</p>
                </div>

                <div className="legal-item">
                  <h3>2. Data Minimization</h3>
                  <p>We collect and process only the minimum data necessary to provide our services. We do not access or process any application data, user data, or sensitive business information beyond what's required for cost optimization.</p>
                </div>

                <div className="legal-item">
                  <h3>3. Data Processing Methods</h3>
                  <p>Our data processing involves automated analysis tools and manual expert review. All processing is conducted securely and in accordance with AWS security best practices.</p>
                </div>

                <div className="legal-item">
                  <h3>4. Data Sharing</h3>
                  <p>We do not share your data with third parties except as required by law or with your explicit consent. All data sharing is conducted under strict confidentiality agreements.</p>
                </div>

                <div className="legal-item">
                  <h3>5. Data Subject Rights</h3>
                  <p>You have the right to request information about our data processing activities, request corrections to your data, and request deletion of your data in accordance with applicable privacy laws.</p>
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