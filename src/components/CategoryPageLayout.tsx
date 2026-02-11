import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import InquiryForm from "@/components/InquiryForm";

interface SubCategory {
  name: string;
  description: string;
  image?: string;
}

interface CategoryPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  subcategories: SubCategory[];
  heroImage?: string;
}

export default function CategoryPageLayout({
  title,
  subtitle,
  description,
  subcategories,
  heroImage,
}: CategoryPageLayoutProps) {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-burgundy-950 overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover opacity-25"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/70 to-burgundy-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.5) 35px, rgba(201,168,76,0.5) 36px)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-cream-200/40 font-heading text-xs tracking-wider uppercase mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gold-400 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gold-400">{title}</span>
          </nav>

          <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
            {subtitle}
          </span>
          <div className="gold-line mt-3 mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-cream-200/60 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="relative py-20 md:py-28 bg-cream-100 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((sub, i) => (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={Math.min(i + 1, 8) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}
              >
                <Link href="/contact" className="card-hover group block bg-white rounded-xl border border-cream-200 overflow-hidden h-full">
                  {/* Visual header with image or gradient fallback */}
                  <div className="h-44 relative overflow-hidden">
                    {sub.image ? (
                      <>
                        <Image
                          src={sub.image}
                          alt={sub.name}
                          fill
                          className="object-cover img-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/50 to-burgundy-950/10 group-hover:from-burgundy-950/40 group-hover:to-transparent transition-all duration-500" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-800 via-burgundy-900 to-burgundy-950" />
                    )}
                    {/* Decorative number */}
                    <span className="absolute top-3 left-4 font-heading text-white/15 text-5xl font-bold leading-none drop-shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Corner accent */}
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-500/30 group-hover:border-gold-500/60 transition-colors duration-500" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-500/30 group-hover:border-gold-500/60 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-burgundy-900 mb-2 group-hover:text-burgundy-700 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-burgundy-600/70 text-sm leading-relaxed">
                      {sub.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-gold-600 font-heading text-xs tracking-wider uppercase">
                      <span>Contact Us</span>
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="relative py-20 md:py-28 bg-burgundy-950 overflow-hidden noise-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-burgundy-800/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimateOnScroll className="text-center mb-12">
            <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
              Interested?
            </span>
            <div className="gold-line mx-auto mt-3 mb-6" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Ask Us About{" "}
              <span className="italic font-body font-light text-gold-300">
                {title}
              </span>
            </h2>
            <p className="text-cream-200/60 text-base">
              Send us an inquiry and our team will get back to you with product details and pricing.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2}>
            <InquiryForm />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
