"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const planDetails: Record<string, { name: string; price: string; period: string; features: string[] }> = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["soulz.lol/yourname bio page", "5 Bento cards", "3 Premium themes", "Basic link analytics", "Community support"],
  },
  pro: {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: ["Custom domain support", "Unlimited Bento cards", "All premium themes", "0% transaction fees", "Email capture & leads", "Advanced detailed analytics", "Priority email support"],
  },
  business: {
    name: "Business",
    price: "$29",
    period: "/month",
    features: ["Everything in Pro", "Team members (up to 5)", "White-label branding", "API access", "DM automation integrations", "24/7 dedicated support"],
  },
};

function PaymentForm() {
  const searchParams = useSearchParams();
  const planKey = searchParams.get("plan") || "pro";
  const plan = planDetails[planKey] || planDetails.pro;

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const yearlyPrice = planKey === "pro" ? "$115" : planKey === "business" ? "$278" : "$0";
  const displayPrice = billingCycle === "yearly" && planKey !== "free" ? yearlyPrice : plan.price;
  const displayPeriod = planKey === "free" ? "forever" : billingCycle === "yearly" ? "/year" : "/month";

  const formatCardNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
      {/* Left - Order Summary */}
      <div className="lg:w-[380px] shrink-0">
        <div className="rounded-3xl border border-white/10 bg-[#13101a]/80 backdrop-blur-xl p-8 sticky top-32">
          <h2 className="text-lg font-heading font-bold text-white mb-6">Order Summary</h2>

          {/* Plan Card */}
          <div className={`rounded-2xl p-5 mb-6 border ${planKey === "pro" ? "border-violet-500/30 bg-violet-600/10" : "border-white/10 bg-white/[0.03]"}`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{plan.name} Plan</p>
              </div>
              {planKey === "pro" && (
                <span className="bg-violet-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Popular</span>
              )}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white">{displayPrice}</span>
              <span className="text-gray-400 text-sm">{displayPeriod}</span>
            </div>
          </div>

          {/* Billing Toggle */}
          {planKey !== "free" && (
            <div className="flex items-center gap-3 mb-6 p-1 rounded-xl bg-white/[0.04] border border-white/5">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${billingCycle === "monthly" ? "bg-violet-600/20 text-violet-300 border border-violet-500/30" : "text-gray-400 hover:text-white"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all relative ${billingCycle === "yearly" ? "bg-violet-600/20 text-violet-300 border border-violet-500/30" : "text-gray-400 hover:text-white"}`}
              >
                Yearly
                <span className="absolute -top-2 -right-1 bg-emerald-500 text-[9px] text-white font-bold px-1.5 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          )}

          {/* Features */}
          <div className="border-t border-white/5 pt-5">
            <p className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-3">What&apos;s included</p>
            <ul className="flex flex-col gap-2.5">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Total */}
          <div className="border-t border-white/5 mt-6 pt-5 flex justify-between items-center">
            <span className="text-gray-400 font-medium">Total</span>
            <div className="text-right">
              <span className="text-white font-bold text-2xl">{displayPrice}</span>
              <span className="text-gray-400 text-sm ml-1">{displayPeriod}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Payment Form */}
      <div className="flex-1">
        <div className="rounded-3xl border border-white/10 bg-[#13101a]/80 backdrop-blur-xl p-8 md:p-10">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">Payment Details</h2>
          <p className="text-gray-400 text-sm mb-8">Complete your purchase to get started with {plan.name}.</p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label htmlFor="pay-email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <input
                id="pay-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Name on Card */}
            <div>
              <label htmlFor="card-name" className="block text-sm font-medium text-gray-300 mb-1.5">Name on card</label>
              <input
                id="card-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Card Number */}
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-300 mb-1.5">Card number</label>
              <div className="relative">
                <input
                  id="card-number"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full py-3 pl-4 pr-14 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all tracking-wider"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5">
                  <svg viewBox="0 0 24 16" className="w-8 h-5">
                    <rect width="24" height="16" rx="2" fill="#1A1F71" />
                    <text x="12" y="11" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">VISA</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Expiry + CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-300 mb-1.5">Expiry</label>
                <input
                  id="expiry"
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all tracking-wider"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-300 mb-1.5">CVC</label>
                <input
                  id="cvc"
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder="123"
                  maxLength={4}
                  className="w-full py-3 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all tracking-wider"
                />
              </div>
            </div>

            {/* Secure Notice */}
            <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Your payment info is encrypted and secure. We never store your card details.
            </div>

            {/* Submit */}
            <button
              id="pay-submit-btn"
              type="submit"
              className="w-full py-4 mt-2 rounded-xl bg-violet-600 text-white font-bold text-base hover:bg-violet-500 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] active:scale-[0.98]"
            >
              {planKey === "free" ? "Get Started for Free" : `Pay ${displayPrice}${displayPeriod}`}
            </button>

            <p className="text-center text-gray-500 text-xs">
              By subscribing, you agree to our{" "}
              <Link href="#" className="text-gray-400 hover:text-white transition-colors underline underline-offset-2">Terms</Link>
              {" "}and{" "}
              <Link href="#" className="text-gray-400 hover:text-white transition-colors underline underline-offset-2">Privacy Policy</Link>.
              {planKey !== "free" && " Cancel anytime."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#09070c] relative overflow-hidden flex flex-col items-center px-4 py-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="w-[800px] h-[400px] bg-violet-600/12 rounded-[100%] blur-[150px] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M40 40h10v10h-10zm20 30h10v10h-10zm-30 20h10v10h-10zm60-60h10v10h-10zM10 90h10v10H10z" fill="%23ffffff" fill-rule="evenodd"/></svg>')`,
            backgroundSize: "160px 160px",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Back + Logo */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/#pricing" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
            Back to pricing
          </Link>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-heading font-bold text-lg text-white">soulz.lol</span>
          </Link>
        </div>

        <Suspense fallback={<div className="text-gray-400 text-center py-20">Loading...</div>}>
          <PaymentForm />
        </Suspense>
      </div>
    </main>
  );
}
