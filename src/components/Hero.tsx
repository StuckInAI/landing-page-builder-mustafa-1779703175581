import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const bullets = [
  'No credit card required',
  'Free 14-day trial',
  'Cancel anytime',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6c63ff]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff6584]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-[#ede9ff] text-[#6c63ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6c63ff] animate-pulse" />
            Now with AI-powered insights
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1a1a2e] leading-tight mb-6">
            Work smarter,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#ff6584]">
              ship faster.
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            Lumina brings your team's ideas, tasks, and docs into one seamless workspace — powered by AI so you can focus on what actually matters.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#6c63ff] hover:bg-[#574fd6] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#6c63ff]/30"
            >
              Start for free <ArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#6c63ff] text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all">
              <div className="w-7 h-7 rounded-full bg-[#6c63ff]/10 flex items-center justify-center">
                <Play className="w-3 h-3 text-[#6c63ff] fill-[#6c63ff]" />
              </div>
              Watch demo
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-1.5 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-[#6c63ff]" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="relative animate-float hidden lg:block">
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Browser bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 bg-gray-200 rounded-md h-5 flex items-center px-3">
                <span className="text-xs text-gray-400">app.lumina.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 bg-[#f8f7ff]">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-[#1a1a2e] text-sm">Project Overview</span>
                <span className="text-xs bg-[#6c63ff] text-white px-2 py-0.5 rounded-full">Live</span>
              </div>

              {/* Progress bars */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Design Sprint', pct: 88, color: '#6c63ff' },
                  { label: 'Backend API', pct: 62, color: '#ff6584' },
                  { label: 'QA & Testing', pct: 45, color: '#43c6ac' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Tasks Done', val: '128', delta: '+12%' },
                  { label: 'Team Members', val: '24', delta: '+3' },
                  { label: 'Velocity', val: '94%', delta: '+8%' },
                ].map((card) => (
                  <div key={card.label} className="bg-white rounded-xl p-3 shadow-sm">
                    <p className="text-xs text-gray-400 mb-1">{card.label}</p>
                    <p className="text-lg font-bold text-[#1a1a2e]">{card.val}</p>
                    <p className="text-xs text-[#6c63ff] font-medium">{card.delta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1a1a2e]">Sprint completed!</p>
              <p className="text-xs text-gray-400">2 mins ago</p>
            </div>
          </div>

          {/* AvatarStack */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2 flex items-center gap-2">
            <div className="flex -space-x-2">
              {['#6c63ff','#ff6584','#43c6ac','#f7b731'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-600">+18 online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
