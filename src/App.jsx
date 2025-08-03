import { useState } from 'react'
import { ChevronDown, Menu, X, ArrowRight, Play, Calendar, BookOpen, Headphones, Users, HelpCircle, FileText, Building, Star, CheckCircle, TrendingUp, DollarSign, Activity, BarChart3, Settings, Globe, Shield, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h2>ProsperOps</h2>
          </div>
          
          <nav className="nav-desktop">
            <div className="nav-item dropdown" onMouseEnter={() => setProductDropdownOpen(true)} onMouseLeave={() => setProductDropdownOpen(false)}>
              <span>Product <ChevronDown size={16} /></span>
              {productDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h4>Rate Optimization</h4>
                    <div className="cloud-providers">
                      <div className="provider">
                        <h5>AWS</h5>
                        <p>Compute (EC2, Lambda, Fargate)</p>
                        <p>RDS, ElastiCache, MemoryDB, Redshift, OpenSearch</p>
                      </div>
                      <div className="provider">
                        <h5>Google Cloud</h5>
                        <p>Compute (Compute Engine, GKE, Cloud Run)</p>
                        <p>Cloud SQL</p>
                      </div>
                      <div className="provider">
                        <h5>Microsoft Azure</h5>
                        <p>Compute (Virtual Machines, App Service, AKS)</p>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Workload Optimization</h4>
                    <p>ProsperOps Scheduler</p>
                  </div>
                  <div className="dropdown-section">
                    <h4>Reporting & Insights</h4>
                    <p>Intelligent Showback</p>
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
                      <a href="#"><BookOpen size={16} /> Library</a>
                      <a href="#"><FileText size={16} /> Blog</a>
                      <a href="#"><Calendar size={16} /> Events</a>
                      <a href="#"><Headphones size={16} /> Podcast</a>
                      <a href="#"><Users size={16} /> Webinars</a>
                      <a href="#"><Star size={16} /> Success Stories</a>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Using ProsperOps</h4>
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
                  <a href="#">About ProsperOps</a>
                  <a href="#">News</a>
                  <a href="#">Contact</a>
                  <a href="#">Careers</a>
                  <a href="#">Partners</a>
                  <a href="#">Private Equity</a>
                </div>
              )}
            </div>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Get a Demo</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#">Product</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Company</a>
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Get a Demo</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Automatic cloud cost optimization</h1>
              <p>Reduce your AWS, Azure, and Google Cloud costs with zero ongoing effort</p>
              <div className="hero-buttons">
                <button className="btn-primary">Schedule a Demo</button>
                <button className="btn-secondary">Free Savings Analysis</button>
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
                    <h3>Lifetime Savings</h3>
                    <div className="metric-value">$2.4B+</div>
                  </div>
                  <div className="metric-card">
                    <h3>Effective Savings Rate</h3>
                    <div className="metric-value">85%</div>
                  </div>
                  <div className="metric-card">
                    <h3>Monthly Savings</h3>
                    <div className="metric-value">$12.5M</div>
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
            <div className="stat-item">
              <h3>Lifetime Savings</h3>
              <p>Achieve significant cost savings above and beyond your current level with ProsperOps.</p>
              <a href="#" className="read-more">Read More <ArrowRight size={16} /></a>
            </div>
            <div className="stat-item">
              <h3>Effective Savings Rate</h3>
              <p>Generate cloud savings outcomes that place you in the top 1-2% of FinOps teams vs. industry peers.</p>
            </div>
            <div className="stat-item">
              <h3>Savings</h3>
              <p>Gain insights from the Net Savings Trend graph, which shows savings outcomes and ESR over time.</p>
            </div>
            <div className="stat-item">
              <h3>Showback</h3>
              <p>Close the books with precision and speed with Intelligent Showback.</p>
            </div>
            <div className="stat-item">
              <h3>Activity</h3>
              <p>ProsperOps takes multiple, if not thousands, of actions monthly to continuously optimize your cost savings.</p>
            </div>
            <div className="stat-item">
              <h3>Utilization</h3>
              <p>Increase your commitment utilization with ProsperOps automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="customers">
        <div className="container">
          <div className="customer-logos">
            <div className="logo-grid">
              <div className="customer-logo">AllTrails</div>
              <div className="customer-logo">Anaconda</div>
              <div className="customer-logo">Ballotpedia</div>
              <div className="customer-logo">Betterment</div>
              <div className="customer-logo">Boomi</div>
              <div className="customer-logo">Canva</div>
              <div className="customer-logo">CleverTap</div>
              <div className="customer-logo">Coinbase</div>
              <div className="customer-logo">Collibra</div>
              <div className="customer-logo">ConductorOne</div>
              <div className="customer-logo">Coupa</div>
              <div className="customer-logo">Dr. Brant</div>
              <div className="customer-logo">Duolingo</div>
              <div className="customer-logo">FinchAI</div>
              <div className="customer-logo">Hiya</div>
              <div className="customer-logo">Kratos</div>
              <div className="customer-logo">LegalZoom</div>
              <div className="customer-logo">Mailgun</div>
              <div className="customer-logo">Matillion</div>
              <div className="customer-logo">Moveworks</div>
              <div className="customer-logo">Oblivion</div>
              <div className="customer-logo">SeatGeek</div>
              <div className="customer-logo">Sportradar</div>
              <div className="customer-logo">Syntax</div>
              <div className="customer-logo">TD Synnex</div>
              <div className="customer-logo">Tealium</div>
              <div className="customer-logo">Tipalti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges">
        <div className="container">
          <h2>Cost optimization and achieving consistent results is an ongoing struggle for FinOps teams</h2>
          <div className="challenges-grid">
            <div className="challenge-card">
              <h3>Roughly 1/4 of cloud spend is estimated to be waste</h3>
              <p>The dynamic nature of cloud workloads makes ongoing optimization challenging for both FinOps and engineering teams.</p>
            </div>
            <div className="challenge-card">
              <h3>Controlling cost without compromise is hard</h3>
              <p>Cost optimization must not compromise application performance, infrastructure, or compliance with business rules.</p>
            </div>
            <div className="challenge-card">
              <h3>Commitments are effective, but require automation</h3>
              <p>Optimizing rates may offer the best bang-for-the-buck; automated commitment management delivers greater outcomes with lower risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProsperOps Section */}
      <section className="why-prosperops">
        <div className="container">
          <h2>Why ProsperOps</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Reduce costs, mitigate risk</h3>
              <p>Continuously optimize a portfolio of commitments while adapting them to changes in usage in real time to safely increase coverage while avoiding lock-in risk.</p>
              <div className="benefit-actions">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Settings size={32} />
              </div>
              <h3>Offload work, scale FinOps</h3>
              <p>Managing commitments via reporting tools can lead to suboptimal results. Give this work to ProsperOps automation and eliminate human involvement.</p>
              <div className="benefit-actions">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Gain insights, avoid analysis paralysis</h3>
              <p>Unlike traditional tools that overwhelm practitioners with excess data, ProsperOps not only provides immediate results, but also tracks core optimization KPIs.</p>
              <div className="benefit-actions">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Request a Demo</button>
              </div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <DollarSign size={32} />
              </div>
              <h3>Increase ROI, decrease wasted spend</h3>
              <p>Maximize the value of your cloud investments with ProsperOps. It generates incremental savings that more than offsets the charge.</p>
              <div className="benefit-actions">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings as a Service Section */}
      <section className="savings-service">
        <div className="container">
          <h2>Reduce your overall costs and see the benefits across your company</h2>
          <h3>Savings as a Service For All Cloud Practitioners</h3>
          <p>We put money back into your budget and generate more savings than our charge.</p>
          <button className="btn-primary">Get a Demo</button>
          
          <div className="practitioner-tabs">
            <div className="tab-buttons">
              <button className="tab-btn active">FinOps</button>
              <button className="tab-btn">DevOps</button>
              <button className="tab-btn">Resellers/MSPs</button>
            </div>
            
            <div className="tab-content">
              <div className="practitioner-card">
                <h3>Higher margins without the work</h3>
                <p>ProsperOps automatically manages and optimizes discount instruments.</p>
                <ul>
                  <li>Save more money with less waste than on-demand</li>
                  <li>Maximize commitment flexibility</li>
                  <li>Automate away repetitive rate optimization tasks</li>
                </ul>
                <p>FinOps teams can focus on higher-value tasks.</p>
                <button className="btn-primary">Request a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="enterprise-stats">
        <div className="container">
          <h2>Enterprise-scale for sophisticated cloud optimizers.</h2>
          <p>ProsperOps manages commitment-based discounts for DevOps and FinOps teams from startups to enterprises and cloud resellers across the globe.</p>
          
          <div className="stats-grid">
            <div className="stat">
              <h3>$4 Billion+</h3>
              <p>Annual Spend Under Management</p>
            </div>
            <div className="stat">
              <h3>$2.4 Billion+</h3>
              <p>Lifetime Savings Generated</p>
            </div>
            <div className="stat">
              <h3>856 Million+</h3>
              <p>Resource State Changes Processed</p>
            </div>
            <div className="stat">
              <h3>25 Million+</h3>
              <p>Discount Instruments Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What customers say about ProsperOps</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Saves a considerable amount of money automating a mind-numbing task and the pricing is % of savings so it is basically free."</p>
              </div>
              <div className="testimonial-author">
                <h4>Maurice Butler</h4>
                <p>CTO, Psychwire</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Action-oriented managed service—we set parameters for coverage and risk, and ProsperOps take actions with the best AWS financial instruments to meet our goals."</p>
              </div>
              <div className="testimonial-author">
                <h4>Enterprise Customer</h4>
                <p>FinOps</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Truly a set-and-save solution. Not only did our Effective Savings Rate increase significantly, but the amount of time we spend buying and managing commitments has been reduced substantially."</p>
              </div>
              <div className="testimonial-author">
                <h4>Eric M.</h4>
                <p>FinOps Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Request a Free Savings Analysis</h2>
          <p>3 out of 4 customers see at least a 50% increase in savings.</p>
          <p>Get a deeper understanding of your current cloud spend and savings, and find out how much more you can save with ProsperOps!</p>
          
          <div className="cta-benefits">
            <div className="benefit">
              <CheckCircle size={20} />
              <span>Visualize your savings potential</span>
            </div>
            <div className="benefit">
              <CheckCircle size={20} />
              <span>Benchmark performance vs. peers</span>
            </div>
            <div className="benefit">
              <CheckCircle size={20} />
              <span>10-minute setup, no strings attached</span>
            </div>
          </div>
          
          <div className="cta-form">
            <p>Submit the form to request your free cloud savings analysis.</p>
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
              <h3>ProsperOps</h3>
              <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Pricing</a>
                <a href="#">Partners</a>
                <a href="#">About Us</a>
                <a href="#">News</a>
                <a href="#">FinOps Podcast 🎙️</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Actions</h4>
              <div className="footer-links">
                <a href="#">Get a Demo</a>
                <a href="#">Start for Free</a>
                <a href="#">Cloud Savings Analysis</a>
                <a href="#">Become a Partner</a>
                <a href="#">Resource Center</a>
                <a href="#">Effective Savings Rate</a>
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
            <p>© 2025 ProsperOps, Inc. All rights reserved.</p>
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
