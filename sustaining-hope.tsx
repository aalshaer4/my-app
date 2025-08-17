'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SustainingHopePage: React.FC = () => {
  return (
    <div className="page-wrapper">
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

      {/* Main Content */}
      <div className="main-wrapper">
        <div className="work-details-page-content">
          {/* Work Details Hero Section */}
          <section className="work-details-hero">
            <div className="padding-24px">
              <div data-w-id="b1ac13be-359b-1471-0c57-8473799f2a6d" style={{ opacity: 0 }} className="work-details-hero-top-block">
                <Link data-w-id="b3e30b1e-0e22-d478-9e89-2f30fcc0a036" href="/works"
                  className="blog-button work-button w-inline-block">
                  <div className="blog-button-inner">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9349_arrow-left.svg"
                      alt="Icon of arrow left"
                      width={22}
                      height={22}
                      className="icon-22px"
                    />
                    <div className="blog-button-text">Works</div>
                  </div>
                  <div className="button-hover-line-v2 work-button-line"></div>
                </Link>
                <h1 className="heading-9"><strong className="bold-text-9">Sustaining Hope</strong></h1>
                <p className="body-text-large">Serving over 20,000 meals through 15 tekiya initiatives, including one that
                  remains open year-round, bringing hope and sustenance to families in the heart of the genocide of gaza.
                </p>
              </div>
            </div>
            <div className="hero-work-info-block">
              <div className="hero-work-info-block-single">
                <div className="padding-24px">
                  <div data-w-id="de68afa2-b4c4-f040-a071-5b7f29769c78" style={{ opacity: 0 }} className="text-medium">Role:
                    Planning · Execution · Delivery · Documentation</div>
                </div>
              </div>
              <div className="hero-work-info-block-single">
                <div className="padding-24px">
                  <div data-w-id="15e572c6-4ff6-b91e-3c98-6f7849e11fe6" style={{ opacity: 0 }} className="text-medium">Date: Dec,
                    2024</div>
                </div>
              </div>
              <div className="hero-work-info-block-single border-left-none">
                <div className="padding-24px">
                  <div data-w-id="86786f80-5338-595d-ec29-2957c886c97d" style={{ opacity: 0 }}
                    className="live-preview-button-wrapper">
                    <Link href="/contact" className="live-preview-link-block w-inline-block">
                      <div className="live-preview-link-text">Get involved</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={20}
                        height={20}
                        className="icon-20px"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-details-hero-video-block">
              <div
                data-poster-url="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-transcode.mp4,https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-transcode.webm"
                data-autoplay="true" data-loop="true" data-wf-ignore="true"
                data-w-id="ce4335ee-3039-eb90-6079-76ba333fe7d2" style={{ opacity: 0 }}
                className="work-details-hero-video w-background-video w-background-video-atom">
                <video
                  id="ce4335ee-3039-eb90-6079-76ba333fe7d2-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-poster-00001.jpg")'
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e78d46fd55ec06d4f06c0_WhatsApp%20Video%202025-01-07%20at%20150558-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
              </div>
            </div>
          </section>

          {/* Work Details About Section */}
          <section className="work-details-about">
            <div className="work-details-about-content-wrapper">
              <div className="work-details-about-sticky-block">
                <div data-w-id="a384f9b9-5f7f-8064-6d71-8dbae288c440" style={{ opacity: 0 }}
                  className="work-details-about-text-content">
                  <div className="work-details-about-text-title">
                    <div className="text-medium">About project</div>
                    <h2 className="heading-5"><strong>Feeding Lives Amidst Adversity</strong></h2>
                  </div>
                  <div className="work-details-about-text-description">
                    <p className="body-text-regular">Through 15 impactful tekiya initiatives, TRAHOM has delivered over 20,000
                      warm meals to families living amidst the hardships of conflict. These community-driven efforts have
                      brought critical relief, ensuring that vulnerable individuals have access to nourishing meals during
                      their most challenging times.<br />‍<br />One tekiya remains permanently open, serving as a beacon
                      of hope and a consistent source of support for families in need. This ongoing effort underscores
                      TRAHOM&apos;s commitment to combating hunger and providing stability to those affected by war, ensuring
                      that no one is left behind.</p>
                  </div>
                </div>
              </div>
              <div className="work-details-about-images-wrapper-light">
                <div className="work-details-about-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e77c66a9e02e31eac39f0_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(2).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-about-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-about-image-block">
                  <div
                    data-poster-url="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-poster-00001.jpg"
                    data-video-urls="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-transcode.mp4,https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-transcode.webm"
                    data-autoplay="true" data-loop="true" data-wf-ignore="true"
                    className="work-details-about-video w-background-video w-background-video-atom">
                    <video
                      id="f38a5812-cb81-13ef-2b6d-c39a93d34b66-video"
                      autoPlay
                      loop
                      style={{
                        backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-poster-00001.jpg")'
                      }}
                      muted
                      playsInline
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-transcode.mp4"
                        data-wf-ignore="true"
                      />
                      <source
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F677e77b1d8271d90654f8bfc_1-transcode.webm"
                        data-wf-ignore="true"
                      />
                    </video>
                  </div>
                </div>
                <div className="work-details-about-image-block border-bottom-none">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e78e522314009ebfdd35d_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(4).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-about-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Work Details Award Section */}
          <section className="work-details-award">
            <div className="padding-80px padding-80px-small-device">
              <div data-w-id="d3747bfb-21dd-88e9-7d97-a2e02ed9f267" style={{ opacity: 0 }}
                className="work-details-award-content-block">
                <div className="work-details-ark-effect-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9350_work-details-award-icon.svg"
                    alt="Icon of certification"
                    width={60}
                    height={60}
                    className="icon-60px"
                  />
                </div>
                <div className="work-details-award-text-content">
                  <h2><strong>Certified &amp; Trusted</strong></h2>
                  <div className="work-details-award-description-block">
                    <p className="body-text-regular">TRAHOM is a certified organization under the Canada Not-for-profit
                      Corporations Act. This certification reflects our commitment to operating with integrity,
                      transparency, and accountability in every aspect of our humanitarian work. It ensures that all
                      donations and resources are managed responsibly and reach those who need them most.<br /><br />With
                      this certification, we reaffirm our dedication to creating meaningful impact and building trust with
                      our supporters. As a recognized organization, we remain steadfast in our mission to provide
                      essential aid and hope to vulnerable communities, one project at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Details Showcase Section */}
          <section className="work-details-showcase">
            <div className="work-details-marquee-block">
              <div className="work-details-marquee-inner">
                <div className="work-details-marquee-image-block">
                  <Image
                    className="work-details-marquee-image"
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e790358b59048f5597774_WhatsApp%20Image%202025-01-07%20at%2015.05.55%20(1).jpeg"
                    alt="Sustaining Hope Campaign"
                    style={{ opacity: 0 }}
                    sizes="(max-width: 1279px) 100vw, 1280px"
                    data-w-id="a27f609c-b37c-185a-3933-f8fb6a9addd1"
                    width={1280}
                    height={960}
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e797e41e55f3cc01357d3_WhatsApp%20Image%202025-01-07%20at%2015.05.57.jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e7988fc6cb6276ff6ec2a_WhatsApp%20Image%202025-01-07%20at%2015.05.58%20(1).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e7c646a9e02e31eb1615a_WhatsApp%20Image%202025-01-07%20at%2015.15.11.jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e79acd799a4a26830acf4_WhatsApp%20Image%202025-01-07%20at%2015.05.55%20(2).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
              </div>
              <div className="work-details-marquee-inner">
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e66d0fc6cb6276fe2d73a_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(1).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e77c66a9e02e31eac39f0_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(2).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e78e522314009ebfdd35d_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(4).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e7988fc6cb6276ff6ec2a_WhatsApp%20Image%202025-01-07%20at%2015.05.58%20(1).jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
                </div>
                <div className="work-details-marquee-image-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e7c646a9e02e31eb1615a_WhatsApp%20Image%202025-01-07%20at%2015.15.11.jpeg"
                    alt="Sustaining Hope Campaign"
                    width={1280}
                    height={960}
                    className="work-details-marquee-image"
                    sizes="(max-width: 1279px) 100vw, 1280px"
                  />
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

export default SustainingHopePage;
