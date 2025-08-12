import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Users, Target, Award, Globe, TrendingUp, DollarSign, BarChart3, Shield, Zap, CheckCircle, Star, HelpCircle, FileText, MessageCircle, Linkedin, Twitter, Mail } from 'lucide-react';
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

  const stats = [
    { number: '$50M+', label: 'Total Savings Delivered' },
    { number: '95%', label: 'Average Cost Reduction' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Continuous Monitoring' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We only succeed when you save money. Our performance-based pricing ensures complete alignment with your cost optimization goals.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with SOC 2 compliance. Your data is protected with the highest security standards in the industry.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'AWS-certified professionals with deep expertise in cloud cost optimization and enterprise financial operations.'
    },
    {
      icon: Zap,
      title: 'Rapid Results',
      description: 'Start seeing cost reductions within weeks, not months. Our proven methodologies deliver immediate and sustainable savings.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Former AWS Solutions Architect with 12+ years optimizing enterprise cloud costs. Led cost optimization initiatives saving over $100M at Fortune 500 companies.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Ex-Amazon engineer specializing in Reserved Instances and Savings Plans optimization. Built automated systems managing $1B+ in AWS commitments.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Customer Success',
      image: '/api/placeholder/150/150',
      bio: 'FinOps expert with deep experience in enterprise cost management. Previously led cloud financial operations at multiple unicorn startups.',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Head of Optimization',
      image: '/api/placeholder/150/150',
      bio: 'AWS Hero and certified solutions architect. Specializes in complex enterprise architectures and commitment strategy optimization.',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'VIRIDITY was founded with the mission to democratize AWS cost optimization expertise for enterprises of all sizes.'
    },
    {
      year: '2020',
      title: 'First $10M Saved',
      description: 'Achieved our first major milestone, delivering $10M in cumulative savings across our initial client base.'
    },
    {
      year: '2021',
      title: 'SOC 2 Compliance',
      description: 'Achieved SOC 2 Type II compliance, establishing enterprise-grade security and operational controls.'
    },
    {
      year: '2022',
      title: 'AWS Advanced Partner',
      description: 'Became an AWS Advanced Consulting Partner, recognizing our expertise in cloud cost optimization.'
    },
    {
      year: '2023',
      title: '500+ Enterprise Clients',
      description: 'Scaled to serve over 500 enterprise clients, managing billions in AWS spend optimization.'
    },
    {
      year: '2024',
      title: '$50M+ Total Savings',
      description: 'Surpassed $50M in total client savings, establishing VIRIDITY as a leader in AWS cost optimization.'
    }
  ];

  const certifications = [
    'AWS Solutions Architect Professional',
    'AWS Cost Optimization Specialty',
    'FinOps Certified Practitioner',
    'SOC 2 Type II Compliant',
    'ISO 27001 Certified',
    'GDPR Compliant'
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
      <section className="hero about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About VIRIDITY</h1>
            <p>We're on a mission to democratize AWS cost optimization expertise, helping enterprises achieve maximum cloud efficiency with minimal risk.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p className="lead">To make expert AWS cost optimization accessible to every enterprise, delivering measurable savings while eliminating the complexity and risk of cloud financial management.</p>
              <p>Traditional cloud cost optimization requires deep technical expertise, constant monitoring, and significant risk management. VIRIDITY changes that by providing enterprise-grade optimization as a service, combining human expertise with proven methodologies to deliver consistent, measurable results.</p>
              <p>We believe every organization deserves access to world-class AWS cost optimization, regardless of their internal cloud expertise or team size.</p>
            </div>
            <div className="mission-visual">
              <div className="mission-graphic">
                <div className="graphic-element primary"></div>
                <div className="graphic-element secondary"></div>
                <div className="graphic-element accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <div className="placeholder-avatar">
                    <Users size={48} />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="team-social">
                    <a href={member.linkedin}><Linkedin size={20} /></a>
                    <a href={member.twitter}><Twitter size={20} /></a>
                    <a href="mailto:team@viridity.com"><Mail size={20} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2>Certifications & Compliance</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <CheckCircle size={24} />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to optimize your AWS costs?</h2>
            <p>Join hundreds of enterprises already saving millions with VIRIDITY's expert optimization services.</p>
            <div className="cta-actions">
              <button className="btn-primary">Start Free Analysis</button>
              <button className="btn-secondary">Schedule Consultation</button>
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

export default About;