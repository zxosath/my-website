import React, { useEffect } from 'react';
import { CheckCircle, ChevronDown, Menu } from 'lucide-react';
import './App.css';

function Pricing() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header scrolled">
        <div className="header-container">
          <div className="logo">
            <div className="logo-container">
              <img src="/IMG_3102.PNG" alt="VIRIDITY Logo" className="logo-icon" />
              <h2>VIRIDITY</h2>
            </div>
          </div>
          
          <nav className="nav-desktop">
            <div className="nav-item dropdown">
              <span>Product <ChevronDown size={16} /></span>
            </div>
            
            <div className="nav-item dropdown">
              <span>Resources <ChevronDown size={16} /></span>
            </div>
            
            <a href="#/" className="nav-item">Home</a>
          </nav>

          <div className="header-actions">
            <button className="btn-primary desktop-only" onClick={() => scrollToSection('cta')}>Free Analysis</button>
          </div>

          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2 className="animate-on-scroll">We succeed only when you save money</h2>
            <p className="animate-on-scroll">Unlike traditional cloud cost management tools that charge based on your cloud spend, VIRIDITY charges a small percentage of the actual savings we deliver to your AWS budget.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>AWS Cost Assessment</h3>
                <div className="pricing-badge">Free</div>
              </div>
              <div className="pricing-card-content">
                <h4>Discover Your Savings Potential</h4>
                <p>Get a comprehensive analysis of your AWS spending patterns and see exactly how much VIRIDITY could save you. No commitment required.</p>
                <ul>
                  <li>Compare your performance against industry benchmarks</li>
                  <li>See your potential savings visualized</li>
                  <li>Detailed review with our AWS cost optimization experts</li>
                  <li>Read-only access to billing data only - no infrastructure access</li>
                </ul>
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Get Your Free Assessment</button>
              </div>
            </div>

            <div className="pricing-card featured animate-on-scroll">
              <div className="pricing-card-header">
                <h3>VIRIDITY AWS Optimization Platform</h3>
                <div className="pricing-badge">Savings-Based Pricing</div>
              </div>
              <div className="pricing-card-content">
                <h4>Automated AWS Cost Optimization</h4>
                <p>Our platform automatically optimizes your AWS Savings Plans and Reserved Instances to deliver 40%+ savings on your cloud spend with zero manual effort.</p>
                <ul>
                  <li>Pay only for the savings we generate</li>
                  <li>Fully automated discount management</li>
                  <li>Comprehensive financial reporting</li>
                  <li>Read-only billing access - we never touch your infrastructure</li>
                </ul>
                <button className="btn-primary" onClick={() => scrollToSection('cta')}>Start Optimizing</button>
              </div>
            </div>
          </div>

          <div className="pricing-benefits animate-on-scroll">
            <h3>Risk-free cloud cost optimization</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>No upfront investment</h4>
                  <p>Zero setup costs, no hidden fees, no minimum spend requirements</p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>Powerful optimization dashboard</h4>
                  <p>Track performance, audit savings, generate FinOps reports, and more</p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <div>
                  <h4>Set it and forget it</h4>
                  <p>Simple deployment, minimal configuration, zero ongoing maintenance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-stats animate-on-scroll">
            <h3>Your savings compound over time</h3>
            <p>VIRIDITY immediately starts generating savings and reducing your AWS costs. As your usage patterns evolve, our algorithms continuously optimize your discount portfolio to unlock even greater savings.</p>
            <p>Our intelligent systems work around the clock—24/7—automatically aligning your discount instruments with usage fluctuations, all without any manual intervention required.</p>
            <div className="stats-highlight">
              <h4>VIRIDITY has delivered over</h4>
              <div className="highlight-amount">$2,147,483,647</div>
              <p>in AWS cost savings to our customers</p>
            </div>
          </div>

          <div className="pricing-cta animate-on-scroll">
            <h3>Start saving today</h3>
            <p>On average, VIRIDITY customers see a 60% improvement in their cloud savings compared to manual optimization efforts.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('cta')}>Begin Saving</button>
              <button className="btn-secondary" onClick={() => scrollToSection('cta')}>Schedule Demo</button>
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
                <a href="#/">Home</a>
                <a href="#/pricing">Pricing</a>
                <a href="#">Partners</a>
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

export default Pricing; 