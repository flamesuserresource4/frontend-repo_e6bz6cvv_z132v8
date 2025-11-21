export default function Resources() {
  const items = [
    { title: 'Buyer Guide', desc: 'Step-by-step guide to buying in the Fraser Valley.', action: 'Download PDF' },
    { title: 'Seller Prep Checklist', desc: 'Get your property market-ready with this checklist.', action: 'Download' },
    { title: 'Investment Insights', desc: 'Understand cap rates, growth areas, and risk.', action: 'Read' },
    { title: 'Land Development 101', desc: 'From zoning to marketing — a clear overview.', action: 'Read' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Resources</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{it.desc}</p>
              <a href="#" className="text-[#FB9B1C] font-semibold hover:underline">{it.action}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
