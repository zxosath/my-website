import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, BookOpen, MessageCircle, Phone, Mail, FileText, HelpCircle, CheckCircle, AlertCircle, Info, Zap, DollarSign, BarChart3, Shield, Globe, Users, Calendar } from 'lucide-react';

function HelpCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

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

  const faqCategories = [
    { id: 'all', name: 'All Categories', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign },
    { id: 'optimization', name: 'AWS Optimization', icon: BarChart3 },
    { id: 'security', name: 'Security & Compliance', icon: Shield },
    { id: 'integrations', name: 'Integrations', icon: Globe },
    { id: 'account', name: 'Account Management', icon: Users }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How does VIRIDITY optimize my AWS costs?',
      answer: 'VIRIDITY uses expert manual optimization strategies to analyze your AWS usage patterns and implement the most effective cost-saving measures. Our team of AWS specialists continuously monitors your infrastructure and adjusts Reserved Instances, Savings Plans, and resource configurations to maximize your savings while maintaining performance and flexibility.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'How long does it take to see results?',
      answer: 'Most clients start seeing cost reductions within the first month of implementation. Our expert team conducts an initial analysis within 48 hours and begins implementing optimization strategies immediately. Significant savings typically become apparent in your first AWS bill after onboarding.'
    },
    {
      id: 3,
      category: 'pricing',
      question: 'How does VIRIDITY pricing work?',
      answer: 'VIRIDITY operates on a performance-based pricing model where you only pay a percentage of the savings we generate. This ensures our interests are aligned with yours – we only succeed when you save money. Our free analysis phase allows you to see potential savings before making any commitment.'
    },
    {
      id: 4,
      category: 'pricing',
      question: 'Are there any upfront costs or minimum commitments?',
      answer: 'No, there are no upfront costs or minimum commitments. We offer a completely free AWS cost analysis to demonstrate potential savings. You only pay based on actual savings achieved, making it a completely risk-free investment for your organization.'
    },
    {
      id: 5,
      category: 'optimization',
      question: 'What AWS services does VIRIDITY optimize?',
      answer: 'VIRIDITY optimizes all major AWS services including EC2 instances, RDS databases, Lambda functions, S3 storage, Fargate containers, ElastiCache, Redshift, OpenSearch, and more. We also specialize in managing Reserved Instances and Savings Plans across all eligible services to maximize your discount coverage.'
    },
    {
      id: 6,
      category: 'optimization',
      question: 'Will optimization affect my application performance?',
      answer: 'No, our optimization strategies are designed to maintain or improve performance while reducing costs. Our expert team carefully analyzes your workloads and only implements changes that preserve reliability and performance. We focus on right-sizing resources, optimizing commitment strategies, and eliminating waste without compromising functionality.'
    },
    {
      id: 7,
      category: 'security',
      question: 'How does VIRIDITY access my AWS account?',
      answer: 'VIRIDITY uses secure, read-only access with minimal permissions to analyze your AWS usage. We follow AWS security best practices and can work within your existing security frameworks. All access is logged and auditable, and we never require administrative privileges that could compromise your infrastructure.'
    },
    {
      id: 8,
      category: 'security',
      question: 'Is my data secure with VIRIDITY?',
      answer: 'Absolutely. VIRIDITY is SOC 2 Type II compliant and follows enterprise-grade security practices. We only access the minimum data required for cost optimization analysis and never store sensitive application data. All communications are encrypted and we maintain strict data handling protocols.'
    },
    {
      id: 9,
      category: 'integrations',
      question: 'Does VIRIDITY integrate with existing tools?',
      answer: 'Yes, VIRIDITY can integrate with popular FinOps and monitoring tools including CloudHealth, Datadog, New Relic, and custom dashboards. We provide APIs and webhooks for seamless integration into your existing workflows and can export data in various formats.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Can I pause or cancel VIRIDITY services?',
      answer: 'Yes, you can pause or cancel VIRIDITY services at any time with 30 days notice. There are no long-term contracts or cancellation fees. Even after cancellation, you retain all the optimizations and savings that have been implemented during our partnership.'
    }
  ];

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

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                      <a href="#/help-center" className="active"><HelpCircle size={16} /> Help Center</a>
                      <a href="#/legal"><FileText size={16} /> Legal</a>
                      <a href="#/about"><Users size={16} /> About</a>
                      <a href="#/contact"><MessageCircle size={16} /> Contact</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#/pricing" className="nav-item">Pricing</a>
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
              <a href="#/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
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
            <h1>Help Center</h1>
            <p>Find answers, get support, and learn how to maximize your AWS cost savings with VIRIDITY</p>
            
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

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <div key={index} className="action-card">
                <action.icon size={32} />
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <button className="btn-secondary">{action.action}</button>
              </div>
            ))}
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

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          {/* FAQ Categories */}
          <div className="faq-categories">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={16} />
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
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

          {filteredFAQs.length === 0 && (
            <div className="no-results">
              <Info size={48} />
              <h3>No results found</h3>
              <p>Try adjusting your search terms or browse a different category</p>
            </div>
          )}
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
              <div className="footer-logo">
                <img src="/IMG_3102.PNG" alt="VIRIDITY Logo" className="logo-icon" />
                <h3>VIRIDITY</h3>
              </div>
              <p>Expert AWS cost optimization that delivers measurable results.</p>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">AWS Cost Optimization</a></li>
                <li><a href="#">Reserved Instance Management</a></li>
                <li><a href="#">Savings Plans Optimization</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#/help-center">Help Center</a></li>
                <li><a href="#/legal">Legal</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#/about">About Us</a></li>
                <li><a href="#/contact">Contact</a></li>
                <li><a href="#/legal">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 VIRIDITY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HelpCenter;