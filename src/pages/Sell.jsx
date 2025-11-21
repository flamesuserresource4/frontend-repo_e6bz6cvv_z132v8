export default function Sell() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Your Property Deserves More Than a Listing.</h1>
        <p className="text-slate-600 mb-8">From strategy to sold, we help you position your property to attract attention — and strong offers.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Strategic pricing & positioning',
            'Professional marketing (photo, video, ads)',
            'Active agent & buyer network',
            'Offer control',
          ].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-slate-50 border border-slate-200">{item}</div>
          ))}
        </div>
        <a href="/contact" className="inline-block mt-8 bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md">Get a Free Home Evaluation</a>
      </div>
    </section>
  )
}
