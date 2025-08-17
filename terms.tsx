'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TermsPage: React.FC = () => {
  return (
    <>
      <div className="cursor-primary-block">
        <div className="cursor-primary-dot"></div>
      </div>
      <div className="term-page-wrapper">
      {/* Navigation */}
      <nav data-animation="over-left" className="navbar w-nav" data-easing2="ease-in-out" data-easing="ease-in-out"
        data-collapse="all" data-w-id="5352f6d0-3401-3026-530a-a3073c62c6c5" role="banner" data-duration="600"
        data-doc-height="1">
        <div className="nav-container">
          <div className="nav-brand-wrapper">
            <Link href="/" className="nav-brand w-nav-brand">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678e7f4a82ed84dfe2f521f8_old%20new.svg"
                width={250}
                height={100}
                alt="Trahom Logo"
                className="hero-intro-logo"
              />
            </Link>
          </div>

          <nav role="navigation" className="nav-menu-block w-nav-menu">
            <div className="nav-menu-content-wrapper">
              <div className="nav-menu-links-wrapper">
                <Link href="/" className="nav-menu-link w-inline-block">
                  <div className="nav-menu-number-text">01</div>
                  <div className="nav-link-text">Home</div>
                </Link>
                <Link href="/works" className="nav-menu-link w-inline-block">
                  <div className="nav-menu-number-text">02</div>
                  <div className="nav-link-text">Works</div>
                </Link>
                <Link href="/about" className="nav-menu-link w-inline-block">
                  <div className="nav-menu-number-text">03</div>
                  <div className="nav-link-text">About</div>
                </Link>
                <Link href="/contact" className="nav-menu-link w-inline-block">
                  <div className="nav-menu-number-text">04</div>
                  <div className="nav-link-text">Contact</div>
                </Link>
                <Link href="/donate" className="nav-menu-link w-inline-block">
                  <div className="nav-menu-number-text">05</div>
                  <div className="nav-link-text">Donate</div>
                </Link>
              </div>

              <div className="nav-menu-bottom-block">
                <div className="nav-menu-bottom-address-block">
                  <div className="body-text-small">info@trahom.org</div>
                </div>
                <div className="nav-menu-bottom-block-inner">
                  <div className="nav-menu-social-link-block">
                    <a href="https://www.youtube.com/@TRAHOM_2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-social-icon-block w-inline-block">
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/67800846cf2a83769a146760_utube.svg"
                        alt="YouTube"
                        width={24}
                        height={24}
                        className="nav-social-icon"
                      />
                    </a>
                    <a href="https://x.com/TRAHOMCAMPAIGN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-social-icon-block w-inline-block">
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678007f5435743593db5f77e_x%20icon.svg"
                        alt="X (Twitter)"
                        width={24}
                        height={24}
                        className="nav-social-icon"
                      />
                    </a>
                    <a href="https://www.instagram.com/trahomcampaign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-social-icon-block w-inline-block">
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92e6_instagram-icon.svg"
                        alt="Instagram icon"
                        width={24}
                        height={24}
                        className="nav-social-icon"
                      />
                    </a>
                    <a href="https://web.facebook.com/clonify.io?_rdc=1&_rdr" className="nav-menu-social-link-block w-inline-block"></a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-menu-button-block">
            <div className="nav-menu-button w-nav-button">
              <div data-w-id="5352f6d0-3401-3026-530a-a3073c62c709" className="nav-menu-line-wrapper">
                <div className="nav-menu-line-v1"></div>
                <div className="nav-menu-line-v2"></div>
                <div className="nav-menu-line-v1"></div>
              </div>
              <div className="nav-menu-close-button-wrapper">
                <div data-w-id="5352f6d0-3401-3026-530a-a3073c62c70e" className="nav-close-button-line-block">
                  <div className="nav-close-button-line-v1"></div>
                  <div className="nav-close-button-line-v2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Terms Content */}
      <div className="term-contents-wrapper">
        <div data-w-id="af6e446e-7d42-17a2-8f4e-5eded2507e1a" style={{ opacity: 0 }} className="terms-content-block">
          <h3 className="terms-title-text"><strong>Introduction</strong></h3>
          <div className="terms-description w-richtext">
            <p>Welcome to TRAHOM. By accessing or using our website, services, or engaging with our programs,
              you agree to comply with and be bound by the following terms and conditions. Please read them
              carefully. If you do not agree, you may not access our services.</p>
            <p>‍</p>
            <h4>1. Use of the Website</h4>
            <ul role="list">
              <li>The content on this website is for informational purposes only.</li>
              <li>You may not use this website for any illegal or unauthorized purpose.</li>
              <li>TRAHOM reserves the right to modify or discontinue the website or any part of it without
                prior notice.</li>
            </ul>
            <p>‍</p>
            <h4>2. Donations and Sponsorships</h4>
            <ul role="list">
              <li>All donations made to TRAHOM are non-refundable.</li>
              <li>Sponsorship funds sent to orphans are transferred in full to their designated caregivers,
                with the only deduction being unavoidable transaction fees, which may vary due to the
                conditions in the warzone.</li>
              <li>TRAHOM ensures transparency by providing sponsors with documentation and updates, including
                proof of delivery and confirmation of sponsorship success.</li>
            </ul>
            <p>‍</p>
            <h4>3. Intellectual Property</h4>
            <ul role="list">
              <li>All materials on this website, including text, images, logos, and graphics, are the property
                of TRAHOM and protected by copyright laws.</li>
              <li>You may not reproduce, distribute, or use any content without prior written consent from
                TRAHOM.</li>
            </ul>
          </div>
          <div className="terms-description w-richtext">
            <h4>4. Limitation of Liability</h4>
            <ul role="list">
              <li>TRAHOM is not liable for any direct, indirect, or consequential damages arising from the use
                of our website or services.</li>
              <li>We do our best to ensure the accuracy of the information provided but cannot guarantee
                error-free content.</li>
            </ul>
            <p>‍</p>
            <h4>5. Modification of Terms</h4>
            <ul role="list">
              <li>TRAHOM reserves the right to modify these terms and conditions at any time. Any changes will
                be effective immediately upon posting on this website.</li>
            </ul>
            <p>‍</p>
            <h4>6. Governing Law</h4>
            <ul role="list">
              <li>These terms are governed by the laws of Canada. By using our website, you agree to submit to
                the jurisdiction of Canadian courts.</li>
            </ul>
            <p>‍</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <section className="footer">
        <div className="footer-cta-block">
          <div className="padding-24px cta-mobile-padding">
            <Link data-w-id="89eb3467-b88c-0c65-5f8c-b0aa2090ab73" href="/contact" className="footer-cta-content-wrapper w-inline-block">
              <div className="footer-cta-title-block-left">
                <h2 className="footer-cta-text">WE&apos;RE HERE</h2>
              </div>
              <div className="footer-cta-dot"></div>
              <div className="footer-cta-title-block-right">
                <h2 className="footer-cta-text">LET&apos;S TALK</h2>
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92db_cta-arrow-up-icon.svg"
                  data-w-id="89eb3467-b88c-0c65-5f8c-b0aa2090ab7b"
                  alt="Arrow right up icon"
                  width={24}
                  height={24}
                  className="cta-icon"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="border"></div>

        <div className="footer-links-wrapper">
          <div className="footer-links-single-block-v1">
            <div className="footer-address-block">
              <div className="footer-links-address-block-inner"></div>
              <div className="footer-links-address-block-inner">
                <div className="body-text-small">Info@trahom.org</div>
              </div>
            </div>
          </div>
          <div className="footer-links-single-block-v2">
            <div className="footer-links-wrapper-inner">
              <div className="body-text-small text-medium">Trahom</div>
              <div className="footer-links-block">
                <Link href="/" className="footer-link-text">Homepage</Link>
                <Link href="/works" className="footer-link-text">Works</Link>
                <Link href="/donate" className="footer-link-text">Donate</Link>
              </div>
            </div>
          </div>
          <div id="w-node-_89eb3467-b88c-0c65-5f8c-b0aa2090ab95-2090ab70" className="footer-links-single-block-v3">
            <div className="footer-links-wrapper-inner">
              <div className="body-text-small text-medium">Info</div>
              <div className="footer-links-block">
                <Link href="/contact" className="footer-link-text">Contact</Link>
                <Link href="/about" className="footer-link-text">About Us</Link>
              </div>
            </div>
          </div>
          <div className="footer-links-single-block-v5">
            <div className="footer-links-wrapper-inner">
              <div className="body-text-small text-medium">Legal</div>
              <div className="footer-links-block">
                <Link href="/terms" aria-current="page" className="footer-link-text w--current">Terms</Link>
                <Link href="/privacy-policy" className="footer-link-text">Privacy Policy<br /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border"></div>
        <div className="footer-bottom-block">
          <div className="padding-24px">
            <div className="footer-bottom-content-wrapper">
              <div data-w-id="89eb3467-b88c-0c65-5f8c-b0aa2090abbc" className="footer-social-links-block">
                <a href="https://www.youtube.com/@TRAHOM_2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/67800846cf2a83769a146760_utube.svg"
                    alt="YouTube"
                    width={16}
                    height={16}
                    className="icon-16px"
                  />
                </a>
                <a href="https://x.com/TRAHOMCAMPAIGN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678007f5435743593db5f77e_x%20icon.svg"
                    alt="X (Twitter)"
                    width={16}
                    height={16}
                    className="icon-16px"
                  />
                </a>
                <a href="https://www.instagram.com/trahomcampaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92e6_instagram-icon.svg"
                    alt="Instagram icon"
                    width={16}
                    height={16}
                    className="icon-16px"
                  />
                </a>
                <a href="https://www.instagram.com/trahomcampaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6798e88155c9675a18a2f619_telegram.svg"
                    alt="Telegram"
                    width={16}
                    height={16}
                    className="icon-16px"
                  />
                </a>
              </div>
              <div className="footer-copyright-block">
                <div className="copyright-text">© 2025 Trahom</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TermsPage;
