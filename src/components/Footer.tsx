import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { name: "Food", href: "/products/food" },
  { name: "Health & Beauty", href: "/products/health-beauty" },
  { name: "Bicycles", href: "/products/bicycles" },
  { name: "Household Appliances", href: "/products/appliances" },
  { name: "Cleaning Products", href: "/products/cleaning" },
];

const companyLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#2a1820] text-cream-200 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#911f36]/60 to-transparent" />

      {/* Radial glows — matching inspiration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(145,31,54,0.2)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(145,31,54,0.15)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#911f36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-footer.png"
                alt="MGM Muthu International Trading"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              MGM Muthu International Trading, is a trusted Full Export Provider. Our daily mission is to meet the unique needs and demands of your business. To achieve this, we have developed a range of brands that ensure high quality at competitive prices, all backed by a development process certified to the ISO 22000 quality standard.
            </p>
            <div className="gold-line mb-6" />
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
              Pages
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-300 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-cream-300 text-sm leading-relaxed">
                  MGM Muthu Centre,<br />
                  Rua Ramalho Ortigão S/N,<br />
                  8200-604 Albufeira – Algarve
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:enquiry@muthutradingmgm.com"
                  className="text-cream-300 text-sm hover:text-gold-400 transition-colors"
                >
                  enquiry@muthutradingmgm.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+351911590887"
                  className="text-cream-300 text-sm hover:text-gold-400 transition-colors"
                >
                  +351 911 590 887
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burgundy-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-300/60 text-xs font-heading tracking-wider">
            MGM International Trading {new Date().getFullYear()} All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-cream-300/60 text-xs font-heading tracking-wider hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-cream-300/60 text-xs font-heading tracking-wider hover:text-gold-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
