import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Bus,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Home,
  Mail,
  Menu,
  Package,
  Phone,
  PhoneCall,
  Shield,
  Star,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PHONE = "+91 8124953675";
const PHONE_LINK = "tel:+918124953675";
const EMAIL = "rajacars1966@gmail.com";

const serviceGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
];

const services = [
  {
    icon: Car,
    title: "Cars",
    description:
      "Buy or sell premium and pre-owned cars with expert guidance. Get the best value for your deal.",
  },
  {
    icon: Truck,
    title: "Commercial Vehicles",
    description:
      "Wide range of commercial vehicles for your business needs. Trusted consultancy for fleet expansion.",
  },
  {
    icon: Package,
    title: "Load Vehicles",
    description:
      "Heavy and light load vehicles for logistics and transport requirements at competitive prices.",
  },
  {
    icon: Bus,
    title: "Transport Vehicles",
    description:
      "Buses, minivans, and transport solutions for operators and private buyers across Tamil Nadu.",
  },
  {
    icon: Home,
    title: "Real Estate Plots",
    description:
      "Investment-grade real estate plots and land parcels with verified documentation and guidance.",
  },
  {
    icon: DollarSign,
    title: "Finance & More",
    description:
      "End-to-end finance arrangements, loan assistance, and insurance guidance for all vehicle deals.",
  },
];

const buyingSteps = [
  {
    title: "Tell Us Your Needs",
    desc: "Share your requirements, budget, and preferences with Raja.",
  },
  {
    title: "Expert Shortlisting",
    desc: "Get a curated list of options matching your criteria.",
  },
  {
    title: "Inspection & Verification",
    desc: "Thorough inspection and paperwork verification before purchase.",
  },
  {
    title: "Smooth Transaction",
    desc: "Hassle-free registration, finance, and delivery support.",
  },
];

const sellingSteps = [
  {
    title: "Free Valuation",
    desc: "Get a fair market valuation for your vehicle or property.",
  },
  {
    title: "Listing & Marketing",
    desc: "We connect you with verified buyers from our network.",
  },
  {
    title: "Negotiation Support",
    desc: "Raja handles negotiations to get you the best price.",
  },
  {
    title: "Paperwork Done",
    desc: "Complete documentation and transfer handled on your behalf.",
  },
];

export default function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const buyingRef = useRef<HTMLElement>(null);
  const sellingRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "RAJA AUTOCONSULTANCY SERVICES";
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(ref: React.RefObject<HTMLElement | null>) {
    setShowPopup(false);
    setMobileMenuOpen(false);
    setTimeout(
      () => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Welcome Popup */}
      <AnimatePresence>
        {showPopup && (
          <Dialog open={showPopup} onOpenChange={setShowPopup}>
            <DialogContent
              className="glass-panel border-gold/30 max-w-md p-0 overflow-hidden"
              data-ocid="welcome.dialog"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gold-gradient mb-4">
                    <Car className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                    Welcome to Raja Auto Consultancy!
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    How can I help you today?
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "🚗 Buying", ref: buyingRef },
                    { label: "💰 Selling", ref: sellingRef },
                    { label: "🔧 Our Services", ref: servicesRef },
                    { label: "👤 About Raja", ref: aboutRef },
                  ].map(({ label, ref }) => (
                    <button
                      type="button"
                      key={label}
                      onClick={() => scrollTo(ref)}
                      className="p-3 rounded-2xl border border-gold/30 bg-card hover:border-gold hover:bg-gold/10 text-sm font-medium text-foreground transition-all hover:scale-105"
                      data-ocid="welcome.button"
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-full py-2.5 rounded-full groovy-outline-btn text-sm transition-all"
                  onClick={() => setShowPopup(false)}
                  data-ocid="welcome.close_button"
                >
                  Explore on my own
                </button>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-panel shadow-panel" : "bg-transparent"
        }`}
        data-ocid="nav.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand */}
            <button
              type="button"
              className="flex-shrink-0 cursor-pointer text-left"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-gold font-display text-2xl font-bold leading-none">
                RAJA
              </div>
              <div className="text-muted-foreground text-[10px] tracking-widest uppercase">
                Autoconsultancy Services
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "Buying", ref: buyingRef },
                { label: "Selling", ref: sellingRef },
                { label: "Services", ref: servicesRef },
                { label: "About", ref: aboutRef },
                { label: "Contact", ref: contactRef },
              ].map(({ label, ref }) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => scrollTo(ref)}
                  className="text-muted-foreground hover:text-gold text-sm font-medium transition-colors"
                  data-ocid={`nav.${label.toLowerCase()}.link`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Call Now */}
            <div className="flex items-center gap-3">
              <a
                href={PHONE_LINK}
                className="hidden sm:flex items-center gap-2 px-4 py-2 nav-call-btn text-sm"
                data-ocid="nav.call_button"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                type="button"
                className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-ocid="nav.toggle"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-t border-gold/10"
            >
              <div className="px-4 py-4 space-y-3">
                {[
                  { label: "Buying", ref: buyingRef },
                  { label: "Selling", ref: sellingRef },
                  { label: "Services", ref: servicesRef },
                  { label: "About", ref: aboutRef },
                  { label: "Contact", ref: contactRef },
                ].map(({ label, ref }) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => scrollTo(ref)}
                    className="block w-full text-left py-2 text-muted-foreground hover:text-gold text-sm font-medium transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 px-4 py-2.5 nav-call-btn text-sm w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero — Yellow with car collage */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Yellow background base */}
        <div className="absolute inset-0" style={{ background: "#FFD700" }} />

        {/* Car collage right side */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5"
          style={{
            backgroundImage:
              "url('/assets/generated/india-cars-collage.dim_1200x700.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />

        {/* Left gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, #FFD700 0%, #FFD700 35%, #FFD700cc 50%, #FFD70044 70%, transparent 100%)",
          }}
        />

        {/* Extra top/bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,215,0,0.5) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-600/50 bg-amber-900/20 text-amber-800 text-xs font-semibold mb-6 shadow">
                <Star className="w-3 h-3 fill-amber-700 text-amber-700" />
                Trusted Automobile Consultant
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight uppercase mb-6 drop-shadow-sm">
                Expert
                <br />
                <span style={{ color: "#7c3aed" }}>Automobile</span>
                <br />
                Consultancy
                <br />
                <span style={{ color: "#b45309" }}>Services.</span>
              </h1>
              <p className="text-gray-700 text-lg mb-8 max-w-md font-medium">
                Raja brings decades of expertise in cars, commercial vehicles,
                real estate, and finance — your trusted partner for every deal
                in Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo(servicesRef)}
                  className="groovy-btn flex items-center gap-2 px-6 py-3 text-sm"
                  data-ocid="hero.primary_button"
                >
                  View Services
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={PHONE_LINK}
                  className="groovy-outline-btn flex items-center gap-2 px-6 py-3 text-sm"
                  style={{ background: "rgba(0,0,0,0.08) padding-box" }}
                  data-ocid="hero.call_button"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { icon: Shield, text: "Verified Deals" },
                  { icon: Clock, text: "25+ Years Experience" },
                  { icon: CheckCircle, text: "End-to-End Support" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-gray-700 text-sm font-medium"
                  >
                    <Icon className="w-4 h-4" style={{ color: "#7c3aed" }} />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Spacer for car image on right */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Popular cars label */}
        <div className="absolute bottom-6 right-6 hidden lg:flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs font-medium">
          <Car className="w-3.5 h-3.5" />
          Swift · Creta · City · Nexon · Scorpio
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium mb-4">
              What We Offer
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #a855f7, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Services
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive consultancy across vehicles, real estate, and
              finance — all under one roof.
            </p>
          </motion.div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="service-card"
                style={{ background: serviceGradients[i] }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="service-card-icon">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center gap-1 mt-4 text-white text-sm font-semibold underline underline-offset-2 hover:no-underline hover:opacity-80 transition-opacity"
                >
                  Enquire Now <ChevronRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* Buying Section */}
      <section
        ref={buyingRef}
        id="buying"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium mb-4">
                🚗 Buying Guide
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Looking to <span className="gold-text">Buy?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether it's your first car or a fleet of commercial vehicles,
                Raja guides you through every step — finding the right vehicle
                at the right price with verified paperwork.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 px-6 py-3 groovy-btn text-sm"
                data-ocid="buying.call_button"
              >
                <Phone className="w-4 h-4" />
                Talk to Raja
              </a>
            </motion.div>
            <div className="space-y-4">
              {buyingSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel rounded-xl p-4 flex items-start gap-4"
                  data-ocid={`buying.item.${i + 1}`}
                >
                  <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* Selling Section */}
      <section
        ref={sellingRef}
        id="selling"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              {sellingSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel rounded-xl p-4 flex items-start gap-4"
                  data-ocid={`selling.item.${i + 1}`}
                >
                  <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium mb-4">
                💰 Selling Guide
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="gold-text">Sell?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Get fair market value for your vehicles or real estate. Raja's
                extensive buyer network ensures quick, transparent, and
                profitable transactions.
              </p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 px-6 py-3 groovy-btn text-sm"
                data-ocid="selling.call_button"
              >
                <Phone className="w-4 h-4" />
                Get Free Valuation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* Interactive Call CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-12"
            style={{ border: "1px solid oklch(0.76 0.09 82 / 0.3)" }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground mb-8">
              Call Raja directly for instant expert advice on buying, selling,
              or financing.
            </p>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-full groovy-btn font-bold text-lg pulse-call"
              data-ocid="cta.call_button"
            >
              <PhoneCall className="w-6 h-6" />
              {PHONE}
            </a>
            <p className="text-muted-foreground text-sm mt-6">
              Available Mon–Sat · 9 AM – 7 PM
            </p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-medium mb-4">
              👤 About the Consultant
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Meet <span className="gold-text">Raja</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Raja is a seasoned automobile and real estate consultant based
                in Tamil Nadu with over 25 years of hands-on experience. Known
                for transparency, deep market knowledge, and exceptional client
                service, he has facilitated hundreds of successful deals across
                cars, commercial vehicles, and real estate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From first-time buyers to experienced fleet operators, Raja
                provides personalized guidance that goes beyond the transaction
                — building long-term relationships rooted in trust and
                integrity.
              </p>
              <div className="space-y-3">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  data-ocid="about.call_button"
                >
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{PHONE}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
                  data-ocid="about.email_button"
                >
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{EMAIL}</span>
                </a>
              </div>
            </motion.div>

            {/* Visiting Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="rounded-2xl overflow-hidden shadow-gold-lg"
                style={{ border: "1px solid oklch(0.76 0.09 82 / 0.35)" }}
              >
                <img
                  src="/assets/generated/visiting-card.dim_800x450.png"
                  alt="Raja Automobile Consultant Visiting Card"
                  className="w-full object-cover"
                  data-ocid="about.card"
                />
              </div>
              <p className="text-center text-muted-foreground text-xs mt-3">
                Raja Automobile Consultant — Official Business Card
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-8" />

      {/* Contact / Footer */}
      <footer
        ref={contactRef}
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="font-display text-2xl font-bold gold-text mb-1">
                RAJA
              </div>
              <div className="text-muted-foreground text-xs tracking-widest uppercase mb-4">
                Autoconsultancy Services
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted partner for automobiles, commercial vehicles, real
                estate, and finance in Tamil Nadu.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4 gold-text">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Buying", ref: buyingRef },
                  { label: "Selling", ref: sellingRef },
                  { label: "Services", ref: servicesRef },
                  { label: "About Raja", ref: aboutRef },
                ].map(({ label, ref }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(ref)}
                      className="text-muted-foreground hover:text-gold text-sm transition-colors"
                      data-ocid={`footer.${label.toLowerCase().replace(" ", "-")}.link`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-foreground font-semibold text-sm uppercase tracking-wide mb-4 gold-text">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} RAJA AUTOMOBILE CONSULTANT. All
              rights reserved.
            </p>
            <p>
              Built with <span className="text-gold">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
