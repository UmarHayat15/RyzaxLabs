export default function Footer(){

  return (
    
<footer className="main-footer pt-16 md:pt-20">
  {/* overlay vectors on top of navy bg */}
  <div className="pattern-layer-one" aria-hidden="true" />
  <div className="pattern-layer-two" aria-hidden="true" />

  <div className="mx-auto max-w-[1200px] px-6">
    {/* Widgets */}
    <div className="widgets-section pb-12 md:pb-16">
      <div className="grid grid-cols-12 gap-x-8 gap-y-12">
        {/* LEFT big column */}
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Logo / About */}
            <div className="col-span-12 lg:col-span-7">
              <div className="footer-widget logo-widget">
               <a href="./" className="flex items-center w-[120px] gap-3 select-none cursor-pointer">
       <img src="/images/ryzax.png" alt="ryzax"/>
      </a>
                <p className="footer-text mt-4">
                  We are the best world Information Technology Company. Providing the highest
                  quality in hardware &amp; Network solutions. About more than 25 years of
                  experience and 1000 of innovative achievements.
                </p>

                {/* Socials */}
                <ul className="social-box">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h2V8c0-2.2 1.2-5 5-5h3v4h-2c-.8 0-2 .3-2 1.5V10z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.94 6.5a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88zM3.75 8.25h6.37V21H3.75zM13.12 8.25H9.75V21h3.37v-6.27c0-3.45 4.5-3.73 4.5 0V21H21V13.8c0-6.12-6.95-5.9-7.88-2.88V8.25z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2-.8.5-1.7.9-2.6 1.1C18 4.7 17 4.2 16 4.2c-2 0-3.6 1.7-3.6 3.7 0 .3 0 .6.1.9-3-.2-5.6-1.7-7.4-4C4.8 6 5 6.9 5.5 7.5c-.6 0-1.2-.2-1.7-.5 0 1.7 1.2 3.2 2.9 3.6-.5.1-1 .2-1.6.1.5 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 0 1 2 15.6a10.4 10.4 0 0 0 5.7 1.7c6.8 0 10.5-5.8 10.5-10.8v-.5c.7-.5 1.4-1.2 1.8-2z"/>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Google">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.6 12.23c0-.73-.06-1.26-.19-1.8H12v3.27h5.46c-.11.86-.73 2.16-2.1 3.03l-.02.12 3.05 2.33.21.02c1.98-1.83 3-4.52 3-7.97z"/>
                        <path d="M12 22c2.7 0 4.98-.9 6.64-2.45l-3.17-2.42c-.85.58-2 1-3.47 1-2.65 0-4.89-1.78-5.69-4.24l-.12.01-3.22 2.49-.04.1C4.96 19.98 8.2 22 12 22z"/>
                        <path d="M6.31 13.89A6.04 6.04 0 0 1 6 12c0-.66.11-1.3.3-1.89l-.01-.13-3.25-2.52-.11.05A10.004 10.004 0 0 0 2 12c0 1.57.38 3.06 1.05 4.37l3.26-2.48z"/>
                        <path d="M12 5.3c1.87 0 3.13.81 3.85 1.49l2.81-2.74C17 2.51 14.7 1.6 12 1.6 8.2 1.6 4.96 3.62 3.05 7.03l3.26 2.48C7.11 7.04 9.35 5.3 12 5.3z"/>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-12 lg:col-span-5">
              <div className="footer-widget links-widget">
                <h5>Quick Links</h5>
                <ul className="list-link">
                  <li><a href="#">Managed IT services</a></li>
                  <li><a href="#">Cloud Services</a></li>
                  <li><a href="#">IT support &amp; helpdesk</a></li>
                  <li><a href="#">Cyber security</a></li>
                  <li><a href="#">Custom Software</a></li>
                  <li><a href="#">Free Consultation</a></li>
                  <li><a href="#">Our Business Growth</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT big column — Contact only (no Recent Posts) */}
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <div className="footer-widget contact-widget">
                <h5>Contact Us</h5>
                <ul className="contact-list">
                  <li>
                    <span className="icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M12 22s8-5.33 8-12a8 8 0 1 0-16 0c0 6.67 8 12 8 12z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Address</strong>
                    Giga Mall , World Trade Center, 3rd floor, office 3050A, Islamabad, Pakistan
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M22 16.92V21a1 1 0 0 1-1.1 1 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 11.73 19.79 19.79 0 0 1 0 3.1 1 1 0 0 1 1 2h4.09A1 1 0 0 1 6.1 2.72l1.2 2.9a1 1 0 0 1-.27 1.12L5.7 8.37a16 16 0 0 0 6 6l1.62-1.33a1 1 0 0 1 1.12-.27l2.9 1.2a1 1 0 0 1 .72 1.01z"/>
                      </svg>
                    </span>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+923010006837" className="text-white hover:underline">+92 301 0006837</a>
                    </div>
                  </li>
                  <li>
                    <span className="icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                        <path d="M4 4h16v16H4z"/><path d="M22 6 12 13 2 6"/>
                      </svg>
                    </span>
                    <div>
                      <strong>E-Mail</strong>
                      <a href="mailto:info@ryzax.com" className="text-white hover:underline">info@ryzax.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Bottom bar */}
    <div className="footer-bottom border-t border-white/10 py-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <div className="text-sm text-[#c9d3df]">
            Copyright © 2025 by Ryzax All Rights Reserved.
          </div>
        </div>
        <div className="md:text-right">
          <ul className="footer-nav justify-center md:justify-end">
            <li><a href="#about">About Us</a></li>
            <li><a href="#what">Services</a></li>
            <li><a href="/privacy-policy">Privay</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}