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
      answer: 'VIRIDITY optimizes all major AWS services including EC2 instances, RDS databases, ElastiCache, Redshift, OpenSearch, Lambda, S3, and more. We specialize in Reserved Instance and Savings Plans management across all eligible services to maximize your discount coverage. Our experts also optimize storage classes, data transfer costs, and identify opportunities to use more cost-effective services like Fargate for container workloads or Aurora Serverless for databases with variable usage patterns.'
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
      question: 'What is the minimum AWS spend requirement?',
      answer: 'VIRIDITY works with organizations spending $10,000+ monthly on AWS. Our manual optimization approach is most effective for companies with significant cloud infrastructure and complex usage patterns. The more complex your infrastructure, the more optimization opportunities our experts can identify and implement.'
    },
    {
      id: 9,
      category: 'faq',
      question: 'How do you handle Spot Instances and other cost optimization strategies?',
      answer: 'Our experts evaluate whether Spot Instances are appropriate for your workloads based on fault tolerance requirements and availability needs. We also identify opportunities to use Savings Plans for Spot Instances, which can provide additional discounts. Additionally, we optimize storage classes, implement lifecycle policies, and identify opportunities to use more cost-effective services like Fargate, Aurora Serverless, or Lambda for appropriate workloads.'
    },
    {
      id: 10,
      category: 'faq',
      question: 'Can I cancel VIRIDITY services?',
      answer: 'Yes, you can cancel VIRIDITY services at any time with 30 days notice. There are no long-term contracts or cancellation fees. You retain all optimizations and savings implemented during our partnership, including any Reserved Instances or Savings Plans we helped you purchase.'
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