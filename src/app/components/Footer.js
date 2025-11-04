export default function Footer(){
  return (
    <footer className="main-footer pt-16 md:pt-20">
      {/* Enhanced overlay vectors with theme support */}
      <div className="pattern-layer-one" aria-hidden="true" />
      <div className="pattern-layer-two" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Enhanced Widgets */}
        <div className="widgets-section pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="footer-widget logo-widget">
                <a href="./" className="footer-logo flex items-center w-[140px] gap-3 select-none cursor-pointer hover:scale-105 transition-transform duration-300">
                  <img src="/images/ryzax.png" alt="Ryzax Technologies"/>
                </a>
                <p className="footer-text mt-4">
                  Leading IT solutions provider with 25+ years of experience. We deliver innovative technology solutions that drive business growth and digital transformation.
                </p>

                {/* Professional Social Icons */}
                <ul className="social-box">
                  <li>
                    <a href="#" aria-label="Facebook" className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn" className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter" className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram" className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="GitHub" className="hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="footer-widget links-widget">
                <h5>Our Services</h5>
                <ul className="list-link">
                  <li><a href="/web-development">Web Development</a></li>
                  <li><a href="/mobile-development">Mobile Apps</a></li>
                  <li><a href="/ai">AI Solutions</a></li>
                  <li><a href="/devops">DevOps & Cloud</a></li>
                  <li><a href="/ITconsultation">IT Consultation</a></li>
                  <li><a href="/branding">Digital Branding</a></li>
                  <li><a href="/contact">Custom Solutions</a></li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="footer-widget links-widget">
                <h5>Company</h5>
                <ul className="list-link">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="/join-us">Why Join Us</a></li>
                  <li><a href="/contact">Our Portfolio</a></li>
                  <li><a href="/contact">Client Reviews</a></li>
                  <li><a href="/join-us">Careers</a></li>
                  <li><a href="/contact">Tech Blog</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="footer-widget contact-widget">
                <h5>Get In Touch</h5>
                <ul className="contact-list">
                  <li>
                    <span className="icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Office</strong>
                      Islamabad, Pakistan
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Call Us</strong>
                      <a href="tel:+923001234567" className="hover:text-primary hover:underline transition-all duration-200">+92 300 1234567</a>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Email Us</strong>
                      <a href="mailto:info@ryzax.com" className="hover:text-primary hover:underline transition-all duration-200">info@ryzax.com</a>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Business Hours</strong>
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom bar */}
        <div className="footer-bottom border-t border-white/10 dark:border-white/5 py-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <div className="text-sm">
                Copyright © 2025 by <span className="font-semibold text-primary">Ryzax Technologies</span>. All Rights Reserved.
              </div>
            </div>
            <div className="md:text-right">
              <ul className="footer-nav justify-center md:justify-end">
                <li><a href="#about">About Us</a></li>
                <li><a href="#what">Services</a></li>
                <li><a href="/privacy-policy">Privacy</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}