'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WorksPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Cursor Transparent Wrapper */}
      <div className="cursor-transparent-wrapper">
        <div className="cursor-transparent-dot">
          <Image
            src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92db_cta-arrow-up-icon.svg"
            alt="Arrow right up icon"
            width={36}
            height={36}
            className="icon-36px"
          />
        </div>
      </div>

      {/* Cursor Primary Block */}
      <div className="cursor-primary-block">
        <div className="cursor-primary-dot"></div>
      </div>

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
                <Link href="/works" aria-current="page" className="nav-menu-link w-inline-block w--current">
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

      {/* Main Content */}
      <div className="main-wrapper">
        <div className="work-page-contents-wrapper">
          {/* Work Hero Section */}
          <section className="work-hero">
            <div className="padding-32px-24px">
              <div className="work-hero-wrap">
                <div className="hero-title-wrapper gap-16px">
                  <h1 className="heading">Campaigns</h1>
                  <div className="hero-description-wrapper works-description">
                    <p className="body-text-large">At Trahom — On the ground, with the people we serve, delivering hope and change firsthand.</p>
                  </div>
                </div>
                <div data-w-id="954217cc-9e30-f9d8-3ac5-fb368f1aa212" style={{ opacity: 0 }} className="work-ark-block">
                  <div className="ark-effect-block work-ark-block">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9337_work-circle-image.svg"
                      alt="An image that says &quot;WORKS&quot;"
                      width={100}
                      height={100}
                      className="ark-effect-image width-100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Works Section */}
          <section className="works">
            {/* Child Sponsorship Work Block */}
            <div className="work-block-single">
              <Link href="/child-sponsorship" className="work-image-block w-inline-block">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677ff5102ce7e761a6c685fd_Screenshot%202025-01-09%20at%208.10.23%E2%80%AFPM.png"
                  alt="Child Sponsorship Campaign"
                  width={800}
                  height={600}
                  className="work-image"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 73vw, 75vw"
                />
              </Link>
              <div className="work-text-content-block">
                <div className="work-text-line-block">
                  <div className="padding-24px padding-16px-small-device">
                    <h3 className="heading-7"><strong className="bold-text-2">Sponsor a Life, Change a Future.</strong></h3>
                  </div>
                </div>
                <div className="work-line-block-v2">
                  <div>Join TRAHOM&apos;s Orphan Sponsorship Program and provide monthly support to orphaned children, ensuring they have access to food, education, and care for a brighter future.</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Sponsorship  ·  Support  ·  Future</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Date: May, 2024 - Present</div>
                </div>
                <div className="work-line-block-v2">
                  <Link data-w-id="5949915a-c259-ab93-f245-b9417e608e58" href="/child-sponsorship" className="work-button w-inline-block">
                    <div className="work-button-inner">
                      <div className="work-button-text">Preview</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={22}
                        height={22}
                        className="icon-22px"
                      />
                    </div>
                    <div style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} className="button-hover-line-v2"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feeding Futures Work Block */}
            <div className="work-block-single">
              <Link href="/feeding-futures" className="work-image-block w-inline-block">
                <div data-poster-url="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-poster-00001.jpg"
                  data-video-urls="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-transcode.mp4,https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-transcode.webm"
                  data-autoplay="true"
                  data-loop="true"
                  data-wf-ignore="true"
                  className="work-video w-background-video w-background-video-atom">
                  <video
                    id="7aa64a0c-8ffe-894c-0159-2c2608953783-video"
                    autoPlay
                    loop
                    style={{
                      backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-poster-00001.jpg")'
                    }}
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-transcode.mp4"
                      data-wf-ignore="true"
                    />
                    <source
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677d267892474f931ae1dfff_WhatsApp%20Video%202024-12-30%20at%20175529-transcode.webm"
                      data-wf-ignore="true"
                    />
                  </video>
                </div>
              </Link>
              <div className="work-text-content-block">
                <div className="work-text-line-block">
                  <div className="padding-24px padding-16px-small-device">
                    <h3 className="heading-6"><strong className="bold-text-3">Feeding Futures.</strong></h3>
                  </div>
                </div>
                <div className="work-line-block-v2">
                  <div>Providing essential food packages to families in need, ensuring children and their caregivers have the nourishment to thrive and rebuild their lives</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Nourishment  · Support</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Date: Nov, 2024</div>
                </div>
                <div className="work-line-block-v2 border-bottom-none">
                  <Link data-w-id="bb8eaf0a-e33a-d09a-f48b-5dd12f5e2030" href="/feeding-futures" className="work-button w-inline-block">
                    <div className="work-button-inner">
                      <div className="work-button-text">Preview</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={22}
                        height={22}
                        className="icon-22px"
                      />
                    </div>
                    <div style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} className="button-hover-line-v2"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sustaining Hope Work Block */}
            <div className="work-block-single">
              <Link href="/sustaining-hope" className="work-image-block w-inline-block">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e66d0fc6cb6276fe2d73a_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(1).jpeg"
                  alt="Sustaining Hope Campaign"
                  width={800}
                  height={600}
                  className="work-image"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 73vw, 75vw"
                />
              </Link>
              <div className="work-text-content-block">
                <div className="work-text-line-block">
                  <div className="padding-24px padding-16px-small-device">
                    <h3 className="heading-2"><strong>Sustaining Hope.</strong></h3>
                  </div>
                </div>
                <div className="work-line-block-v2">
                  <div>Serving over 20,000 meals through 15 tekiya initiatives.</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Relief  ·  Nourishment  ·  Resilience</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Date: Dec, 2024</div>
                </div>
                <div className="work-line-block-v2 border-bottom-none">
                  <Link data-w-id="71e65104-186b-fd4e-0599-03666ea0ad0c" href="/sustaining-hope" className="work-button w-inline-block">
                    <div className="work-button-inner">
                      <div className="work-button-text">Preview</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={22}
                        height={22}
                        className="icon-22px"
                      />
                    </div>
                    <div style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} className="button-hover-line-v2"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bundled in Care Work Block */}
            <div className="work-block-single">
              <a href="https://www.trahom.org/Bundled-In-Care" className="work-image-block w-inline-block">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677ea2a47f60525ce17a793d_Screenshot%202025-01-08%20at%208.05.51%E2%80%AFPM.png"
                  alt="Bundled in Care Campaign"
                  width={800}
                  height={600}
                  className="work-image"
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 95vw, (max-width: 1279px) 73vw, 75vw"
                />
              </a>
              <div className="work-text-content-block">
                <div className="work-text-line-block">
                  <div className="padding-24px padding-16px-small-device">
                    <h3 className="heading-8"><strong className="bold-text-4">Bundled in Care.</strong></h3>
                  </div>
                </div>
                <div className="work-line-block-v2">
                  <div>Bringing warmth and protection to 850 displaced children in need.</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Relief  ·  Care  ·  Support</div>
                </div>
                <div className="work-line-block-v2">
                  <div>Date: jan, 2025</div>
                </div>
                <div className="work-line-block-v2 border-bottom-none">
                  <a data-w-id="99fc24b1-7e4e-85fc-26ac-045a596cb0a0" href="https://www.trahom.org/Bundled-In-Care" className="work-button w-inline-block">
                    <div className="work-button-inner">
                      <div className="work-button-text">Preview</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={22}
                        height={22}
                        className="icon-22px"
                      />
                    </div>
                    <div style={{
                      WebkitTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      MozTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      msTransform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                      transform: 'translate3d(0, 0, 0) scale3d(0.25, null, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'
                    }} className="button-hover-line-v2"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>

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
                    <Link href="/works" aria-current="page" className="footer-link-text w--current">Works</Link>
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
    </div>
  );
};

export default WorksPage;
