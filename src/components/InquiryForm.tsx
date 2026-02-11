"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full bg-burgundy-900/40 border border-burgundy-700/30 rounded-lg px-4 py-3.5 text-cream-100 font-body text-base placeholder:text-cream-200/25 focus:outline-none focus:border-gold-500/50 focus:bg-burgundy-900/60 focus:shadow-[0_0_0_3px_rgba(201,168,76,0.08)] transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="relative">
          <label
            className={`block font-heading text-xs tracking-wider uppercase mb-2 transition-colors duration-300 ${
              focused === "name" ? "text-gold-400" : "text-cream-200/50"
            }`}
          >
            Your Name
          </label>
          <input
            type="text"
            required
            className={inputClass}
            placeholder="John Doe"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div className="relative">
          <label
            className={`block font-heading text-xs tracking-wider uppercase mb-2 transition-colors duration-300 ${
              focused === "email" ? "text-gold-400" : "text-cream-200/50"
            }`}
          >
            Email Address
          </label>
          <input
            type="email"
            required
            className={inputClass}
            placeholder="john@company.com"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>
      <div className="relative">
        <label
          className={`block font-heading text-xs tracking-wider uppercase mb-2 transition-colors duration-300 ${
            focused === "message" ? "text-gold-400" : "text-cream-200/50"
          }`}
        >
          Message
        </label>
        <textarea
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your requirements..."
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>
      <button
        type="submit"
        className={`btn-primary w-full justify-center transition-all duration-500 ${
          submitted ? "bg-emerald-600 !bg-none" : ""
        }`}
        disabled={submitted}
      >
        <span>{submitted ? "Inquiry Sent Successfully!" : "Send Inquiry"}</span>
        {!submitted ? (
          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        ) : (
          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
    </form>
  );
}
