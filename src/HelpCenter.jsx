import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Search, HelpCircle, Shield, DollarSign, BarChart3, Users, FileText, MessageCircle, Phone, Mail, Calendar, Zap, CheckCircle, AlertCircle, Info } from 'lucide-react';
import './App.css';

function HelpCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('faq');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
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

  const mainCategories = [
    { 
      id: 'faq', 
      name: 'Frequently Asked Questions', 
      icon: HelpCircle,
      description: 'Common questions about VIRIDITY services and AWS optimization'
    },
    { 
      id: 'security', 
      name: 'Security & Access Management', 
      icon: Shield,
      description: 'Security protocols and access management for AWS optimization'
    },
    { 
      id: 'billing', 
      name: 'Billing', 
      icon: DollarSign,
      description: 'Billing information and payment structure'
    }
  ];

  const faqs = [
    {
      id: 1,
      category: 'faq',
      question: 'What is VIRIDITY and how does it work?',
      answer: 'VIRIDITY is a manual AWS cost optimization service that uses expert human analysis to reduce your AWS spending. Unlike automated tools, our certified AWS specialists manually analyze your infrastructure, identify optimization opportunities, and implement strategic changes to maximize your savings while maintaining performance and reliability.'
    },
    {
      id: 2,
      category: 'faq',
      question: 'How much can I save with VIRIDITY?',
      answer: 'Most VIRIDITY clients achieve 20-40% cost reductions on their AWS spending. Savings vary based on your current optimization level, but our expert team typically identifies significant opportunities in Reserved Instance management, Savings Plans optimization, and resource right-sizing.'
    },
    {
      id: 3,
      category: 'faq',
      question: 'How long does it take to see results?',
      answer: 'You can expect to see initial cost reductions within 30-60 days of onboarding. Our team conducts a comprehensive analysis within the first week and begins implementing optimizations immediately. Most clients see measurable savings on their next AWS bill.'
    },
    {
      id: 4,
      category: 'faq',
      question: 'What AWS services does VIRIDITY optimize?',
      answer: 'VIRIDITY optimizes all major AWS services including EC2, RDS, ElastiCache, Redshift, OpenSearch, Lambda, S3, and more. We specialize in Reserved Instance and Savings Plans management across all eligible services to maximize your discount coverage.'
    },
    {
      id: 5,
      category: 'faq',
      question: 'Will optimization affect my application performance?',
      answer: 'No, our optimization strategies are designed to maintain or improve performance while reducing costs. Our expert team carefully analyzes your workloads and only implements changes that preserve reliability and performance.'
    },
    {
      id: 6,
      category: 'faq',
      question: 'How does VIRIDITY pricing work?',
      answer: 'VIRIDITY operates on a performance-based pricing model. You only pay a percentage of the actual savings we generate, ensuring our interests are aligned with yours. There are no upfront costs or minimum commitments - we only succeed when you save money.'
    },
    {
      id: 7,
      category: 'faq',
      question: 'What is the minimum AWS spend requirement?',
      answer: 'VIRIDITY works with organizations spending $10,000+ monthly on AWS. Our manual optimization approach is most effective for companies with significant cloud infrastructure and complex usage patterns.'
    },
    {
      id: 8,
      category: 'faq',
      question: 'Can I cancel VIRIDITY services?',
      answer: 'Yes, you can cancel VIRIDITY services at any time with 30 days notice. There are no long-term contracts or cancellation fees. You retain all optimizations and savings implemented during our partnership.'
    }
  ];

  const securityFaqs = [
    {
      id: 1,
      category: 'security',
      question: 'How does VIRIDITY access my AWS account?',
      answer: 'VIRIDITY uses secure, read-only access with minimal permissions to analyze your AWS usage. We require only the minimum permissions necessary to view billing data and resource configurations. We never require administrative access that could compromise your infrastructure.'
    },
    {
      id: 2,
      category: 'security',
      question: 'What security certifications does VIRIDITY have?',
      answer: 'VIRIDITY maintains SOC 2 Type II compliance and follows enterprise-grade security practices. We implement end-to-end encryption, multi-factor authentication, and regular security audits to protect your data.'
    },
    {
      id: 3,
      category: 'security',
      question: 'Is my data secure with VIRIDITY?',
      answer: 'Absolutely. We only access the minimum data required for cost optimization analysis and never store sensitive application data. All communications are encrypted and we maintain strict data handling protocols.'
    },
    {
      id: 4,
      category: 'security',
      question: 'Can VIRIDITY work with my existing security policies?',
      answer: 'Yes, VIRIDITY can work within your existing security frameworks and compliance requirements. We can adapt our access methods to meet your specific security policies and can work with your security team to ensure proper oversight.'
    },
    {
      id: 5,
      category: 'security',
      question: 'What happens to my data after I cancel?',
      answer: 'Upon cancellation, VIRIDITY immediately revokes all access to your AWS account and deletes any cached data from our systems. We retain only the minimum information required for legal and billing purposes.'
    }
  ];

  const billingFaqs = [
    {
      id: 1,
      category: 'billing',
      question: 'How is VIRIDITY billing calculated?',
      answer: 'VIRIDITY billing is calculated as a percentage of the verified cost savings we generate for you. We provide transparent monthly reports showing exactly how much we saved you and our fee is based on those actual savings.'
    },
    {
      id: 2,
      category: 'billing',
      question: 'Are there any upfront costs?',
      answer: 'No, there are no upfront costs or minimum commitments. We offer a completely free AWS cost analysis to demonstrate potential savings. You only pay based on actual savings achieved.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'How often do you bill?',
      answer: 'VIRIDITY bills monthly based on the savings achieved in the previous month. We provide detailed reports showing your savings and our fee calculation before each billing cycle.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'What if VIRIDITY doesn\'t save me money?',
      answer: 'If we don\'t generate savings for you, you don\'t pay anything. Our performance-based model ensures you only pay when we deliver measurable results. We\'re confident in our ability to find savings opportunities.'
    },
    {
      id: 5,
      category: 'billing',
      question: 'Can I see my billing history?',
      answer: 'Yes, you have full access to your billing history and detailed reports showing all optimizations implemented and savings achieved. We provide transparent reporting on all cost reductions.'
    }
  ];

  const allFaqs = [...faqs, ...securityFaqs, ...billingFaqs];

  const filteredFAQs = allFaqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      availability: '24/7 Support'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      action: 'Send Email',
      availability: 'Response within 4 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our AWS experts',
      action: 'Schedule Call',
      availability: 'Business hours: 9AM-6PM EST'
    },
    {
      icon: Calendar,
      title: 'Expert Consultation',
      description: 'Book a dedicated session with our optimization specialists',
      action: 'Book Session',
      availability: 'Custom scheduling available'
    }
  ];

  const quickActions = [
    {
      icon: Zap,
      title: 'Request Free Analysis',
      description: 'Get a comprehensive AWS cost analysis',
      action: 'Get Started'
    },
    {
      icon: FileText,
      title: 'Download Resources',
      description: 'Access guides, whitepapers, and best practices',
      action: 'Browse Library'
    },
    {
      icon: BarChart3,
      title: 'View Sample Reports',
      description: 'See examples of optimization insights',
      action: 'View Samples'
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
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/help-center'); setResourcesDropdownOpen(false); }} className="active"><HelpCircle size={16} /> Help Center</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/legal'); setResourcesDropdownOpen(false); }}><FileText size={16} /> Legal</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }}><Users size={16} /> About</a>
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
      <section className="hero help-center-hero">
        <div className="container">
          <div className="hero-content">
            <h1>VIRIDITY Help Center</h1>
            <p>Hello. How can we help you?</p>
            
            {/* Search Bar */}
            <div className="help-search">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="main-categories">
        <div className="container">
          <div className="categories-grid">
            {mainCategories.map((category) => (
              <div 
                key={category.id} 
                className={`category-box ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">
                  <category.icon size={32} />
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-header">
              <h2>{mainCategories.find(cat => cat.id === selectedCategory)?.name || 'Frequently Asked Questions'}</h2>
              {searchQuery && (
                <p className="search-results">
                  Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              )}
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="faq-list">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className={`faq-chevron ${expandedFAQ === faq.id ? 'expanded' : ''}`}
                      />
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No results found for your search. Try different keywords or browse our categories above.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="support-channels">
        <div className="container">
          <h2>Get Support</h2>
          <div className="channels-grid">
            {supportChannels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-icon">
                  <channel.icon size={24} />
                </div>
                <div className="channel-content">
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                  <span className="availability">{channel.availability}</span>
                </div>
                <button className="btn-primary">{channel.action}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="help-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Still need help?</h2>
            <p>Our AWS optimization experts are here to help you maximize your cost savings</p>
            <div className="cta-actions">
              <button className="btn-primary">Contact Support</button>
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

export default HelpCenter;