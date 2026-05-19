export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 uppercase tracking-widest font-semibold mb-4">
            Team
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Meet Our Team
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((member) => (
            <div
              key={member}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-center"
            >
              <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto mb-6"></div>

              <h3 className="text-xl font-semibold text-slate-900">
                Team Member
              </h3>

              <p className="text-slate-500 mt-2">
                Engineering Specialist
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
