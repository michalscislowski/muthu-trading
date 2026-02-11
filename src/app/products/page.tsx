import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our catalogue of 15,000+ products across food, health & beauty, bicycles, household appliances, and cleaning products.",
};

const categories = [
  {
    name: "Food",
    href: "/products/food",
    description:
      "We are committed to delivering high-quality fresh food. We honour this commitment by selecting meats with the best origins, and by offering the freshest fish and the best-tasting fruits and vegetables.",
    count: "7 subcategories",
    image: "/images/fresh-food.jpg",
  },
  {
    name: "Health & Beauty",
    href: "/products/health-beauty",
    description:
      "A diverse range of health and beauty products designed to cater to your everyday personal care needs, from dental products to perfumes.",
    count: "10 subcategories",
    image: "/images/categories/health-beauty/perfumes.jpeg",
  },
  {
    name: "Bicycles",
    href: "/products/bicycles",
    description:
      "High-quality bicycles tailored for businesses catering to diverse customer needs. Durable and reliable options for both children and adults.",
    count: "2 subcategories",
    image: "/images/categories/bicycles/adults.jpg",
  },
  {
    name: "Household Appliances",
    href: "/products/appliances",
    description:
      "Discover our extensive range of household appliances, tailored for businesses seeking quality, durability, and efficiency across all categories.",
    count: "8 subcategories",
    image: "/images/categories/appliances/washing-machines.webp",
  },
  {
    name: "Cleaning Products",
    href: "/products/cleaning",
    description:
      "A diverse selection of cleaning products designed for businesses seeking reliable and effective solutions for every environment.",
    count: "6 subcategories",
    image: "/images/categories/cleaning/detergent.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#2a1820] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/products-showcase.jpg"
            alt="Products"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1418]/95 via-[#2a1820]/85 to-[#2a1820]/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#911f36]/30 via-[#911f36]/15 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.5) 35px, rgba(201,168,76,0.5) 36px)`,
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-cream-200/40 font-heading text-xs tracking-wider uppercase mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Products</span>
          </nav>

          <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
            Our Catalogue
          </span>
          <div className="gold-line mt-3 mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
            Our Products
          </h1>
          <p className="text-cream-200/60 text-lg max-w-2xl leading-relaxed">
            We work with the very best manufacturer brands to offer our customers a wide assortment of food and non-food products, with a strong focus on Portuguese producers.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 md:py-28 bg-cream-100 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={cat.href}
                  className="card-hover group block bg-white rounded-xl border border-cream-200 overflow-hidden"
                >
                  <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
                    {/* Visual — real image */}
                    <div className="h-56 md:h-full relative overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover img-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 md:bg-gradient-to-r md:from-transparent md:to-white/5" />
                      {/* Corner accents */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/30" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/30" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-burgundy-900 group-hover:text-burgundy-700 transition-colors">
                          {cat.name}
                        </h2>
                        <span className="font-heading text-[10px] tracking-wider uppercase text-gold-600 bg-gold-100 px-2.5 py-1 rounded-full">
                          {cat.count}
                        </span>
                      </div>
                      <p className="text-burgundy-600/70 text-base leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <div className="flex items-center gap-2 text-gold-600 font-heading text-xs tracking-wider uppercase">
                        <span>Explore Category</span>
                        <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
