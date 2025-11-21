export default function Buy() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Smart Buying Starts Here.</h1>
        <p className="text-slate-600 mb-8">Find your perfect home faster — with data-backed strategies, early access listings, and real agents who move fast.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'On-point search results',
            'Off-market & pre-market access',
            'Offer strategy & negotiation',
            'Financing connections',
          ].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-slate-50 border border-slate-200">{item}</div>
          ))}
        </div>
        <a href="/contact" className="inline-block mt-8 bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md">Talk to a WesCo Buyer Specialist</a>
      </div>
    </section>
  )
}
