import React from "react";
import { ArrowRight, ArrowUpRight, Heart, AtSign, Search, Calendar, Bell, ShoppingBag, MapPin, Star, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

function PhoneMock() {
  return (
    <div className="bento-phone" aria-hidden>
      <div className="bento-phone-notch" />
      <div className="bento-phone-screen">
        <div className="bp-head">
          <span>Good morning,</span>
          <strong>Artic9 App</strong>
        </div>
        <div className="bp-tiles">
          <span><Calendar size={16} />Bookings</span>
          <span><ShoppingBag size={16} />Orders</span>
          <span><MapPin size={16} />Stores</span>
          <span><Bell size={16} />Alerts</span>
        </div>
        <div className="bp-card">
          <small>Today&apos;s revenue</small>
          <strong>₹48,250</strong>
          <div className="bp-bars">
            {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="bp-card light">
          <small>What&apos;s new</small>
          <strong>Festival offers are live</strong>
        </div>
      </div>
    </div>
  );
}

function SearchMock() {
  return (
    <div className="bento-search" aria-hidden>
      <div className="bs-rank">
        <TrendingUp size={14} /> #1 on Google
      </div>
      <div className="bs-bar">
        <span className="bs-dot">
          <Search size={20} />
        </span>
        <span className="bs-text">Search…</span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Our Digital Marketing Services</div>
          <h2 className="section-title">
            Services That <span className="hl">Drive Growth</span>
          </h2>
          <p className="section-lead">
            We specialise in unified branding, human-centred design, forward-thinking web development and smart
            digital marketing solutions.
          </p>
        </Reveal>

        <div className="bento">
          {/* Tall brand-colour card */}
          <a href="#contact" className="bento-card b-mobile tone-yellow">
            <div className="bento-copy">
              <h3>
                Mobile Apps
                <br />
                Development
              </h3>
              <p>Mobile app development with better user experience can revolutionise your business.</p>
            </div>
            <PhoneMock />
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>

          {/* Wide light card */}
          <a href="#contact" className="bento-card b-video">
            <div className="bento-copy">
              <h3>
                Photo &amp;
                <br />
                Videography
              </h3>
              <p>Brand films, product shoots and storytelling that capture attention and build emotion.</p>
            </div>
            <div className="bento-media media-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/portfolio/storytelling-video.jpg" alt="" loading="lazy" />
            </div>
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>

          <a href="#contact" className="bento-card b-web">
            <div className="bento-copy">
              <h3>
                Website
                <br />
                Development
              </h3>
              <p>A result-driven website development to make your ideas a digital reality.</p>
            </div>
            <div className="bento-media media-web">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/portfolio/pragrup-web.jpg" alt="" loading="lazy" />
            </div>
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>

          <a href="#contact" className="bento-card b-social">
            <div className="bento-copy">
              <h3>
                Social Media
                <br />
                Marketing
              </h3>
              <p>Connect with your target audience already active on social media.</p>
            </div>
            <div className="bento-media media-social">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <span className="crop"><img src="/images/portfolio/social-media-food.jpg" alt="" loading="lazy" /></span>
              <span className="float-badge fb-heart"><Heart size={18} fill="currentColor" /></span>
              <span className="float-badge fb-at"><AtSign size={18} /></span>
              <span className="float-badge fb-star"><Star size={16} fill="currentColor" /></span>
            </div>
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>

          {/* Wide dark card */}
          <a href="#contact" className="bento-card b-brand tone-dark">
            <div className="bento-copy">
              <h3>
                Branding &amp;
                <br />
                Creative Design
              </h3>
              <p>Mesmerising look &amp; feel — logos, identity, packaging and vehicle branding that add value to your business.</p>
            </div>
            <div className="bento-media media-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/truck-branding.jpg" alt="" loading="lazy" />
            </div>
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>

          <a href="#contact" className="bento-card b-seo">
            <div className="bento-copy">
              <h3>
                Search Engine
                <br />
                Optimization
              </h3>
              <p>Grow your business with proven SEO services.</p>
            </div>
            <SearchMock />
            <span className="bento-go"><ArrowUpRight size={20} /></span>
          </a>
        </div>

        <div className="center-cta">
          <a className="btn btn-dark" href="#contact">
            View More
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
