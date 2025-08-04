import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, ArrowRight, Play, Calendar, BookOpen, Headphones, Users, HelpCircle, FileText, Building, Star, CheckCircle, TrendingUp, DollarSign, Activity, BarChart3, Settings, Globe, Shield, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('FinOps')

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
            <div className="logo-container">
              <img src="/IMG_3102.PNG" alt="VIRIDTY Logo" className="logo-icon" />
              <h2>VIRIDTY</h2>
            </div>
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
                    <p>Automated AWS Cost Management</p>
                    <p>Intelligent Resource Scheduling</p>
                  </div>
                  <div className="dropdown-section">
                    <h4>Reporting & Insights</h4>
                    <p>Cost Allocation & Showback</p>
                    <p>Savings Analytics & Forecasting</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="nav-item dropdown" onMouseEnter={() => setResourcesDropdownOpen(true)} onMouseLeave={() => setResourcesDropdownOpen(false)}>
              <span>Resources <ChevronDown size={16} /></span>
              {resourcesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h4>Learn & Meet</h4>
                    <div className="resource-links">
                      <a href="#"><BookOpen size={16} /> AWS Cost Optimization Guide</a>
                      <a href="#"><FileText size={16} /> Blog</a>
                      <a href="#"><Calendar size={16} /> Events</a>
                      <a href="#"><Headphones size={16} /> Podcast</a>
                      <a href="#"><Users size={16} /> Webinars</a>
                      <a href="#"><Star size={16} /> Success Stories</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Using VIRIDTY</h4>
                    <div className="resource-links">
                      <a href="#"><HelpCircle size={16} /> Help Center</a>
                      <a href="#"><FileText size={16} /> Legal</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#" className="nav-item">Pricing</a>
            
            <div className="nav-item dropdown" onMouseEnter={() => setCompanyDropdownOpen(true)} onMouseLeave={() => setCompanyDropdownOpen(false)}>
              <span>Company <ChevronDown size={16} /></span>
              {companyDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#">About VIRIDTY</a>
                  <a href="#">News</a>
                  <a href="#">Contact</a>
                  <a href="#">Careers</a>
                  <a href="#">Partners</a>
                </div>
              )}
            </div>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get a Demo</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Product</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Company</a>
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary" onClick={() => { scrollToSection('cta'); setMobileMenuOpen(false); }}>Get a Demo</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Automatic AWS cost optimization</h1>
              <p>Reduce your AWS cloud costs with intelligent billing optimization and zero ongoing effort</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Schedule a Demo</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Free AWS Cost Analysis</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-tabs">
                    <span className="tab active">Dashboard</span>
                    <span className="tab">Reports</span>
                    <span className="tab">Settings</span>
                  </div>
                </div>
                <div className="dashboard-content">
                  <div className="metric-card">
                    <h3>Monthly Savings</h3>
                    <div className="metric-value">$45K+</div>
                  </div>
                  <div className="metric-card">
                    <h3>Cost Reduction</h3>
                    <div className="metric-value">35%</div>
                  </div>
                  <div className="metric-card">
                    <h3>ROI</h3>
                    <div className="metric-value">400%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item animate-on-scroll">
              <h3>Cost Reduction</h3>
              <p>Achieve significant AWS cost savings through intelligent resource optimization and automated billing management.</p>
              <a href="#" className="read-more">Read More <ArrowRight size={16} /></a>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>Savings Plans Optimization</h3>
              <p>Automatically manage AWS Savings Plans to maximize your discount while maintaining flexibility.</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>Reserved Instances</h3>
              <p>Intelligent Reserved Instance management to lock in savings for predictable workloads.</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>Cost Allocation</h3>
              <p>Accurate cost allocation and showback for better financial transparency and accountability.</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>Automated Actions</h3>
              <p>VIRIDTY takes thousands of automated actions monthly to continuously optimize your AWS costs.</p>
            </div>
            <div className="stat-item animate-on-scroll">
              <h3>Resource Utilization</h3>
              <p>Increase your AWS resource utilization through intelligent scheduling and optimization.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Challenges Section */}
      <section className="challenges">
        <div className="container">
          <h2 className="animate-on-scroll">AWS cost optimization and achieving consistent savings is an ongoing struggle for FinOps teams</h2>
          <div className="challenges-grid">
            <div className="challenge-card animate-on-scroll">
              <h3>Roughly 30% of AWS spend is estimated to be waste</h3>
              <p>The dynamic nature of AWS workloads makes ongoing cost optimization challenging for both FinOps and engineering teams.</p>
            </div>
            <div className="challenge-card animate-on-scroll">
              <h3>Managing AWS costs without compromise is hard</h3>
              <p>Cost optimization must not compromise application performance, infrastructure, or compliance with business rules.</p>
            </div>
            <div className="challenge-card animate-on-scroll">
              <h3>AWS commitments are effective, but require automation</h3>
              <p>Optimizing AWS Savings Plans and Reserved Instances may offer the best savings; automated management delivers greater outcomes with lower risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VIRIDTY Section */}
      <section className="why-prosperops">
        <div className="container">
          <h2 className="animate-on-scroll">Why VIRIDTY</h2>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Reduce AWS costs, mitigate risk</h3>
              <p>Continuously optimize your AWS spending while adapting to changes in usage in real time to safely increase savings while avoiding lock-in risk.</p>
              <div className="benefit-actions">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Started</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <Settings size={32} />
              </div>
              <h3>Offload work, scale FinOps</h3>
              <p>Managing AWS costs via manual reporting tools can lead to suboptimal results. Give this work to VIRIDTY automation and eliminate human involvement.</p>
              <div className="benefit-actions">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Started</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Gain insights, avoid analysis paralysis</h3>
              <p>Unlike traditional AWS cost tools that overwhelm practitioners with excess data, VIRIDTY not only provides immediate results, but also tracks core optimization KPIs.</p>
              <div className="benefit-actions">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Started</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <DollarSign size={32} />
              </div>
              <h3>Increase ROI, decrease wasted spend</h3>
              <p>Maximize the value of your AWS investments with VIRIDTY. It generates incremental savings that more than offsets the charge.</p>
              <div className="benefit-actions">
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Started</button>
                <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
              </div>
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
          <button className="btn-primary animate-on-scroll" onClick={() => scrollToSection('cta')}>Get a Demo</button>
          
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
                MSPs/Partners
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'FinOps' && (
                <div className="practitioner-card">
                  <h3>Higher margins without the work</h3>
                  <p>VIRIDTY automatically manages and optimizes AWS discount instruments.</p>
                  <ul>
                    <li>Save more money with less waste than on-demand AWS pricing</li>
                    <li>Maximize AWS Savings Plans and Reserved Instance flexibility</li>
                    <li>Automate away repetitive AWS cost optimization tasks</li>
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
                  <p>VIRIDTY autonomously manages AWS discounts, so engineers can focus on building.</p>
                  <button className="btn-primary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
                </div>
              )}
              {activeTab === 'Resellers' && (
                <div className="practitioner-card">
                  <h3>Technology that scales your business</h3>
                  <p>Our platform supports all AWS service delivery models with an integrated view of cost optimization.</p>
                  <ul>
                    <li>End customer AWS dashboards</li>
                    <li>Cross-org AWS financial reporting</li>
                    <li>AWS commitment load balancing</li>
                  </ul>
                  <p>VIRIDTY is purpose built for the AWS partner use case.</p>
                  <button className="btn-primary" onClick={() => scrollToSection('cta')}>Request a Demo</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="enterprise-stats">
        <div className="container">
          <h2 className="animate-on-scroll">Enterprise-scale for sophisticated AWS cost optimizers.</h2>
          <p className="animate-on-scroll">VIRIDTY manages AWS cost optimization for DevOps and FinOps teams from startups to enterprises and AWS partners across the globe.</p>
          
          <div className="stats-grid">
            <div className="stat animate-on-scroll">
              <h3>$50M+</h3>
              <p>Annual AWS Spend Under Management</p>
            </div>
            <div className="stat animate-on-scroll">
              <h3>$15M+</h3>
              <p>Lifetime AWS Savings Generated</p>
            </div>
            <div className="stat animate-on-scroll">
              <h3>500+</h3>
              <p>AWS Accounts Optimized</p>
            </div>
            <div className="stat animate-on-scroll">
              <h3>10K+</h3>
              <p>AWS Resources Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="animate-on-scroll">What customers say about VIRIDTY</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <p>"VIRIDTY saves us a considerable amount of money automating AWS cost optimization tasks. The pricing model based on savings makes it essentially free."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>CTO, TechCorp</p>
              </div>
            </div>
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <p>"Action-oriented AWS cost management—we set parameters for coverage and risk, and VIRIDTY takes actions with the best AWS financial instruments to meet our goals."</p>
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
          <p className="animate-on-scroll">Get a deeper understanding of your current AWS spend and savings, and find out how much more you can save with VIRIDTY!</p>
          
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
                <img src="/IMG_3102.PNG" alt="VIRIDTY Logo" className="footer-logo-icon" />
                <h3>VIRIDTY</h3>
              </div>
              <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Pricing</a>
                <a href="#">Partners</a>
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">AWS Cost Optimization Blog</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Actions</h4>
              <div className="footer-links">
                <a href="#" onClick={() => scrollToSection('cta')}>Get a Demo</a>
                <a href="#">Start for Free</a>
                <a href="#" onClick={() => scrollToSection('cta')}>AWS Cost Analysis</a>
                <a href="#">Become a Partner</a>
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
                <a href="#">Log In</a>
                <a href="#">Help Center</a>
                <a href="#">Trust Center</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 VIRIDTY, Inc. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Website Terms</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
