import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Search, HelpCircle, Shield, DollarSign, BarChart3, Users, FileText, MessageCircle } from 'lucide-react';
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
      answer: 'VIRIDITY is a manual AWS cost optimization service that uses expert human analysis to reduce your AWS spending. Unlike automated tools, our certified AWS specialists manually analyze your infrastructure, identify optimization opportunities, and implement strategic changes to maximize your savings while maintaining performance and reliability. We focus on Reserved Instance and Savings Plan optimization, resource rightsizing, and eliminating waste through hands-on expertise.'
    },
    {
      id: 2,
      category: 'faq',
      question: 'How much can I save with VIRIDITY?',
      answer: 'Most VIRIDITY clients achieve 20-40% cost reductions on their AWS spending. Our expert team typically identifies significant opportunities in Reserved Instance management (saving 30-60% on compute costs), Savings Plans optimization (reducing costs by 20-40%), and resource rightsizing (eliminating 15-30% of wasted spend). Savings vary based on your current optimization level and infrastructure complexity.'
    },
    {
      id: 3,
      category: 'faq',
      question: 'How does VIRIDITY optimize Reserved Instances and Savings Plans?',
      answer: 'Our AWS specialists analyze your usage patterns to identify the optimal mix of Reserved Instances and Savings Plans. We evaluate instance types, regions, and usage patterns to recommend the right commitment strategy. For Reserved Instances, we help you choose between Standard, Convertible, and Scheduled RIs based on your flexibility needs. For Savings Plans, we optimize the commitment amount and term length to maximize discounts while minimizing lock-in risk. We continuously monitor and adjust these commitments as your usage evolves.'
    },
    {
      id: 4,
      category: 'faq',
      question: 'What is rightsizing and how does VIRIDITY approach it?',
      answer: 'Rightsizing involves matching your AWS resources to your actual usage patterns. Our experts analyze CPU, memory, storage, and network utilization to identify over-provisioned resources. We look for instances that are consistently underutilized and recommend downsizing to smaller instance types or switching to more cost-effective options like Spot Instances where appropriate. We also identify opportunities to upgrade instances that are consistently maxed out to improve performance. Our manual analysis ensures we don\'t compromise application performance while maximizing cost savings.'
    },
    {
      id: 5,
      category: 'faq',
      question: 'What AWS services does VIRIDITY optimize?',
      answer: 'VIRIDITY optimizes major AWS compute and storage services including EC2 instances, Lambda functions, S3 storage, and Fargate containers. We specialize in Reserved Instance and Savings Plans management across all eligible services to maximize your discount coverage. Our experts also optimize storage classes, data transfer costs, and identify opportunities to use more cost-effective services like Spot Instances for appropriate workloads.'
    },
    {
      id: 6,
      category: 'faq',
      question: 'Will optimization affect my application performance?',
      answer: 'No, our optimization strategies are designed to maintain or improve performance while reducing costs. Our expert team carefully analyzes your workloads and only implements changes that preserve reliability and performance. We focus on right-sizing resources, optimizing commitment strategies, and eliminating waste without compromising functionality. Before making any changes, we thoroughly test recommendations and implement them gradually to ensure no impact on your applications.'
    },
    {
      id: 7,
      category: 'faq',
      question: 'How does VIRIDITY pricing work?',
      answer: 'VIRIDITY operates on a performance-based pricing model. You only pay a percentage of the actual savings we generate, ensuring our interests are aligned with yours. There are no upfront costs or minimum commitments - we only succeed when you save money. Our fee is calculated based on verified cost reductions, and we provide transparent monthly reports showing exactly how much we saved you and our fee calculation.'
    },
    {
      id: 8,
      category: 'faq',
      question: 'How do you handle Spot Instances and other cost optimization strategies?',
      answer: 'Our experts evaluate whether Spot Instances are appropriate for your workloads based on fault tolerance requirements and availability needs. We also identify opportunities to use Savings Plans for Spot Instances, which can provide additional discounts. Additionally, we optimize storage classes, implement lifecycle policies, and identify opportunities to use more cost-effective services like Fargate or Lambda for appropriate workloads.'
    }
  ];

  const securityFaqs = [
    {
      id: 1,
      category: 'security',
      question: 'How does VIRIDITY access my AWS account?',
      answer: 'VIRIDITY uses a secure two-role approach to minimize risk. First, we use a read-only role to analyze your costs, usage patterns, and identify optimization opportunities. This role can only view data - no changes can be made. Once we have your approval for specific optimizations, we use a separate apply role with limited permissions to implement only the approved changes. This approach ensures we can do thorough analysis without any risk, and only make changes when you\'re ready. We work with your team to set up these roles with appropriate safeguards like MFA and spending limits.'
    },
    {
      id: 2,
      category: 'security',
      question: 'Is my data secure with VIRIDITY?',
      answer: 'Absolutely. We only access the minimum data required for cost optimization analysis and never store sensitive application data. All communications are encrypted using TLS 1.3, and we maintain strict data handling protocols. We don\'t access your application logs, user data, or any business-critical information. Our analysis focuses solely on billing, usage patterns, and resource configurations for optimization purposes.'
    },
    {
      id: 3,
      category: 'security',
      question: 'Can VIRIDITY work with my existing security policies?',
      answer: 'Yes, VIRIDITY can work within your existing security frameworks and compliance requirements. We can adapt our access methods to meet your specific security policies, including working through your existing IAM roles, using cross-account access, or implementing custom security controls. We can work with your security team to ensure proper oversight and can provide detailed audit logs of all our activities.'
    },
    {
      id: 4,
      category: 'security',
      question: 'What happens to my data after I cancel?',
      answer: 'Upon cancellation, VIRIDITY immediately revokes all access to your AWS account and deletes any cached data from our systems. We retain only the minimum information required for legal and billing purposes. All analysis reports, usage data, and optimization recommendations are permanently deleted from our systems within 30 days of cancellation.'
    },
    {
      id: 5,
      category: 'security',
      question: 'Do you support AWS Organizations and multi-account setups?',
      answer: 'Yes, VIRIDITY fully supports AWS Organizations and can work with complex multi-account setups. We can analyze costs across all accounts in your organization, identify optimization opportunities at the organizational level, and implement strategies that benefit your entire AWS estate. We can work with your existing organizational structure and access policies.'
    }
  ];

  const billingFaqs = [
    {
      id: 1,
      category: 'billing',
      question: 'How is VIRIDITY billing calculated?',
      answer: 'VIRIDITY billing is calculated as a percentage of the verified cost savings we generate for you. We provide transparent monthly reports showing exactly how much we saved you and our fee is based on those actual savings. Our fee structure is tiered based on savings achieved - the more we save you, the better value you get. We only charge on net savings after accounting for any costs associated with implementing optimizations.'
    },
    {
      id: 2,
      category: 'billing',
      question: 'Are there any upfront costs?',
      answer: 'No, there are no upfront costs or minimum commitments. We offer a completely free AWS cost analysis to demonstrate potential savings. You only pay based on actual savings achieved. This includes our initial analysis, optimization recommendations, and implementation support - all at no upfront cost. We\'re confident in our ability to find savings opportunities and only get paid when we deliver results.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'How often do you bill?',
      answer: 'VIRIDITY bills monthly based on the savings achieved in the previous month. We provide detailed reports showing your savings and our fee calculation before each billing cycle. Our reports include a breakdown of all optimizations implemented, the cost savings achieved, and our fee calculation. You have full visibility into what you\'re paying for and why.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'What if VIRIDITY doesn\'t save me money?',
      answer: 'If we don\'t generate savings for you, you don\'t pay anything. Our performance-based model ensures you only pay when we deliver measurable results. We\'re confident in our ability to find savings opportunities, but if we can\'t identify cost reductions, you owe us nothing. This aligns our interests with yours and ensures we\'re motivated to find every possible optimization opportunity.'
    },
    {
      id: 5,
      category: 'billing',
      question: 'Can I see my billing history?',
      answer: 'Yes, you have full access to your billing history and detailed reports showing all optimizations implemented and savings achieved. We provide transparent reporting on all cost reductions, including monthly summaries, quarterly reviews, and annual optimization reports. All billing information is available through our client portal with detailed breakdowns of savings and fees.'
    },
    {
      id: 6,
      category: 'billing',
      question: 'How do you measure and verify savings?',
      answer: 'We use AWS Cost and Usage Reports, CloudWatch metrics, and our own analysis tools to measure and verify savings. We establish a baseline of your costs before implementing optimizations and track the impact of each change. Our reports show both the direct savings from optimizations and the avoided costs from preventing waste. We provide detailed attribution of savings to specific optimization actions.'
    }
  ];

  const allFaqs = [...faqs, ...securityFaqs, ...billingFaqs];

  const filteredFAQs = allFaqs.filter(faq => {
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

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <DollarSign size={32} />
                </div>
                <h3>Sales</h3>
                <p>We'd love to discuss how we can save you money on AWS</p>
                <div className="contact-info">
                  <a href="mailto:sales@viridity.com">sales@viridity.com</a>
                  <a href="tel:+1-555-123-4567">(555) 123-4567 x1</a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <HelpCircle size={32} />
                </div>
                <h3>Help & Support</h3>
                <p>We're here to help with any questions or issues</p>
                <div className="contact-info">
                  <a href="mailto:support@viridity.com">support@viridity.com</a>
                  <a href="tel:+1-555-123-4567">(555) 123-4567 x2</a>
                </div>
              </div>
            </div>
            
            <div className="general-contact">
              <h3>General</h3>
              <p>For general inquiries, please email <a href="mailto:info@viridity.com">info@viridity.com</a></p>
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