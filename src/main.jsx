import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Star, Clock, Truck, Utensils, Flame, Bike, ChevronRight } from 'lucide-react';
import './styles.css';

const PHONE_DISPLAY = '+91 99458 84623';
const PHONE_LINK = 'tel:+919945884623';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Malgudi%20Hut%20Kudlu%20Gate%20Bengaluru';

const dishes = [
  { title: 'Chicken Biryani', text: 'Fragrant rice, spice-forward masala and the kind of comfort that travels well for dinner at home.', img: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Kebabs & Skewers', text: 'Smoky grill plates, charred edges and bold marinades built for sharing around the table.', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mughlai Curries', text: 'Rich, slow-comfort gravies with breads, rice and North Indian mains for a fuller meal.', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80' },
  { title: 'Vegetarian Favourites', text: 'Familiar vegetarian plates and hearty sides for mixed groups and family meals.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80' },
  { title: 'Takeaway Meals', text: 'Easy call-ahead food for nearby offices, late evenings and weeknight cravings.', img: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=80' },
];

const stats = [
  ['4.3★', 'Public rating in lead data'],
  ['233', 'Review signals captured'],
  ['₹200–₹400', 'Per-person price signal'],
  ['Kudlu Gate', 'HSR-adjacent location'],
];

const gallery = [
  'https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
];

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="hero-copy reveal">
            <span className="eyebrow"><Flame size={16}/> Mughlai & North Indian · Kudlu Gate</span>
            <h1>Biryani, kebabs and Mughlai comfort near Kudlu Gate</h1>
            <p className="hero-lede">A reliable neighbourhood spot in Bengaluru for spice-rich North Indian plates, chicken biryani, char-grilled kebabs, hearty curries and takeaway done right.</p>
            <div className="hero-actions">
              <a className="btn primary" href={PHONE_LINK}><Phone size={18}/> Call Now</a>
              <a className="btn secondary" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a>
            </div>
            <div className="hero-meta">
              <span><Star size={16}/> 4.3★ rating</span>
              <span><Clock size={16}/> Open daily, call to confirm current hours</span>
            </div>
          </div>
          <div className="hero-card reveal delay">
            <img src="https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1200&q=85" alt="Chicken biryani served on a dark plate" />
            <div className="floating-card">
              <span>Known for</span>
              <strong>Biryani · Kebabs · Curries</strong>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-grid">
            <div className="image-stack reveal">
              <img src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80" alt="A table full of North Indian dishes" />
              <img src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=700&q=80" alt="Char-grilled kebabs" />
            </div>
            <div className="section-copy reveal">
              <span className="eyebrow">The neighbourhood table</span>
              <h2>Mughlai flavours, made for the everyday</h2>
              <p>Malgudi Hut is a Kudlu Gate restaurant built around the food people actually crave: fragrant biryani, smoky kebabs and rich North Indian curries served without fuss.</p>
              <p>Dine in, pack it up for takeaway, or order delivery. Vegetarian mains, breads and generous portions make it an easy call for families, nearby offices and quick weeknight dinners.</p>
              <div className="pill-row">
                <span><Utensils size={15}/> Dine-in</span>
                <span><Truck size={15}/> Takeaway</span>
                <span><Bike size={15}/> Delivery</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section menu" id="menu">
          <div className="section-heading reveal">
            <span className="eyebrow">What we're known for</span>
            <h2>Plates worth the trip</h2>
            <p>A snapshot of the menu direction. Prices and specials can change, so call to confirm the day’s availability.</p>
          </div>
          <div className="dish-grid">
            {dishes.map((dish, index) => (
              <article className="dish-card reveal" style={{animationDelay: `${index * 80}ms`}} key={dish.title}>
                <img src={dish.img} alt={dish.title} />
                <div>
                  <h3>{dish.title}</h3>
                  <p>{dish.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust section" id="reviews">
          <div className="quote reveal">
            <span>“</span>
            <h2>Relaxed, flavour-forward food for when the craving is clear.</h2>
            <p>Public listing signals point to a practical local restaurant with biryani, kebabs, Mughlai curries, takeaway and delivery, supported by 233 review signals in the lead dataset.</p>
          </div>
          <div className="stats-grid">
            {stats.map(([value, label]) => <div className="stat reveal" key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-heading reveal">
            <span className="eyebrow">On the table</span>
            <h2>A taste of the room</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((src, i) => <img className="reveal" src={src} alt={`Malgudi Hut food and dining ${i + 1}`} key={src} />)}
          </div>
        </section>

        <section className="visit section" id="visit">
          <div className="visit-card reveal">
            <span className="eyebrow">Find us</span>
            <h2>Come hungry</h2>
            <a className="phone-line" href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            <p>1827, Bengaluru, Karnataka, India</p>
            <p>Open daily. Call to confirm current hours before visiting.</p>
            <p className="price-note">Public listing price signal: ₹200 – ₹400 per person.</p>
            <div className="hero-actions">
              <a className="btn primary" href={PHONE_LINK}><Phone size={18}/> Call Now</a>
              <a className="btn secondary dark" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={18}/> Open Maps</a>
            </div>
          </div>
          <a className="map-panel reveal" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Open Malgudi Hut on Google Maps">
            <MapPin size={48}/>
            <strong>Kudlu Gate, Bengaluru</strong>
            <span>Tap for directions <ChevronRight size={16}/></span>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const nav = ['About', 'Menu', 'Reviews', 'Gallery', 'Visit'];
  return <header className="topbar">
    <a className="brand" href="#top"><span>Malgudi</span><strong>Hut</strong></a>
    <nav>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
    <a className="btn small" href={PHONE_LINK}><Phone size={16}/> Call Now</a>
  </header>;
}

function Footer() {
  return <footer>
    <div><strong>Malgudi Hut</strong><p>Biryani, kebabs and Mughlai comfort near Kudlu Gate.</p></div>
    <div><a href={PHONE_LINK}>{PHONE_DISPLAY}</a><a href={MAPS_URL} target="_blank" rel="noreferrer">Get directions</a></div>
    <p>© 2026 Malgudi Hut. All rights reserved. ₹200 – ₹400 per person · Kudlu Gate, Bengaluru</p>
  </footer>;
}

createRoot(document.getElementById('root')).render(<App />);
