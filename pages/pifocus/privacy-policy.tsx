
"use client";

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function PrivacyPolicy() {
  useEffect(() => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle') as HTMLElement | null;
    const navMenu = document.querySelector('.nav-menu') as HTMLElement | null;
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        });
      });
      document.addEventListener('click', function(event) {
        const target = event.target as Node;
        if (!navToggle.contains(target) && !navMenu.contains(target)) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
          const navbar = document.querySelector('.navbar') as HTMLElement | null;
          const headerHeight = navbar?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar') as HTMLElement | null;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
          navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
      }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('.policy-section');
      const navLinks = document.querySelectorAll('.nav-link');
      let current: string = '';
      const navbar = document.querySelector('.navbar') as HTMLElement | null;
      const headerHeight = navbar?.offsetHeight || 0;
      sections.forEach(section => {
        const sec = section as HTMLElement;
        const sectionTop = sec.offsetTop - headerHeight - 100;
        const sectionHeight = sec.clientHeight;
        const id = sec.getAttribute('id');
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight && id) {
          current = id;
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new window.IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    document.querySelectorAll('.policy-section').forEach(section => {
      const sec = section as HTMLElement;
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(30px)';
      sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(sec);
    });

    // Table of Contents hover effects
    document.querySelectorAll('.toc-item').forEach(item => {
      item.addEventListener('mouseenter', function(this: HTMLElement) {
        this.style.transform = 'translateY(-3px) scale(1.02)';
      });
      item.addEventListener('mouseleave', function(this: HTMLElement) {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Copy to clipboard functionality for contact information
    document.querySelectorAll('.contact-item').forEach(item => {
      item.addEventListener('click', function(this: HTMLElement) {
        const text = this.querySelector('p')?.textContent;
        if (navigator.clipboard && text) {
          navigator.clipboard.writeText(text).then(() => {
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Copied!';
            tooltip.style.cssText = `position: absolute; background: #2563eb; color: white; padding: 8px 12px; border-radius: 6px; font-size: 14px; z-index: 1000; pointer-events: none; transform: translateY(-40px);`;
            this.style.position = 'relative';
            this.appendChild(tooltip);
            setTimeout(() => { tooltip.remove(); }, 2000);
          });
        }
      });
    });

    // Print functionality
    function addPrintButton() {
      const printButton = document.createElement('button');
      printButton.innerHTML = '<i class="fas fa-print"></i> Print Policy';
      printButton.style.cssText = `position: fixed; bottom: 30px; right: 30px; background: #2563eb; color: white; border: none; padding: 15px 20px; border-radius: 50px; cursor: pointer; font-size: 16px; font-weight: 500; box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3); transition: all 0.3s ease; z-index: 1000; display: flex; align-items: center; gap: 8px;`;
      printButton.addEventListener('mouseenter', function(this: HTMLElement) {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 25px rgba(37, 99, 235, 0.4)';
      });
      printButton.addEventListener('mouseleave', function(this: HTMLElement) {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';
      });
      printButton.addEventListener('click', function() {
        window.print();
      });
      document.body.appendChild(printButton);
      return printButton;
    }
    const printButton = addPrintButton();

    // Back to top functionality
    function addBackToTop() {
      const backToTop = document.createElement('button');
      backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
      backToTop.style.cssText = `position: fixed; bottom: 100px; right: 30px; background: #64748b; color: white; border: none; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; font-size: 18px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); transition: all 0.3s ease; z-index: 1000; opacity: 0; visibility: hidden;`;
      backToTop.addEventListener('mouseenter', function(this: HTMLElement) {
        this.style.background = '#2563eb';
        this.style.transform = 'translateY(-2px)';
      });
      backToTop.addEventListener('mouseleave', function(this: HTMLElement) {
        this.style.background = '#64748b';
        this.style.transform = 'translateY(0)';
      });
      backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(backToTop);
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backToTop.style.opacity = '1';
          backToTop.style.visibility = 'visible';
        } else {
          backToTop.style.opacity = '0';
          backToTop.style.visibility = 'hidden';
        }
      });
      return backToTop;
    }
    const backToTop = addBackToTop();

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
      // Escape key to close mobile menu
      const navMenu = document.querySelector('.nav-menu') as HTMLElement | null;
      const navToggle = document.querySelector('.nav-toggle') as HTMLElement | null;
      if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle?.classList.remove('active');
        }
      }
      // Ctrl/Cmd + P for print
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
      }
    });

    // Performance optimization: Lazy load images if any are added later
    if ('IntersectionObserver' in window) {
      const imageObserver = new window.IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img as HTMLImageElement);
      });
    }

    return () => {
      printButton.remove();
      backToTop.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Privacy Policy - PiFocus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-container">
              <Image src="/logo pw.png" alt="Physics Wallah logo" className="brand-logo" width={28} height={28} />
              <h2>PiFocus</h2>
            </div>
          </div>
          <div className="nav-menu">
            <a href="#overview" className="nav-link">Overview</a>
            <a href="#data-collection" className="nav-link">Data Collection</a>
            <a href="#data-usage" className="nav-link">Data Usage</a>
            <a href="#data-sharing" className="nav-link">Data Sharing</a>
            <a href="#user-rights" className="nav-link">Your Rights</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="subtitle">Last updated: <span id="last-updated">August 28, 2025</span></p>
          <p className="description">
            This Privacy Policy describes how we collect, use, and protect your personal information 
            when you use the PiFocus Mobile Device Management Application and services.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Overview Section */}
          <section id="overview" className="policy-section">
            <h2><i className="fas fa-info-circle"></i> Overview</h2>
            <div className="content-box">
              <p>
                Please read the following Privacy Policy of the services made available through the PiFocus Mobile Device Management Application.
              </p>
              <p>
                Please ensure that this Privacy Policy is read carefully before availing any services from Us. This Privacy Policy may be updated from time to time. To stay updated with our methods of using Your information and protecting Your privacy, please review this Policy periodically.
              </p>
              <p>
                By using the PiFocus App and/or by providing Your information, You consent to the collection and use of the information You disclose in accordance with this Privacy Policy. If you do not agree to the terms, please discontinue using or accessing the PiFocus App.
              </p>
              <div className="highlight-box">
                <h4>Key Points:</h4>
                <ul>
                  <li>We collect only necessary information for device management services</li>
                  <li>Your data is protected with encryption and strict security measures</li>
                  <li>You have control over your personal information and can opt-out</li>
                  <li>We comply with applicable privacy laws including GDPR and Indian IT Act</li>
                  <li>We do not sell or rent your personal information to third parties</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Collection Section */}
          <section id="data-collection" className="policy-section">
            <h2><i className="fas fa-database"></i> Information We Collect</h2>
            <div className="content-box">
              <h3>Personal Information</h3>
              <p>Information we collect may include:</p>
              <div className="info-grid">
                <div className="info-card">
                  <h4>Account Information</h4>
                  <ul>
                    <li>Name and email address</li>
                    <li>Telephone number</li>
                    <li>Username and password</li>
                    <li>Institution/Organization details</li>
                  </ul>
                </div>
                <div className="info-card">
                  <h4>Device Information</h4>
                  <ul>
                    <li>Device type and model</li>
                    <li>Operating system version</li>
                    <li>IP address</li>
                    <li>Network information</li>
                  </ul>
                </div>
                <div className="info-card">
                  <h4>Additional Information</h4>
                  <ul>
                    <li>Service address</li>
                    <li>User uploaded photos and IDs</li>
                    <li>Demographic information</li>
                    <li>Institution location details</li>
                  </ul>
                </div>
              </div>

              <h3>Registration Information</h3>
              <p>When creating a profile and using PiFocus services, You may be asked to provide:</p>
              <ul>
                <li><strong>Name:</strong> Your full name for account identification</li>
                <li><strong>Username & Password:</strong> For secure account access</li>
                <li><strong>Email Address:</strong> For communications and account recovery</li>
                <li><strong>Institution/Organization Details:</strong> Your educational or organizational affiliation</li>
                <li><strong>Year of Joining:</strong> Institution or program start date</li>
              </ul>

              <h3>Third-Party Sign-In</h3>
              <p>We may provide options to register using third-party platforms such as Google or Facebook. If you select this option, you allow us to access your profile information (name, email, and basic details). Please note that registration via these platforms subjects you to their respective Terms & Privacy Policies.</p>

              <h3>Automatic Tracking</h3>
              <p>When using the App, We may collect technical details such as:</p>
              <ul>
                <li><strong>Device Information:</strong> Hardware model, operating system, and system information</li>
                <li><strong>IP Address:</strong> For security and service optimization</li>
                <li><strong>Network Information:</strong> Connection details and performance metrics</li>
              </ul>
            </div>
          </section>

          {/* Data Usage Section */}
          <section id="data-usage" className="policy-section">
            <h2><i className="fas fa-cogs"></i> How We Use Your Information</h2>
            <div className="content-box">
              <p>The information collected by PiFocus is used for the following purposes:</p>
              <div className="usage-grid">
                <div className="usage-item">
                  <i className="fas fa-rocket"></i>
                  <h4>Service Provision</h4>
                  <p>To provide, maintain, and improve our device management services</p>
                </div>
                <div className="usage-item">
                  <i className="fas fa-user-cog"></i>
                  <h4>Personalization</h4>
                  <p>To personalize the App based on user interests and preferences</p>
                </div>
                <div className="usage-item">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Security</h4>
                  <p>To detect and prevent fraud, misuse, and ensure app security</p>
                </div>
                <div className="usage-item">
                  <i className="fas fa-chart-line"></i>
                  <h4>Analytics</h4>
                  <p>To analyze usage patterns and improve our services</p>
                </div>
                <div className="usage-item">
                  <i className="fas fa-bell"></i>
                  <h4>Communication</h4>
                  <p>To send periodic communications, updates, and promotions</p>
                </div>
                <div className="usage-item">
                  <i className="fas fa-gavel"></i>
                  <h4>Legal Compliance</h4>
                  <p>To resolve disputes and enforce our Terms & Conditions</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing Section */}
          <section id="data-sharing" className="policy-section">
            <h2><i className="fas fa-share-alt"></i> Information Sharing and Disclosure</h2>
            <div className="content-box">
              <p>We do not sell or rent your personal information to third parties.</p>
              <p>We may share information only in the following cases:</p>
              <h3>Legal Disclosures</h3>
              <p>We may disclose your information if required by law or in response to:</p>
              <ul>
                <li>Subpoenas, court orders, or legal process</li>
                <li>Law enforcement requests</li>
                <li>Protection of our rights and safety</li>
              </ul>
              <h3>Business Transfers</h3>
              <p>If PiFocus is merged, acquired, or re-organized, user information will be transferred under the same Privacy Policy terms.</p>
              <h3>Verification Requirements</h3>
              <p>Certain services may require uploading a valid government-issued ID for access verification.</p>
              <div className="warning-box">
                <h4><i className="fas fa-exclamation-triangle"></i> Important</h4>
                <p>We will never sell your personal information to third parties for marketing purposes without your explicit consent.</p>
              </div>
            </div>
          </section>

          {/* User Rights Section */}
          <section id="user-rights" className="policy-section">
            <h2><i className="fas fa-user-shield"></i> Your Rights and Choices</h2>
            <div className="content-box">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <div className="rights-grid">
                <div className="right-item">
                  <i className="fas fa-eye"></i>
                  <h4>Right to Access</h4>
                  <p>Request a copy of your personal information</p>
                </div>
                <div className="right-item">
                  <i className="fas fa-edit"></i>
                  <h4>Right to Rectification</h4>
                  <p>Correct inaccurate or incomplete information</p>
                </div>
                <div className="right-item">
                  <i className="fas fa-trash"></i>
                  <h4>Right to Erasure</h4>
                  <p>Request deletion of your personal information</p>
                </div>
                <div className="right-item">
                  <i className="fas fa-pause"></i>
                  <h4>Right to Restriction</h4>
                  <p>Limit how we process your information</p>
                </div>
                <div className="right-item">
                  <i className="fas fa-download"></i>
                  <h4>Right to Portability</h4>
                  <p>Receive your data in a portable format</p>
                </div>
                <div className="right-item">
                  <i className="fas fa-ban"></i>
                  <h4>Right to Object</h4>
                  <p>Object to certain types of processing</p>
                </div>
              </div>
              <h3>User Responsibilities</h3>
              <p>You are solely responsible for:</p>
              <ul>
                <li>Maintaining the confidentiality of your Personal User Information</li>
                <li>Not allowing another person to access your account</li>
                <li>Any damages or losses that may result from unauthorized account activity</li>
                <li>Ensuring the information you provide is accurate and kept up-to-date</li>
              </ul>
              <h3>Reporting Unauthorized Use</h3>
              <p>You agree to immediately notify PiFocus in writing by email to support@pw.live of any unauthorized use of your Personal User Information or other security breaches.</p>
              <h3>Storage of Personal User Information</h3>
              <p>We will store your username, country and role on secure servers. Your password is cryptographically hashed and your email address is encrypted. Together, this constitutes your "Personal User Information."</p>
              <h3>Opt-Out Options</h3>
              <p>Users may opt-out of receiving non-essential (promotional/marketing) communications. To remove your contact information from mailing lists, please email support@pw.live.</p>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="policy-section">
            <h2><i className="fas fa-lock"></i> Data Security</h2>
            <div className="content-box">
              <p>All user data is stored on secure servers with encryption and strict security guidelines to prevent unauthorized access.</p>
              <div className="security-grid">
                <div className="security-item">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Secure Storage</h4>
                  <p>All information is saved on password and PIN-protected servers</p>
                </div>
                <div className="security-item">
                  <i className="fas fa-user-lock"></i>
                  <h4>Access Controls</h4>
                  <p>Strict security guidelines protect against unauthorized access</p>
                </div>
                <div className="security-item">
                  <i className="fas fa-lock"></i>
                  <h4>Encryption</h4>
                  <p>Passwords are cryptographically hashed and emails are encrypted</p>
                </div>
                <div className="security-item">
                  <i className="fas fa-eye-slash"></i>
                  <h4>Data Protection</h4>
                  <p>Once information is in our possession, we adhere to strict security guidelines</p>
                </div>
              </div>
              <div className="info-box">
                <h4><i className="fas fa-info-circle"></i> Security Best Practices</h4>
                <p>While we strive to protect your information, no method of transmission over the internet is 100% secure. We recommend:</p>
                <ul>
                  <li>Using strong, unique passwords</li>
                  <li>Keeping your device and app updated</li>
                  <li>Being cautious about sharing personal information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies Section */}
          <section id="cookies" className="policy-section">
            <h2><i className="fas fa-cookie-bite"></i> Cookies and Tracking Technologies</h2>
            <div className="content-box">
              <p>We use cookies and similar tracking technologies to enhance your experience:</p>
              <h3>Types of Cookies We Use</h3>
              <div className="cookie-types">
                <div className="cookie-type">
                  <h4>Essential Cookies</h4>
                  <p>Required for basic app functionality and security</p>
                </div>
                <div className="cookie-type">
                  <h4>Analytics Cookies</h4>
                  <p>Help us understand how users interact with our app</p>
                </div>
                <div className="cookie-type">
                  <h4>Preference Cookies</h4>
                  <p>Remember your settings and preferences</p>
                </div>
              </div>
              <h3>Managing Cookies</h3>
              <p>You can control and manage cookies through your device settings. However, disabling certain cookies may affect app functionality.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="policy-section">
            <h2><i className="fas fa-envelope"></i> Contact Us</h2>
            <div className="content-box">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="contact-grid">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <h4>Email</h4>
                  <p>support@pw.live</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Company</h4>
                  <p>Physics Wallah Limited</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-globe"></i>
                  <h4>Website</h4>
                  <p>www.pw.live</p>
                </div>
              </div>
              <div className="data-protection">
                <h3>Research and Analytics</h3>
                <p>On receiving personal information about You, You no longer remain anonymous to Us. We may use this information for demographic research, interest analysis, and usage behavior insights on an aggregated basis to better improve our services.</p>
              </div>
            </div>
          </section>

          {/* Updates Section */}
          <section className="policy-section">
            <h2><i className="fas fa-history"></i> Changes to This Privacy Policy</h2>
            <div className="content-box">
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul>
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
                <li>Sending you a notification through the app</li>
              </ul>
              <p>We encourage you to review this Privacy Policy periodically for any changes.</p>
              <div className="highlight-box">
                <h4>Terms and Conditions</h4>
                <p>All other terms and conditions applicable under the Terms of Use of PiFocus shall apply and be read in conjunction with this Privacy Policy.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>PiFocus</h3>
              <p>Mobile Device Management by Physics Wallah Limited</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#data-collection">Data Collection</a></li>
                <li><a href="#user-rights">Your Rights</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Physics Wallah Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}