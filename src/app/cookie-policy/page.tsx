import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for MGM Muthu International Trading.",
};

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 bg-burgundy-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-cream-200/40 font-heading text-xs tracking-wider uppercase mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-400">Cookie Policy</span>
          </nav>

          <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
            Legal
          </span>
          <div className="gold-line mt-3 mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Cookie Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div>
              <p className="text-burgundy-600 text-lg leading-relaxed">
                This Cookie Policy explains how MGM Muthu International Trading uses cookies and
                similar tracking technologies when you visit our website. By continuing to browse
                our site, you agree to the use of cookies as described in this policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                1. What Are Cookies?
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or
                mobile phone) when you visit a website. They are widely used to make websites
                work more efficiently, provide a better browsing experience, and supply
                information to the website owners.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-cream-200 p-6">
                  <h3 className="font-heading font-semibold text-burgundy-900 text-sm mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-burgundy-600 text-sm leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable
                    basic features like page navigation and access to secure areas. The website
                    cannot function without these cookies.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-cream-200 p-6">
                  <h3 className="font-heading font-semibold text-burgundy-900 text-sm mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-burgundy-600 text-sm leading-relaxed">
                    These cookies help us understand how visitors interact with our website by
                    collecting and reporting information anonymously. This helps us improve our
                    website and your browsing experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-cream-200 p-6">
                  <h3 className="font-heading font-semibold text-burgundy-900 text-sm mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-burgundy-600 text-sm leading-relaxed">
                    These cookies enable the website to provide enhanced functionality and
                    personalisation. They may be set by us or by third-party providers whose
                    services we have added to our pages.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                3. Managing Cookies
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can
                set your browser to refuse cookies or to alert you when cookies are being sent.
                Please note that if you disable cookies, some parts of our website may not
                function properly.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                4. Third-Party Cookies
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                Some cookies on our website are set by third-party services that appear on our
                pages. We do not control these cookies. Please refer to the respective
                third-party privacy policies for more information on their use of cookies.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                5. Updates to This Policy
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in
                technology, legislation, or our data practices. We encourage you to periodically
                review this page to stay informed.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                6. Contact Us
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at{" "}
                <a
                  href="mailto:enquiry@muthutradingmgm.com"
                  className="text-gold-600 hover:text-gold-500 transition-colors underline underline-offset-2"
                >
                  enquiry@muthutradingmgm.com
                </a>{" "}
                or read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-gold-600 hover:text-gold-500 transition-colors underline underline-offset-2"
                >
                  Privacy Policy
                </Link>{" "}
                for more information on how we handle your data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
