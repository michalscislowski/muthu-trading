import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 15000, suffix: "+", label: "Products" },
  { value: 70, suffix: "+", label: "Experience years" },
  { value: 500, suffix: "K+", label: "Containers per year" },
  { value: 100, suffix: "%", label: "Satisfied customers" },
];

const services = [
  {
    title: "We Deliver What You Need, Where You Need It",
    description:
      "We closely monitor every stage of the export process, with consultancy, planning and container preparation, always checking weights, volumes, shelf lives and temperatures.",
    image: "/images/consultation.png",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Air, Ground and Maritime Transport",
    description:
      "Regardless of the means of transport, we ensure product quality and freshness, while always meeting deadlines.",
    image: "/images/air-transport.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Fresh Food: Our Speciality",
    description:
      "As specialists in fresh food, we seek out the best raw materials and partner with the best suppliers. This is how we can put perishables, frozen food and dry goods together in a single container.",
    image: "/images/fresh-food.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "The Best Products",
    description:
      "We work with the very best manufacturer brands to offer our customers a wide assortment of food and non-food products, with a strong focus on Portuguese producers.",
    image: "/images/products-showcase.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const categories = [
  {
    name: "Food",
    href: "/products/food",
    description: "Fresh, preserved, and packaged food products",
    image: "/images/fresh-food.jpg",
  },
  {
    name: "Health & Beauty",
    href: "/products/health-beauty",
    description: "Personal care and beauty essentials",
    image: "/images/categories/health-beauty/perfumes.jpeg",
  },
  {
    name: "Bicycles",
    href: "/products/bicycles",
    description: "Quality bicycles for all ages",
    image: "/images/categories/bicycles/adults.jpg",
  },
  {
    name: "Appliances",
    href: "/products/appliances",
    description: "Household appliances and electronics",
    image: "/images/categories/appliances/washing-machines.webp",
  },
  {
    name: "Cleaning",
    href: "/products/cleaning",
    description: "Professional cleaning solutions",
    image: "/images/categories/cleaning/detergent.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background photograph */}
        <div className="absolute inset-0">
          <Image
            src="/images/cargo-ships.jpg"
            alt="International shipping"
            fill
            className="object-cover kenburns"
            priority
            quality={90}
          />
        </div>
        {/* Dark overlay with burgundy tint */}
        <div className="absolute inset-0 bg-burgundy-950/85" />
        {/* Gold radial accents */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 80%, rgba(201, 168, 76, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.06) 0%, transparent 50%)",
          }}
        />
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.4) 35px, rgba(201,168,76,0.4) 36px)`,
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Overline */}
          <div className="fade-up visible" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block font-heading text-gold-400 text-xs tracking-[0.3em] uppercase mb-6 border border-gold-500/30 px-5 py-2.5 backdrop-blur-sm bg-burgundy-950/30">
              MGM Muthu — Est. with 70+ Years of Excellence
            </span>
          </div>

          {/* Main heading */}
          <h1 className="fade-up visible" style={{ animationDelay: "0.4s" }}>
            <span className="block font-body font-light text-cream-200/80 text-xl md:text-2xl mb-2 italic">
              Your Trusted
            </span>
            <span className="block font-heading font-bold text-5xl md:text-7xl lg:text-[6.5rem] text-white leading-[0.9] mb-3 drop-shadow-lg">
              Full Export
            </span>
            <span className="block font-heading font-light text-5xl md:text-7xl lg:text-[6.5rem] gold-shimmer leading-[0.9]">
              Provider
            </span>
          </h1>

          {/* Subtitle */}
          <p className="fade-up visible mt-8 max-w-2xl mx-auto text-cream-100/70 text-lg md:text-xl font-body leading-relaxed" style={{ animationDelay: "0.6s" }}>
            Our daily mission is to meet the unique needs and demands of your business.
            We have developed a range of brands that ensure high quality at competitive prices,
            all backed by a development process certified to the ISO 22000 quality standard.
          </p>

          {/* CTAs */}
          <div className="fade-up visible flex flex-col sm:flex-row gap-4 justify-center mt-10" style={{ animationDelay: "0.8s" }}>
            <Link href="/products" className="btn-primary">
              <span>Explore Products</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary backdrop-blur-sm">
              Contact Us
            </Link>
          </div>

          {/* Stats row */}
          <div className="fade-up visible mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 backdrop-blur-sm bg-burgundy-950/20 rounded-2xl py-8 px-6 border border-white/5" style={{ animationDelay: "1s" }}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-gold-400 drop-shadow-sm">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-heading text-cream-200/50 text-[11px] tracking-[0.15em] uppercase mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-5 h-5 text-gold-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="relative py-24 md:py-32 bg-cream-100 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div>
              <AnimateOnScroll animation="slide-left">
                <span className="font-heading text-gold-600 text-xs tracking-[0.3em] uppercase">
                  About Us
                </span>
                <div className="gold-line mt-3 mb-6" />
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-burgundy-900 leading-tight mb-6">
                  More Than Just Distributors, We Serve as Your{" "}
                  <span className="italic font-body font-light text-burgundy-600">
                    Business Consultants
                  </span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={2}>
                <p className="text-burgundy-700 text-lg leading-relaxed mb-6">
                  At MGM Muthu International Trading, we prioritize building genuine partnerships with our clients. We collaborate closely with you to identify and implement the best solutions tailored to your business needs.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={3}>
                <p className="text-burgundy-700 text-lg leading-relaxed mb-8">
                  Through our expertise in technology consultancy, store layout optimization, planograms, and assortment definition, we help you craft and grow successful global retail projects. With over 70 years of industry experience and offering a vast selection of more than 15,000 products from a variety of top labels, we are far more than distributors – we are your strategic business consultants.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={4}>
                <Link href="/products" className="btn-primary bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-cream-100">
                  <span>View Our Products</span>
                  <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </AnimateOnScroll>
            </div>

            {/* Right column — asymmetric image collage */}
            <AnimateOnScroll animation="slide-right" delay={2}>
              <div className="relative">
                {/* Main large image */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <Image
                    src="/images/air-transport.jpg"
                    alt="Air transport"
                    fill
                    className="object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/40 to-transparent" />
                </div>

                {/* Overlapping smaller image */}
                <div className="absolute -bottom-8 -left-8 w-[65%] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border-4 border-cream-100 group">
                  <Image
                    src="/images/consultation.png"
                    alt="Business consultancy"
                    fill
                    className="object-cover img-zoom"
                  />
                </div>

                {/* Floating stat badge */}
                <div className="absolute -top-4 -left-4 bg-burgundy-950 rounded-xl px-6 py-5 shadow-2xl border border-gold-500/20 pulse-gold">
                  <span className="block font-heading font-bold text-3xl text-gold-400">70+</span>
                  <span className="block font-heading text-cream-200/60 text-[10px] tracking-[0.15em] uppercase mt-1">
                    Years Exp.
                  </span>
                </div>

                {/* Floating accent blurs */}
                <div className="absolute -bottom-6 right-12 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="relative py-24 md:py-32 bg-burgundy-950 overflow-hidden noise-overlay">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
              What We Do
            </span>
            <div className="gold-line mx-auto mt-3 mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
              We Go Further for{" "}
              <span className="italic font-body font-light text-gold-300">
                Your Business
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="card-hover group relative rounded-xl overflow-hidden h-full">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover img-zoom"
                    />
                  </div>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/90 to-burgundy-950/70 group-hover:via-burgundy-950/85 group-hover:to-burgundy-950/60 transition-all duration-700" />

                  <div className="relative z-10 p-8 md:p-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-gold-500/15 backdrop-blur-sm border border-gold-500/25 flex items-center justify-center text-gold-400 mb-6 group-hover:border-gold-400/50 group-hover:bg-gold-500/20 transition-all duration-500">
                      {service.icon}
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-gold-300 transition-colors duration-500">
                      {service.title}
                    </h3>

                    <p className="text-cream-200/60 text-base leading-relaxed group-hover:text-cream-200/75 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/60 transition-all duration-700" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST BANNER ============ */}
      <section className="relative py-16 bg-cream-200/50 border-y border-cream-300/60">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-burgundy-950 flex items-center justify-center pulse-gold shrink-0">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-burgundy-900 text-sm tracking-wide">ISO 22000 Certified</p>
                  <p className="text-burgundy-600/70 text-sm">International quality standard</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-cream-300" />

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-burgundy-950 flex items-center justify-center pulse-gold shrink-0">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-burgundy-900 text-sm tracking-wide">Global Distribution</p>
                  <p className="text-burgundy-600/70 text-sm">Air, sea, and ground transport</p>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-cream-300" />

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-burgundy-950 flex items-center justify-center pulse-gold shrink-0">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-burgundy-900 text-sm tracking-wide">Portuguese Origin</p>
                  <p className="text-burgundy-600/70 text-sm">Based in Algarve, Portugal</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ PRODUCT CATEGORIES ============ */}
      <section className="relative py-24 md:py-32 bg-cream-100 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-16">
            <span className="font-heading text-gold-600 text-xs tracking-[0.3em] uppercase">
              Our Catalogue
            </span>
            <div className="gold-line mx-auto mt-3 mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-burgundy-900 leading-tight">
              Product{" "}
              <span className="italic font-body font-light text-burgundy-600">
                Categories
              </span>
            </h2>
            <p className="mt-4 text-burgundy-600 text-lg max-w-2xl mx-auto">
              With a wide assortment of food and non-food products of various private labels, manufacturer brands and exclusive brands, we export in every category to a number of different business sectors.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
                <Link
                  href={cat.href}
                  className="card-hover group block relative rounded-xl overflow-hidden"
                >
                  <div className="aspect-[4/3] relative">
                    {/* Real photograph */}
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover img-zoom"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-burgundy-950/40 to-burgundy-950/20 group-hover:from-burgundy-950/80 group-hover:via-burgundy-950/30 transition-all duration-700" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center pb-8">
                      <h3 className="font-heading font-bold text-2xl text-white mb-1 group-hover:text-gold-300 transition-colors duration-500 drop-shadow-lg">
                        {cat.name}
                      </h3>
                      <p className="text-cream-200/70 text-sm max-w-[200px]">
                        {cat.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-gold-400 font-heading text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-500/30 group-hover:border-gold-500/60 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/30 group-hover:border-gold-500/60 transition-colors duration-500" />
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <Link href="/products" className="btn-primary bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-cream-100">
              <span>View All Products</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cargo-ships.jpg"
            alt="Global shipping"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-burgundy-950/88" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(201,168,76,0.5) 100px, rgba(201,168,76,0.5) 101px)`,
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
              Ready to Get Started?
            </span>
            <div className="gold-line mx-auto mt-3 mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-6">
              From Genuine Portuguese Flavours to Major{" "}
              <span className="italic font-body font-light text-gold-300">
                Manufacturer Brands
              </span>
            </h2>
            <p className="text-cream-200/60 text-lg max-w-2xl mx-auto mb-10">
              Every day, our mission is to meet the needs and demands of your business.
              This is why we offer a range of certified brands featuring products of the
              highest quality at the best price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                <span>Contact Us Today</span>
              </Link>
              <a href="mailto:enquiry@muthutradingmgm.com" className="btn-secondary backdrop-blur-sm">
                enquiry@muthutradingmgm.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
