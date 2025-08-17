'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div data-w-id="70af8fe6-e200-57ea-d14b-4e4fa4a3f824" className="follow-cursor-wrapper">
        <div data-w-id="d394ef64-b3fd-a580-d5d5-70d4611819b8" className="follow-cursor-block">
          <div className="follow-cursor-text">Follow</div>
          <Image
            src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92db_cta-arrow-up-icon.svg"
            alt="Arrow right up icon"
            width={18}
            height={18}
            className="icon-18px"
          />
        </div>
      </div>
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
                <Link href="/about" aria-current="page" className="nav-menu-link w-inline-block w--current">
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
      </div>
      <div className="main-wrapper">
        <section className="about-hero">
          <div className="padding-24px">
            <div style={{
              WebkitTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              msTransform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 50px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 0
            }} className="hero-title-wrapper">
              <h1 className="heading-3">We push boundaries, and infuse our projects with our infectious enthusiasm</h1>
              <div className="about-hero-description-block">
                <p className="body-text-large">At Trahom — We&apos;re dedicated to supporting children in Gaza through direct aid, safe housing, and emotional care, creating hope for brighter futures.</p>
              </div>
            </div>
          </div>
          <div className="border"></div>
          <div className="about-hero-video-block">
            <div data-poster-url="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-transcode.mp4,https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-transcode.webm"
              data-autoplay="true" data-loop="true" data-wf-ignore="true"
              data-w-id="89de3f97-0d38-4731-d937-f585ef177221" style={{ opacity: 0 }}
              className="about-hero-video w-background-video w-background-video-atom">
              <video
                id="89de3f97-0d38-4731-d937-f585ef177221-video" autoPlay loop
                style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-poster-00001.jpg")' }}
                muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-transcode.mp4"
                  data-wf-ignore="true" />
                <source
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677541eb013b809b4386d706_WhatsApp%20Video%202024-12-30%20at%20175529%20%281%29-transcode.webm"
                  data-wf-ignore="true" />
              </video>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about-cards-block">
            <div className="about-content-card">
              <div className="about-image-block border-right">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677541d094fd21ae228423c1_Screenshot%202025-01-01%20at%205.23.06%E2%80%AFPM.png"
                  alt="About Image 1"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 66vw, 68vw"
                  width={3040}
                  height={2000}
                  className="image-full-width"
                />
              </div>
              <div className="about-text-block">
                <div className="padding-24px">
                  <div className="about-text-content-wrapper">
                    <h2 className="heading-4">We don&apos;t just provide aid</h2>
                    <div className="about-description-block">
                      <p className="body-text-regular">We are part of the communities we serve. With boots on the ground in Gaza, we bring empathy, resilience, and dedication to every mission. It&apos;s not just about meeting immediate needs; it&apos;s about building lasting change. Through collaboration with local communities and unwavering commitment, we craft solutions that empower, uplift, and create a foundation for a brighter future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-content-card">
              <div className="about-text-block">
                <div className="padding-24px">
                  <div className="about-text-content-wrapper">
                    <h2><strong className="bold-text-5">It Started with One</strong></h2>
                    <div className="about-description-block">
                      <p className="body-text-regular">What began as one man&apos;s mission to support orphans of war in Gaza has grown into a movement of hope and resilience. Starting with small acts of financial aid, the campaign now touches the lives of over 1,500 orphans through direct monthly sponsorships. Along the way, TRAHOM has launched transformative campaigns to provide food, clean water, firewood, and other essentials, ensuring that no child is left behind. This is more than aid—it&apos;s a testament to the power of compassion and the impact of a single spark igniting a brighter future</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-image-block border-left">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6772a208af74ad84f199529a_foodcampaign%201.jpg"
                  alt="About Image 2"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 66vw, 68vw"
                  width={960}
                  height={640}
                  className="image-full-width"
                />
              </div>
            </div>
          </div>
          <div className="about-ark-effect-block"></div>
        </section>
        <section className="big-numbers">
          <div className="big-numbers-title-block">
            <div className="padding-24px">
              <h2 data-w-id="2933d650-d304-a36c-cb4a-59eb19c51030" style={{ opacity: 0 }}>In Numbers</h2>
            </div>
          </div>
          <div className="border"></div>
          <div className="big-numbers-contents-block">
            <div className="big-number-content-block big-number-content-v1">
              <div className="padding-24px">
                <div className="big-number-content-block-inner">
                  <div className="heading-style-two">1700+</div>
                  <div className="big-number-item-represent-text">Monthly Sponsored Orphans</div>
                </div>
              </div>
            </div>
            <div className="big-number-content-block big-number-content-v2">
              <div className="padding-24px">
                <div className="big-number-content-block-inner">
                  <div className="heading-style-two">140</div>
                  <div className="big-number-item-represent-text">Completed Campaigns</div>
                </div>
              </div>
            </div>
            <div className="big-number-content-block big-number-content-v3">
              <div className="padding-24px">
                <div className="big-number-content-block-inner">
                  <div className="heading-style-two">3</div>
                  <div className="big-number-item-represent-text">Countries Certified In</div>
                </div>
              </div>
            </div>
            <div className="big-number-content-block">
              <div className="padding-24px">
                <div className="big-number-content-block-inner">
                  <div className="heading-style-two">1M</div>
                  <div className="big-number-item-represent-text">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  <Link href="/about" aria-current="page" className="footer-link-text w--current">About Us</Link>
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

export default AboutPage;
