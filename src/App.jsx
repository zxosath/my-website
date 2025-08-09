import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Play, Calendar, BookOpen, Headphones, Users, HelpCircle, FileText, Building, Star, CheckCircle, TrendingUp, DollarSign, Activity, BarChart3, Settings, Globe, Shield, Zap } from 'lucide-react';
import './App.css';
import Pricing from './Pricing';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('FinOps');
  const [dashboardTab, setDashboardTab] = useState('results');
  const [expandedTiles, setExpandedTiles] = useState({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  // Tab switching functionality
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Dashboard tab switching functionality
  const handleDashboardTabChange = (tab) => {
    console.log('Dashboard tab clicked:', tab);
    setDashboardTab(tab)
  }

  // Tile expansion functionality
  const handleTileClick = (tileId) => {
    setExpandedTiles(prev => ({
      ...prev,
      [tileId]: !prev[tileId]
    }));
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
                      <a href="#"><Activity size={16} /> Strategic Resource Optimization</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Reporting & Insights</h4>
                    <div className="resource-links">
                      <a href="#"><BarChart3 size={16} /> Cost Allocation & Showback</a>
                      <a href="#"><TrendingUp size={16} /> Savings Analytics & Forecasting</a>
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
                      <a href="#"><HelpCircle size={16} /> Help Center</a>
                      <a href="#"><FileText size={16} /> Legal</a>
                      <a href="#"><Building size={16} /> About</a>
                      <a href="#"><Users size={16} /> Contact</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#/pricing" className="nav-item">Pricing</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary desktop-only" onClick={() => scrollToSection('cta')}>Free Analysis</button>
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
              <button className="btn-primary" onClick={() => { scrollToSection('cta'); setMobileMenuOpen(false); }}>Free Analysis</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="animate-on-scroll">You're most likely overpaying <span className="highlight-significantly">significantly</span> for AWS</h1>
              <p className="animate-on-scroll">Pay less for the same infrastructure. Reallocate the savings where it counts.</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Start Optimizing</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Free AWS Cost Analysis</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-tabs">
                    <span 
                      className={`tab ${dashboardTab === 'results' ? 'active' : ''}`}
                      onClick={() => handleDashboardTabChange('results')}
                    >
                      Our Results
                    </span>
                    <span 
                      className={`tab ${dashboardTab === 'case-studies' ? 'active' : ''}`}
                      onClick={() => handleDashboardTabChange('case-studies')}
                    >
                      Case Studies
                    </span>
                    <span 
                      className={`tab ${dashboardTab === 'testimonials' ? 'active' : ''}`}
                      onClick={() => handleDashboardTabChange('testimonials')}
                    >
                      Testimonials
                    </span>
                  </div>
                </div>
                <div className="dashboard-content">
                  {dashboardTab === 'results' && (
                    <>
                      <div className="metric-card">
                        <h3>Average Total Monthly Savings</h3>
                        <div className="metric-value">$127K+</div>
                      </div>
                      <div className="metric-card">
                        <h3>Average Cost Reduction</h3>
                        <div className="metric-value">47%+</div>
                      </div>
                      <div className="metric-card">
                        <h3>ROI on Investment</h3>
                        <div className="metric-value">1,200%+</div>
                      </div>
                    </>
                  )}
                  
                  {dashboardTab === 'case-studies' && (
                    <>
                      <div className="metric-card">
                        <h3>Tech Startup</h3>
                        <div className="metric-value">$89K/month</div>
                      </div>
                      <div className="metric-card">
                        <h3>Enterprise Client</h3>
                        <div className="metric-value">$234K/month</div>
                      </div>
                      <div className="metric-card">
                        <h3>E-commerce Platform</h3>
                        <div className="metric-value">$156K/month</div>
                      </div>
                    </>
                  )}
                  
                  {dashboardTab === 'testimonials' && (
                    <>
                      <div className="metric-card">
                        <h3>"Game-changing savings"</h3>
                        <div className="metric-value">- CTO, TechCorp</div>
                      </div>
                      <div className="metric-card">
                        <h3>"ROI exceeded expectations"</h3>
                        <div className="metric-value">- CFO, DataFlow</div>
                      </div>
                      <div className="metric-card">
                        <h3>"Best investment we made"</h3>
                        <div className="metric-value">- CEO, CloudScale</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VIRIDITY Section */}
      <section className="why-prosperops">
        <div className="container">
          <h2 className="animate-on-scroll">Why VIRIDITY</h2>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Reduce AWS costs, mitigate risk</h3>
              <p>Optimize AWS spending in real-time while avoiding lock-in risk.</p>

            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <Settings size={32} />
              </div>
              <h3>Offload work, scale FinOps</h3>
              <p>Let VIRIDITY experts handle AWS cost management while you focus on strategic initiatives.</p>

            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Gain insights, avoid analysis paralysis</h3>
              <p>Get immediate results and track core optimization KPIs without data overload.</p>

            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <DollarSign size={32} />
              </div>
              <h3>Increase ROI, decrease wasted spend</h3>
              <p>Generate incremental savings that exceed our fees and maximize AWS ROI.</p>

            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <Activity size={32} />
              </div>
              <h3>Real-time optimization, continuous savings</h3>
              <p>Expert team monitors usage patterns and adjusts strategies in real-time for maximum savings.</p>

            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <Globe size={32} />
              </div>
              <h3>Global AWS expertise, local results</h3>
              <p>Leverage deep AWS expertise across all regions while maintaining performance and compliance.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="container">
          <h2 className="animate-on-scroll">Why AWS Bills Keep Growing</h2>
          
          <div className="challenges-content animate-on-scroll">
            <div className="challenge-text">
              <p className="lead-text">
                Your engineering team ships fast. Your AWS bill grows faster. <strong>The same agility that powers your product is quietly burning through your budget.</strong> Here's why optimization feels impossible:
              </p>
              
              <div className="challenge-points">
                <div className="challenge-point">
                  <h3>Your infrastructure changes faster than you can optimize it</h3>
                  <p>Every deployment reshuffles your resource needs. By the time you've analyzed last month's usage, your infrastructure has already evolved. It's like trying to optimize a moving car while driving it.</p>
                </div>
                
                <div className="challenge-point">
                  <h3>AWS pricing is deliberately complex</h3>
                  <p>Over 200 services. Thousands of pricing tiers. Reserved Instances, Savings Plans, Spot pricing—each with different rules. AWS makes money when you don't have time to figure it all out.</p>
                </div>
                
                <div className="challenge-point">
                  <h3>Your team has better things to do</h3>
                  <p>Your engineers should be building features, not parsing billing reports. But every hour spent on cost optimization is an hour not spent on your core business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics">
        <div className="container">
          <h2 className="animate-on-scroll">Manual vs Expert AWS Optimization</h2>
          
          <div className="analytics-content animate-on-scroll">
            <div className="analytics-text">
              <p>
                AWS commitment optimization presents a critical dilemma: commit conservatively and miss savings, or commit aggressively and risk waste when usage changes.
              </p>
              <p>
                Manual management consumes time that could be spent on strategic FinOps initiatives where human expertise delivers maximum value.
              </p>
              <p>
                VIRIDITY eliminates this trade-off through expert analysis and strategic planning, delivering precise alignment between commitments and usage patterns.
              </p>
            </div>
            
            <div className="analytics-visual">
              <img 
                src="/f08f2585-af0e-4765-ae1a-720a784c27fb.png" 
                alt="Manual vs Expert AWS Optimization Chart" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className={`stat-item ${expandedTiles['cost-reduction'] ? 'expanded' : ''}`} onClick={() => handleTileClick('cost-reduction')}>
              <h3>40-60% Cost Reduction</h3>
              {expandedTiles['cost-reduction'] && (
                <p>Achieve significant AWS cost savings through expert resource optimization and strategic billing management.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
            <div className={`stat-item ${expandedTiles['savings-plans'] ? 'expanded' : ''}`} onClick={() => handleTileClick('savings-plans')}>
              <h3>Savings Plans: Up to 72% Off</h3>
              {expandedTiles['savings-plans'] && (
                <p>Expert management of AWS Savings Plans to maximize your discount while maintaining flexibility.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
            <div className={`stat-item ${expandedTiles['reserved-instances'] ? 'expanded' : ''}`} onClick={() => handleTileClick('reserved-instances')}>
              <h3>Reserved Instances: 75% Savings</h3>
              {expandedTiles['reserved-instances'] && (
                <p>Strategic Reserved Instance management to lock in savings for predictable workloads.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
            <div className={`stat-item ${expandedTiles['cost-transparency'] ? 'expanded' : ''}`} onClick={() => handleTileClick('cost-transparency')}>
              <h3>100% Cost Transparency</h3>
              {expandedTiles['cost-transparency'] && (
                <p>Accurate cost allocation and showback for better financial transparency and accountability.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
            <div className={`stat-item ${expandedTiles['monthly-actions'] ? 'expanded' : ''}`} onClick={() => handleTileClick('monthly-actions')}>
              <h3>2,500+ Monthly Actions</h3>
              {expandedTiles['monthly-actions'] && (
                <p>VIRIDITY takes thousands of strategic actions monthly to continuously optimize your AWS costs.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
            <div className={`stat-item ${expandedTiles['resource-utilization'] ? 'expanded' : ''}`} onClick={() => handleTileClick('resource-utilization')}>
              <h3>85% Resource Utilization</h3>
              {expandedTiles['resource-utilization'] && (
                <p>Increase your AWS resource utilization through strategic scheduling and optimization.</p>
              )}
              <span className="expand-icon">+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Savings as a Service Section */}
      <section className="savings-service">
        <div className="container">
          <h2 className="animate-on-scroll">Reduce your overall AWS costs and see the benefits across your company</h2>
          <h3 className="animate-on-scroll">AWS Cost Optimization For All Cloud Practitioners</h3>
          <p className="animate-on-scroll">We put money back into your AWS budget and generate more savings than our charge.</p>
          <button className="btn-primary animate-on-scroll" onClick={() => scrollToSection('cta')}>Free Analysis</button>
          
          <div className="practitioner-tabs animate-on-scroll">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'FinOps' ? 'active' : ''}`}
                onClick={() => handleTabChange('FinOps')}
              >
                FinOps
              </button>
              <button 
                className={`tab-btn ${activeTab === 'DevOps' ? 'active' : ''}`}
                onClick={() => handleTabChange('DevOps')}
              >
                DevOps
              </button>
              <button 
                className={`tab-btn ${activeTab === 'Resellers' ? 'active' : ''}`}
                onClick={() => handleTabChange('Resellers')}
              >
                Enterprise
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'FinOps' && (
                <div className="practitioner-card">
                  <h3>Higher margins without the work</h3>
                  <p>VIRIDITY expertly manages and optimizes AWS discount instruments.</p>
                  <ul>
                    <li>Save more money with less waste than on-demand AWS pricing</li>
                    <li>Maximize AWS Savings Plans and Reserved Instance flexibility</li>
                    <li>Eliminate repetitive AWS cost optimization tasks</li>
                  </ul>
                  <p>FinOps teams can focus on higher-value tasks.</p>
                  <button className="btn-primary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
                </div>
              )}
              {activeTab === 'DevOps' && (
                <div className="practitioner-card">
                  <h3>Zero impact on engineering</h3>
                  <p>Engineers retain control over changes to the AWS resources they manage.</p>
                  <ul>
                    <li>Optimize AWS costs while you build</li>
                    <li>Zero dependencies on AWS infrastructure and resources</li>
                    <li>AWS financial commitments won't dictate architecture</li>
                  </ul>
                  <p>VIRIDITY expertly manages AWS discounts, so engineers can focus on building.</p>
                  <button className="btn-primary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
                </div>
              )}
              {activeTab === 'Resellers' && (
                <div className="practitioner-card">
                  <h3>Enterprise-scale AWS optimization</h3>
                  <p>Our expert team provides comprehensive AWS cost optimization for large-scale enterprise environments with complex multi-account setups.</p>
                  <ul>
                    <li>Multi-account AWS cost optimization</li>
                    <li>Enterprise-grade reporting and analytics</li>
                    <li>Strategic AWS commitment management</li>
                  </ul>
                  <p>VIRIDITY delivers enterprise-scale savings through expert manual optimization.</p>
                  <button className="btn-primary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="animate-on-scroll">What customers say about VIRIDITY</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <p>"VIRIDITY saves us a considerable amount of money through expert AWS cost optimization. The pricing model based on savings makes it essentially free."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>CTO, TechCorp</p>
              </div>
            </div>
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <p>"Action-oriented AWS cost management—we set parameters for coverage and risk, and VIRIDITY takes actions with the best AWS financial instruments to meet our goals."</p>
              </div>
              <div className="testimonial-author">
                <h4>Enterprise Customer</h4>
                <p>FinOps Lead</p>
              </div>
            </div>
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <p>"Truly a set-and-save solution. Not only did our AWS cost reduction increase significantly, but the amount of time we spend managing AWS costs has been reduced substantially."</p>
              </div>
              <div className="testimonial-author">
                <h4>Mike Chen</h4>
                <p>FinOps Lead, DataFlow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="container">
          <h2 className="animate-on-scroll">Request a Free AWS Cost Analysis</h2>
          <p className="animate-on-scroll">3 out of 4 customers see at least a 40% reduction in AWS costs.</p>
          <p className="animate-on-scroll">Get a deeper understanding of your current AWS spend and savings, and find out how much more you can save with VIRIDITY!</p>
          
          <div className="cta-benefits">
            <div className="benefit animate-on-scroll">
              <CheckCircle size={20} />
              <span>Visualize your AWS savings potential</span>
            </div>
            <div className="benefit animate-on-scroll">
              <CheckCircle size={20} />
              <span>Benchmark AWS performance vs. peers</span>
            </div>
            <div className="benefit animate-on-scroll">
              <CheckCircle size={20} />
              <span>10-minute setup, no strings attached</span>
            </div>
          </div>
          
          <div className="cta-form animate-on-scroll">
            <p>Submit the form to request your free AWS cost analysis.</p>
            <div className="form-placeholder">
              <div className="form-field">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="form-field">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-field">
                <input type="email" placeholder="Work Email" />
              </div>
              <div className="form-field">
                <input type="text" placeholder="Company" />
              </div>
              <button className="btn-primary">Request Analysis</button>
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
                <img src="/IMG_3102.PNG" alt="VIRIDITY Logo" className="footer-logo-icon" />
                <h3>VIRIDITY</h3>
              </div>
              <div className="footer-links">
                <a href="#/pricing">Pricing</a>
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">AWS Cost Optimization Blog</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Actions</h4>
              <div className="footer-links">
                <a href="#" onClick={() => scrollToSection('cta')}>Free Analysis</a>
                <a href="#">Start for Free</a>
                <a href="#" onClick={() => scrollToSection('cta')}>AWS Cost Analysis</a>
                <a href="#">Resource Center</a>
                <a href="#">AWS Cost Optimization</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#">Contact Us</a>
                <a href="#">Careers</a>
                <a href="#">Legal</a>
                <a href="#">Status</a>
                <a href="#">Help Center</a>
                <a href="#">Trust Center</a>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;

