export default function Developments() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Future-Focused Real Estate.</h1>
        <p className="text-slate-600 mb-8">We specialize in sourcing and structuring land deals with real upside — from small single-family lots to townhouse developments.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Zoning & OCP analysis',
            'Land acquisition strategy',
            'Builder & investor partnerships',
            'Current opportunities',
          ].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-slate-50 border border-slate-200">{item}</div>
          ))}
        </div>
        <a href="/contact" className="inline-block mt-8 bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md">Book a Development Strategy Call</a>
      </div>
    </section>
  )
}
