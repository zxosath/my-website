import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, FileText, Shield, Eye, Lock, Users, AlertCircle, CheckCircle, HelpCircle, DollarSign, BarChart3, MessageCircle } from 'lucide-react';
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
            <a href="#/" className="logo-container">
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
                      <a href="#/help-center"><HelpCircle size={16} /> Help Center</a>
                      <a href="#/legal" className="active"><FileText size={16} /> Legal</a>
                      <a href="#/about"><Users size={16} /> About</a>
                      <a href="#/contact"><MessageCircle size={16} /> Contact</a>
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
            <h1>Legal Information</h1>
            <p>Our commitment to transparency, security, and compliance in AWS cost optimization</p>
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
                {section.title}
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
              <h2>Terms of Service</h2>
              <div className="legal-text">
                <h3>1. Agreement to Terms</h3>
                <p>By accessing and using VIRIDITY's AWS cost optimization services ("Services"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all users of our Services.</p>

                <h3>2. Description of Services</h3>
                <p>VIRIDITY provides expert AWS cost optimization services including:</p>
                <ul>
                  <li>Manual analysis and optimization of AWS resources</li>
                  <li>Reserved Instance and Savings Plans management</li>
                  <li>Cost monitoring and reporting</li>
                  <li>Strategic consultation on AWS spending</li>
                </ul>

                <h3>3. Performance-Based Pricing</h3>
                <p>Our pricing model is based on a percentage of verified cost savings achieved. You only pay when we deliver measurable results. Detailed billing information will be provided monthly with transparent reporting of all optimizations implemented.</p>

                <h3>4. Access and Permissions</h3>
                <p>To provide our Services, you grant VIRIDITY limited, read-only access to your AWS billing and usage data. We require only the minimum permissions necessary to analyze and optimize your costs. You retain full control over your AWS infrastructure at all times.</p>

                <h3>5. Intellectual Property</h3>
                <p>All optimization strategies, methodologies, and proprietary techniques developed by VIRIDITY remain our intellectual property. Any insights or recommendations provided are licensed for your use in connection with your AWS infrastructure.</p>

                <h3>6. Limitation of Liability</h3>
                <p>VIRIDITY's liability is limited to the fees paid for our Services in the preceding 12 months. We are not liable for any indirect, consequential, or punitive damages arising from the use of our Services.</p>

                <h3>7. Termination</h3>
                <p>Either party may terminate this agreement with 30 days written notice. Upon termination, you retain all cost savings and optimizations implemented during our engagement.</p>

                <h3>8. Governing Law</h3>
                <p>These Terms are governed by the laws of Delaware, United States. Any disputes will be resolved through binding arbitration.</p>

                <p className="last-updated">Last updated: December 2024</p>
              </div>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div className="legal-section">
              <h2>Privacy Policy</h2>
              <div className="legal-text">
                <h3>Information We Collect</h3>
                <p>VIRIDITY collects only the information necessary to provide AWS cost optimization services:</p>
                <ul>
                  <li><strong>AWS Usage Data:</strong> Billing information, resource utilization metrics, and service configurations</li>
                  <li><strong>Account Information:</strong> Contact details, company information, and user preferences</li>
                  <li><strong>Communication Data:</strong> Support tickets, consultation notes, and service communications</li>
                </ul>

                <h3>How We Use Your Information</h3>
                <p>Your information is used exclusively for:</p>
                <ul>
                  <li>Analyzing AWS usage patterns and identifying optimization opportunities</li>
                  <li>Implementing cost-saving strategies and monitoring results</li>
                  <li>Providing reports, insights, and recommendations</li>
                  <li>Delivering customer support and consultation services</li>
                </ul>

                <h3>Data Security</h3>
                <p>We implement enterprise-grade security measures including:</p>
                <ul>
                  <li>End-to-end encryption for all data transmission</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication and access controls</li>
                </ul>

                <h3>Data Sharing</h3>
                <p>VIRIDITY does not sell, rent, or share your data with third parties except:</p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>As required by law or legal process</li>
                  <li>With trusted service providers under strict confidentiality agreements</li>
                </ul>

                <h3>Data Retention</h3>
                <p>We retain your data only as long as necessary to provide our Services and comply with legal obligations. You may request data deletion at any time, subject to legal retention requirements.</p>

                <h3>Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and review your personal data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Delete your personal data (subject to legal requirements)</li>
                  <li>Export your data in a portable format</li>
                </ul>

                <p className="last-updated">Last updated: December 2024</p>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="legal-section">
              <h2>Security & Compliance</h2>
              <div className="legal-text">
                <h3>Security Framework</h3>
                <p>VIRIDITY maintains comprehensive security controls designed to protect your sensitive AWS data:</p>
                
                <div className="compliance-grid">
                  <div className="compliance-item">
                    <CheckCircle size={24} />
                    <h4>SOC 2 Type II</h4>
                    <p>Audited annually for security, availability, and confidentiality controls</p>
                  </div>
                  <div className="compliance-item">
                    <CheckCircle size={24} />
                    <h4>ISO 27001</h4>
                    <p>International standard for information security management systems</p>
                  </div>
                  <div className="compliance-item">
                    <CheckCircle size={24} />
                    <h4>GDPR Compliant</h4>
                    <p>Full compliance with European data protection regulations</p>
                  </div>
                  <div className="compliance-item">
                    <CheckCircle size={24} />
                    <h4>AWS Security Best Practices</h4>
                    <p>Following AWS Well-Architected Security Pillar guidelines</p>
                  </div>
                </div>

                <h3>Access Controls</h3>
                <p>We implement the principle of least privilege:</p>
                <ul>
                  <li><strong>Read-Only Access:</strong> VIRIDITY only requires read access to billing and usage data</li>
                  <li><strong>Role-Based Permissions:</strong> Access limited to specific AWS services needed for optimization</li>
                  <li><strong>Time-Limited Sessions:</strong> All access sessions are automatically expired</li>
                  <li><strong>Audit Logging:</strong> Complete audit trail of all access and activities</li>
                </ul>

                <h3>Data Encryption</h3>
                <ul>
                  <li><strong>In Transit:</strong> TLS 1.3 encryption for all data transmission</li>
                  <li><strong>At Rest:</strong> AES-256 encryption for stored data</li>
                  <li><strong>Key Management:</strong> HSM-backed key management with regular rotation</li>
                </ul>

                <h3>Incident Response</h3>
                <p>Our security incident response process includes:</p>
                <ul>
                  <li>24/7 security monitoring and alerting</li>
                  <li>Rapid incident containment and remediation</li>
                  <li>Immediate customer notification for any data-related incidents</li>
                  <li>Post-incident analysis and improvement implementation</li>
                </ul>

                <h3>Compliance Certifications</h3>
                <p>VIRIDITY undergoes regular third-party security assessments and maintains current certifications. Compliance reports are available upon request for enterprise customers.</p>

                <p className="last-updated">Last updated: December 2024</p>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className="legal-section">
              <h2>Data Processing Agreement</h2>
              <div className="legal-text">
                <h3>Purpose and Scope</h3>
                <p>This Data Processing Agreement ("DPA") governs VIRIDITY's processing of personal data in connection with our AWS cost optimization services.</p>

                <h3>Roles and Responsibilities</h3>
                <ul>
                  <li><strong>You (Data Controller):</strong> Determine the purposes and means of processing personal data</li>
                  <li><strong>VIRIDITY (Data Processor):</strong> Process personal data on your behalf according to your instructions</li>
                </ul>

                <h3>Data Processing Details</h3>
                <div className="data-table">
                  <div className="data-row">
                    <strong>Subject Matter:</strong>
                    <span>AWS cost optimization services</span>
                  </div>
                  <div className="data-row">
                    <strong>Duration:</strong>
                    <span>Term of the service agreement plus retention period</span>
                  </div>
                  <div className="data-row">
                    <strong>Purpose:</strong>
                    <span>Cost analysis, optimization recommendations, and savings monitoring</span>
                  </div>
                  <div className="data-row">
                    <strong>Categories of Data:</strong>
                    <span>AWS usage data, billing information, contact details</span>
                  </div>
                  <div className="data-row">
                    <strong>Data Subjects:</strong>
                    <span>Your employees and authorized users</span>
                  </div>
                </div>

                <h3>Security Measures</h3>
                <p>VIRIDITY implements appropriate technical and organizational measures to ensure data security, including:</p>
                <ul>
                  <li>Encryption of personal data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Staff training on data protection</li>
                </ul>

                <h3>Sub-processors</h3>
                <p>VIRIDITY may engage sub-processors to assist in providing services. All sub-processors are contractually bound to the same data protection obligations.</p>

                <h3>Data Subject Rights</h3>
                <p>VIRIDITY will assist you in responding to data subject requests including rights to access, rectification, erasure, and data portability.</p>

                <h3>Data Breach Notification</h3>
                <p>VIRIDITY will notify you without undue delay upon becoming aware of any personal data breach, providing all relevant information about the incident.</p>

                <h3>International Transfers</h3>
                <p>Any international data transfers are conducted using appropriate safeguards such as Standard Contractual Clauses or adequacy decisions.</p>

                <p className="last-updated">Last updated: December 2024</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="legal-contact">
        <div className="container">
          <div className="contact-content">
            <h2>Questions about our legal terms?</h2>
            <p>Our legal and compliance team is available to answer any questions about our terms, privacy practices, or security measures.</p>
            <div className="contact-actions">
              <button className="btn-primary">Contact Legal Team</button>
              <button className="btn-secondary">Request Compliance Documentation</button>
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

export default Legal;