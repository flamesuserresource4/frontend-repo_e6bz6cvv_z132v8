export default function Team() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">The WesCo Difference</h1>
        <p className="text-slate-600 mb-8">We’re a collective of motivated professionals combining real estate expertise, marketing power, and development insight.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="h-40 bg-slate-200 rounded mb-4"></div>
            <h3 className="font-semibold">Mendim Tahirsylaj — REALTOR®</h3>
            <p className="text-slate-600 text-sm">Young, driven, and results-oriented. Focused on strategy, negotiation, and lifestyle-based marketing.</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="h-40 bg-slate-200 rounded mb-4"></div>
            <h3 className="font-semibold">Team Member</h3>
            <p className="text-slate-600 text-sm">Title — Short one-sentence bio.</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="h-40 bg-slate-200 rounded mb-4"></div>
            <h3 className="font-semibold">Team Member</h3>
            <p className="text-slate-600 text-sm">Title — Short one-sentence bio.</p>
          </div>
        </div>

        <a href="/contact" className="inline-block mt-8 bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md">Connect with Our Team</a>
      </div>
    </section>
  )
}
