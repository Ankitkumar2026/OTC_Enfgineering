export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-blue-700 text-sm font-semibold mb-5">
            Software • Embedded • IoT • Infrastructure
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
            Engineering Modern Technology Solutions.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            OTC Engineering delivers scalable software systems,
            embedded solutions, IoT platforms, and enterprise infrastructure.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-7 py-3 rounded-2xl">
              Explore Services
            </button>

            <button className="border border-slate-300 px-7 py-3 rounded-2xl">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-blue-900 font-semibold text-xl mb-2">Software</h3>
              <p className="text-sm text-slate-600">Enterprise Applications</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-blue-900 font-semibold text-xl mb-2">Embedded</h3>
              <p className="text-sm text-slate-600">Linux & Firmware</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-blue-900 font-semibold text-xl mb-2">IoT</h3>
              <p className="text-sm text-slate-600">Smart Connected Systems</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="text-blue-900 font-semibold text-xl mb-2">Cloud</h3>
              <p className="text-sm text-slate-600">Infrastructure & DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}