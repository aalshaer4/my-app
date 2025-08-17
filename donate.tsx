'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DonatePage: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="cursor-primary-block">
        <div className="cursor-primary-dot"></div>
      </div>
      <div data-animation="over-left" className="navbar w-nav" data-easing2="ease-in-out" data-easing="ease-in-out"
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
                <Link href="/donate" aria-current="page" className="nav-menu-link w-inline-block w--current">
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
      </div>
      <div className="main-wrapper">
        <section className="pricing-hero">
          <div className="padding-24px">
            <div style={{
              WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0
            }} className="hero-title-wrapper">
              <div className="donation-section">
                {/* Header Section */}
                <div className="donation-header fade-in">
                  <h2>Support Our Mission</h2>
                  <p>Your generosity transforms lives. Choose a donation option that works best for you.</p>
                </div>

                {/* Donation Options Container */}
                <div className="donation-options">
                  {/* General Donation Row */}
                  <div className="general-donation-row fade-in">
                    <div className="donation-card general-donation-card">
                      <h3>ONE-TIME DONATION</h3>
                      <div className="donation-amount">Any Amount</div>
                      <div className="donation-frequency">Choose your impact</div>
                      <div className="donation-description">
                        Make a one-time contribution of any amount to support our ongoing humanitarian efforts and help transform lives.
                      </div>
                      <a href="https://buy.stripe.com/bJe00kdYyeiE09d6hb7EQ00" className="donate-button" target="_blank" rel="noopener noreferrer">Donate Now</a>
                    </div>
                  </div>

                  {/* Subscription Options Row */}
                  <div className="subscription-row">
                    {/* Plan A */}
                    <div className="donation-card fade-in">
                      <h3>CHAMPION SUPPORTER</h3>
                      <div className="donation-amount">$140</div>
                      <div className="donation-frequency">Monthly subscription</div>
                      <div className="donation-description">
                        Provide comprehensive support for a family&apos;s basic needs including food, water, and shelter.
                      </div>
                      <a href="https://buy.stripe.com/6oUaEY4nY5M8aNR8pj7EQ03" className="donate-button" target="_blank" rel="noopener noreferrer">Subscribe</a>
                    </div>

                    {/* Plan B */}
                    <div className="donation-card fade-in">
                      <h3>COMMUNITY BUILDER</h3>
                      <div className="donation-amount">$100</div>
                      <div className="donation-frequency">Monthly subscription</div>
                      <div className="donation-description">
                        Support educational programs and healthcare initiatives for children in need.
                      </div>
                      <a href="https://buy.stripe.com/fZu4gA5s2eiE9JNfRL7EQ01" className="donate-button" target="_blank" rel="noopener noreferrer">Subscribe</a>
                    </div>

                    {/* Plan C */}
                    <div className="donation-card fade-in">
                      <h3>HOPE GIVER</h3>
                      <div className="donation-amount">$80</div>
                      <div className="donation-frequency">Monthly subscription</div>
                      <div className="donation-description">
                        Provide essential supplies and emergency relief to vulnerable communities.
                      </div>
                      <a href="https://buy.stripe.com/eVq3cw4nYcaw4ptdJD7EQ02" className="donate-button" target="_blank" rel="noopener noreferrer">Subscribe</a>
                    </div>
                  </div>

                  {/* Campaign Buttons Row */}
                  <div className="campaign-row">
                    {/* Water Campaign */}
                    <div className="donation-card campaign-card water-campaign fade-in">
                      <h3>WATER CAMPAIGN</h3>
                      <div className="donation-description">
                        Help us provide clean, safe drinking water to communities in need. Every drop counts in saving lives and improving health.
                      </div>
                      <a href="https://donate.stripe.com/fZucN61bM1vS6xB8pj7EQ07" className="donate-button" target="_blank" rel="noopener noreferrer">Support Water Campaign</a>
                    </div>

                    {/* Food Campaign */}
                    <div className="donation-card campaign-card food-campaign fade-in">
                      <h3>FOOD CAMPAIGN</h3>
                      <div className="donation-description">
                        Join our fight against hunger. Your donation provides nutritious meals to families facing food insecurity.
                      </div>
                      <a href="https://donate.stripe.com/5kQ4gAaMmdeAaNR6hb7EQ08" className="donate-button" target="_blank" rel="noopener noreferrer">Support Food Campaign</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="footer-cta-block">
            <div className="padding-24px cta-mobile-padding">
              <Link data-w-id="89eb3467-b88c-0c65-5f8c-b0aa2090ab73" href="/contact"
                className="footer-cta-content-wrapper w-inline-block">
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
                  <Link href="/donate" aria-current="page" className="footer-link-text w--current">Donate</Link>
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
                  <Link href="/terms" className="footer-link-text">Terms</Link>
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
    </div>
  );
};

export default DonatePage;
