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
                  <h3>Information Collection and Processing</h3>
                  <p>VIRIDITY collects and processes only the information necessary to provide our AWS cost optimization services effectively. This includes AWS billing data, usage metrics, resource configurations, and account information required for analysis and optimization. We collect this information through secure API connections to your AWS account, direct input from you, and automated monitoring systems. We do not collect personal information beyond what is necessary for service delivery and account management.</p>
                </div>

                <div className="legal-item">
                  <h3>Types of Data We Process</h3>
                  <p>Our data processing encompasses several categories of information:</p>
                  <ul>
                    <li><strong>AWS Billing Data:</strong> Detailed billing information, cost breakdowns, service usage patterns, and payment history</li>
                    <li><strong>Resource Utilization:</strong> CPU, memory, storage, and network usage metrics for optimization analysis</li>
                    <li><strong>Service Configurations:</strong> Instance types, storage classes, networking setup, and security group configurations</li>
                    <li><strong>Account Information:</strong> Contact details, company information, user preferences, and communication history</li>
                    <li><strong>Optimization Data:</strong> Recommendations implemented, savings achieved, and performance metrics</li>
                    <li><strong>Communication Records:</strong> Support tickets, consultation notes, and service-related communications</li>
                  </ul>
                </div>

                <div className="legal-item">
                  <h3>How We Use Your Information</h3>
                  <p>Your information is used exclusively for providing and improving our AWS cost optimization services. This includes analyzing usage patterns to identify optimization opportunities, implementing cost-saving strategies, monitoring the effectiveness of optimizations, providing detailed reports and recommendations, delivering customer support and consultation services, improving our optimization methodologies and algorithms, and ensuring compliance with our legal obligations. We do not use your data for marketing purposes without explicit consent, and we never sell or rent your information to third parties.</p>
                </div>

                <div className="legal-item">
                  <h3>Data Security and Protection</h3>
                  <p>We implement comprehensive security measures to protect your data throughout its lifecycle. All data transmission is encrypted using TLS 1.3, and data at rest is encrypted using AES-256 encryption. We maintain SOC 2 Type II compliance and undergo regular security audits and penetration testing. Our security framework includes multi-factor authentication, role-based access controls, regular security training for staff, comprehensive audit logging, and incident response procedures. We maintain strict access controls and limit data access to authorized personnel only.</p>
                </div>

                <div className="legal-item">
                  <h3>Data Retention and Deletion</h3>
                  <p>We retain your data only for as long as necessary to provide our services and comply with legal obligations. Typically, this means retaining data for the duration of our service relationship plus a reasonable period for business continuity and legal compliance. You may request deletion of your data at any time, and we will process such requests within 30 days, subject to legal retention requirements. Upon service termination, we will delete or anonymize your data in accordance with our data retention policies and applicable legal requirements.</p>
                </div>

                <div className="legal-item">
                  <h3>Data Sharing and Third-Party Services</h3>
                  <p>VIRIDITY does not sell, rent, or share your data with third parties except in limited circumstances: with your explicit consent for specific purposes, as required by law or legal process, with trusted service providers under strict confidentiality agreements for essential service functions, or in connection with business transfers or acquisitions. Any third-party service providers are contractually bound to the same data protection standards and are prohibited from using your data for any purpose other than providing services to us.</p>
                </div>

                <div className="legal-item">
                  <h3>Your Privacy Rights and Choices</h3>
                  <p>You have comprehensive rights regarding your personal information, including the right to access and review the data we hold about you, request corrections to inaccurate or incomplete information, request deletion of your personal data subject to legal requirements, export your data in a portable format, restrict or object to certain processing activities, and withdraw consent where processing is based on consent. We will respond to all privacy-related requests within 30 days and provide clear explanations of our actions.</p>
                </div>

                <div className="legal-item">
                  <h3>International Data Transfers</h3>
                  <p>Your data may be processed in countries other than your own, including the United States. We ensure that all international data transfers comply with applicable data protection laws through appropriate safeguards such as Standard Contractual Clauses, adequacy decisions, or other approved transfer mechanisms. We maintain the same high standards of data protection regardless of where your data is processed, and we regularly review and update our transfer mechanisms to ensure continued compliance.</p>
                </div>

                <div className="legal-item">
                  <h3>Cookies and Tracking Technologies</h3>
                  <p>We use essential cookies and similar technologies to provide our services, improve user experience, and ensure security. These technologies help us authenticate users, maintain session information, and analyze service usage patterns. We do not use tracking cookies for advertising purposes, and we respect your browser's privacy settings. You can control cookie preferences through your browser settings, though disabling certain cookies may affect service functionality.</p>
                </div>

                <div className="legal-item">
                  <h3>Privacy Policy Updates and Communication</h3>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. We will notify you of any material changes through email, our website, or other appropriate communication channels. Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy. We encourage you to review this policy regularly and contact us with any questions about our privacy practices.</p>
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
                  <p>By accessing and using VIRIDITY's AWS cost optimization services ("Services"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all users of our Services, including any modifications or updates we may make from time to time. Your continued use of the Services after any changes constitutes acceptance of the updated Terms.</p>
                </div>

                <div className="legal-item">
                  <h3>Description of Services</h3>
                  <p>VIRIDITY provides expert AWS cost optimization services designed to reduce your cloud spending through strategic analysis and implementation. Our comprehensive service portfolio includes manual analysis and optimization of AWS resources, Reserved Instance and Savings Plans management, cost monitoring and reporting, strategic consultation, and continuous optimization support to maximize your cost savings while maintaining performance and reliability.</p>
                </div>

                <div className="legal-item">
                  <h3>Performance-Based Pricing Model</h3>
                  <p>Our innovative pricing model is based on a percentage of verified cost savings achieved through our optimization efforts. This ensures complete alignment of interests - you only pay when we deliver measurable results. We provide transparent monthly billing with detailed breakdowns of all optimizations implemented, savings achieved, and our fee calculations. Our performance-based approach eliminates upfront costs and minimum commitments, making our services accessible to organizations of all sizes.</p>
                </div>

                <div className="legal-item">
                  <h3>Access and Permissions Framework</h3>
                  <p>To provide our comprehensive optimization services, you grant VIRIDITY limited, read-only access to your AWS billing and usage data. We implement the principle of least privilege, requiring only the minimum permissions necessary to analyze costs and implement optimizations. Our access is strictly limited to billing data, usage metrics, and resource configurations - we never access application data, user data, or sensitive business information. You retain full control over your AWS infrastructure at all times, and all access is logged and auditable. We use industry-standard security practices including multi-factor authentication, encrypted connections, and regular access reviews.</p>
                </div>

                <div className="legal-item">
                  <h3>Intellectual Property and Confidentiality</h3>
                  <p>All optimization strategies, methodologies, proprietary algorithms, and techniques developed by VIRIDITY remain our exclusive intellectual property. This includes our cost analysis frameworks, optimization algorithms, and strategic planning methodologies. Any insights, recommendations, or reports provided are licensed for your use in connection with your AWS infrastructure. We maintain strict confidentiality regarding your business information, usage patterns, and optimization strategies. Both parties agree to protect each other's confidential information and use it solely for the purpose of providing and receiving our services.</p>
                </div>

                <div className="legal-item">
                  <h3>Limitation of Liability and Indemnification</h3>
                  <p>VIRIDITY's total liability is limited to the fees paid for our Services in the preceding 12 months. We are not liable for any indirect, consequential, incidental, special, or punitive damages arising from the use of our Services, including but not limited to lost profits, data loss, or business interruption. You agree to indemnify and hold harmless VIRIDITY from any claims arising from your use of our recommendations or implementation of our optimization strategies. This limitation applies to all causes of action, whether in contract, tort, or otherwise.</p>
                </div>

                <div className="legal-item">
                  <h3>Service Level Commitments and Support</h3>
                  <p>We commit to providing high-quality optimization services with regular communication and transparent reporting. Our support team is available during business hours to address questions and concerns. We provide monthly optimization reports, quarterly business reviews, and annual strategy sessions. While we strive for maximum cost savings, actual results may vary based on your infrastructure complexity, current optimization level, and AWS usage patterns. We cannot guarantee specific savings percentages but commit to thorough analysis and implementation of all viable optimization opportunities.</p>
                </div>

                <div className="legal-item">
                  <h3>Termination and Transition</h3>
                  <p>Either party may terminate this agreement with 30 days written notice. Upon termination, you retain all cost savings and optimizations implemented during our engagement. We will provide a comprehensive transition report including all optimizations implemented, current savings status, and recommendations for maintaining cost efficiency. We will assist with the orderly transition of any ongoing optimization activities and provide documentation of all implemented strategies. No refunds are provided for services already rendered, but you are not obligated to pay for any unperformed services.</p>
                </div>

                <div className="legal-item">
                  <h3>Governing Law and Dispute Resolution</h3>
                  <p>These Terms are governed by the laws of Delaware, United States, without regard to conflict of law principles. Any disputes arising from these Terms or our Services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will be conducted in Delaware, and the decision of the arbitrator will be final and binding. Both parties waive any right to a jury trial or class action lawsuit. This dispute resolution process applies to all claims, whether based in contract, tort, or otherwise.</p>
                </div>

                <div className="legal-item">
                  <h3>Force Majeure and Service Availability</h3>
                  <p>VIRIDITY is not liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to AWS service disruptions, natural disasters, government actions, or other force majeure events. We will use reasonable efforts to minimize service disruptions and provide alternative solutions when possible. Our services depend on AWS availability and API access, and we cannot guarantee uninterrupted service in the event of AWS outages or changes to their service offerings.</p>
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