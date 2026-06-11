import { useState, useEffect } from 'react'
import {
  Check, ChevronDown, X, Menu, ArrowUpRight,
  MessageCircle, Mail, Globe, Calendar,
  Smartphone, FileText, Star, ArrowRight,
  MapPin, Clock, Zap, Send, Phone,
  Instagram, CheckCircle2, Lock,
} from 'lucide-react'
import { translations } from './translations'

// ─── Small reusable atoms ────────────────────────────────────────────────────

function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#9CFF00]/[0.08] border border-[#9CFF00]/[0.18] text-[#9CFF00] text-[10px] uppercase tracking-[0.22em] font-semibold font-display">
      {children}
    </span>
  )
}

function GreenTick() {
  return (
    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#9CFF00]/12 border border-[#9CFF00]/25 flex items-center justify-center">
      <Check className="w-2.5 h-2.5 text-[#9CFF00]" strokeWidth={3} />
    </span>
  )
}

function CTAPrimary({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#9CFF00] text-[#050706] font-semibold text-sm font-display btn-primary hover:bg-[#b2ff33] active:scale-[0.97] transition-all duration-500 ease-premium ${className}`}
    >
      {children}
      <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-premium">
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
      </span>
    </button>
  )
}

function CTAOutline({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white/80 font-medium text-sm font-display hover:border-white/30 hover:text-white transition-all duration-500 ease-premium ${className}`}
    >
      {children}
    </button>
  )
}

// ─── Hero CSS Mockup ─────────────────────────────────────────────────────────

function HeroMockup() {
  return (
    <div className="relative select-none">
      {/* Ambient glow behind mockup */}
      <div className="absolute inset-0 -z-10 blur-3xl rounded-full bg-[#9CFF00]/8 scale-90 animate-glow-pulse" />

      {/* Floating site preview — top left */}
      <div className="absolute -top-8 -left-14 w-[112px] rounded-2xl overflow-hidden border border-white/[0.13] shadow-2xl animate-float z-10 hidden lg:block" style={{ animationDelay: '0.4s', transform: 'rotate(-4deg)' }}>
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=224&h=120&fit=crop&q=80" alt="" className="w-full h-[70px] object-cover" style={{ filter: 'saturate(0.4) brightness(0.6)' }} />
        <div className="bg-[#0A0E10] px-2.5 py-2 border-t border-white/[0.06]">
          <div className="h-1.5 w-14 bg-[#9CFF00]/30 rounded-full mb-1" />
          <div className="h-1 w-10 bg-white/12 rounded-full" />
        </div>
      </div>

      {/* Floating site preview — bottom left */}
      <div className="absolute bottom-4 -left-10 w-[100px] rounded-2xl overflow-hidden border border-white/[0.13] shadow-2xl animate-float z-10 hidden lg:block" style={{ animationDelay: '2s', transform: 'rotate(3deg)' }}>
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=100&fit=crop&q=80" alt="" className="w-full h-[58px] object-cover" style={{ filter: 'saturate(0.4) brightness(0.55)' }} />
        <div className="bg-[#0A0E10] px-2.5 py-2 border-t border-white/[0.06]">
          <div className="h-1.5 w-12 bg-white/20 rounded-full mb-1" />
          <div className="h-1 w-8 bg-[#9CFF00]/20 rounded-full" />
        </div>
      </div>

      {/* 3D perspective wrapper */}
      <div style={{ perspective: '1400px' }}>
        <div style={{ transform: 'rotateY(-14deg) rotateX(6deg)', transformStyle: 'preserve-3d' }}>

      {/* Laptop outer bezel */}
      <div className="relative p-[6px] bg-[#0B1012] border border-white/[0.09] rounded-[22px] shadow-[0_40px_90px_rgba(0,0,0,0.9),-24px_24px_60px_rgba(0,0,0,0.55)]">
        {/* Laptop inner screen */}
        <div className="bg-[#050706] rounded-[17px] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
          {/* Browser chrome */}
          <div className="bg-[#0A0E10] flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#9CFF00]/50" />
            <div className="flex-1 mx-4 bg-white/[0.04] rounded-full py-1 px-3">
              <div className="text-white/20 text-[9px] text-center font-mono">bynarsia.com</div>
            </div>
          </div>

          {/* Fake website content */}
          <div className="p-4 space-y-3.5">
            {/* Fake nav */}
            <div className="flex items-center justify-between">
              <div className="h-2 w-[70px] bg-[#9CFF00]/35 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-9 bg-white/10 rounded-full" />
                <div className="h-1.5 w-9 bg-white/10 rounded-full" />
                <div className="h-1.5 w-9 bg-white/10 rounded-full" />
                <div className="h-5 w-14 bg-[#9CFF00]/15 rounded-full border border-[#9CFF00]/30" />
              </div>
            </div>

            {/* Hero image block — real photo with overlay text */}
            <div className="relative rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=100&fit=crop&q=75" alt="" className="w-full h-[88px] object-cover" style={{ filter: 'saturate(0.35) brightness(0.5)' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050706]/95 via-[#050706]/60 to-transparent px-3 flex flex-col justify-center gap-1.5">
                <div className="h-2.5 w-3/5 bg-white/30 rounded-full" />
                <div className="h-2.5 w-2/5 bg-[#9CFF00]/60 rounded-full" />
                <div className="flex gap-2 pt-1">
                  <div className="h-5 w-20 bg-[#9CFF00]/20 rounded-full border border-[#9CFF00]/35" />
                  <div className="h-5 w-14 bg-white/[0.05] rounded-full border border-white/10" />
                </div>
              </div>
            </div>

            {/* Fake stats row */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white/[0.025] rounded-xl p-2.5 border border-white/[0.05]">
                  <div className={`h-1.5 w-full rounded-full mb-1.5 ${i === 0 ? 'bg-[#9CFF00]/25' : 'bg-white/10'}`} />
                  <div className="h-1 w-3/4 bg-white/[0.07] rounded-full" />
                </div>
              ))}
            </div>

            {/* Fake content blocks */}
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 bg-white/[0.025] rounded-xl p-3 border border-white/[0.04] space-y-1.5">
                <div className="h-2 w-2/3 bg-white/15 rounded-full" />
                <div className="h-1.5 w-full bg-white/[0.07] rounded-full" />
                <div className="h-1.5 w-5/6 bg-white/[0.06] rounded-full" />
                <div className="grid grid-cols-2 gap-1 pt-1">
                  <div className="h-1 w-full bg-[#9CFF00]/15 rounded-full" />
                  <div className="h-1 w-full bg-[#9CFF00]/15 rounded-full" />
                  <div className="h-1 w-full bg-[#9CFF00]/10 rounded-full" />
                  <div className="h-1 w-full bg-[#9CFF00]/10 rounded-full" />
                </div>
              </div>
              <div className="bg-[#9CFF00]/[0.04] rounded-xl p-3 border border-[#9CFF00]/[0.08] flex flex-col items-center justify-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#9CFF00]/15 border border-[#9CFF00]/20" />
                <div className="h-1 w-full bg-[#9CFF00]/15 rounded-full" />
                <div className="h-3 w-full bg-[#9CFF00]/12 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>{/* end 3D wrapper */}

      {/* Mobile phone — overlapping bottom-right */}
      <div className="absolute -right-8 -bottom-8 w-[80px] animate-float-slow">
        <div className="p-[4px] bg-[#0B1012] border border-white/[0.12] rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <div className="bg-[#050706] rounded-[15px] overflow-hidden">
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1.5 bg-white/8 rounded-full" />
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&h=55&fit=crop&q=70" alt="" className="w-full h-[52px] object-cover" style={{ filter: 'saturate(0.3) brightness(0.5)' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/80 to-transparent" />
            </div>
            <div className="px-2 pb-3 space-y-1.5">
              <div className="h-2 w-3/4 bg-[#9CFF00]/45 rounded-full" />
              <div className="h-1 w-full bg-white/[0.06] rounded-full" />
              <div className="h-5 w-full bg-[#9CFF00]/15 rounded-lg border border-[#9CFF00]/20 mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge 1 */}
      <div className="absolute -left-6 top-8 animate-float" style={{ animationDelay: '0s' }}>
        <div className="px-3 py-2 bg-[#090D0F]/95 backdrop-blur-sm border border-white/[0.08] rounded-xl shadow-lg">
          <div className="text-[#9CFF00] font-bold text-sm font-display leading-none">€300</div>
          <div className="text-white/40 text-[9px] mt-0.5">starting</div>
        </div>
      </div>

      {/* Floating badge 2 */}
      <div className="absolute -left-6 bottom-12 animate-float" style={{ animationDelay: '1.2s' }}>
        <div className="px-3 py-2 bg-[#090D0F]/95 backdrop-blur-sm border border-white/[0.08] rounded-xl shadow-lg flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-[#9CFF00]" />
          <div className="text-white/70 text-[10px] font-medium">3-day launch</div>
        </div>
      </div>
    </div>
  )
}

// Real portfolio screenshots for the "Recent Projects" cards
const EXAMPLE_IMAGES = [
  '/work-furniture.png',
  '/work-beauty.png',
  '/work-local.png',
  '/work-booking.png',
]

// Real photos for "Who It's For" cards (one per niche, all verified live)
const WHO_FOR_IMAGES = [
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=240&fit=crop&q=80', // service providers
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=240&fit=crop&q=80', // beauty specialists
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&h=240&fit=crop&q=80', // studios & salons
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=240&fit=crop&q=80', // local businesses
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=240&fit=crop&q=80', // experts & consultants
  'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=240&fit=crop&q=80', // only on Instagram
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=240&fit=crop&q=80', // trainers & teachers
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=240&fit=crop&q=80', // home & repair
]

// Conceptual address shown in the browser frame of each project card (not a real domain claim)
const siteLabelFor = (url) =>
  url.includes('furniture') ? 'furniture-studio'
    : url.includes('beauty') ? 'beauty-studio'
      : url.includes('local') ? 'local-business'
        : 'website'

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState('lv')
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState({})
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')
  const [hp, setHp] = useState('') // honeypot (spam trap)
  const [formData, setFormData] = useState({
    name: '', phone: '', instagram: '', business: '', goal: '',
  })

  const t = translations[lang]

  // Scroll detection for nav
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Body lock when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Scroll reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
        { threshold: 0.07 }
      )
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('in-view')
        } else {
          observer.observe(el)
        }
      })
      return () => observer.disconnect()
    }, 80)
    return () => clearTimeout(timer)
  }, [lang])

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, menuOpen ? 350 : 0)
  }

  const toggleFaq = (i) => setFaqOpen((p) => ({ ...p, [i]: !p[i] }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    setFormError('')
    try {
      const resp = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company: hp, lang }),
      })
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}))
        throw new Error(j.error || 'send_failed')
      }
      setSubmitted(true)
    } catch (err) {
      setFormError(t.contact.form.errorText)
    } finally {
      setSending(false)
    }
  }

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'whoFor', id: 'who-for' },
    { key: 'included', id: 'included' },
    { key: 'examples', id: 'examples' },
    { key: 'process', id: 'process' },
    { key: 'pricing', id: 'pricing' },
    { key: 'faq', id: 'faq' },
    { key: 'contact', id: 'contact' },
  ]

  const footerLinks1Ids = ['who-for', 'examples', 'pricing']
  const footerLinks2Ids = ['included', 'process', 'faq']

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#050706] text-white min-h-screen antialiased overflow-x-hidden font-sans">

      {/* ── Global ambient glows ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#9CFF00]/[0.04] blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#9CFF00]/[0.03] blur-[100px]" />
      </div>

      {/* ════════════════════════ HEADER ════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-premium ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ease-premium ${
              scrolled
                ? 'bg-[#050706]/85 backdrop-blur-xl border border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="font-display font-bold text-lg text-white tracking-tight hover:text-[#9CFF00] transition-colors duration-300 ease-premium"
            >
              nars<span className="text-[#9CFF00]">í</span>a
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.id)}
                  className="px-3.5 py-2 text-white/55 hover:text-white text-sm font-medium rounded-full hover:bg-white/[0.05] transition-all duration-300 ease-premium"
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </nav>

            {/* Right: lang switcher + CTA */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full bg-white/[0.04] border border-white/[0.07]">
                {['en', 'lv', 'ru'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold font-display uppercase tracking-wider transition-all duration-300 ease-premium ${
                      lang === l
                        ? 'bg-[#9CFF00] text-[#050706]'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* CTA button — desktop */}
              <button
                onClick={() => scrollTo('contact')}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#9CFF00] text-[#050706] font-semibold text-sm font-display btn-primary hover:bg-[#b2ff33] transition-all duration-500 ease-premium"
              >
                {t.nav.cta}
              </button>

              {/* Burger button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.10] transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-4 h-[1.5px] bg-white transition-all duration-400 ease-premium origin-center ${
                    menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                  }`}
                />
                <span
                  className={`block w-4 h-[1.5px] bg-white transition-all duration-400 ease-premium ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block w-4 h-[1.5px] bg-white transition-all duration-400 ease-premium origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════ MOBILE MENU ════════════════════════ */}
      <div className={`menu-overlay fixed inset-0 z-40 bg-[#050706]/95 backdrop-blur-2xl flex flex-col ${menuOpen ? 'open' : ''}`}>
        <div className="flex-1 flex flex-col justify-center px-8 pt-24 pb-12">
          <nav className="space-y-1">
            {navItems.map((item, i) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.id)}
                className={`menu-link w-full text-left py-3.5 text-2xl font-display font-semibold text-white/70 hover:text-[#9CFF00] border-b border-white/[0.05] transition-all duration-300 ease-premium`}
                style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>

          <div className={`menu-link mt-8 space-y-4`} style={{ transitionDelay: menuOpen ? '480ms' : '0ms' }}>
            {/* Language switcher mobile */}
            <div className="flex items-center gap-2">
              {['en', 'lv', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold font-display uppercase tracking-wider transition-all duration-300 ease-premium ${
                    lang === l
                      ? 'bg-[#9CFF00] text-[#050706]'
                      : 'bg-white/[0.06] text-white/50 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <CTAPrimary onClick={() => scrollTo('contact')} className="w-full justify-center">
              {t.nav.cta}
            </CTAPrimary>
          </div>
        </div>
      </div>

      <main>
        {/* ════════════════════════ HERO ════════════════════════ */}
        <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

              {/* Left: text */}
              <div>
                <div className="reveal">
                  <SectionBadge>{t.hero.badge}</SectionBadge>
                </div>

                <h1 className="reveal reveal-d1 font-display font-bold text-[clamp(1.875rem,3.4vw,2.9rem)] leading-[1.08] tracking-tight mt-6">
                  {t.hero.headline1}
                  <br />
                  {t.hero.headline2}{' '}
                  <span className="text-gradient-green whitespace-nowrap">{t.hero.highlight}</span>
                </h1>

                <p className="reveal reveal-d2 text-white/80 text-xl sm:text-2xl font-medium mt-5 leading-tight">
                  {t.hero.subtitle}
                </p>

                <p className="reveal reveal-d3 text-white/45 text-base mt-4 leading-relaxed max-w-lg">
                  {t.hero.description}
                </p>

                <div className="reveal reveal-d4 flex flex-wrap items-center gap-3 mt-8">
                  <CTAPrimary onClick={() => scrollTo('contact')}>
                    {t.hero.cta1}
                  </CTAPrimary>
                  <CTAOutline onClick={() => scrollTo('examples')}>
                    {t.hero.cta2}
                  </CTAOutline>
                </div>

                <p className="reveal reveal-d5 text-white/30 text-sm mt-4">
                  {t.hero.smallText}
                </p>

                {/* Stats row */}
                <div className="reveal reveal-d5 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
                  {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map((s, i) => (
                    <div key={i} className="px-3 py-2.5 min-h-[3.5rem] flex items-center justify-center bg-white/[0.03] border border-white/[0.07] rounded-xl text-center">
                      <div className="text-xs font-medium text-white/60 leading-snug">{s}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CSS mockup */}
              <div className="reveal reveal-d3 flex justify-center lg:justify-end px-8 lg:px-0 pt-8 lg:pt-0">
                <div className="w-full max-w-[420px]">
                  <HeroMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ PROBLEM ════════════════════════ */}
        <section id="problem" className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.problem.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4 mb-16">
              {t.problem.headline}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {t.problem.cards.map((card, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${i + 1} p-1.5 bg-[#0F0808] border border-red-500/[0.08] rounded-[1.5rem]`}
                >
                  <div className="bg-[#0C0808] rounded-[1.25rem] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] h-full">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/15 flex items-center justify-center mb-4">
                      <X className="w-3 h-3 text-red-400/60" strokeWidth={2.5} />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{card}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlighted block */}
            <div className="reveal p-1.5 bg-[#9CFF00]/[0.05] border border-[#9CFF00]/15 rounded-[1.75rem] max-w-3xl mx-auto glow-green-sm">
              <div className="bg-[#050F06] rounded-[1.375rem] px-8 py-7 shadow-[inset_0_1px_1px_rgba(156,255,0,0.05)] text-center">
                <p className="text-white/85 text-lg sm:text-xl leading-relaxed font-medium">
                  {t.problem.highlight}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ WHO FOR ════════════════════════ */}
        <section id="who-for" className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.whoFor.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4">
              {t.whoFor.headline}
            </h2>
            <p className="reveal reveal-d2 text-white/40 text-lg text-center mt-4 mb-16 max-w-xl mx-auto">
              {t.whoFor.subtitle}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {t.whoFor.cards.map((card, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${(i % 4) + 1} group p-[1px] bg-gradient-to-b from-white/[0.07] to-white/[0.02] rounded-2xl hover:from-[#9CFF00]/20 hover:to-[#9CFF00]/[0.03] transition-all duration-500 ease-premium`}
                >
                  <div className="bg-[#090D0F] rounded-2xl overflow-hidden h-full group-hover:bg-[#090F0A] transition-colors duration-500">
                    {/* Image header */}
                    <div className="relative h-24 overflow-hidden">
                      <img src={WHO_FOR_IMAGES[i]} alt={card.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'saturate(0.9) brightness(0.72)' }} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090D0F]" />
                    </div>
                    <div className="px-5 pb-5 -mt-3 relative z-10">
                      <div className="w-8 h-8 rounded-xl bg-[#9CFF00]/8 border border-[#9CFF00]/15 flex items-center justify-center mb-3 group-hover:bg-[#9CFF00]/15 transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4 text-[#9CFF00]/70" />
                      </div>
                      <h3 className="font-display font-semibold text-white text-sm mb-1.5">{card.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ INCLUDED ════════════════════════ */}
        <section id="included" className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.included.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4">
              {t.included.headline}
            </h2>
            <p className="reveal reveal-d2 text-white/40 text-lg text-center mt-4 mb-16 max-w-xl mx-auto">
              {t.included.subtitle}
            </p>

            {/* Double-bezel container */}
            <div className="reveal p-2 bg-white/[0.02] border border-white/[0.06] rounded-[2rem] max-w-4xl mx-auto">
              <div className="bg-[#090D0F] rounded-[1.625rem] p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {t.included.items.map((item, i) => (
                    <div key={i} className={`reveal reveal-d${(i % 4) + 1} flex items-center gap-3`}>
                      <GreenTick />
                      <span className="text-white/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <CTAPrimary onClick={() => scrollTo('contact')}>
                    {t.included.cta}
                  </CTAPrimary>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ COMPARISON ════════════════════════ */}
        <section id="comparison" className="py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.comparison.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center text-balance leading-tight tracking-tight mt-4 mb-16">
              {t.comparison.headline}
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Option A — Instagram only */}
              <div className="reveal p-[1px] bg-gradient-to-b from-red-500/25 to-red-500/[0.04] rounded-[1.75rem]">
                <div className="bg-[#0D0A0A] rounded-[1.6875rem] p-7 h-full">
                  <h3 className="font-display font-bold text-xl text-white/70 mb-6">
                    {t.comparison.optionA.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {t.comparison.optionA.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mt-0.5">
                          <X className="w-2.5 h-2.5 text-red-400" strokeWidth={2.5} />
                        </span>
                        <span className="text-white/45 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Option B — Website */}
              <div className="reveal reveal-d1 p-[1px] bg-gradient-to-b from-[#9CFF00]/30 to-[#9CFF00]/[0.05] rounded-[1.75rem] glow-green-sm">
                <div className="bg-[#060D06] rounded-[1.6875rem] p-7 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display font-bold text-xl text-white">
                      {t.comparison.optionB.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-[#9CFF00]/10 border border-[#9CFF00]/20 rounded-full text-[#9CFF00] text-[10px] font-semibold font-display uppercase tracking-wider">
                      {t.comparison.optionB.badge}
                    </span>
                  </div>
                  <ul className="space-y-3.5">
                    {t.comparison.optionB.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <GreenTick />
                        <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ EXAMPLES ════════════════════════ */}
        <section id="examples" className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.examples.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4">
              {t.examples.headline}
            </h2>
            <p className="reveal reveal-d2 text-white/40 text-lg text-center mt-4 mb-16 max-w-xl mx-auto">
              {t.examples.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
              {t.examples.cards.map((card, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${(i % 2) + 1} group p-[1px] bg-gradient-to-b from-white/[0.09] to-transparent rounded-[1.75rem] hover:from-[#9CFF00]/25 hover:to-[#9CFF00]/[0.04] transition-all duration-500 ease-premium`}
                >
                  <div className="bg-[#090D0F] rounded-[1.6875rem] overflow-hidden h-full flex flex-col group-hover:bg-[#0B100C] transition-colors duration-500">
                    {/* Project preview. Real screenshots sit inside a clean browser window
                        for a premium "real site we built" feel; the booking concept stays a
                        device mockup. Both lift gently on hover. */}
                    {EXAMPLE_IMAGES[i].includes('booking') ? (
                      <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#0c0c0d] aspect-[4/3]">
                        <img
                          src={EXAMPLE_IMAGES[i]}
                          alt={`${card.type} — concept by narsia`}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                        />
                      </div>
                    ) : (
                      <div className="relative border-b border-white/[0.06] bg-gradient-to-br from-[#0e1316] to-[#0a0d0f] aspect-[4/3] p-4 sm:p-5 flex items-center">
                        <div className="w-full rounded-xl overflow-hidden border border-white/[0.09] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8)] group-hover:border-[#9CFF00]/25 group-hover:-translate-y-1 group-hover:shadow-[0_28px_55px_-15px_rgba(0,0,0,0.85)] transition-all duration-500 ease-premium">
                          {/* Browser chrome */}
                          <div className="h-8 bg-[#0e1316] border-b border-white/[0.07] flex items-center px-3 gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f57]/70" />
                            <span className="w-2 h-2 rounded-full bg-[#febc2e]/70" />
                            <span className="w-2 h-2 rounded-full bg-[#28c840]/70" />
                            <div className="flex-1 ml-2 mr-1 h-4 rounded bg-white/[0.05] border border-white/[0.06] flex items-center justify-center gap-1">
                              <Lock className="w-2 h-2 text-white/30" strokeWidth={2.5} />
                              <span className="text-[9px] text-white/40 font-medium tracking-wide truncate">
                                {siteLabelFor(EXAMPLE_IMAGES[i])}
                              </span>
                            </div>
                          </div>
                          {/* Full screenshot — shown completely, never cropped */}
                          <img
                            src={EXAMPLE_IMAGES[i]}
                            alt={`${card.type} — concept by narsia`}
                            loading="lazy"
                            className="block w-full h-auto"
                          />
                        </div>
                      </div>
                    )}

                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <h3 className="font-display font-bold text-white text-xl mb-2">{card.type}</h3>
                      <p className="text-white/55 text-sm leading-relaxed mb-5">{card.desc}</p>
                      <ul className="space-y-2.5 mb-7 flex-1">
                        {card.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-white/70 text-sm">
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#9CFF00]/12 border border-[#9CFF00]/25 flex items-center justify-center mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#9CFF00]" strokeWidth={3} />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => scrollTo('contact')}
                        className="group/btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/12 text-white/75 text-sm font-medium font-display hover:border-[#9CFF00]/40 hover:text-[#9CFF00] hover:bg-[#9CFF00]/[0.05] transition-all duration-300 ease-premium"
                      >
                        {t.examples.cta}
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 ease-premium" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ PROCESS ════════════════════════ */}
        <section id="process" className="py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.process.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4">
              {t.process.headline}
            </h2>
            <p className="reveal reveal-d2 text-white/40 text-lg text-center mt-4 mb-16 max-w-xl mx-auto">
              {t.process.subtitle}
            </p>

            <div className="space-y-3">
              {t.process.steps.map((step, i) => (
                <div
                  key={i}
                  className={`reveal reveal-d${i + 1} p-[1px] bg-gradient-to-r from-white/[0.06] to-transparent rounded-2xl hover:from-[#9CFF00]/15 transition-all duration-500 ease-premium`}
                >
                  <div className="bg-[#090D0F] rounded-[calc(1rem-1px)] px-6 py-5 flex items-center gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#9CFF00]/8 border border-[#9CFF00]/15 flex items-center justify-center">
                      <span className="font-display font-bold text-[#9CFF00] text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-base mb-1">{step.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 p-[1px] bg-gradient-to-r from-[#9CFF00]/15 to-transparent rounded-2xl">
              <div className="bg-[#060D06] rounded-[calc(1rem-1px)] px-6 py-5">
                <p className="text-white/50 text-sm text-center leading-relaxed">{t.process.note}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ PRICING ════════════════════════ */}
        <section id="pricing" className="py-32 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.pricing.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4">
              {t.pricing.headline}
            </h2>
            <p className="reveal reveal-d2 text-white/40 text-lg text-center mt-4 mb-12 max-w-lg mx-auto">
              {t.pricing.subtitle}
            </p>

            {/* Pricing card — double bezel */}
            <div className="reveal p-2 bg-[#9CFF00]/[0.04] border border-[#9CFF00]/[0.14] rounded-[2.25rem] glow-green">
              <div className="bg-[#060F06] rounded-[2rem] p-8 sm:p-10 shadow-[inset_0_1px_1px_rgba(156,255,0,0.06)]">
                {/* Badge + price */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="inline-flex px-3 py-1 rounded-full bg-[#9CFF00]/10 border border-[#9CFF00]/20 text-[#9CFF00] text-[10px] font-semibold font-display uppercase tracking-wider">
                      {t.pricing.card.badge}
                    </span>
                    <div className="mt-5">
                      <div className="text-white/35 text-sm mb-1">{t.pricing.card.from}</div>
                      <div className="font-display font-bold text-6xl sm:text-7xl text-gradient-green leading-none">
                        {t.pricing.card.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#9CFF00]/8 border border-[#9CFF00]/15 flex items-center justify-center mt-1">
                    <Zap className="w-6 h-6 text-[#9CFF00]/70" />
                  </div>
                </div>

                <p className="text-white/55 text-sm mb-7">{t.pricing.card.desc}</p>

                {/* Included list */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-9">
                  {t.pricing.card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <GreenTick />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <CTAPrimary onClick={() => scrollTo('contact')} className="w-full justify-center text-base py-4">
                  {t.pricing.card.cta}
                </CTAPrimary>

                <p className="text-white/30 text-xs text-center mt-4 leading-relaxed">
                  {t.pricing.card.note}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ FAQ ════════════════════════ */}
        <section id="faq" className="py-32 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="reveal text-center mb-4">
              <SectionBadge>{t.faq.badge}</SectionBadge>
            </div>
            <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl text-center leading-tight tracking-tight mt-4 mb-14">
              {t.faq.headline}
            </h2>

            <div className="space-y-2">
              {t.faq.items.map((item, i) => (
                <div key={i} className={`reveal reveal-d${(i % 4) + 1}`}>
                  <div
                    className={`p-[1px] rounded-2xl transition-all duration-400 ease-premium ${
                      faqOpen[i]
                        ? 'bg-gradient-to-b from-[#9CFF00]/15 to-[#9CFF00]/[0.03]'
                        : 'bg-gradient-to-b from-white/[0.06] to-transparent'
                    }`}
                  >
                  <div className={`rounded-[calc(1rem-1px)] overflow-hidden transition-colors duration-400 ease-premium ${
                    faqOpen[i] ? 'bg-[#060F06]' : 'bg-[#090D0F]'
                  }`}>
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >
                      <span className={`font-medium text-sm sm:text-base leading-snug pr-4 transition-colors duration-300 ${
                        faqOpen[i] ? 'text-white' : 'text-white/75'
                      }`}>
                        {item.q}
                      </span>
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-400 ease-premium ${
                          faqOpen[i]
                            ? 'bg-[#9CFF00]/10 border-[#9CFF00]/30 rotate-180'
                            : 'bg-white/[0.04] border-white/10'
                        }`}
                      >
                        <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 ${faqOpen[i] ? 'text-[#9CFF00]' : 'text-white/40'}`} />
                      </span>
                    </button>
                    <div className={`faq-answer ${faqOpen[i] ? 'open' : ''}`}>
                      <div className="px-6 pb-5">
                        <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════ CONTACT FORM ════════════════════════ */}
        <section id="contact" className="py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading + benefits */}
              <div>
                <div className="reveal">
                  <SectionBadge>{t.contact.badge}</SectionBadge>
                </div>
                <h2 className="reveal reveal-d1 font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight mt-5 mb-4">
                  {t.contact.headline}
                </h2>
                <p className="reveal reveal-d2 text-white/45 text-lg leading-relaxed mb-10">
                  {t.contact.subtitle}
                </p>

                <div className="reveal reveal-d3 space-y-4">
                  {t.contact.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <GreenTick />
                      <span className="text-white/60 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="reveal reveal-d2">
                <div className="p-[1px] bg-gradient-to-b from-[#9CFF00]/15 to-[#9CFF00]/[0.03] rounded-[1.75rem]">
                  <div className="bg-[#090D0F] rounded-[1.6875rem] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="w-14 h-14 rounded-full bg-[#9CFF00]/15 border border-[#9CFF00]/25 flex items-center justify-center mb-5">
                          <Check className="w-7 h-7 text-[#9CFF00]" />
                        </div>
                        <h3 className="font-display font-bold text-xl text-white mb-2">
                          {t.contact.form.successTitle}
                        </h3>
                        <p className="text-white/50 text-sm">{t.contact.form.successText}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {[
                          { key: 'name', type: 'text' },
                          { key: 'phone', type: 'tel' },
                          { key: 'instagram', type: 'text' },
                          { key: 'business', type: 'text' },
                          { key: 'goal', type: 'text' },
                        ].map(({ key, type }) => (
                          <div key={key}>
                            <label className="block text-white/40 text-xs font-medium mb-1.5 uppercase tracking-wider">
                              {t.contact.form[key]}
                            </label>
                            <input
                              type={type}
                              value={formData[key]}
                              onChange={(e) => setFormData((p) => ({ ...p, [key]: e.target.value }))}
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#9CFF00]/30 focus:bg-white/[0.06] transition-all duration-300 ease-premium"
                              placeholder=""
                              required={key === 'name' || key === 'phone'}
                            />
                          </div>
                        ))}
                        {/* Honeypot — hidden from real users, catches bots */}
                        <input
                          type="text"
                          name="company"
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                          value={hp}
                          onChange={(e) => setHp(e.target.value)}
                          className="hidden"
                        />
                        <div className="pt-1">
                          <CTAPrimary className={`w-full justify-center ${sending ? 'opacity-70 pointer-events-none' : ''}`}>
                            {sending ? t.contact.form.sending : t.contact.form.submit}
                          </CTAPrimary>
                        </div>
                        {formError && (
                          <p className="text-red-400/80 text-xs text-center mt-1 leading-relaxed">
                            {formError}
                          </p>
                        )}
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════ DIRECT CONTACT ════════════════════════ */}
        <section id="direct-contact" className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="reveal font-display font-bold text-3xl sm:text-4xl text-center leading-tight mb-3">
              {t.directContact.headline}
            </h2>
            <p className="reveal reveal-d1 text-white/40 text-base text-center mb-12">
              {t.directContact.subtitle}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { platform: 'WhatsApp', icon: MessageCircle, color: '#25D366', href: 'https://wa.me/37126979766' },
                { platform: 'Instagram', icon: Instagram, color: '#E1306C', href: 'https://www.instagram.com/bynarsia/' },
                { platform: 'Telegram', icon: Send, color: '#0088cc', href: 'https://t.me/bynarsia' },
                { platform: 'Email', icon: Mail, color: '#9CFF00', href: 'mailto:hello@bynarsia.com' },
              ].map((contact, i) => {
                const card = t.directContact.cards[i]
                const Icon = contact.icon
                return (
                  <a
                    key={i}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`reveal reveal-d${i + 1} group p-[1px] bg-gradient-to-b from-white/[0.07] to-transparent rounded-2xl hover:from-white/15 transition-all duration-400 ease-premium`}
                  >
                    <div className="bg-[#090D0F] rounded-[calc(1rem-1px)] p-5 text-center h-full flex flex-col items-center gap-3 group-hover:bg-[#0B1012] transition-colors duration-400">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${contact.color}18`, border: `1px solid ${contact.color}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: contact.color, opacity: 0.8 }} />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white text-sm mb-0.5">{card.platform}</div>
                        <div className="text-white/35 text-xs">{card.handle}</div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════ FINAL CTA ════════════════════════ */}
        <section id="final-cta" className="py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Outer bezel */}
            <div className="reveal p-2 bg-[#9CFF00]/[0.05] border border-[#9CFF00]/[0.14] rounded-[2.5rem] glow-green">
              {/* Inner core */}
              <div className="bg-[#060F06] rounded-[2.125rem] px-8 sm:px-16 py-16 sm:py-20 text-center shadow-[inset_0_1px_1px_rgba(156,255,0,0.05)]">
                <SectionBadge>{t.finalCta.badge}</SectionBadge>

                <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mt-6 mb-4">
                  {t.finalCta.headline1}
                  <br />
                  <span className="text-gradient-green">{t.finalCta.headline2}</span>
                </h2>

                <p className="text-white/45 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  {t.finalCta.desc}
                </p>

                <CTAPrimary onClick={() => scrollTo('contact')} className="text-base px-8 py-4">
                  {t.finalCta.cta}
                </CTAPrimary>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="border-t border-white/[0.05] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="font-display font-bold text-xl text-white mb-3">
                nars<span className="text-[#9CFF00]">í</span>a
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                {t.footer.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['en', 'lv', 'ru'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold font-display uppercase tracking-wider transition-all duration-300 ease-premium ${
                      lang === l
                        ? 'bg-[#9CFF00] text-[#050706]'
                        : 'bg-white/[0.05] text-white/35 hover:text-white/60'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 1 */}
            <div>
              <div className="font-display font-semibold text-white/70 text-xs uppercase tracking-widest mb-5">
                {t.footer.col1.title}
              </div>
              <ul className="space-y-3">
                {t.footer.col1.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(footerLinks1Ids[i])}
                      className="text-white/35 text-sm hover:text-white/70 transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <div className="font-display font-semibold text-white/70 text-xs uppercase tracking-widest mb-5">
                {t.footer.col2.title}
              </div>
              <ul className="space-y-3">
                {t.footer.col2.links.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(footerLinks2Ids[i])}
                      className="text-white/35 text-sm hover:text-white/70 transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={`mailto:${t.footer.email}`}
                  className="text-white/35 text-sm hover:text-[#9CFF00] transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {t.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.04]">
            <p className="text-white/20 text-xs">{t.footer.copyright}</p>
            <p className="text-white/15 text-xs">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
