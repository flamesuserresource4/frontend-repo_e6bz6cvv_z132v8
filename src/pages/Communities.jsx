export default function Communities() {
  const areas = [
    { name: 'Surrey', desc: 'Diverse neighborhoods with strong growth and amenities.' },
    { name: 'Langley', desc: 'Family-friendly living with thriving retail and new builds.' },
    { name: 'Mission', desc: 'Scenic small-city charm with room to grow.' },
    { name: 'Abbotsford', desc: 'BC’s agricultural heart with urban convenience.' },
    { name: 'Maple Ridge', desc: 'Nature-forward living with strong community roots.' },
    { name: 'Coquitlam', desc: 'Transit-connected city with parks and new development.' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Communities</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.name} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900">{a.name}</h3>
              <p className="text-slate-600 text-sm mb-3">{a.desc}</p>
              <a href="#" className="text-[#FB9B1C] font-semibold hover:underline">View Active Listings</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
