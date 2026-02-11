import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MGM Muthu International Trading. Based in Albufeira, Algarve, Portugal. Phone: +351 911 590 887.",
};

const contactDetails = [
  {
    label: "Email",
    value: "enquiry@muthutradingmgm.com",
    href: "mailto:enquiry@muthutradingmgm.com",
    subtext: "Do not hesitate to contact us with any question about our products or import/export services.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+351 911 590 887",
    href: "tel:+351911590887",
    subtext: "Our consultants are available to answer all your questions from Monday to Friday 9:00AM-5:00PM",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Office",
    value: "MGM Muthu Centre",
    subtext: "Rua Ramalho Ortigão S/N, 8200-604 Albufeira – Algarve",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-burgundy-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cargo-ships.jpg" alt="Contact" fill className="object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/70 to-burgundy-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.5) 35px, rgba(201,168,76,0.5) 36px)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-cream-200/40 font-heading text-xs tracking-wider uppercase mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Contact</span>
          </nav>

          <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <div className="gold-line mt-3 mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-cream-200/60 text-lg max-w-2xl leading-relaxed">
            MGM Muthu International Trading, is a trusted Full Export Provider. Our daily mission is to meet the unique needs and demands of your business. To achieve this, we have developed a range of brands that ensure high quality at competitive prices, all backed by a development process certified to the ISO 22000 quality standard.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 md:py-28 bg-cream-100 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
            {/* Form */}
            <AnimateOnScroll animation="slide-left">
              <div className="bg-burgundy-950 rounded-2xl p-8 md:p-10 relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-800/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <h2 className="font-heading font-bold text-2xl text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-cream-200/50 text-sm mb-8">
                    Fill out the form below and we&apos;ll respond within 24 hours.
                  </p>

                  <InquiryForm />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Info */}
            <div>
              <AnimateOnScroll animation="slide-right">
                <div className="space-y-6 mb-10">
                  {contactDetails.map((detail, i) => (
                    <div
                      key={i}
                      className="card-hover bg-white rounded-xl border border-cream-200 p-6 flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center text-gold-400 shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-burgundy-400">
                          {detail.label}
                        </span>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="block font-heading font-semibold text-burgundy-900 hover:text-gold-600 transition-colors mt-1"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="font-heading font-semibold text-burgundy-900 mt-1">
                            {detail.value}
                          </p>
                        )}
                        {detail.subtext && (
                          <p className="text-burgundy-500 text-sm mt-1">{detail.subtext}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Global reach image */}
              <AnimateOnScroll animation="slide-right" delay={2}>
                <div className="rounded-xl overflow-hidden border border-cream-200 aspect-[4/3] relative group">
                  <Image
                    src="/images/consultation.png"
                    alt="MGM Global Reach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-heading text-gold-400 text-xs tracking-[0.2em] uppercase">
                      Our Global Reach
                    </span>
                    <p className="font-heading font-semibold text-white text-base mt-1">
                      From Algarve, Portugal to the World
                    </p>
                  </div>
                  {/* Decorative corners */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/20" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-500/20" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
