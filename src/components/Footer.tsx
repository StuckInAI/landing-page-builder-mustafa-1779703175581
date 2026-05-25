import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Docs', 'API Reference', 'Community', 'Status'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#6c63ff] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Lumina</span>
            </a>
            <p className="text-sm leading-relaxed mb-4">
              The all-in-one workspace for high-velocity product teams.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#6c63ff] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-white text-sm font-semibold mb-4">{col.heading}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2025 Lumina Inc. All rights reserved.</p>
          <p className="text-xs">Made with ♥ for builders everywhere</p>
        </div>
      </div>
    </footer>
  );
}
