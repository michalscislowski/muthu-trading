import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for MGM Muthu International Trading.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 bg-[#2a1820] overflow-hidden">
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
            <span className="text-gold-400">Privacy Policy</span>
          </nav>

          <span className="font-heading text-gold-400 text-xs tracking-[0.3em] uppercase">
            Legal
          </span>
          <div className="gold-line mt-3 mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose-custom space-y-8">
            <div>
              <p className="text-burgundy-600 text-lg leading-relaxed">
                MGM Muthu International Trading, operating from MGM Muthu Centre, Rua Ramalho
                Ortigão S/N, 8200-604 Albufeira – Algarve, Portugal, is committed to protecting
                your personal data and your right to privacy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                1. Information We Collect
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                When you visit our website, we may collect certain information automatically,
                including your IP address, browser type, operating system, referring URLs, and
                information about how you interact with our website. We also collect personal
                information that you voluntarily provide to us, such as your name and email
                address when you fill out a contact form or inquiry.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-burgundy-600 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-burgundy-600 leading-relaxed space-y-1">
                <li>Marketing and promotional activities</li>
                <li>Customer support and responding to inquiries</li>
                <li>Order management and fulfilment</li>
                <li>Improving our website and services</li>
              </ul>
              <p className="text-burgundy-600 leading-relaxed mt-3">
                Any additional uses beyond those listed above will require your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                3. Your Rights
              </h2>
              <p className="text-burgundy-600 leading-relaxed mb-3">
                Depending on applicable law, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-burgundy-600 leading-relaxed space-y-1">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Request data portability</li>
                <li>Request restriction of processing</li>
                <li>File a complaint with a supervisory authority</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-burgundy-600 leading-relaxed mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:enquiry@muthutradingmgm.com"
                  className="text-gold-600 hover:text-gold-500 transition-colors underline underline-offset-2"
                >
                  enquiry@muthutradingmgm.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                4. Tracking Technologies
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                We may use cookies and similar tracking technologies to access or store
                information. To learn more about how we use these and your choices in relation to
                these tracking technologies, please refer to our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-gold-600 hover:text-gold-500 transition-colors underline underline-offset-2"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                5. Data Security
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                We implement reasonable and appropriate technical and organisational security
                measures designed to protect the security of any personal information we process.
                However, despite our safeguards and efforts to secure your information, no
                electronic transmission over the Internet or information storage technology can be
                guaranteed to be 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                6. Policy Updates
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                We may update this privacy policy from time to time. Any changes will take effect
                180 days after posting on this page. Continued use of our website after that
                period indicates your acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-xl text-burgundy-900 mb-3">
                7. Contact Us
              </h2>
              <p className="text-burgundy-600 leading-relaxed">
                If you have questions or concerns about this privacy policy or our data
                processing practices, please contact us at:
              </p>
              <div className="mt-3 bg-white rounded-xl border border-cream-200 p-6">
                <p className="font-heading font-semibold text-burgundy-900 text-sm">
                  MGM Muthu International Trading
                </p>
                <p className="text-burgundy-600 text-sm mt-1">
                  MGM Muthu Centre, Rua Ramalho Ortigão S/N
                </p>
                <p className="text-burgundy-600 text-sm">8200-604 Albufeira – Algarve, Portugal</p>
                <p className="text-burgundy-600 text-sm mt-2">
                  Email:{" "}
                  <a
                    href="mailto:enquiry@muthutradingmgm.com"
                    className="text-gold-600 hover:text-gold-500 transition-colors"
                  >
                    enquiry@muthutradingmgm.com
                  </a>
                </p>
                <p className="text-burgundy-600 text-sm">
                  Phone:{" "}
                  <a
                    href="tel:+351911590887"
                    className="text-gold-600 hover:text-gold-500 transition-colors"
                  >
                    +351 911 590 887
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
