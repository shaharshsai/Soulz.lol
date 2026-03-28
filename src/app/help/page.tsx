import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const faqs = [
  {
    q: "How do I set up my soulz.lol page?",
    a: "After signing up, head to the Dashboard and use the Bento Editor to customize your profile, add links, and upload media.",
  },
  {
    q: "Can I use a custom domain?",
    a: "Yes! Navigate to Settings → Domains and follow the instructions to connect your own domain to your soulz.lol page.",
  },
  {
    q: "How do I sell digital products?",
    a: "Go to Dashboard → Revenue and set up your store. You can upload files, set prices, and start selling with zero platform fees.",
  },
  {
    q: "Is soulz.lol free to use?",
    a: "Yes, the Starter plan is completely free. Upgrade to Pro or Business for advanced features like analytics, custom domains, and priority support.",
  },
  {
    q: "How do I change my username?",
    a: "Visit Settings → Profile and update your username. Note that your old URL will no longer work after the change.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#09070c] relative overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0 flex justify-center">
        <div className="w-[1000px] h-[500px] bg-violet-600/10 rounded-[100%] blur-[120px] absolute -top-40 opacity-70"></div>
      </div>

      <Navbar />

      <section className="flex-1 pt-40 pb-20 px-6 relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Help Center
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Got questions? We&apos;ve got answers. Reach out anytime — our team is here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {/* Phone */}
          <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-all">
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Phone Support</h3>
              <p className="text-gray-400 text-xs mb-3">Mon–Fri, 9 AM – 6 PM EST</p>
              <a href="tel:+18005551234" className="text-violet-400 hover:text-violet-300 font-bold text-lg transition-colors">
                +1 (800) 555-1234
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-all">
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Email Us</h3>
              <p className="text-gray-400 text-xs mb-3">We reply within 24 hours</p>
              <a href="mailto:support@soulz.lol" className="text-violet-400 hover:text-violet-300 font-bold text-lg transition-colors">
                support@soulz.lol
              </a>
            </div>
          </div>

          {/* Live Chat */}
          <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] flex flex-col gap-4 hover:bg-white/[0.04] transition-all sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Live Chat</h3>
              <p className="text-gray-400 text-xs mb-3">Available 24/7 for Pro users</p>
              <button className="text-violet-400 hover:text-violet-300 font-bold text-lg transition-colors">
                Start a chat →
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <h3 className="text-white font-semibold mb-2 flex items-start gap-3">
                  <span className="text-violet-400 shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-[30px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help CTA */}
        <div className="text-center glass-card rounded-3xl p-10 border border-white/5 bg-white/[0.02]">
          <h2 className="text-xl font-heading font-bold text-white mb-3">
            Still need help?
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Our support team is just a message away. We&apos;re here to make sure you have the best experience on soulz.lol.
          </p>
          <Link
            href="mailto:support@soulz.lol"
            className="inline-flex px-8 py-3 rounded-full bg-violet-600/20 text-violet-300 border border-violet-500 hover:bg-violet-600 hover:text-white transition-all font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-50 text-sm font-sans flex items-center justify-center gap-1">
        <span>powered by</span>
        <span className="font-heading font-bold text-base">soulz.lol</span>
      </footer>
    </main>
  );
}
