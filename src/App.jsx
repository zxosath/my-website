import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Play, Calendar, BookOpen, Headphones, Users, HelpCircle, FileText, Building, Star, CheckCircle, TrendingUp, DollarSign, Activity, BarChart3, Settings, Globe, Shield, Zap, Target } from 'lucide-react';
import './App.css';
import Pricing from './Pricing';
import HelpCenter from './HelpCenter';
import Legal from './Legal';
import About from './About';
import Contact from './Contact';

// Success Page Component
function SuccessPage() {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-content">
          <div className="success-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22,4 12,14.01 9,11.01"/>
            </svg>
          </div>
          <h1>Thank You!</h1>
          <h2>Your AWS Cost Analysis Request Has Been Submitted</h2>
          <p>We've received your request and our team will begin analyzing your AWS infrastructure within the next 24 hours.</p>
          
          <div className="success-details">
            <div className="detail-item">
              <h4>What happens next?</h4>
              <ul>
                <li>Our experts will review your AWS usage patterns</li>
                <li>Identify optimization opportunities worth thousands</li>
                <li>Prepare a detailed savings report</li>
                <li>Contact you with actionable recommendations</li>
              </ul>
            </div>
            
            <div className="detail-item">
              <h4>What you'll receive:</h4>
              <ul>
                <li>Comprehensive cost analysis report</li>
                <li>Specific savings recommendations</li>
                <li>Implementation roadmap</li>
                <li>ROI projections</li>
              </ul>
            </div>
          </div>
          
          <div className="success-actions">
            <a href="#/" className="btn-primary">Return to Home</a>
            <a href="#/pricing" className="btn-secondary">View Pricing</a>
          </div>
          
          <div className="success-footer">
            <p>Questions? Contact us at <a href="mailto:support@viridity.com">support@viridity.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('FinOps');
  const [dashboardTab, setDashboardTab] = useState('results');
  const [expandedTiles, setExpandedTiles] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

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
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 100 // 100px offset from top
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      console.log('Response status:', response.status);
      
      if (response.ok) {
        console.log('Form submitted successfully, showing modal');
        // Show success message
        setShowSuccessModal(true);
        
        // Reset form
        e.target.reset();
        
        // Optionally redirect to success page
        // window.location.hash = '#/success';
      } else {
        console.log('Form submission failed');
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
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
                    <h4>Our Process</h4>
                  </div>
                  <div className="dropdown-section">
                    <h4>AWS (Amazon Web Services)</h4>
                    <div className="resource-links">
                      <a href="#"><DollarSign size={16} /> How we save</a>
                      <a href="#"><BarChart3 size={16} /> Reporting</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Google Cloud</h4>
                    <div className="resource-links">
                      <a href="#"><span style={{opacity: 0.5}}>Coming soon</span></a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Microsoft Azure</h4>
                    <div className="resource-links">
                      <a href="#"><span style={{opacity: 0.5}}>Coming soon</span></a>
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
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); setResourcesDropdownOpen(false); }}><Users size={16} /> About</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); navigate('/contact'); setResourcesDropdownOpen(false); }}><Users size={16} /> Contact</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); }} className="nav-item">Pricing</a>
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
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing'); setMobileMenuOpen(false); }}>Pricing</a>
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
                          <h2 className="animate-on-scroll">Why Viridity</h2>
          <div className="benefits-showcase">
            
            <div className="showcase-item animate-on-scroll">
              <div className="showcase-content">
                <h3>Reduce costs, mitigate risk</h3>
                <p>Optimize AWS spending in real-time while avoiding lock-in risk. Our expert team continuously adjusts your commitment strategy to maximize savings without compromising flexibility.</p>
                <div className="showcase-actions">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Request a Savings Analysis</button>
                </div>
              </div>
                                      <div className="showcase-visual">
                          <img src="/sdfghjnmjhgfds.png" alt="Reduce costs, mitigate risk" className="showcase-image" />
                        </div>
            </div>

            <div className="showcase-item animate-on-scroll">
              <div className="showcase-visual">
                <img src="/ChatGPT Image Aug 9, 2025 at 05_59_03 PM.png" alt="Real-time optimization, continuous savings" className="showcase-image" />
              </div>
              <div className="showcase-content">
                <h3>Real-time optimization, continuous savings</h3>
                <p>Expert team monitors usage patterns and adjusts strategies in real-time for maximum savings. Our autonomous system eliminates human involvement so you can tackle higher-order FinOps priorities.</p>
                <div className="showcase-actions">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Request a Savings Analysis</button>
                </div>
              </div>
            </div>

            <div className="showcase-item animate-on-scroll">
              <div className="showcase-content">
                <h3>Gain insights, avoid analysis paralysis</h3>
                <p>Get immediate results and track core optimization KPIs without data overload. Unlike traditional tools that overwhelm practitioners with excess data, VIRIDITY provides actionable insights that drive results.</p>
                <div className="showcase-actions">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Request a Savings Analysis</button>
                </div>
              </div>
              <div className="showcase-visual">
                <img src="/ChatGPT Image Aug 9, 2025 at 06_50_00 PM.png" alt="Gain insights, avoid analysis paralysis" className="showcase-image" />
              </div>
            </div>

            <div className="showcase-item animate-on-scroll">
              <div className="showcase-visual">
                <img src="/werghgrewedrfgbhng.png" alt="Increase ROI, decrease wasted spend" className="showcase-image" />
              </div>
              <div className="showcase-content">
                <h3>Increase ROI, decrease wasted spend</h3>
                <p>Generate incremental savings that exceed our fees and maximize AWS ROI. Our performance-based pricing ensures you always come out ahead, with transparent reporting on every dollar saved.</p>
                <div className="showcase-actions">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary">Request a Savings Analysis</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Analytics Section */}
      <section className="analytics">
        <div className="container">
          <h2 className="animate-on-scroll">Why AWS Bills Keep Growing</h2>
          <p className="analytics-intro animate-on-scroll">
            Your engineering team ships fast. Your AWS bill grows faster. <strong>The same agility that powers your product is quietly burning through your budget.</strong>
          </p>
          
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



      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="animate-on-scroll">What Our Partners say about VIRIDITY</h2>
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              {/* First set of testimonials */}
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"VIRIDITY saves us a considerable amount of money through expert AWS cost optimization. The pricing model based on savings makes it essentially free."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Sarah Johnson</h4>
                  <p>CTO, TechCorp</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Action-oriented AWS cost management—we set parameters for coverage and risk, and VIRIDITY takes actions with the best AWS financial instruments to meet our goals."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Enterprise Customer</h4>
                  <p>FinOps Lead</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="none" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Truly a set-and-save solution. Not only did our AWS cost reduction increase significantly, but the amount of time we spend managing AWS costs has been reduced substantially."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Mike Chen</h4>
                  <p>FinOps Lead, DataFlow</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"The ROI on VIRIDITY has exceeded our expectations. We're saving 40% more on our AWS costs with zero operational overhead."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Alex Rodriguez</h4>
                  <p>CFO, CloudScale</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.5</span>
                </div>
                <div className="testimonial-content">
                  <p>"VIRIDITY's expert team delivered results within the first month. Our AWS optimization is now completely hands-off."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Jennifer Park</h4>
                  <p>VP Engineering, StreamTech</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="none" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Best investment we've made in our cloud infrastructure. VIRIDITY pays for itself and then some."</p>
                </div>
                <div className="testimonial-author">
                  <h4>David Kim</h4>
                  <p>CTO, FinanceFlow</p>
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"VIRIDITY saves us a considerable amount of money through expert AWS cost optimization. The pricing model based on savings makes it essentially free."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Sarah Johnson</h4>
                  <p>CTO, TechCorp</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Action-oriented AWS cost management—we set parameters for coverage and risk, and VIRIDITY takes actions with the best AWS financial instruments to meet our goals."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Enterprise Customer</h4>
                  <p>FinOps Lead</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="none" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Truly a set-and-save solution. Not only did our AWS cost reduction increase significantly, but the amount of time we spend managing AWS costs has been reduced substantially."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Mike Chen</h4>
                  <p>FinOps Lead, DataFlow</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">5.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"The ROI on VIRIDITY has exceeded our expectations. We're saving 40% more on our AWS costs with zero operational overhead."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Alex Rodriguez</h4>
                  <p>CFO, CloudScale</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.5</span>
                </div>
                <div className="testimonial-content">
                  <p>"VIRIDITY's expert team delivered results within the first month. Our AWS optimization is now completely hands-off."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Jennifer Park</h4>
                  <p>VP Engineering, StreamTech</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="#fbbf24" color="#fbbf24" />
                    <Star size={16} fill="none" color="#fbbf24" />
                  </div>
                  <span className="rating-text">4.0</span>
                </div>
                <div className="testimonial-content">
                  <p>"Best investment we've made in our cloud infrastructure. VIRIDITY pays for itself and then some."</p>
                </div>
                <div className="testimonial-author">
                  <h4>David Kim</h4>
                  <p>CTO, FinanceFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="cta-background">
          <div className="cta-pattern"></div>
          <div className="cta-glow"></div>
        </div>

        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content-left animate-on-scroll">
              <h2 className="cta-headline">
                Unlock Your Hidden
                <span className="highlight-gradient"> AWS Savings</span>
              </h2>

              <p className="cta-subtext">
                Get a comprehensive analysis of your AWS infrastructure and discover optimization opportunities worth thousands of dollars per month.
              </p>
            </div>
            
            <div className="cta-form-container animate-on-scroll">
              <div className="cta-form">
                <div className="form-header">
                  <h3>Submit the form to request your free AWS savings analysis.</h3>
                </div>

                <form onSubmit={handleFormSubmit}>
                  <input type="hidden" name="access_key" value="9a066d3d-5907-438e-b186-f389e3dd4b4d" />
                  
                  <div className="form-group">
                    <div className="form-row">
                      <div className="input-group">
                        <input type="text" name="First Name" placeholder="First Name*" required />
                      </div>
                      <div className="input-group">
                        <input type="text" name="Last Name" placeholder="Last Name*" required />
                      </div>
                    </div>
                  </div>

                  <div className="input-group">
                    <input type="email" name="Email" placeholder="Work Email*" required />
                  </div>

                  <div className="input-group">
                    <select name="Monthly Cloud Spend" required>
                      <option value="">Please Select</option>
                      <option value="Less than $10,000 spend">Less than $10,000 spend</option>
                      <option value="$10,000 to $50,000">$10,000 to $50,000</option>
                      <option value="$50,000 to $100,000">$50,000 to $100,000</option>
                      <option value="$100,000 to $500,000">$100,000 to $500,000</option>
                      <option value="$500,000 to $1,000,000">$500,000 to $1,000,000</option>
                      <option value="$1,000,000 to $2,000,000">$1,000,000 to $2,000,000</option>
                      <option value="$2,000,000 to $5,000,000">$2,000,000 to $5,000,000</option>
                      <option value="$5,000,000 to $10,000,000">$5,000,000 to $10,000,000</option>
                      <option value="More than $10,000,000 spend">More than $10,000,000 spend</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-submit">
                    <span>Get Started</span>
                  </button>
                </form>
              </div>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-content">
              <h2>Application Submitted</h2>
              <p>Thank you for your interest in VIRIDITY. Our team will be in touch shortly.</p>
              
              <button 
                className="btn-primary" 
                onClick={() => setShowSuccessModal(false)}
              >
                Close
              </button>
              
              <button 
                className="success-modal-close" 
                onClick={() => setShowSuccessModal(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;


