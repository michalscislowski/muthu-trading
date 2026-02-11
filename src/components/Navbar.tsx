"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { name: "All Products", href: "/products" },
  { name: "Food", href: "/products/food" },
  { name: "Health & Beauty", href: "/products/health-beauty" },
  { name: "Bicycles", href: "/products/bicycles" },
  { name: "Household Appliances", href: "/products/appliances" },
  { name: "Cleaning Products", href: "/products/cleaning" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-burgundy-950/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-white.png"
            alt="MGM Muthu International Trading"
            width={456}
            height={547}
            className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${scrolled ? "h-10" : "h-14"}`}
            priority
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-semibold text-white text-sm tracking-wider leading-tight">
              MGM MUTHU
            </span>
            <span className="font-heading text-gold-400 text-[10px] tracking-[0.2em] uppercase leading-tight">
              International Trading
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="font-heading text-[13px] tracking-wider uppercase text-cream-200 hover:text-gold-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="font-heading text-[13px] tracking-wider uppercase text-cream-200 hover:text-gold-400 transition-colors duration-300"
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="font-heading text-[13px] tracking-wider uppercase text-cream-200 hover:text-gold-400 transition-colors duration-300 flex items-center gap-1"
            >
              Products
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                productsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-burgundy-900/95 backdrop-blur-md border border-burgundy-700/30 rounded-lg shadow-2xl py-2 min-w-[220px]">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 font-heading text-[12px] tracking-wider uppercase text-cream-200 hover:text-gold-400 hover:bg-burgundy-800/50 transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="font-heading text-[13px] tracking-wider uppercase text-cream-200 hover:text-gold-400 transition-colors duration-300"
          >
            Contact
          </Link>

          <Link href="/contact" className="btn-primary ml-4">
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-cream-200 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-cream-200 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-cream-200 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-burgundy-950/98 backdrop-blur-lg z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-lg tracking-widest uppercase text-cream-200 hover:text-gold-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-lg tracking-widest uppercase text-cream-200 hover:text-gold-400 transition-colors"
          >
            About Us
          </Link>
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-lg tracking-widest uppercase text-cream-200 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-lg tracking-widest uppercase text-cream-200 hover:text-gold-400 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            <span>Get a Quote</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
