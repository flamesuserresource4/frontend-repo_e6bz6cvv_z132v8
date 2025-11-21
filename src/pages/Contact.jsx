export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Let’s Get You Moving.</h1>
        <p className="text-slate-600 mb-8">We reply same-day. Fill out the form or book a quick 15-minute call to map your next move.</p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <input className="px-4 py-3 rounded-md border border-slate-300" placeholder="Name" />
          <input className="px-4 py-3 rounded-md border border-slate-300" placeholder="Phone" />
          <input className="px-4 py-3 rounded-md border border-slate-300 md:col-span-2" placeholder="Email" />
          <select className="px-4 py-3 rounded-md border border-slate-300">
            <option>Buy</option>
            <option>Sell</option>
            <option>Invest</option>
          </select>
          <input className="px-4 py-3 rounded-md border border-slate-300" placeholder="Area" />
          <input className="px-4 py-3 rounded-md border border-slate-300 md:col-span-2" placeholder="Budget" />
          <textarea className="px-4 py-3 rounded-md border border-slate-300 md:col-span-2" rows="4" placeholder="Message"></textarea>
          <button type="submit" className="md:col-span-2 bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md">Book a Call</button>
        </form>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900">Phone</h3>
            <p className="text-slate-600">Add your business number</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Email</h3>
            <p className="text-slate-600">Add your contact email</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Office</h3>
            <p className="text-slate-600">#207 — 32615 South Fraser Way, Abbotsford, BC V2T 1X8</p>
          </div>
        </div>

        <div className="mt-8">
          <iframe
            title="WesCo Property Group Map"
            src="https://www.google.com/maps?q=WesCo%20Property%20Group%20Abbotsford&output=embed"
            className="w-full h-64 border-0 rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
