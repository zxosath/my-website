import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Users, Target, Award, Globe, TrendingUp, DollarSign, BarChart3, Shield, Zap, CheckCircle, Star, HelpCircle, FileText, MessageCircle, Linkedin, Twitter, Mail, Calendar, BookOpen, Mic, Play } from 'lucide-react';
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

  const timeline = [
    {
      date: 'December, 2024',
      title: 'VIRIDITY Launches Expert AWS Optimization Service',
      description: 'VIRIDITY officially launches its manual AWS cost optimization service, bringing enterprise-grade expertise to organizations of all sizes.'
    },
    {
      date: 'November, 2024',
      title: 'First $1M in Client Savings Achieved',
      description: 'VIRIDITY reaches its first major milestone, delivering over $1 million in verified cost savings to our initial client base.'
    },
    {
      date: 'October, 2024',
      title: 'AWS Advanced Consulting Partner Status',
      description: 'VIRIDITY achieves AWS Advanced Consulting Partner status, recognizing our expertise in cloud cost optimization and commitment management.'
    },
    {
      date: 'September, 2024',
      title: 'Enterprise Security Framework Established',
      description: 'Implementation of comprehensive security protocols and access management systems to ensure client data protection and compliance.'
    },
    {
      date: 'August, 2024',
      title: 'Performance-Based Pricing Model Launched',
      description: 'Introduction of our innovative pricing model where clients only pay a percentage of verified savings, ensuring complete alignment of interests.'
    },
    {
      date: 'July, 2024',
      title: 'VIRIDITY Founded',
      description: 'VIRIDITY is established with the mission to democratize AWS cost optimization expertise and deliver measurable savings outcomes.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'CHIEF EXECUTIVE OFFICER',
      bio: 'Former AWS Solutions Architect with 12+ years optimizing enterprise cloud costs. Led cost optimization initiatives saving over $100M at Fortune 500 companies.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CHIEF PRODUCT OFFICER',
      bio: 'Ex-Amazon engineer specializing in Reserved Instances and Savings Plans optimization. Built automated systems managing $1B+ in AWS commitments.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Emily Watson',
      role: 'CHIEF TECHNOLOGY OFFICER',
      bio: 'FinOps expert with deep experience in enterprise cost management. Previously led cloud financial operations at multiple unicorn startups.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'David Kim',
      role: 'CHIEF SALES OFFICER',
      bio: 'AWS Hero and certified solutions architect. Specializes in complex enterprise architectures and commitment strategy optimization.',
      image: '/api/placeholder/200/200'
    }
  ];

  const blogPosts = [
    {
      title: 'Investing in the Future of Cloud FinOps Automation',
      category: 'Company',
      link: '#'
    },
    {
      title: 'VIRIDITY Achieves AWS Advanced Consulting Partner Status',
      category: 'Company',
      link: '#'
    },
    {
      title: 'VIRIDITY partners with leading FinOps platforms, combining cost intelligence and manual optimization for AWS customers',
      category: 'Company',
      link: '#'
    }
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

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <h1>Our mission</h1>
            <p className="mission-lead">The cloud is incredibly powerful, but operating it cost effectively is complicated and time-consuming.</p>
            <p className="mission-statement">Our mission is to remove complexity and deliver savings outcomes so every business can prosper in the cloud.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
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

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="container">
          <div className="timeline-grid">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="container">
          <h2>Leadership</h2>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <div className="placeholder-avatar">
                    <Users size={48} />
                  </div>
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="about-blog">
        <div className="container">
          <h2>From our blog</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <div className="blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <a href={post.link} className="blog-link">Read More</a>
              </div>
            ))}
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