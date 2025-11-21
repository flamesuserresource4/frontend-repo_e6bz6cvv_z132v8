import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#FB9B1C] font-semibold tracking-wider uppercase mb-4">Real Estate. Simplified.</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              WesCo Property Group — Your Move, Made Simple.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We’re a results-driven real estate group based in Abbotsford, BC — helping buyers, sellers, and investors make the smartest moves across the Fraser Valley. Whether you’re looking for your first home, building a portfolio, or selling for top dollar, our team brings strategy, speed, and clarity to every transaction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center bg-[#FB9B1C] text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-[#e18b14] transition">
                Book a 15-Min Call
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-orange-100 to-transparent rounded-3xl -z-10" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 sm:h-52 bg-orange-50 rounded-xl" />
              <div className="h-56 sm:h-72 bg-slate-100 rounded-xl" />
              <div className="h-56 sm:h-72 bg-slate-100 rounded-xl" />
              <div className="h-40 sm:h-52 bg-orange-50 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
