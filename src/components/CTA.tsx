import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative bg-gradient-to-br from-[#6c63ff] to-[#574fd6] rounded-3xl px-8 py-16 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff6584]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Ready to transform
              <br />
              how you build?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
              Join 50,000+ teams already using Lumina. Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-[#6c63ff] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start for free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
