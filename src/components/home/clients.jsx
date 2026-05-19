
export default function Clients() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-blue-700 uppercase tracking-widest font-semibold mb-4">
          Clients
        </p>

        <h2 className="text-4xl font-bold text-slate-900 mb-14">
          Trusted Partnerships
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="h-28 border border-slate-200 rounded-3xl flex items-center justify-center text-slate-400"
            >
              Client Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
