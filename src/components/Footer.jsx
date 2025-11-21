import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/wesco-logo-orange.png" alt="WesCo" className="h-8" />
              <span className="font-extrabold text-xl text-[#FB9B1C]">WesCo Property Group</span>
            </div>
            <div className="text-sm leading-relaxed text-slate-300">
              <p>#207 — 32615 South Fraser Way, Abbotsford, BC V2T 1X8</p>
              <p>Century 21 Coastal Realty Ltd.</p>
              <p>Each office independently owned and operated.</p>
            </div>
          </div>
          <div className="md:justify-self-end space-y-4">
            <p className="font-semibold text-slate-100">Follow us</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#FB9B1C] transition" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#FB9B1C] transition" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#FB9B1C] transition" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-400">
          © {year} WesCo Property Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
