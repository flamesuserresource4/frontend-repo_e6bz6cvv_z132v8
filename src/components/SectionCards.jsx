import { Link } from 'react-router-dom'
import { Home, Handshake, Building2, Users } from 'lucide-react'

const Card = ({ icon: Icon, title, points, cta, to }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-lg bg-orange-100 text-[#FB9B1C] flex items-center justify-center">
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
    </div>
    <ul className="text-slate-600 space-y-2 mb-6 list-disc pl-5">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
    <Link to={to} className="mt-auto inline-flex text-[#FB9B1C] font-semibold hover:underline">{cta}</Link>
  </div>
)

export default function SectionCards() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          icon={Home}
          title="Buy"
          points={['On-point search results', 'Off-market & pre-market access', 'Offer strategy & negotiation', 'Financing connections']}
          cta="Talk to a WesCo Buyer Specialist"
          to="/buy"
        />
        <Card
          icon={Handshake}
          title="Sell"
          points={['Strategic pricing & positioning', 'Professional marketing (photo, video, ads)', 'Active agent & buyer network', 'Offer control']}
          cta="Get a Free Home Evaluation"
          to="/sell"
        />
        <Card
          icon={Building2}
          title="Developments & Land"
          points={['Zoning & OCP analysis', 'Land acquisition strategy', 'Builder & investor partnerships', 'Current opportunities']}
          cta="Book a Development Strategy Call"
          to="/developments"
        />
        <Card
          icon={Users}
          title="Meet the Team"
          points={["The WesCo Difference", 'Strategy • Marketing • Development insight', 'Local market expertise', 'Driven and results-oriented']}
          cta="Connect with Our Team"
          to="/team"
        />
      </div>
    </section>
  )
}
