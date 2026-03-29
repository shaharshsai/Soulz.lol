import React from 'react';
import Link from 'next/link';

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "soulz.lol/yourname bio page",
      "5 Bento cards",
      "3 Premium themes",
      "Basic link analytics",
      "Community support"
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For serious creators",
    features: [
      "Custom domain support",
      "Unlimited Bento cards",
      "All premium themes",
      "0% transaction fees",
      "Email capture & leads",
      "Advanced detailed analytics",
      "Priority email support"
    ],
    buttonText: "Go Pro",
    highlight: true
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    description: "Scale your creator empire",
    features: [
      "Everything in Pro",
      "Team members (up to 5)",
      "White-label branding",
      "API access",
      "DM automation integrations",
      "24/7 dedicated support"
    ],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="pt-32 pb-32 px-6 relative z-10 w-full max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-6">Simple, transparent pricing.</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your stage of the creator journey. No hidden fees, ever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`glass-card p-8 rounded-[2.5rem] flex flex-col border transition-all duration-500 hover:scale-[1.02] ${
              plan.highlight 
                ? 'border-violet-500/50 bg-violet-600/5 shadow-[0_0_50px_rgba(139,92,246,0.1)]' 
                : 'border-white/5 bg-white/[0.02]'
            }`}
          >
            {plan.highlight && (
              <div className="bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-6 tracking-wider uppercase">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-white">{plan.price}</span>
              {plan.period && <span className="text-gray-400">{plan.period}</span>}
            </div>

            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                  <svg className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-violet-400' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              href={plan.price === "$0" ? "/login" : `/payment?plan=${plan.name.toLowerCase()}`}
              className={`w-full py-4 rounded-2xl font-bold transition-all text-center block ${
                plan.highlight 
                  ? 'bg-violet-600 text-white hover:bg-violet-500 shadow-[0_10px_30px_rgba(139,92,246,0.3)]' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
