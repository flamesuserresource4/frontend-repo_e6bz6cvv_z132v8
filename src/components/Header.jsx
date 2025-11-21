import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/buy', label: 'Buy' },
  { to: '/sell', label: 'Sell' },
  { to: '/developments', label: 'Developments & Land' },
  { to: '/team', label: 'Meet the Team' },
  { to: '/communities', label: 'Communities' },
  { to: '/resources', label: 'Resources' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-[#FB9B1C]' : 'text-slate-700 hover:text-[#FB9B1C]'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/wesco-logo-orange.png"
                alt="WesCo Property Group"
                className="h-8 w-auto"
                onError={(e) => {
                  // graceful fallback to text if logo not found
                  e.currentTarget.style.display = 'none'
                  const sib = e.currentTarget.nextElementSibling
                  if (sib) sib.classList.remove('hidden')
                }}
              />
              <span className="hidden font-extrabold text-xl tracking-tight text-[#FB9B1C]">
                WesCo Property Group
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FB9B1C] text-white font-semibold px-4 py-2 rounded-md shadow hover:shadow-md hover:bg-[#e18b14] transition"
            >
              <Phone size={18} /> Book a Call with Our Team
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${isActive ? 'text-[#FB9B1C] bg-orange-50' : 'text-slate-700 hover:bg-slate-50'}`
                }
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#FB9B1C] text-white font-semibold px-4 py-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              <Phone size={18} /> Book a Call with Our Team
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
