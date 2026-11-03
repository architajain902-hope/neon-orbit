import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, Minus, Plus, Rocket, Satellite, Sparkles, X } from 'lucide-react'

const artists = [
  { name: 'NEON ORBIT', genre: 'LIVE / COSMIC DISCO', image: 'photo-1470229722913-7c0e2dbbafd3', size: 'featured' },
  { name: 'LUNA FIELDS', genre: 'LIVE / DREAM POP', image: 'photo-1506157786151-b8491531f063' },
  { name: 'KAIRO', genre: 'DJ / DEEP SPACE', image: 'photo-1571266028243-d220c9c3b4e7' },
  { name: 'THE AFTERGLOW', genre: 'LIVE / INDIE ELECTRONIC', image: 'photo-1459749411175-04bf5292ceea' },
]

const schedule = [
  { time: '18:30', stage: 'THE CRATER', artist: 'Luna Fields', note: 'Golden hour transmission' },
  { time: '20:00', stage: 'ORBITAL STAGE', artist: 'The Afterglow', note: 'Live from the horizon' },
  { time: '22:15', stage: 'ORBITAL STAGE', artist: 'Neon Orbit', note: 'Headlining set' },
  { time: '00:30', stage: 'THE CRATER', artist: 'Kairo', note: 'Into the blue' },
]

const tickets = [
  { name: 'DAY PASS', detail: 'One day among the stars', price: 129 },
  { name: 'WEEKENDER', detail: 'All three nights, all the wonder', price: 289, popular: true },
  { name: 'AFTERHOURS', detail: 'Late entry from 10pm', price: 89 },
]

function TicketDialog({ onClose }) {
  const [selected, setSelected] = useState('WEEKENDER')
  const [quantity, setQuantity] = useState(1)
  const [reserved, setReserved] = useState(false)
  const ticket = tickets.find((item) => item.name === selected)

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="ticket-dialog" role="dialog" aria-modal="true" aria-labelledby="ticket-title">
        <button className="icon-button dialog-close" aria-label="Close ticket selection" onClick={onClose}><X size={20} /></button>
        {reserved ? (
          <div className="reservation-confirmation">
            <span className="confirmation-mark"><Check size={26} /></span>
            <p className="eyebrow">TRANSMISSION RECEIVED</p>
            <h2>You’re on the list.</h2>
            <p>Your {quantity} {ticket.name.toLowerCase()} {quantity === 1 ? 'pass is' : 'passes are'} held for the next step.</p>
            <button className="button button-bright" onClick={onClose}>Back to the festival <ArrowRight size={17} /></button>
          </div>
        ) : (
          <>
            <p className="eyebrow">SECURE YOUR PLACE IN ORBIT</p>
            <h2 id="ticket-title">Choose your pass.</h2>
            <div className="ticket-options">
              {tickets.map((item) => (
                <button className={`ticket-option ${selected === item.name ? 'is-selected' : ''}`} key={item.name} onClick={() => setSelected(item.name)} aria-pressed={selected === item.name}>
                  <span className="ticket-option-copy"><strong>{item.name}</strong><small>{item.detail}</small></span>
                  <span className="ticket-price">${item.price}</span>
                  {item.popular && <span className="popular-label">MOST LOVED</span>}
                </button>
              ))}
            </div>
            <div className="checkout-row">
              <div className="quantity-control" aria-label="Ticket quantity">
                <button className="icon-button" aria-label="Remove one ticket" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span aria-live="polite">{quantity}</span>
                <button className="icon-button" aria-label="Add one ticket" onClick={() => setQuantity(Math.min(8, quantity + 1))}><Plus size={16} /></button>
              </div>
              <strong className="checkout-total">${ticket.price * quantity} <small>USD</small></strong>
            </div>
            <button className="button button-bright checkout-button" onClick={() => setReserved(true)}>Reserve passes <ArrowRight size={18} /></button>
            <p className="fine-print">No payment collected in this demo. Limited capacity, infinite memories.</p>
          </>
        )}
      </section>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ticketsOpen, setTicketsOpen] = useState(false)

  const openTickets = () => {
    setMenuOpen(false)
    setTicketsOpen(true)
  }

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <header className="site-header flex items-center justify-between">
          <a className="wordmark" href="#home" aria-label="Space Fest home"><Satellite size={23} strokeWidth={1.6} /><span>SPACE<span className="wordmark-light">FEST</span></span></a>
          <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#lineup" onClick={() => setMenuOpen(false)}>Lineup</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>The experience</a>
            <a href="#info" onClick={() => setMenuOpen(false)}>Plan your trip</a>
            <button className="button button-nav" onClick={openTickets}>Get tickets <ArrowUpRight size={16} /></button>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-kicker"><span className="live-dot" /> A DESERT NIGHT, OUT OF THIS WORLD</div>
          <h1>Meet me<br />in <span>another</span><br />orbit.</h1>
          <div className="hero-bottom flex items-end justify-between">
            <p>Three nights beneath an endless sky.<br />One little planet. A whole new universe.</p>
            <a className="scroll-link" href="#lineup"><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-date"><span>AUG</span><strong>21—23</strong><span>2026 / MOJAVE, CA</span></div>
        <div className="hero-side-note">34°53' N&nbsp; / &nbsp;116°49' W</div>
      </section>

      <section className="ticker" aria-label="Festival dates and location"><div className="ticker-track">AUGUST 21—23, 2026 <Sparkles size={16} /> MOJAVE DESERT, CALIFORNIA <Sparkles size={16} /> THREE NIGHTS UNDER THE STARS <Sparkles size={16} /> AUGUST 21—23, 2026 <Sparkles size={16} /> MOJAVE DESERT, CALIFORNIA <Sparkles size={16} /> THREE NIGHTS UNDER THE STARS <Sparkles size={16} /></div></section>

      <section className="lineup section-pad" id="lineup">
        <div className="section-heading flex items-end justify-between">
          <div><p className="eyebrow">YOUR SIGNAL FROM THE STARS</p><h2>Soundtrack<br />to the <em>unknown.</em></h2></div>
          <p className="section-aside">Four transmissions from across the universe.<br />And that’s just the beginning.</p>
        </div>
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <article className={`artist-card ${artist.size || ''}`} key={artist.name}>
              <img src={`https://images.unsplash.com/${artist.image}?auto=format&fit=crop&w=1200&q=85`} alt={`${artist.name} performing on stage`} loading={index === 0 ? 'eager' : 'lazy'} />
              <div className="artist-shade" />
              <span className="artist-number">0{index + 1} / TRANSMISSION</span>
              <div className="artist-info"><p>{artist.genre}</p><h3>{artist.name}</h3></div>
              <span className="artist-arrow"><ArrowUpRight size={19} /></span>
            </article>
          ))}
        </div>
        <div className="lineup-footer"><span>+ 20 MORE ARTISTS TO BE ANNOUNCED</span><span>THE LINEUP IS JUST WARMING UP</span></div>
      </section>

      <section className="manifesto" id="experience">
        <div className="manifesto-image" role="img" aria-label="A crowd beneath lights at a night music festival" />
        <div className="manifesto-copy"><p className="eyebrow">FAR FROM THE EVERYDAY</p><h2>Lose the signal.<br />Find your <em>people.</em></h2><p className="manifesto-description">When the last light leaves the mountains, the desert comes alive. Find your way from an intimate acoustic set to a dance floor built for the stars. No rush. No rules. Just the good kind of lost.</p><button className="text-link" onClick={openTickets}>Come find out <ArrowRight size={17} /></button></div>
        <div className="manifesto-coordinates">A DIFFERENT KIND OF GRAVITY / EST. 2026</div>
      </section>

      <section className="schedule section-pad" id="schedule">
        <div className="schedule-header flex items-end justify-between"><div><p className="eyebrow">FRIDAY / AUGUST 21</p><h2>After dark, <em>everything.</em></h2></div><div className="schedule-day"><span>LOCAL TIME</span><strong>MOJAVE / PDT</strong></div></div>
        <div className="schedule-list">
          {schedule.map((set) => <article className="schedule-item" key={set.time}><span className="set-time">{set.time}</span><div className="set-detail"><span>{set.stage}</span><h3>{set.artist}</h3></div><p className="set-note">{set.note}</p><ArrowUpRight className="set-arrow" size={18} /></article>)}
        </div>
        <p className="schedule-note"><span className="live-dot" /> FULL WEEKEND SCHEDULE DROPS SOON</p>
      </section>

      <section className="info-band" id="info">
        <div className="info-top"><div><p className="eyebrow">THE WHERE & THE HOW</p><h2>Your map to<br /><em>another world.</em></h2></div><p className="info-intro">A little planning makes a long weekend feel like forever. We’ll take it from here.</p></div>
        <div className="info-grid">
          <article className="info-item"><span className="info-index">01 / THE PLACE</span><h3>Mojave Desert</h3><p>Under open skies, two hours from Los Angeles. The exact coordinates land in your inbox when you book.</p><a href="https://maps.google.com/?q=Mojave+Desert+California" target="_blank" rel="noreferrer">Find the desert <ArrowUpRight size={16} /></a></article>
          <article className="info-item"><span className="info-index">02 / YOUR STAY</span><h3>Camp under stars</h3><p>Bring your own setup or add a pre-pitched tent. Restrooms, water refill stations, and shade are on site.</p><a href="#tickets" onClick={(event) => { event.preventDefault(); openTickets() }}>Explore passes <ArrowUpRight size={16} /></a></article>
          <article className="info-item"><span className="info-index">03 / THE ESSENTIALS</span><h3>Come prepared</h3><p>Desert days are warm, desert nights are cool. Pack layers, a reusable bottle, and shoes made for wandering.</p><a href="mailto:hello@spacefest.example">Ask us anything <ArrowUpRight size={16} /></a></article>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-orbit" aria-hidden="true"><Rocket size={30} strokeWidth={1.3} /></div>
        <p className="eyebrow">THE UNIVERSE IS MAKING ROOM</p><h2>See you <em>out there.</em></h2>
        <button className="button button-bright" onClick={openTickets}>Get your tickets <ArrowRight size={18} /></button>
        <span className="closing-date">AUG 21—23 / MOJAVE, CA</span>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#home"><Satellite size={21} strokeWidth={1.6} /><span>SPACE<span className="wordmark-light">FEST</span></span></a><span>MADE OF STARDUST & LOUD MUSIC.</span><a href="mailto:hello@spacefest.example">CONTACT <ArrowUpRight size={14} /></a><span>© 2026 SPACE FEST</span></footer>

      {ticketsOpen && <TicketDialog onClose={() => setTicketsOpen(false)} />}
    </main>
  )
}
