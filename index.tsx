'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
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
      
      <div className="navbar-home w-nav" data-animation="over-left" data-easing2="ease-in-out" data-easing="ease-in-out"
        data-collapse="all" data-w-id="2a08c114-e4cf-038b-c44b-14e56fffdabf" role="banner" data-duration="600"
        data-doc-height="1">
        <div className="nav-container-home">
          <div className="nav-brand-wrapper-home">
            <Link href="/" className="nav-brand-home w-nav-brand w--current">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678e7f4a82ed84dfe2f521f8_old%20new.svg"
                width={400}
                height={100}
                alt="Trahom Logo"
                className="hero-intro-logo"
              />
            </Link>
          </div>
          
          <div className="home-nav-certification-block">
            <div className="nav-ark-block">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6771d063d82d856d66221a13_cert%20.svg"
                width={24}
                height={24}
                alt="Certification"
                className="icon-24px"
              />
            </div>
            <div className="nav-certification-text-block">
              <p className="body-text-regular">We&apos;re builders of hope &amp; change — Certified to deliver trusted aid where it&apos;s needed most</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <section className="home-hero">
          <div className="home-hero-top-block">
            <div className="hero-intro-block">
              <div className="padding-24px">
                <div className="hero-intro-wrapper">
                  <div className="hero-intro-left-block">
                    <div className="hero-intro-bottom-block">
                      <div className="hero-intro-name-text">Orphans Families Sign up</div>
                      <div className="hero-intro-designation-text">Orphans Registry Portal</div>
                    </div>
                  </div>
                  <Link href="/signup" className="hero-intro-arrow-block w-inline-block">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f932f_chaveron-right.svg"
                      alt="Icon of chaveron right"
                      width={22}
                      height={22}
                      className="icon-22px"
                    />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="hero-cta-block">
              <Link href="/donate" className="lets-talk-button w-inline-block">
                <div className="lets-talk-button-inner">
                  <div className="lets-talk-button-text">Donate</div>
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9330_arrow-right.svg"
                    alt="Icon of arrow right"
                    width={22}
                    height={22}
                    className="icon-22px"
                  />
                </div>
                <div className="button-hover-line-v2"></div>
              </Link>
            </div>
            
            <div className="hero-theme-changer-block">
              <Link href="/sponsorships" className="home-hero-theme-changer w-inline-block">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92e4_footer-theme-icon.svg"
                  alt="Change theme icon for bright theme"
                  width={24}
                  height={24}
                  className="hero-theme-icon"
                />
              </Link>
            </div>
          </div>
          
          <div className="hero-images-block">
            <div className="hero-image-block-one">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6772c538d3ac852e4ca5935a_WhatsApp%20Image%202024-12-30%20at%2017.58.00.jpeg"
                alt="Hero Image 1"
                width={1280}
                height={720}
                className="hero-image"
              />
            </div>
            
            <div className="hero-video-block">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="home-hero-video w-background-video w-background-video-atom"
                style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772a1e0f3c5d647ac078859_website%20short-poster-00001.jpg")' }}
              >
                <source src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772a1e0f3c5d647ac078859_website%20short-transcode.mp4" />
                <source src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772a1e0f3c5d647ac078859_website%20short-transcode.webm" />
              </video>
            </div>
            
            <div className="hero-image-block-two">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6772a2186d4355ceb4736912_food%20packages%20.jpeg"
                alt="Hero Image 2"
                width={1600}
                height={900}
                className="hero-image"
              />
            </div>
            
            <div className="hero-image-block-three">
              <Image
                src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/6772c51640f9a542308df869_WhatsApp%20Image%202024-12-30%20at%2017.59.44.jpeg"
                alt="Hero Image 3"
                width={3024}
                height={2000}
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section className="home-services">
          <div className="padding-24px padding-16px-small-device">
            <div className="home-services-top-block">
              <h2 className="section-title-text-small service-section">Campaigns</h2>
            </div>
          </div>
          
          <div className="home-service-cards-block">
            <Link href="/orphans-sponsorship" className="home-service-card w-inline-block">
              <div className="padding-24px padding-16px-small-device">
                <div className="home-service-card-inner">
                  <div className="home-service-card-number-text">01</div>
                  <h3 className="home-service-card-title-text">Orphan Sponsorship Program</h3>
                </div>
              </div>
            </Link>
            
            <Link href="/feeding-futures" className="home-service-card w-inline-block">
              <div className="padding-24px padding-16px-small-device">
                <div className="home-service-card-inner">
                  <div className="home-service-card-number-text">02</div>
                  <h3 className="home-service-card-title-text">Emergency Relief Campaign</h3>
                </div>
              </div>
            </Link>
            
            <Link href="/sustaining-hope" className="home-service-card w-inline-block">
              <div className="padding-24px padding-16px-small-device">
                <div className="home-service-card-inner">
                  <div className="home-service-card-number-text">03</div>
                  <h3 className="home-service-card-title-text">Healing Hearts Campaign</h3>
                </div>
              </div>
            </Link>
            
            <Link href="/Bundled-In-Care" className="home-service-card w-inline-block">
              <div className="padding-24px padding-16px-small-device">
                <div className="home-service-card-inner">
                  <div className="home-service-card-number-text">04</div>
                  <h3 className="home-service-card-title-text">Bundled In Care Campaign</h3>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="home-works">
          <div className="home-works-top-wrapper">
            <div className="padding-24px">
              <div className="home-works-top-block">
                <div className="home-works-top-title-block">
                  <h2 className="heading-style-one"><strong className="bold-text">Impact</strong></h2>
                  <div className="home-works-description-block">
                    <p className="body-text-large">Together, we create lasting change in the lives of children and communities in need.</p>
                  </div>
                </div>
                <div className="home-works-top-button-block">
                  <Link href="/works" className="view-all-button w-inline-block">
                    <div className="view-all-button-inner">
                      <div className="view-all-button-text">VIEW ALL</div>
                      <Image
                        src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f9320_button-right-arrow-up.svg"
                        alt="Icon of arrow right up"
                        width={22}
                        height={22}
                        className="icon-22px"
                      />
                    </div>
                    <div className="button-hover-line"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="home-work-cards-block">
            <Link href="/feeding-futures" className="home-work-card w-inline-block">
              <div className="home-work-card-inner">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="home-works-video w-background-video w-background-video-atom"
                  style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772c684b35b244a2e00875c_WhatsApp%20Video%202024-12-30%20at%20175527%20%281%29-poster-00001.jpg")' }}
                >
                  <source src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772c684b35b244a2e00875c_WhatsApp%20Video%202024-12-30%20at%20175527%20%281%29-transcode.mp4" />
                  <source src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295%2F6772c684b35b244a2e00875c_WhatsApp%20Video%202024-12-30%20at%20175527%20%281%29-transcode.webm" />
                </video>
                <div className="homeworks-card-logo-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678d3788a3ca26bcb42820da_old%20new.svg"
                    alt="Trahom Logo"
                    width={100}
                    height={40}
                    className="home-works-card-logo"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="/sustaining-hope" className="home-work-card w-inline-block">
              <div className="home-work-card-inner">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e66d0fc6cb6276fe2d73a_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(1).jpeg"
                  alt="Sustaining Hope Campaign"
                  width={1280}
                  height={720}
                  className="home-work-card-image"
                />
                <div className="homeworks-card-logo-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678d3788a3ca26bcb42820da_old%20new.svg"
                    alt="Trahom Logo"
                    width={100}
                    height={40}
                    className="home-works-card-logo"
                  />
                </div>
              </div>
            </Link>
            
            <Link href="/works" className="home-work-card w-inline-block">
              <div className="home-work-card-inner">
                <Image
                  src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/677e78e522314009ebfdd35d_WhatsApp%20Image%202025-01-07%20at%2015.05.56%20(4).jpeg"
                  alt="Works Campaign"
                  width={1280}
                  height={720}
                  className="home-work-card-image"
                />
                <div className="homeworks-card-logo-block">
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678d3788a3ca26bcb42820da_old%20new.svg"
                    alt="Trahom Logo"
                    width={100}
                    height={40}
                    className="home-works-card-logo"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="sign-up-form">
          <div className="home-partners-top-block">
            <div className="padding-24px">
              <div className="footer-cta-block">
                <div className="padding-24px cta-mobile-padding">
                  <Link href="/contact" className="footer-cta-content-wrapper w-inline-block">
                    <div className="footer-cta-dot"></div>
                    <div className="footer-cta-title-block-right">
                      <h2 className="footer-cta-text">Newsletter</h2>
                    </div>
                  </Link>
                  <div className="hero-intro-designation-text">Stay connected with TRAHOM—sign up for updates on our campaigns and impact.</div>
                </div>
              </div>
            </div>
            
            <div className="padding-24px">
              <div className="padding-24px w-form">
                <form id="wf-form-Submission-Form" name="wf-form-Submission-Form" data-name="Submission Form" method="get">
                  <label htmlFor="name" className="heading-style-five">Name</label>
                  <input className="w-input" maxLength={256} name="name" data-name="Name" placeholder="" type="text" id="name" />
                  
                  <label htmlFor="email" className="heading-style-five">Email Address</label>
                  <input className="w-input" maxLength={256} name="email" data-name="Email" placeholder="" type="email" id="email" required />
                  
                  <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit" />
                </form>
                
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="footer-cta-block">
            <div className="padding-24px cta-mobile-padding">
              <Link href="/contact" className="footer-cta-content-wrapper w-inline-block">
                <div className="footer-cta-title-block-left">
                  <h2 className="footer-cta-text">WE&apos;RE HERE</h2>
                </div>
                <div className="footer-cta-dot"></div>
                <div className="footer-cta-title-block-right">
                  <h2 className="footer-cta-text">LET&apos;S TALK</h2>
                  <Image
                    src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92db_cta-arrow-up-icon.svg"
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
                  <Link href="/" className="footer-link-text w--current">Homepage</Link>
                  <Link href="/works" className="footer-link-text">Works</Link>
                  <Link href="/donate" className="footer-link-text">Donate</Link>
                </div>
              </div>
            </div>
            
            <div className="footer-links-single-block-v3">
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
                <div className="footer-social-links-block">
                  <a href="https://www.youtube.com/@TRAHOM_2024" target="_blank" rel="noopener noreferrer" className="footer-social-link w-inline-block">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/67800846cf2a83769a146760_utube.svg"
                      alt="YouTube"
                      width={16}
                      height={16}
                      className="icon-16px"
                    />
                  </a>
                  <a href="https://x.com/TRAHOMCAMPAIGN" target="_blank" rel="noopener noreferrer" className="footer-social-link w-inline-block">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/678007f5435743593db5f77e_x%20icon.svg"
                      alt="X (Twitter)"
                      width={16}
                      height={16}
                      className="icon-16px"
                    />
                  </a>
                  <a href="https://www.instagram.com/trahomcampaign" target="_blank" rel="noopener noreferrer" className="footer-social-link w-inline-block">
                    <Image
                      src="https://cdn.prod.website-files.com/676da05f8db3cad1ce7f9295/676da0608db3cad1ce7f92e6_instagram-icon.svg"
                      alt="Instagram icon"
                      width={16}
                      height={16}
                      className="icon-16px"
                    />
                  </a>
                  <a href="https://www.instagram.com/trahomcampaign" target="_blank" rel="noopener noreferrer" className="footer-social-link w-inline-block">
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

export default HomePage;
