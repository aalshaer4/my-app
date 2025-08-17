'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactPage: React.FC = () => {
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
                <Link href="/contact" aria-current="page" className="nav-menu-link w-inline-block w--current">
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
      </div>
      <div className="main-wrapper">
        <section className="contact-hero">
          <div className="padding-24px">
            <div style={{
              WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0
            }} className="hero-title-wrapper">
              <h1 className="heading-14"><strong className="bold-text-6">Ready to make a difference? Reach out to us.</strong></h1>
              <div className="hero-description-wrapper"></div>
            </div>
          </div>
          <div className="contact-hero-image-wrapper">
            <Image
              className="image-full-width"
              src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677d259551cdbb5ac04fafdf_WhatsApp%20Image%202025-01-07%20at%2015.05.57%20(1).jpeg"
              alt="Contact Hero Image"
              style={{ opacity: 0 }}
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 96vw, 100vw"
              data-w-id="e1519dc9-37b2-2cb7-1bc8-7479f125949f"
              width={1280}
              height={720}
            />
          </div>
        </section>
        <section className="contact-form-section">
          <div className="padding-80px">
            <div data-w-id="b9457544-274e-c816-7468-20acd38495c4" style={{ opacity: 0 }} className="contact-form-content-wrapper">
              <div className="ark-effect-block">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678e67e1c6dfa8cfc3c89d9d_contact%20edited.svg"
                  alt="Contact Effect"
                  width={400}
                  height={400}
                  className="ark-effect-image"
                />
              </div>
              <h2 className="text-center">Send a message</h2>
              <div className="contact-form-wrapper">
                <div className="contact-form-block w-form">
                  <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="contact-form" data-wf-page-id="676da0608db3cad1ce7f9310" data-wf-element-id="19aa6fe4-c03e-97f5-401d-9c9b975284e0" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                    <input className="contact-form-text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Name" type="text" id="name" />
                    <input className="contact-form-text-field w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" type="email" id="email" required />
                    <textarea placeholder="Message" maxLength={5000} id="Message" name="Message" data-name="Message" className="contact-form-text-area w-input"></textarea>
                    <input type="submit" data-wait="Please wait..." className="contact-form-submit-button w-button" value="Send Message" />
                  </form>
                  <div className="contact-form-success-message-block w-form-done">
                    <div className="body-text-regular">Thank you! Your submission has been received!</div>
                  </div>
                  <div className="contact-form-error-message-block w-form-fail">
                    <div className="body-text-regular">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-w-id="71b10c45-1bf5-935c-712b-23ec932e6c9c" className="faq">
          <div className="padding-24px">
            <h2>FAQs</h2>
          </div>
          <div className="border"></div>
          <div className="faq-items-wrapper">
            <div data-w-id="71b10c45-1bf5-935c-712b-23ec932e6ca2" className="faq-item-block">
              <div className="faq-question-block">
                <div className="padding-24px">
                  <div className="faq-question-block-inner">
                    <div className="text-medium">What is TRAHOM&apos;s mission?</div>
                    <div className="faq-icon-block">
                      <div className="faq-icon-line-v1"></div>
                      <div className="faq-icon-line-v2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-answer-block">
                <div className="padding-24px">
                  <p>At TRAHOM, our mission is to provide essential aid, emotional support, and long-term solutions for orphans and displaced children, particularly in Gaza, through direct action and sustainable programs.</p>
                </div>
              </div>
            </div>
            <div data-w-id="71b10c45-1bf5-935c-712b-23ec932e6caf" className="faq-item-block">
              <div className="faq-question-block">
                <div className="padding-24px">
                  <div className="faq-question-block-inner">
                    <div className="text-medium">Where does TRAHOM operate?</div>
                    <div className="faq-icon-block">
                      <div className="faq-icon-line-v1"></div>
                      <div className="faq-icon-line-v2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-answer-block">
                <div className="padding-24px">
                  <p>TRAHOM is actively on the ground in Gaza, delivering aid directly to those who need it most.</p>
                </div>
              </div>
            </div>
            <div data-w-id="71b10c45-1bf5-935c-712b-23ec932e6cbc" className="faq-item-block">
              <div className="faq-question-block">
                <div className="padding-24px">
                  <div className="faq-question-block-inner">
                    <div className="text-medium">How can I donate to TRAHOM?</div>
                    <div className="faq-icon-block">
                      <div className="faq-icon-line-v1"></div>
                      <div className="faq-icon-line-v2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-answer-block">
                <div className="padding-24px">
                  <p>To make a donation to TRAHOM, please contact us directly through our website or email. Our team will provide you with all the necessary details to ensure your contribution reaches those in need.</p>
                </div>
              </div>
            </div>
            <div data-w-id="71b10c45-1bf5-935c-712b-23ec932e6cc9" className="faq-item-block">
              <div className="faq-question-block">
                <div className="padding-24px">
                  <div className="faq-question-block-inner">
                    <div className="text-medium">How does TRAHOM ensure transparency in its operations?</div>
                    <div className="faq-icon-block">
                      <div className="faq-icon-line-v1"></div>
                      <div className="faq-icon-line-v2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-answer-block">
                <div className="padding-24px">
                  <p>We are committed to transparency by regularly updating our donors and supporters on the outcomes of our campaigns through reports and success stories.</p>
                </div>
              </div>
            </div>
            <div data-w-id="71b10c45-1bf5-935c-712b-23ec932e6cd6" className="faq-item-block">
              <div className="faq-question-block no-bottom-border">
                <div className="padding-24px">
                  <div className="faq-question-block-inner">
                    <div className="text-medium">How can I sponsor an orphan?</div>
                    <div className="faq-icon-block">
                      <div className="faq-icon-line-v1"></div>
                      <div className="faq-icon-line-v2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq-answer-block">
                <div className="padding-24px">
                  <p>Once you reach out to us, our team will guide you through the process. We will provide you with key details about the orphan, including their birth certificate, the death certificate of one or both parents, and a picture of the child. Additionally, we ensure transparency by sharing monthly images that confirm successful delivery of your sponsorship support to the child&apos;s caregiver.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="footer-cta-block">
            <div className="padding-24px cta-mobile-padding">
              <Link data-w-id="89eb3467-b88c-0c65-5f8c-b0aa2090ab73" href="/contact" aria-current="page" className="footer-cta-content-wrapper w-inline-block w--current">
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
                  <Link href="/contact" aria-current="page" className="footer-link-text w--current">Contact</Link>
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

export default ContactPage;
